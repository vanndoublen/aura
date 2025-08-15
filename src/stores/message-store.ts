// stores/message-store.ts
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface StreamingData {
  userMessage: string;
  streamContent: string;
  isStreaming: boolean;
  chunks: string[];
}

interface MessageStore {
  globalChatId: string | null;
  globalUserMessage: string | null;
  globalModelId: string | null;

  // State per chat
  streams: Record<string, StreamingData>;

  pendingChatMessage: string | null;
  pendingChatModelId: string | null;

  // Actions
  startStream: (chatId: string, userMessage: string) => void;
  addChunk: (chatId: string, chunk: string) => void;
  endStream: (chatId: string) => void;
  clearStream: (chatId: string) => void;

  setGlobalMessage: (
    chatId: string,
    userMessage: string,
    modelId: string
  ) => void;

  clearGlobalMessage: () => void;

  clearPendingChatMessage: () => void;

  // Selectors
  getStreamData: (chatId: string) => StreamingData | null;
}

export const useMessageStore = create<MessageStore>()(
  subscribeWithSelector((set, get) => ({
    globalChatId: null,
    globalUserMessage: null,
    globalModelId: null,

    streams: {},
    pendingChatMessage: null,
    pendingChatModelId: null,

    startStream: (chatId, userMessage) =>
      set((state) => ({
        streams: {
          ...state.streams,
          [chatId]: {
            userMessage,
            streamContent: "",
            isStreaming: true,
            chunks: [],
          },
        },
      })),

    addChunk: (chatId, chunk) =>
      set((state) => {
        const current = state.streams[chatId];
        if (!current) return state;

        const newChunks = [...current.chunks, chunk];
        return {
          streams: {
            ...state.streams,
            [chatId]: {
              ...current,
              chunks: newChunks,
              streamContent: newChunks.join(""),
            },
          },
        };
      }),

    endStream: (chatId) =>
      set((state) => ({
        streams: {
          ...state.streams,
          [chatId]: {
            ...state.streams[chatId],
            isStreaming: false,
          },
        },
      })),

    clearStream: (chatId) =>
      set((state) => {
        const { [chatId]: removed, ...rest } = state.streams;
        return { streams: rest };
      }),

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

    clearPendingChatMessage: () =>
      set({
        pendingChatMessage: null,
        pendingChatModelId: null,
      }),

    getStreamData: (chatId) => get().streams[chatId] || null,
  }))
);
