import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Project } from "@/generated/prisma"
import { ProjectDialogButton } from "@/modules/home/ui/components/project-dialog-button"
import { EditIcon } from "lucide-react"

interface Props {
    projects: Project[];
}

export const NavMain = ({ projects }: Props) => {
    return (
        <SidebarGroup>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <EditIcon />
                        <span className="text-xs">New chat</span>
                    </SidebarMenuButton>

                    <ProjectDialogButton projects={projects} />

                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    )
}