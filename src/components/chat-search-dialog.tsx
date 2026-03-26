import { Chat } from "@/generated/prisma";

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface Props {
    chats: Chat[];
    isHome?: boolean;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export const ChatSearchDialog = ({ chats, isHome, isOpen, setIsOpen }: Props) => {
    const [searchValue, setSearchValue] = useState("");
    const [filteredChats, setFilterChats] = useState<Chat[]>(chats);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setIsOpen(!isOpen)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    useEffect(() => {
        setFilterChats(chats);
    } ,[chats])

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

        <CommandDialog showCloseButton={false} open={isOpen} onOpenChange={setIsOpen}
              className="shadow-none"
        >
            <div className="flex py-1 border-b items-center">
                <Search className="ml-4 size-5" />
                <Input
                    placeholder="Search..."
                    onChange={(e) => handleSearchChange(e.target.value)}
                    value={searchValue}
                    className="!text-sm mx-1.5 shadow-none !bg-transparent border-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                />

            </div>
            <CommandList>
                <CommandGroup heading="Chats">
                    {filteredChats.map((chat) => (

                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            key={chat.id}
                            className="w-full border-none h-8"
                        >
                            <Link href={isHome ? `chats/${chat.id}` : `${chat.id}`}>

                                <div className="flex items-center justify-between w-full">
                                    <span className="truncate text-xs pr-1">{chat.name}</span>
                                    <span className="text-xs pl-1 hidden sm:block">
                                        {format(chat.updatedAt, "MMM dd, yyyy")}
                                    </span>
                                </div>
                            </Link>
                        </Button>

                    ))}
                    {filteredChats.length === 0 && searchValue && (
                        <div className="px-3 py-8 text-center text-sm text-muted-foreground">
                            No chats found
                        </div>
                    )}
                </CommandGroup>
            </CommandList>
        </CommandDialog>


    )
}