import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { EditIcon, SearchIcon } from "lucide-react"

export const NavMain = () => {
    return (
        <SidebarGroup>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <EditIcon />
                        <span>New Chat</span>
                    </SidebarMenuButton>
                    <SidebarMenuButton>
                        <SearchIcon />
                        <span>Search</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    )
}