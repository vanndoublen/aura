import { useTRPC } from "@/trpc/client";
import { useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { MessageCard } from "./message-card";
import { MessageForm } from "./message-form";
import { useEffect, useRef, useState } from "react";
import { MessageLoading } from "./message-loading";
import { getQueryClient } from "@/trpc/server";


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
    const [isStreaming, setIsStreaming] = useState(false);
    const [userMessage, setUserMessage] = useState("");

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
    }, [messages.length, currentStreamContent, userMessage])

    const lastMessage = messages[messages.length - 1];
    const isLastMessageUser = lastMessage?.role === "USER";


    const [queryParams, setQueryParams] = useState({
        projectId: projectId,
        value: "",
        aiModelId: "",
    });

    const { data: streamData, refetch, isFetching } = useQuery(trpc.messages.stream.queryOptions(
        queryParams,
        { enabled: false }

    ))

    useEffect(() => {
        console.log(streamData);
        if (streamData) {
            const fullContent = streamData.join('');
            setCurrentStreamContent(fullContent);
        }
    }, [streamData]);

    const handleSendMessage = async (messageText: string, modelId?: string) => {
        if (!messageText.trim() || isStreaming) return;

        console.log("🚀 Starting message send:", messageText);

        setUserMessage(messageText);
        setIsStreaming(true);
        setCurrentStreamContent("");

        try {
            const newParams = {
                projectId: projectId,
                value: messageText,
                aiModelId: modelId ?? "",
            };

            console.log("📤 About to refetch with params:", newParams);

            setQueryParams(newParams);

            // Wait a tick for React to update the query
            await new Promise(resolve => setTimeout(resolve, 0));

            const result = await refetch();
            console.log("✅ Refetch result:", result);

        } catch (error) {
            console.error("❌ Streaming error:", error);
            setIsStreaming(false);
            setCurrentStreamContent("");
            return;
        }

        // After successful streaming - refresh the messages and clear temp state
        setIsStreaming(false);
        setCurrentStreamContent("");
        setUserMessage("");

        // ✅ Refresh messages to show the saved messages from database
        queryClient.invalidateQueries({
            queryKey: trpc.messages.getMany.queryOptions({ projectId }).queryKey
        });
    }



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
                    {userMessage &&
                        <MessageCard
                            content={userMessage}
                            role="USER"
                            createdAt={new Date()}
                            type="TEXT"
                        />}
                    {isStreaming && !currentStreamContent && <MessageLoading />}
                    {isStreaming && currentStreamContent && (
                        <MessageCard
                            content={currentStreamContent}
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
                        isStreaming={isStreaming}
                        isFetching={isFetching}
                        onSendMessage={handleSendMessage}

                    />
                </div>
            </div>
        </div>
    )
}