import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Project } from "@/generated/prisma"
import Link from "next/link";

interface Props {
    projects: Project[]; 
    projectId: string; 
}

export const NavProjects = ({projects, projectId} : Props) => {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Chats</SidebarGroupLabel>
            <SidebarMenu className="gap-2">
                {projects ? (
                    <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                        {projects.map((project) => (
                            <SidebarMenuSubItem key={project.id}>
                                <SidebarMenuSubButton asChild isActive={projectId === project.id}>
                                    <Link href={project.id}>
                                        <span className="text-xs">
                                            {project.name}
                                        </span>
                                    </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                ) : null}
            </SidebarMenu>
        </SidebarGroup>
    )
}