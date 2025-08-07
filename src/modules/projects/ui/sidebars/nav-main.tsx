import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Project } from "@/generated/prisma"
import { ProjectDialogButton } from "@/modules/home/ui/components/project-dialog-button"
import { EditIcon, SearchIcon } from "lucide-react"
import { useState } from "react";

interface Props {
    projects: Project[];
    isSearchOpen: boolean;
    setIsSearchOpen: (open: boolean) => void;
}

export const NavMain = ({ projects, isSearchOpen, setIsSearchOpen }: Props) => {
    return (
        <SidebarGroup>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <EditIcon />
                        <span className="text-xs">New chat</span>
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