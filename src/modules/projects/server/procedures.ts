import z from "zod";

import { TRPCError } from "@trpc/server";

import prisma from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { generateSlug } from "random-word-slugs";
import { ProviderName } from "@/modules/ai/providers";
import { AiService } from "@/modules/ai/service";
import { PROJECT_TITLE_PROMPT } from "@/prompt";
import { streamAIResponse } from "@/modules/ai/ai-streaming";
import { Message } from "@/generated/prisma";

export const projectsRouter = createTRPCRouter({
  getMany: protectedProcedure.query(async ({ ctx }) => {
    const projects = await prisma.project.findMany({
      where: {
        userId: ctx.auth.userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
    return projects;
  }),

  getOne: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1, { message: "Project ID is required" }),
      })
    )
    .query(async ({ input, ctx }) => {
      const project = await prisma.project.findUnique({
        where: {
          id: input.id,
          userId: ctx.auth.userId,
        },
      });
      if (!project) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Project not found",
        });
      }
      return project;
    }),

  create: protectedProcedure
    .input(
      z.object({
        value: z
          .string()
          .min(1, { message: "Value is required" })
          .max(10000, { message: "Value is too long" }),
        aiModelId: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // TODO: calculate credits

      const projectTitleResponse = await AiService.createResponse(
        input.value,
        "OpenAI",
        "gpt-4.1-nano",
        PROJECT_TITLE_PROMPT
      );

      const createdProject = await prisma.project.create({
        data: {
          name: projectTitleResponse.content,
          userId: ctx.auth.userId,
        },
      });
      return createdProject; 
    }),

  stream: protectedProcedure
    .input(
      z.object({
        value: z
          .string()
          .min(1, { message: "Value is required" })
          .max(10000, { message: "Value is too long" }),
        aiModelId: z.string().optional(),
      })
    )
    .query(async function* ({ input, ctx }) {
      const projectTitleResponse = await AiService.createResponse(
        input.value,
        "OpenAI",
        "gpt-4.1-nano",
        PROJECT_TITLE_PROMPT
      );

      const createdProject = await prisma.project.create({
        data: {
          name: projectTitleResponse.content,
          userId: ctx.auth.userId,
          messages: {
            create: {
              content: input.value,
              role: "USER",
              type: "TEXT",
            },
          },
        },
      });

      let assistantContent = "";
      let createdAssistantMessage: Message | null = null;


      if (input.aiModelId) {
        const aiModel = await prisma.aiModel.findUnique({
          where: { id: input.aiModelId },
        }) 

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
                projectId: createdProject.id,
              },
            });
          } catch (error) {
            if (assistantContent) {
              createdAssistantMessage = await prisma.message.create({
                data: {
                  role: "ASSISTANT",
                  type: "ERROR",
                  content: assistantContent + " [ERROR: Stream interrupted]",
                  projectId: createdProject.id,
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
      yield createdProject.id; 
    }),
});
