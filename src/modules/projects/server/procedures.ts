import z from "zod";

import { TRPCError } from "@trpc/server";

import prisma from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { generateSlug } from "random-word-slugs";
import { ProviderName } from "@/modules/ai/providers";
import { AiService } from "@/modules/ai/service";
import { PROJECT_TITLE_PROMPT } from "@/prompt";

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
      )

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
              projectId: createdProject.id,
              aiModelId: input.aiModelId,
              externalId: response.id,
              inputTokens,
              outputTokens,
              totalTokens,
            },
          });
        }
      }

      return { createdProject, createdAiMessage };
    }),
});
