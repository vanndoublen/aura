"use client";

import { Suspense, useState } from "react";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { ProjectHeader } from "../components/project-header";
import { CodeIcon, CrownIcon, EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserControl } from "@/components/user-control";
import { useAuth } from "@clerk/nextjs";
import { MessagesContainer } from "../components/message-container";
import { Sidebar, SidebarContent, SidebarGroup, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
// import { ErrorBoundary } from "react-error-boundary";

interface Props {
    projectId: string;
}

export const ProjectView = ({ projectId }: Props) => {
    const { has } = useAuth();
    const hasProAccess = has?.({ plan: "pro" });
    const trpc = useTRPC();
    const { data: projects } = useSuspenseQuery(trpc.projects.getMany.queryOptions())


    const [isOpen, setIsOpen] = useState(true); 


    return (
        <div className="h-screen">

            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "19rem",
                    } as React.CSSProperties
                }
                open={isOpen} 
                onOpenChange={setIsOpen}
            >
                <Sidebar variant="floating">
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarMenu className="gap-2">
                                {/* {data.navMain.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url} className="font-medium">
                                                {item.title}
                                            </a>
                                        </SidebarMenuButton> */}
                                {projects ? (
                                    <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                                        {projects.map((project) => (
                                            <SidebarMenuSubItem key={project.id}>
                                                <SidebarMenuSubButton asChild isActive={projectId === project.id}>
                                                    <Link href={project.id}>
                                                        {project.name}
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                ) : null}
                                {/* </SidebarMenuItem> */}
                                {/* ))} */}
                            </SidebarMenu>
                        </SidebarGroup>
                    </SidebarContent>

                </Sidebar>


                <SidebarInset>
                    <ProjectHeader isOpen={isOpen} setIsOpen={setIsOpen}/>

                    {/* <ErrorBoundary fallback={<p>Messages container error</p>}> */}
                    <Suspense fallback={<p>loading messages. ... . </p>}>
                        <MessagesContainer
                            projectId={projectId}
                        />
                    </Suspense>
                    {/* </ErrorBoundary> */}
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}