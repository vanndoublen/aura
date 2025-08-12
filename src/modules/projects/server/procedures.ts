import z from "zod";

import { TRPCError } from "@trpc/server";

import prisma from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
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
      if (!input.aiModelId) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Please select a model.",
        });
      }

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

  updateName: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z
          .string()
          .min(1, { message: "Name is required." })
          .max(150, { message: "Name is too long." }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const updatedProject = await prisma.project.update({
        where: {
          id: input.id,
          userId: ctx.auth.userId,
        },
        data: {
          name: input.name,
        },
      });
      return updatedProject;
    }),
});
