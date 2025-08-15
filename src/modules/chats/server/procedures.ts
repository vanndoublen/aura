import z from "zod";

import { TRPCError } from "@trpc/server";

import prisma from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { AiService } from "@/modules/ai/service";
import { CHAT_TITLE_PROMPT } from "@/prompt";

export const chatsRouter = createTRPCRouter({
  getMany: protectedProcedure.query(async ({ ctx }) => {
    const chats = await prisma.chat.findMany({
      where: {
        userId: ctx.auth.userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
    return chats;
  }),

  getOne: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1, { message: "Chat ID is required" }),
      })
    )
    .query(async ({ input, ctx }) => {
      const chat = await prisma.chat.findUnique({
        where: {
          id: input.id,
          userId: ctx.auth.userId,
        },
      });
      if (!chat) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Chat not found",
        });
      }
      return chat;
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

      const chatTitleResponse = await AiService.createResponse(
        input.value,
        "OpenAI",
        "gpt-4.1-nano",
        CHAT_TITLE_PROMPT
      );

      const createdChat = await prisma.chat.create({
        data: {
          name: chatTitleResponse.content,
          userId: ctx.auth.userId,
        },
      });
      return createdChat;
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
      const updatedChat = await prisma.chat.update({
        where: {
          id: input.id,
          userId: ctx.auth.userId,
        },
        data: {
          name: input.name,
        },
      });
      return updatedChat;
    }),
});
