import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar, // Move this import here
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { Project } from "@/generated/prisma";
import { SidebarIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MessagesContainer } from "../components/message-container";
import { Suspense, useEffect } from "react";

interface Props extends React.ComponentProps<typeof Sidebar> {
  projects: Project[];
  projectId: string;
}

export const AppSidebar = ({ projects, projectId, ...props }: Props) => {
  const { open, toggleSidebar } = useSidebar();

  useEffect(() => {
    console.log("sidebar :::: " , open);
  }, [open])

  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader className="max-h-12">
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="flex items-center justify-between">
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "border-none bg-transparent w-auto hover:bg-transparent font-bold",
                    !open && "md:hidden"
                  )}
                >
                  <Link href="/">Aura</Link>
                </SidebarMenuButton>
                <SidebarMenuButton
                  size="sm"
                  className="border-none bg-transparent cursor-e-resize size-8 hidden md:block"
                  onClick={toggleSidebar}
                >
                  <SidebarIcon />
                </SidebarMenuButton>
                <SidebarMenuButton
                  size="sm"
                  className="border-none bg-transparent cursor-pointer size-8 md:hidden z-100"
                  onClick={toggleSidebar}
                >
                  <XIcon />
                </SidebarMenuButton>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <NavMain projects={projects} />

        <SidebarContent>
          <NavProjects projects={projects} projectId={projectId} />
        </SidebarContent>

        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  );
};