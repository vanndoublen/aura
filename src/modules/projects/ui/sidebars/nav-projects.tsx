import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Project } from "@/generated/prisma"
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    return (

        <SidebarGroup>
            <SidebarGroupLabel>{day}</SidebarGroupLabel>

            {projects && (
                <SidebarMenu>
                    <SidebarMenuItem >
                        {projects.map((project) => (
                            <SidebarMenuButton asChild key={project.id} isActive={projectId === project.id}
                                className={cn(projectId === project.id && "border-2 border-foreground")}>
                                <Link href={project.id} className="hover:border-2 hover:border-foreground">
                                    <span className="text-sm truncate pr-4">
                                        {project.name}
                                    </span>
                                </Link>
                            </SidebarMenuButton>
                        ))}
                    </SidebarMenuItem>
                </SidebarMenu>
            )}
        </SidebarGroup>
    )
}