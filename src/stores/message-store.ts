// stores/message-store.ts
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface MessageStore {
  globalChatId: string | null;
  globalUserMessage: string | null;
  globalModelId: string | null;

  setGlobalMessage: (
    chatId: string,
    userMessage: string,
    modelId: string
  ) => void;

  clearGlobalMessage: () => void;
}

export const useMessageStore = create<MessageStore>()(
  subscribeWithSelector((set) => ({
    globalChatId: null,
    globalUserMessage: null,
    globalModelId: null,

    setGlobalMessage: (chatId, message, modelId) =>
      set({
        globalChatId: chatId,
        globalUserMessage: message,
        globalModelId: modelId,
      }),

    clearGlobalMessage: () =>
      set({
        globalChatId: null,
        // globalModelId: null,
        globalUserMessage: null,
      }),
  }))
);
