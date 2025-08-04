import { useTRPC } from "@/trpc/client";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { MessageCard } from "./message-card";
import { MessageForm } from "./message-form";
import { useEffect, useRef, useState } from "react";
import { MessageLoading } from "./message-loading";
import { useMessageStore } from "@/stores/message-store";
import { useShallow } from 'zustand/react/shallow'
import { useSubscription } from "@trpc/tanstack-react-query";
import { Message } from "@/generated/prisma";
import { nanoid } from "nanoid";
import { CircleDashed, TextCursor, TextCursorInput, TextCursorInputIcon } from "lucide-react";

interface Props {
    projectId: string;
}

export const MessagesContainer = ({
    projectId,
}: Props) => {
    const trpc = useTRPC();
    const queryClient = useQueryClient();
    const bottomRef = useRef<HTMLDivElement>(null);
    const processedMessageRef = useRef<string | null>(null);
    const streamingMessageIdRef = useRef<string | null>(null);
    const streamContentRef = useRef("");

    const [isStreaming, setIsStreaming] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [combinedMessages, setCombinedMessages] = useState<Message[]>([]);

    const globalUserMessage = useMessageStore(useShallow((state) => state.globalUserMessage));
    const globalModelId = useMessageStore(useShallow((state) => state.globalModelId));

    const [queryParams, setQueryParams] = useState({
        projectId: projectId,
        value: globalUserMessage ?? "",
        aiModelId: globalModelId ?? "",
    });

    // Load initial messages
    const { data: messages } = useSuspenseQuery(trpc.messages.getMany.queryOptions({
        projectId: projectId,
    }));

    // Initialize combined messages with database messages
    useEffect(() => {
        setCombinedMessages(messages);
    }, [messages]);

    // Update query params when global state changes
    useEffect(() => {
        if (globalUserMessage && globalUserMessage !== processedMessageRef.current) {
            processedMessageRef.current = globalUserMessage;
            setQueryParams({
                projectId: projectId,
                value: globalUserMessage,
                aiModelId: globalModelId ?? "",
            });
        }
    }, [projectId, globalUserMessage, globalModelId]);

    // Add user message when query params change
    useEffect(() => {
        if (queryParams.value && queryParams.value !== "") {
            const userMessage: Message = {
                id: nanoid(),
                projectId: projectId,
                externalId: "",
                content: queryParams.value,
                role: "USER",
                type: "TEXT",
                aiModelId: "",
                createdAt: new Date(),
                updatedAt: new Date(),
                inputTokens: 0,
                outputTokens: 0,
                totalTokens: 0,
            };

            setCombinedMessages(prev => [...prev, userMessage]);

            // reinitialize for new message
            streamContentRef.current = ""; // Reset stream content
            streamingMessageIdRef.current = null; // Reset streaming message ID
        }
    }, [queryParams.value, projectId]);

    const { data: streamData, error, status, reset } = useSubscription(
        trpc.messages.stream.subscriptionOptions(
            queryParams,
            {
                enabled: !!queryParams.value && !!queryParams.aiModelId,
                onData(data) {
                    setIsStreaming(true);

                    // Accumulate stream content in ref to avoid closure issues
                    streamContentRef.current += data.data;

                    setCombinedMessages(prev => {
                        const lastMessage = prev[prev.length - 1];
                        const isLastMessageAssistant = lastMessage?.role === "ASSISTANT";

                        if (!isLastMessageAssistant || !streamingMessageIdRef.current) {
                            // Create new assistant message
                            const newAssistantMessage: Message = {
                                id: nanoid(),
                                projectId: projectId,
                                externalId: "",
                                content: streamContentRef.current,
                                role: "ASSISTANT",
                                type: "TEXT",
                                aiModelId: "",
                                createdAt: new Date(),
                                updatedAt: new Date(),
                                inputTokens: 0,
                                outputTokens: 0,
                                totalTokens: 0,
                            };

                            streamingMessageIdRef.current = newAssistantMessage.id;
                            return [...prev, newAssistantMessage];
                        } else {
                            // Update existing assistant message with accumulated content
                            return prev.map(msg =>
                                msg.id === streamingMessageIdRef.current
                                    ? {
                                        ...msg,
                                        content: streamContentRef.current,
                                        updatedAt: new Date(),
                                    }
                                    : msg
                            );
                        }
                    });
                },
                onError(error) {
                    setIsStreaming(false);
                    streamingMessageIdRef.current = null;
                    console.error(error);
                }
            },
        )
    );

    // Update streaming and fetching states
    useEffect(() => {
        const isCurrentlyStreaming = isStreaming;
        const isCurrentlyFetching = status === "pending" || status === "connecting";

        setIsFetching(isCurrentlyFetching);

        // Only set streaming to false if status indicates it's not active
        if (status === "idle" || status === "error") {
            setIsStreaming(false);
        }
    }, [status, isStreaming]);

    // Auto-scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [combinedMessages.length, combinedMessages[combinedMessages.length - 1]?.content]);

    return (
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
            <div className="flex-1 pb-44">
                <div className="max-w-2xl mx-auto pt-2 pr-1 pb-4">
                    {combinedMessages.map((message) => (
                        <MessageCard
                            key={message.id}
                            content={message.content}
                            role={message.role}
                            createdAt={message.createdAt}
                            type={message.type}
                            isStreaming={isStreaming}
                        />
                    ))}
                    {isFetching && !isStreaming && (
                        <MessageLoading />
                    )}
                </div>
                <div ref={bottomRef} />
            </div>

            <div className="absolute bottom-0 right-0 left-0 pointer-events-none">
                <div className="max-w-2xl mx-auto pointer-events-auto">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-6 bg-gradient-to-b from-transparent to-background pointer-events-none" />
                    <MessageForm
                        projectId={projectId}
                        isStreaming={isStreaming}
                        isFetching={isFetching}
                    />
                </div>
            </div>
        </div>
    );
};