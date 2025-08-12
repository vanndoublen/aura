import z from "zod";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import prisma from "@/lib/db";
import { tracked, TRPCError } from "@trpc/server";
import { streamAIResponse } from "@/modules/ai/ai-streaming";
import { Message } from "@/generated/prisma";

export const messagesRouter = createTRPCRouter({
  getMany: protectedProcedure
    .input(
      z.object({
        projectId: z.string().min(1, { message: "Project ID is required" }),
      })
    )
    .query(async ({ input, ctx }) => {
      const messages = await prisma.message.findMany({
        where: {
          projectId: input.projectId,
          project: {
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
        projectId: z.string().min(1, { message: "Project ID is required" }),
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
      const existingProject = await prisma.project.findUnique({
        where: {
          id: input.projectId,
          userId: ctx.auth.userId,
        },
      });

      if (!existingProject) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Project not found",
        });
      }

      // TODO: add credit consumption

      const createdUserMessage = await prisma.message.create({
        data: {
          content: input.value,
          projectId: input.projectId,
          role: "USER",
          type: "TEXT",
        },
      });

      let assistantContent = "";
      let chunkId = 0;
      let createdAssistantMessage: Message | null = null;
      if (input.aiModelId) {
        const aiModel = await prisma.aiModel.findUnique({
          where: { id: input.aiModelId },
        });

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
                content: assistantContent,
                projectId: input.projectId,
              },
            });

            // update the project time
            await prisma.project.update({
              where: {
                id: input.projectId,
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
                  content: assistantContent + " [ERROR: Stream interrupted]",
                  projectId: input.projectId,
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
