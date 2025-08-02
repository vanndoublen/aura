import { useTRPC } from "@/trpc/client";
import { useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { MessageCard } from "./message-card";
import { MessageForm } from "./message-form";
import { useEffect, useMemo, useRef, useState } from "react";
import { MessageLoading } from "./message-loading";
import { getQueryClient } from "@/trpc/server";
import { useChat } from "@/hooks/use-chat";
import { useMessageStore } from "@/stores/message-store";
import { useShallow } from 'zustand/react/shallow'
import { useSubscription } from "@trpc/tanstack-react-query";


interface Props {
    projectId: string;

}

export const MessagesContainer = ({
    projectId,

}: Props) => {
    const trpc = useTRPC();
    const queryClient = useQueryClient();
    const bottomRef = useRef<HTMLDivElement>(null);
    const lastAssistantMessageIdRef = useRef<string | null>(null);

    const [currentStreamContent, setCurrentStreamContent] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [isStreaming, setIsStreaming] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const globalUserMessage = useMessageStore(useShallow((state) => state.globalUserMessage));
    const globalModelId = useMessageStore(useShallow((state) => state.globalModelId));

    const [queryParams, setQueryParams] = useState({
        projectId: projectId,
        value: globalUserMessage ?? "",
        aiModelId: globalModelId ?? "",
    });


    useEffect(() => {
        setQueryParams({
            projectId: projectId,
            value: globalUserMessage ?? "",
            aiModelId: globalModelId ?? "",
        });
        if (globalUserMessage) {
            setUserMessage(globalUserMessage)
        }
    }, [projectId, globalUserMessage, globalModelId]);


    console.log(queryParams);
    const { data: streamData, error, status, reset } = useSubscription(
        trpc.messages.stream.subscriptionOptions(
            {
                ...queryParams
            },
            {
                enabled: !!queryParams.value && !!queryParams.aiModelId,
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

    useEffect(() => {
        setIsStreaming(status !== "idle" && status !== "error");
        setIsFetching(status === "pending" || status === "connecting");
    }, [status]);

    useEffect(() => {
        if (!isStreaming) {
            // Streaming just ended, refetch messages
            queryClient.invalidateQueries(
                trpc.messages.getMany.queryOptions({ projectId })
            );
        }
    }, [isStreaming, projectId, queryClient]);


    // const streamData = useMessageStore(state => state.getStreamData(projectId));
    const { data: messages } = useSuspenseQuery(trpc.messages.getMany.queryOptions({
        projectId: projectId,
    }));

    // TODO: this is causing problem
    useEffect(() => {
        const lastAssistantMessage = messages.findLast(
            (message) => message.role === "ASSISTANT",
        )

        if (lastAssistantMessage && lastAssistantMessage.id !== lastAssistantMessageIdRef.current) {
            lastAssistantMessageIdRef.current = lastAssistantMessage.id;
        }
    }, [messages]);

    useEffect(() => {

        bottomRef.current?.scrollIntoView();

    }, [messages.length, globalUserMessage, currentStreamContent, streamData?.data])

    const lastMessage = messages[messages.length - 1];
    const isLastMessageUser = lastMessage?.role === "USER";


    return (
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
            {/* All content in one scrollable container */}
            <div className="flex-1 pb-44">
                <div className="max-w-2xl  mx-auto pt-2 pr-1 pb-4">
                    {messages.map((message) => (
                        <MessageCard
                            key={message.id}
                            content={message.content}
                            role={message.role}
                            createdAt={message.createdAt}
                            type={message.type}
                        />
                    ))}
                    {isStreaming && userMessage &&
                        <MessageCard
                            content={userMessage}
                            role="USER"
                            createdAt={new Date()}
                            type="TEXT"
                        />}
                    {isStreaming && !currentStreamContent && isFetching && userMessage && <MessageLoading />}
                    {isStreaming && currentStreamContent && streamData && (
                        <MessageCard
                            content={streamData.data}
                            role="ASSISTANT"
                            createdAt={new Date()}
                            type="TEXT"
                        />
                    )}
                </div>
                <div ref={bottomRef} />
            </div>
            {/* Fixed textarea - full width container but constrained content */}
            <div className="absolute bottom-0 right-0 left-0 pointer-events-none">
                <div className="max-w-2xl  mx-auto pointer-events-auto">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-6 bg-gradient-to-b from-transparent to-background pointer-events-none" />
                    <MessageForm
                        projectId={projectId}
                        isStreaming={isStreaming ?? false}
                        isFetching={isFetching ?? false}

                    />
                </div>
            </div>
        </div>
    )
}