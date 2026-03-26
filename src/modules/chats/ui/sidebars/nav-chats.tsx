import { Input } from "@/components/ui/input";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Chat } from "@/generated/prisma"
import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
    chats: Chat[];
    chatId: string;
}

export const NavChats = ({ chats, chatId }: Props) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setHours(0, 0, 0, 0);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);


    const todayChats = chats.filter(
        p => new Date(p.updatedAt).setHours(0, 0, 0, 0) === today.getTime()
    );

    const lastSevenDaysChats = chats.filter(p => {
        const updated = new Date(p.updatedAt);
        updated.setHours(0, 0, 0, 0);
        return updated < today && updated >= sevenDaysAgo;
    });

    const oldChats = chats.filter(p => {
        const updated = new Date(p.updatedAt);
        updated.setHours(0, 0, 0, 0);
        return updated < sevenDaysAgo;
    });

    return (
        <>

            {todayChats.length > 0 && <SubNavChats chats={todayChats} chatId={chatId} day="Today" />}

            {lastSevenDaysChats.length > 0 && <SubNavChats chats={lastSevenDaysChats} chatId={chatId} day="Last 7 Days" />}

            {oldChats.length > 0 && <SubNavChats chats={oldChats} chatId={chatId} day="A Long Time Ago" />}

        </>
    )
}


interface SubProps {
    chats: Chat[];
    chatId: string;
    day: "Today" | "Last 7 Days" | "A Long Time Ago"

}
const SubNavChats = ({ chats, chatId, day }: SubProps) => {
    const trpc = useTRPC();
    const queryClient = useQueryClient();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [tempName, setTempName] = useState("");

    const updateName = useMutation(trpc.chats.updateName.mutationOptions({
        onSuccess() {
            queryClient.invalidateQueries(trpc.chats.getMany.queryOptions());
        },
        onError(error) {
            toast.error(error.message);
        }
    }))

    const handleDoubleClick = (chat: Chat) => {
        setEditingId(chat.id);
        setTempName(chat.name);
    }

    const handleSave = async (id: string) => {
        if (!tempName) {
            return;
        }
        await updateName.mutateAsync({
            id: id,
            name: tempName,
        });

        setEditingId(null);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>, id: string) => {
        if (e.key === "Enter") {
            handleSave(id);
        }
        if (e.key === "Escape") {
            setEditingId(null);
        }
    }

    return (
        <SidebarGroup>
            <SidebarGroupLabel>{day}</SidebarGroupLabel>
            {chats && (
                <SidebarMenu>
                    <SidebarMenuSubItem >
                        {chats.map((chat) => (
                            <SidebarMenuSubButton asChild key={chat.id} isActive={chatId === chat.id}
                                className={cn("px-2 py-4" ,chatId === chat.id && "bg-border!")}
                            >
                                {editingId === chat.id ? (
                                    <Input
                                        value={tempName}
                                        onChange={(e) => setTempName(e.target.value)}
                                        onBlur={() => handleSave(chat.id)}
                                        onKeyDown={(e) => handleKeyDown(e, chat.id)}
                                        autoFocus
                                        className="!text-foreground !text-xs"
                                    />
                                ) : (
                                    <Link
                                        href={chat.id}
                                        onDoubleClick={(e) => {
                                            e.preventDefault();
                                            handleDoubleClick(chat)
                                        }}
                                    >
                                        <span className="text-md! truncate pr-4">
                                            {chat.name}
                                        </span>
                                    </Link>
                                )}

                            </SidebarMenuSubButton>
                        ))}
                    </SidebarMenuSubItem>
                </SidebarMenu>
            )
            }
        </SidebarGroup >
    )
}