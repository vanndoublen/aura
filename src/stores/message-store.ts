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
  // State per project
  streams: Record<string, StreamingData>;

  pendingProjectMessage: string | null;
  pendingProjectModelId: string | null;

  // Actions
  startStream: (projectId: string, userMessage: string) => void;
  addChunk: (projectId: string, chunk: string) => void;
  endStream: (projectId: string) => void;
  clearStream: (projectId: string) => void;

  setPendingProjectMessage: (
    message: string,
    modelId: string | undefined
  ) => void;
  clearPendingProjectMessage: () => void;

  // Selectors
  getStreamData: (projectId: string) => StreamingData | null;
}

export const useMessageStore = create<MessageStore>()(
  subscribeWithSelector((set, get) => ({
    streams: {},
    pendingProjectMessage: null,
    pendingProjectModelId: null,

    startStream: (projectId, userMessage) =>
      set((state) => ({
        streams: {
          ...state.streams,
          [projectId]: {
            userMessage,
            streamContent: "",
            isStreaming: true,
            chunks: [],
          },
        },
      })),

    addChunk: (projectId, chunk) =>
      set((state) => {
        const current = state.streams[projectId];
        if (!current) return state;

        const newChunks = [...current.chunks, chunk];
        return {
          streams: {
            ...state.streams,
            [projectId]: {
              ...current,
              chunks: newChunks,
              streamContent: newChunks.join(""),
            },
          },
        };
      }),

    endStream: (projectId) =>
      set((state) => ({
        streams: {
          ...state.streams,
          [projectId]: {
            ...state.streams[projectId],
            isStreaming: false,
          },
        },
      })),

    clearStream: (projectId) =>
      set((state) => {
        const { [projectId]: removed, ...rest } = state.streams;
        return { streams: rest };
      }),

    setPendingProjectMessage: (message, modelId) =>
      set({
        pendingProjectMessage: message,
        pendingProjectModelId: modelId || null,
      }),
    clearPendingProjectMessage: () =>
      set({
        pendingProjectMessage: null,
        pendingProjectModelId: null,
      }),

    getStreamData: (projectId) => get().streams[projectId] || null,
  }))
);
