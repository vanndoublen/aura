import { Input } from "@/components/ui/input";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Project } from "@/generated/prisma"
import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
    projects: Project[];
    projectId: string;
}

export const NavProjects = ({ projects, projectId }: Props) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setHours(0, 0, 0, 0);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);


    const todayProjects = projects.filter(
        p => new Date(p.updatedAt).setHours(0, 0, 0, 0) === today.getTime()
    );

    const lastSevenDaysProjects = projects.filter(p => {
        const updated = new Date(p.updatedAt);
        updated.setHours(0, 0, 0, 0);
        return updated < today && updated >= sevenDaysAgo;
    });

    const oldProjects = projects.filter(p => {
        const updated = new Date(p.updatedAt);
        updated.setHours(0, 0, 0, 0);
        return updated < sevenDaysAgo;
    });

    return (
        <>

            {todayProjects && <SubNavProjects projects={todayProjects} projectId={projectId} day="Today" />}

            {lastSevenDaysProjects && <SubNavProjects projects={lastSevenDaysProjects} projectId={projectId} day="Last 7 Days" />}

            {oldProjects && <SubNavProjects projects={oldProjects} projectId={projectId} day="A Long Time Ago" />}

        </>
    )
}


interface SubProps {
    projects: Project[];
    projectId: string;
    day: "Today" | "Last 7 Days" | "A Long Time Ago"

}
const SubNavProjects = ({ projects, projectId, day }: SubProps) => {
    const trpc = useTRPC();
    const queryClient = useQueryClient();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [tempName, setTempName] = useState("");

    const updateName = useMutation(trpc.projects.updateName.mutationOptions({
        onSuccess() {
            queryClient.invalidateQueries(trpc.projects.getMany.queryOptions());
        },
        onError(error) {
            toast.error(error.message);
        }
    }))

    const handleDoubleClick = (project: Project) => {
        setEditingId(project.id);
        setTempName(project.name);
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
            {projects && (
                <SidebarMenu>
                    <SidebarMenuSubItem >
                        {projects.map((project) => (
                            <SidebarMenuSubButton asChild key={project.id} isActive={projectId === project.id}
                                className={cn(projectId === project.id && "border-2 border-foreground" )}
                            >
                                {editingId === project.id ? (
                                    <Input
                                        value={tempName}
                                        onChange={(e) => setTempName(e.target.value)}
                                        onBlur={() => handleSave(project.id)}
                                        onKeyDown={(e) => handleKeyDown(e, project.id)}
                                        autoFocus
                                        className="!text-foreground !text-xs"
                                    />
                                ) : (
                                    <Link
                                        href={project.id}
                                        className="hover:border-2 hover:border-foreground"
                                        onDoubleClick={(e) => {
                                            e.preventDefault();
                                            handleDoubleClick(project)
                                        }}
                                    >
                                        <span className="text-xs truncate pr-4">
                                            {project.name}
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