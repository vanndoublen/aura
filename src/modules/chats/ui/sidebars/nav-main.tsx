import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Chat } from "@/generated/prisma"
import { ChatDialogButton } from "@/modules/home/ui/components/chat-dialog-button"
import { EditIcon, SearchIcon } from "lucide-react"
import { useState } from "react";

interface Props {
    isSearchOpen: boolean;
    setIsSearchOpen: (open: boolean) => void;
}

export const NavMain = ({ isSearchOpen, setIsSearchOpen }: Props) => {
    return (
        <SidebarGroup className="">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <EditIcon />
                        <span>New chat</span>
                    </SidebarMenuButton>

                    <SidebarMenuButton
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <SearchIcon />
                        <span>Search</span>
                    </SidebarMenuButton>

                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    )
}