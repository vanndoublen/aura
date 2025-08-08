import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Project } from "@/generated/prisma"
import { ProjectDialogButton } from "@/modules/home/ui/components/project-dialog-button"
import { EditIcon, SearchIcon } from "lucide-react"
import { useState } from "react";

interface Props {
    isSearchOpen: boolean;
    setIsSearchOpen: (open: boolean) => void;
}

export const NavMain = ({ isSearchOpen, setIsSearchOpen }: Props) => {
    return (
        <SidebarGroup>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <EditIcon />
                        <span className="text-sm">New chat</span>
                    </SidebarMenuButton>

                    <SidebarMenuButton
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <SearchIcon />
                        <span className="text-sm">Search</span>
                    </SidebarMenuButton>

                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    )
}