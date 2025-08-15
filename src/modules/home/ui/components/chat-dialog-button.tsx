"use client";

import Link from "next/link";

import { useState } from "react";
import { format } from "date-fns";
import { Minimize2Icon, SearchIcon } from "lucide-react";


import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Chat } from "@/generated/prisma";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarMenuButton } from "@/components/ui/sidebar";

interface Props {
    chats: Chat[];
    isHome?: boolean;
}

export const ChatDialogButton = ({ chats, isHome }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [filteredChats, setFilterChats] = useState<Chat[]>(chats);



    const handleSearchChange = (value: string) => {
        if (value.length === 0) {
            setFilterChats(chats);
        } else {
            const filteredResult = chats.filter(item => item.name.toLowerCase().includes(value.toLowerCase()) || format(item.updatedAt, "MMM dd, yyyy").toLowerCase().includes(value.toLowerCase()));
            setFilterChats(filteredResult);
        }
        setSearchValue(value);
    }

    return (
        <div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>

                {isHome ? (
                    <Button
                        className="bg-transparent hover:bg-accent text-[12px] h-10"
                        variant="elevated"
                        onClick={() => setIsOpen(true)}
                    >
                        View chats
                    </Button>
                ) : (
                    <SidebarMenuButton
                        onClick={() => setIsOpen(true)}
                    >
                        <SearchIcon />
                        <span>Search</span>
                    </SidebarMenuButton>
                )}

                <DialogContent showCloseButton={false} className="!max-w-7xl !w-[70vw] !rounded-4xl">
                    <DialogHeader className="">
                        <DialogTitle>Chats</DialogTitle>
                    </DialogHeader>
                    <Input
                        placeholder="Search your chat"
                        value={searchValue}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />


                    <ScrollArea className="h-[400px] min-h-1xl w-full mx-auto border-t">
                        <div className="flex flex-col ">

                            {filteredChats.map((chat) => (
                                <Button
                                    asChild
                                    variant="ghost"
                                    key={chat.id}
                                    className="bg-transparent py-4 border-none h-10 flex text-start justify-between max-w-7xl w-[65vw] rounded-2xl"
                                >
                                    <Link href={isHome ? `chats/${chat.id}` : `${chat.id}`} >

                                        <span>{chat.name}</span>
                                        <span className="text-sm">{format(chat.updatedAt, "MMM dd, yyyy")}</span>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </ScrollArea>

                    <DialogFooter className="!h-12 w-full border-t pt-2 !flex !justify-between">
                        <Button
                            size="icon"
                            // className="w-full bg-accent text-foreground font-semibold"
                            onClick={() => setIsOpen(false)}
                            variant="ghost"
                            className="border-none hover:bg-transparent"
                        >
                            <Minimize2Icon className="h-4 w-4" />
                        </Button>

                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

