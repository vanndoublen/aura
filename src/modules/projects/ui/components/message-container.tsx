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
import { ThemeToggle } from "@/components/theme-toggle";

interface Props {
    projectId: string;
}

export const MessagesContainer = ({ projectId }: Props) => {
    const trpc = useTRPC();
    const queryClient = useQueryClient();
    const bottomRef = useRef<HTMLDivElement>(null);
    const streamingMessageIdRef = useRef<string | null>(null);
    const streamContentRef = useRef("");
    const currentProjectRef = useRef(projectId);

    const [isStreaming, setIsStreaming] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [combinedMessages, setCombinedMessages] = useState<Message[]>([]);
    const [queryParams, setQueryParams] = useState({
        projectId: projectId,
        value: "",
        aiModelId: "",
    });

    const globalUserMessage = useMessageStore(useShallow((state) => state.globalUserMessage));
    const globalModelId = useMessageStore(useShallow((state) => state.globalModelId));
    const globalProjectId = useMessageStore(useShallow((state) => state.globalProjectId));
    const clearGlobalMessage = useMessageStore(useShallow((state) => state.clearGlobalMessage));

    const { data: messages } = useSuspenseQuery(trpc.messages.getMany.queryOptions({
        projectId: projectId,
    }));

    const { data: streamData, error, status, reset } = useSubscription(
        trpc.messages.stream.subscriptionOptions(
            queryParams,
            {
                enabled: Boolean(
                    queryParams.value &&
                    queryParams.value.trim() !== "" &&
                    queryParams.aiModelId &&
                    queryParams.projectId === projectId
                ),
                onData(data) {
                    setIsStreaming(true);
                    streamContentRef.current += data.data;

                    setCombinedMessages(prev => {
                        const lastMessage = prev[prev.length - 1];
                        const isLastMessageAssistant = lastMessage?.role === "ASSISTANT";

                        if (!isLastMessageAssistant || !streamingMessageIdRef.current) {
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

    useEffect(() => {
        setCombinedMessages(messages);
    }, [messages]);

    useEffect(() => {
        if (currentProjectRef.current !== projectId) {
            clearGlobalMessage();
            
            setQueryParams({
                projectId: projectId,
                value: "",
                aiModelId: "",
            });
            
            setIsStreaming(false);
            streamContentRef.current = "";
            streamingMessageIdRef.current = null;
            reset();
            
            currentProjectRef.current = projectId;
        }
    }, [projectId, clearGlobalMessage, reset]);

    useEffect(() => {
        if (globalUserMessage && globalProjectId === projectId) {
            setQueryParams({
                projectId: projectId,
                value: globalUserMessage,
                aiModelId: globalModelId ?? "",
            });
        }
    }, [globalUserMessage, globalModelId, globalProjectId, projectId]);

    useEffect(() => {
        if (queryParams.value && queryParams.value.trim() !== "" && queryParams.projectId === projectId) {
            const userMessage: Message = {
                id: nanoid(),
                projectId: projectId,
                externalId: "",
                content: queryParams.value.trim(),
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
            streamContentRef.current = "";
            streamingMessageIdRef.current = null;
            
            clearGlobalMessage();
        }
    }, [queryParams.value, queryParams.projectId, projectId, clearGlobalMessage]);

    useEffect(() => {
        const isCurrentlyFetching = status === "pending" || status === "connecting";
        setIsFetching(isCurrentlyFetching);

        if (status === "idle" || status === "error") {
            setIsStreaming(false);
        }
    }, [status]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [combinedMessages.length, combinedMessages[combinedMessages.length - 1]?.content]);

    return (
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
            <div className="fixed right-4 top-2 z-50">
                <ThemeToggle />
            </div>
            <div className="flex-1 pb-44 pt-12">
                <div className="max-w-2xl mx-auto pt-2 pb-4">
                    {combinedMessages.map((message) => (
                        <MessageCard
                            key={message.id}
                            content={message.content}
                            role={message.role}
                            createdAt={message.createdAt}
                            type={message.type}
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