import { createTRPCRouter } from "../init";
import { messagesRouter } from "@/modules/messages/server/procedures";
import { chatsRouter } from "@/modules/chats/server/procedures";
import { aiRouter } from "@/modules/ai/server/procedures";
export const appRouter = createTRPCRouter({
  ai: aiRouter,
  messages: messagesRouter,
  chats: chatsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
