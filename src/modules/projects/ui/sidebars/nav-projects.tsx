import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Project } from "@/generated/prisma"
import { cn } from "@/lib/utils";
import { useMessageStore } from "@/stores/message-store";
import { useTRPC } from "@/trpc/client";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";

interface Props {
    projects: Project[];
    projectId: string;
}

export const NavProjects = ({ projects, projectId }: Props) => {
    const trpc = useTRPC();
    const queryClient = useQueryClient();

    const globalUserMessage = useMessageStore(state => state.globalUserMessage);

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Chats</SidebarGroupLabel>
            <SidebarMenu className="gap-2">
                {projects ? (
                    <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                        {projects.map((project) => (
                            <SidebarMenuSubItem key={project.id}>
                                <SidebarMenuSubButton asChild isActive={projectId === project.id}
                                    className={cn(projectId === project.id && "border-2 border-foreground")}>
                                    <Link href={project.id} className="hover:border-2 hover:border-foreground">
                                        <span className="text-sm truncate pr-4">
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