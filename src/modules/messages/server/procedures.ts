import z from "zod";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import prisma from "@/lib/db";
import { tracked, TRPCError } from "@trpc/server";
import { streamAIResponse } from "@/modules/ai/lib/ai-streaming";
import { Message } from "@/generated/prisma";
import { consumeCredits, getUsageStatus } from "@/lib/usage";

export const messagesRouter = createTRPCRouter({
  getMany: protectedProcedure
    .input(
      z.object({
        chatId: z.string().min(1, { message: "Chat ID is required" }),
      })
    )
    .query(async ({ input, ctx }) => {
      const messages = await prisma.message.findMany({
        where: {
          chatId: input.chatId,
          chat: {
            userId: ctx.auth.userId,
          },
        },
        orderBy: {
          updatedAt: "asc",
        },
      });
      return messages;
    }),

  stream: protectedProcedure
    .input(
      z.object({
        value: z
          .string()
          .min(1, { message: "Value is required" })
          .max(10000, { message: "Value is too long" }),
        chatId: z.string().min(1, { message: "Chat ID is required" }),
        aiModelId: z.string().optional(),
      })
    )
    .subscription(async function* ({ input, ctx }) {
      if (!input.aiModelId) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Please select a model.",
        });
      }
      const existingChat = await prisma.chat.findUnique({
        where: {
          id: input.chatId,
          userId: ctx.auth.userId,
        },
      });

      if (!existingChat) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Chat not found",
        });
      }

      // TODO: add credit consumption

      const createdUserMessage = await prisma.message.create({
        data: {
          content: input.value,
          chatId: input.chatId,
          role: "USER",
          type: "TEXT",
        },
      });

      let assistantContent = "";
      let chunkId = 0;
      let createdAssistantMessage: Message | null = null;
      const usageStatus = await getUsageStatus(); 
      const remainingCredit = usageStatus?.remainingPoints;
      if (input.aiModelId) {
        const aiModel = await prisma.aiModel.findUnique({
          where: { id: input.aiModelId },
        });

        // TODO: dont consume if remaining credit <= 0, because in db, 
        // it would increase the point which would affect the actual success usage

        // TODO: create new "SYSTEM" role, and notify users with no credit left info 

        try {
          await consumeCredits();
        } catch (error) {
          if (error instanceof Error) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Something went wrong",
            });
          } else {
            throw new TRPCError({
              code: "TOO_MANY_REQUESTS",
              message: "You have run out of credits",
            });
          }
        }

        if (aiModel) {
          try {
            const stream = streamAIResponse({
              provider: aiModel.provider,
              model: aiModel.name,
              message: input.value,
            });

            for await (const chunk of stream) {
              assistantContent += chunk;
              // TODO: maybe add token count
              // yield chunk;
              yield tracked(`chunk_${chunkId++}`, chunk);
            }
            createdAssistantMessage = await prisma.message.create({
              data: {
                role: "ASSISTANT",
                type: "TEXT",
                aiModelId: input.aiModelId,
                content: assistantContent,
                chatId: input.chatId,
              },
            });

            // update the chat time
            await prisma.chat.update({
              where: {
                id: input.chatId,
              },
              data: {
                updatedAt: new Date(),
              },
            });
          } catch (error) {
            console.log(error);
            if (assistantContent) {
              createdAssistantMessage = await prisma.message.create({
                data: {
                  role: "ASSISTANT",
                  type: "ERROR",
                  aiModelId: input.aiModelId,
                  content: assistantContent + " [ERROR: Stream interrupted]",
                  chatId: input.chatId,
                },
              });
            }

            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Response interrupted",
            });
          }
        }
      }
    }),
});
