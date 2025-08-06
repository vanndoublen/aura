import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { Project } from "@/generated/prisma"
import { SidebarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Props extends React.ComponentProps<typeof Sidebar> {
    projects: Project[];
    projectId: string;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export const AppSidebar = ({ projects, projectId, isOpen, setIsOpen, ...props }: Props) => {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="max-h-12">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex items-center justify-between">
                            <SidebarMenuButton
                                asChild
                                className={cn("border-none bg-transparent w-auto hover:bg-transparent font-bold", !isOpen && "hidden")}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <Link href="/">
                                    Aura
                                </Link>
                            </SidebarMenuButton>
                            <SidebarMenuButton
                                size="sm"

                                className="border-none bg-transparent cursor-e-resize size-8"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <SidebarIcon />
                            </SidebarMenuButton>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <NavMain />

            <SidebarContent>
                <NavProjects projects={projects} projectId={projectId} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}