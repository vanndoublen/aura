import z from "zod";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import prisma from "@/lib/db";
import { TRPCError } from "@trpc/server";
import { ProviderName } from "@/modules/ai/providers";
import { AiService } from "@/modules/ai/service";
import { observable } from "@trpc/server/observable";
import OpenAI from "openai";
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

  create: protectedProcedure
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
    .mutation(async ({ input, ctx }) => {
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

      let createdAiMessage = null;

      if (input.aiModelId) {
        const aiModel = await prisma.aiModel.findUnique({
          where: { id: input.aiModelId },
        });

        if (aiModel) {
          const providerName = aiModel.provider as ProviderName;

          const response = await AiService.createResponse(
            input.value,
            providerName,
            aiModel.name
          );

          let inputTokens: number | undefined;
          let outputTokens: number | undefined;
          let totalTokens: number | undefined;

          if (providerName === "OpenAI") {
            // aiResponse is typed as OpenAiResponse
            inputTokens = response.inputTokens;
            outputTokens = response.outputTokens;
            totalTokens = response.totalTokens;
          } else {
            // TODO: add more providers
          }

          createdAiMessage = await prisma.message.create({
            data: {
              content: response.content,
              role: "ASSISTANT",
              type: "TEXT",
              projectId: input.projectId,
              aiModelId: input.aiModelId,
              externalId: response.id,
              inputTokens,
              outputTokens,
              totalTokens,
            },
          });
        }
      }

      return { createdUserMessage, createdAiMessage };
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
    .query(async function* ({ input, ctx }) {
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
              yield chunk;
            }
            createdAssistantMessage = await prisma.message.create({
              data: {
                role: "ASSISTANT",
                type: "TEXT",
                content: assistantContent,
                projectId: input.projectId,
              },
            });
          } catch (error) {
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

          // yield* streamAIResponse({
          //   provider: aiModel.provider,
          //   model: aiModel.name,
          //   message: input.value,
          // });
        }
      }
    }),
});
