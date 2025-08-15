import { createTRPCRouter } from "../init";
import { messagesRouter } from "@/modules/messages/server/procedures";
import { chatsRouter } from "@/modules/chats/server/procedures";
import { aiRouter } from "@/modules/ai/server/procedures";
import { usageRouter } from "@/modules/usage/server/procedures";
export const appRouter = createTRPCRouter({
  ai: aiRouter,
  chats: chatsRouter,
  usage: usageRouter,
  messages: messagesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
