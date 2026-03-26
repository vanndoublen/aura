// stores/message-store.ts
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface MessageStore {
  globalChatId: string | null;
  globalUserMessage: string | null;
  globalModelId: string | null;
  globalFiles: File[] | null;

  setGlobalMessage: (
    chatId: string,
    userMessage: string,
    modelId: string,
    files?: File[],
  ) => void;

  clearGlobalMessage: () => void;
}

export const useMessageStore = create<MessageStore>()(
  subscribeWithSelector((set) => ({
    globalChatId: null,
    globalUserMessage: null,
    globalModelId: null,
    globalFiles: null, 

    setGlobalMessage: (chatId, message, modelId, files) =>
      set({
        globalChatId: chatId,
        globalUserMessage: message,
        globalModelId: modelId,
        globalFiles: files || null,
      }),

    clearGlobalMessage: () =>
      set({
        globalChatId: null,
        // globalModelId: null,
        globalUserMessage: null,
        globalFiles: null, 
      }),
  }))
);
