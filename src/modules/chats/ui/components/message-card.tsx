import Image from "next/image";

import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { MessageRole, MessageType } from "@/generated/prisma";
import { AIResponse } from "@/components/ui/kibo-ui/ai/response";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";


interface CopyProps {
    text: string;
    className?: string;
}

const CopyButton = ({ text, className }: CopyProps) => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            toast.error("Failed to copy!")
        }
    }

    return (
        <Button
            size="icon"
            variant="ghost"
            onClick={handleCopy}
            className={cn("border-none !bg-transparent !hover:bg-transparent", className)}
        >
            {isCopied ? (
                <CheckIcon />
            ) : (
                <CopyIcon />
            )}
        </Button>
    )
}

interface UserMessageProps {
    content: string;
}
const UserMessage = ({ content }: UserMessageProps) => {
    return (
        <div className="flex flex-col items-end pb-4 pr-2 pl-10 group ">
            <Card className="rounded-lg bg-muted p-3 shadow-none border-none max-w-[80%] break-words text-base">
                {content}
            </Card>
            <CopyButton text={content} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
        </div>
    )
}



interface AssistantMessageProps {
    content: string;
    createdAt: Date;
    type: MessageType;
    aiModelName: string | null;
}

export const AssistantMessage = ({
    content,
    createdAt,
    type,
    aiModelName,
}: AssistantMessageProps) => {
    return (
        <div className={cn(
            "flex flex-col group pb-4",
            type === "ERROR" && "text-red-700 dark:text-red-700"
        )}>
            <div className="flex items-center gap-2 mb-2">
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
            <div className="flex flex-col gap-y-4 px-4">
                <AIResponse className="text-base space-y-4">
                    {content}
                </AIResponse>
            </div>
            <div className="flex items-center gap-2 mt-2 px-4">
                <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    {aiModelName ?? ""}
                </span>
                <CopyButton text={content} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
            </div>
        </div>
    )
}


interface Props {
    content: string;
    role: MessageRole;
    createdAt: Date;
    type: MessageType;
    aiModelName: string | null;
}

export const MessageCard = ({
    content,
    role,
    createdAt,
    type,
    aiModelName,
}: Props) => {
    if (role === "ASSISTANT") {
        return (
            <AssistantMessage
                content={content}
                createdAt={createdAt}
                type={type}
                aiModelName={aiModelName}
            />
        )
    }
    return (
        <UserMessage
            content={content}
        />
    )
}