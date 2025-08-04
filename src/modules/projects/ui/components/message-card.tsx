import Image from "next/image";

import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { MessageRole, MessageType } from "@/generated/prisma";
import { AIResponse } from "@/components/ui/kibo-ui/ai/response";


interface UserMessageProps {
    content: string;
}
const UserMessage = ({ content }: UserMessageProps) => {
    return (
        <div className="flex justify-end pb-4 pr-2 pl-10">
            <Card className="rounded-lg bg-muted p-3 shadow-none border-none max-w-[80%] break-words">
                {content}
            </Card>
        </div>
    )
}



interface AssistantMessageProps {
    content: string;
    createdAt: Date;
    type: MessageType;
    isStreaming?: boolean; 
}

export const AssistantMessage = ({
    content,
    createdAt,
    type,
    isStreaming,
}: AssistantMessageProps) => {
    return (
        <div className={cn(
            "flex flex-col group px-2 pb-4",
            type === "ERROR" && "text-red-700 dark:text-red-700"
        )}>
            <div className="flex items-center gap-2 pl-2 mb-2">
                <Image
                    src="/logo.svg"
                    alt="Aura"
                    width={18}
                    height={18}
                    className="shrink-0"
                />
                <span className="text-sm font-medium">Aura</span>
                <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    {format(createdAt, "HH:mm 'on' MMM dd, yyyy")}
                </span>
            </div>
            <div className="pl-8.5 flex flex-col gap-y-4">
                <AIResponse isStreaming={isStreaming}>
                    {content}
                </AIResponse>
            </div>
        </div>
    )
}


interface Props {
    content: string;
    role: MessageRole;
    createdAt: Date;
    type: MessageType;
    isStreaming?: boolean;
}

export const MessageCard = ({
    content,
    role,
    createdAt,
    type,
    isStreaming=false
}: Props) => {
    if (role === "ASSISTANT") {
        return (
            <AssistantMessage
                content={content}
                createdAt={createdAt}
                type={type}
                isStreaming={isStreaming}
            />
        )
    }
    return (
        <UserMessage
            content={content}
        />
    )
}