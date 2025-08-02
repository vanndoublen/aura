import { useMessageStore } from "@/stores/message-store";
import { useTRPC } from "@/trpc/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSubscription } from "@trpc/tanstack-react-query";
import { useEffect, useRef, useState } from "react";
import { useShallow } from 'zustand/react/shallow'


export const useChat = (projectId: string) => {
  // ✅ Move all hooks INSIDE the hook function
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const startStream = useMessageStore((state) => state.startStream);
  const addChunk = useMessageStore((state) => state.addChunk);
  const endStream = useMessageStore((state) => state.endStream);

  const [currentStreamContent, setCurrentStreamContent] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isFetching, setIsFetching] = useState(false); 

  const globalUserMessage = useMessageStore( useShallow((state) => state.globalUserMessage)); 
  const globalModelId = useMessageStore( useShallow((state) => state.globalModelId)); 

  const [queryParams, setQueryParams] = useState({
    projectId: projectId,
    value: globalUserMessage ?? "",
    aiModelId: globalModelId ?? "",
  });

  

  const { data: streamData, error, status, reset } = useSubscription(
    trpc.messages.stream.subscriptionOptions(
      {
        ...queryParams
      },
      {
        enabled: false,
        onData(data) {
          setIsStreaming(true)
          setCurrentStreamContent(prev => prev + data.data)
        },
        onError(error) {
          setIsStreaming(false)
          console.error(error); 
        }
      },
    )
  );
  setIsStreaming(status !== "idle")
  setIsFetching(status === "pending")

  // useEffect(() => {
  //   if (isError && error) {
  //     console.error("❌ tRPC Stream Error Details:", {
  //       message: error.message,
  //       data: error.data,
  //       cause: error.shape,
  //     });
  //   }
  // }, [isError, error]);

  useEffect(() => {
    console.log("🔄 isStreaming changed:", isStreaming);
    console.log("📊 isFetching changed:", isFetching);

    // If we're no longer fetching and not streaming, end the stream
    if (!isFetching && !isStreaming) {
      console.log("🛑 Should end stream now");
      endStream(projectId);
    }
  }, [isStreaming, isFetching, endStream, projectId]);

  // Update your sendMessage function to better handle completion:
  const sendMessage = async (messageText: string, modelId?: string) => {
    if (!messageText.trim() || isStreaming) return;

    console.log("🚀 Starting message send:", messageText);

    startStream(projectId, messageText);
    setUserMessage(messageText);
    setIsStreaming(true);
    setCurrentStreamContent("");
    console.log("-------------------------------");
    console.log(projectId);
    console.log(messageText);
    console.log(modelId);
    console.log("-------------------------------");

    try {
      const newParams = {
        projectId: projectId,
        value: messageText,
        aiModelId: modelId ?? "",
      };

      setQueryParams(newParams)

      await new Promise((resolve) => setTimeout(resolve, 0));
      const result = await reset();
      console.log("✅ Stream completed, result:", result);
    } catch (error) {
      console.error("❌ Streaming error:", error);
    } finally {
      // Always clean up, regardless of success or failure
      console.log("🏁 Cleaning up stream");
      setIsStreaming(false);
      setCurrentStreamContent("");
      endStream(projectId);

      queryClient.invalidateQueries({
        queryKey: trpc.messages.getMany.queryOptions({ projectId }).queryKey,
      });
    }
  };

  // Update Zustand when tRPC stream data changes

  useEffect(() => {
    if (streamData && Array.isArray(streamData)) {
      console.log("📦 Stream data length:", streamData.length);

      // Only add new chunks, not all chunks repeatedly
      const currentChunksCount =
        useMessageStore.getState().streams[projectId]?.chunks.length || 0;
      const newChunks = streamData.slice(currentChunksCount);

      // Add only new chunks
      newChunks.forEach((chunk) => {
        console.log("📝 Adding chunk:", chunk);
        addChunk(projectId, chunk);
      });

      const fullContent = streamData.join("");
      setCurrentStreamContent(fullContent);
    }
  }, [streamData, projectId]); // Remove addChunk from deps to avoid infinite loop

  return {
    sendMessage,
    currentStreamContent,
    streamData,
    userMessage,
    isStreaming,
    isFetching,
  };
};
