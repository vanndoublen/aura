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

const data = {
    navMain: [
        {
            title: "Getting Started",
            url: "#",
            items: [
                {
                    title: "Installation",
                    url: "#",
                },
                {
                    title: "Project Structure",
                    url: "#",
                },
            ],
        },
        {
            title: "Building Your Application",
            url: "#",
            items: [
                {
                    title: "Routing",
                    url: "#",
                },
                {
                    title: "Data Fetching",
                    url: "#",
                    isActive: true,
                },
                {
                    title: "Rendering",
                    url: "#",
                },
                {
                    title: "Caching",
                    url: "#",
                },
                {
                    title: "Styling",
                    url: "#",
                },
                {
                    title: "Optimizing",
                    url: "#",
                },
                {
                    title: "Configuring",
                    url: "#",
                },
                {
                    title: "Testing",
                    url: "#",
                },
                {
                    title: "Authentication",
                    url: "#",
                },
                {
                    title: "Deploying",
                    url: "#",
                },
                {
                    title: "Upgrading",
                    url: "#",
                },
                {
                    title: "Examples",
                    url: "#",
                },
            ],
        },
        {
            title: "API Reference",
            url: "#",
            items: [
                {
                    title: "Components",
                    url: "#",
                },
                {
                    title: "File Conventions",
                    url: "#",
                },
                {
                    title: "Functions",
                    url: "#",
                },
                {
                    title: "next.config.js Options",
                    url: "#",
                },
                {
                    title: "CLI",
                    url: "#",
                },
                {
                    title: "Edge Runtime",
                    url: "#",
                },
            ],
        },
        {
            title: "Architecture",
            url: "#",
            items: [
                {
                    title: "Accessibility",
                    url: "#",
                },
                {
                    title: "Fast Refresh",
                    url: "#",
                },
                {
                    title: "Next.js Compiler",
                    url: "#",
                },
                {
                    title: "Supported Browsers",
                    url: "#",
                },
                {
                    title: "Turbopack",
                    url: "#",
                },
            ],
        },
        {
            title: "Community",
            url: "#",
            items: [
                {
                    title: "Contribution Guide",
                    url: "#",
                },
            ],
        },
    ],
}

export const ProjectView = ({ projectId }: Props) => {
    const { has } = useAuth();
    const hasProAccess = has?.({ plan: "pro" });
    const trpc = useTRPC();
    const { data: projects } = useSuspenseQuery(trpc.projects.getMany.queryOptions())



    return (
        <div className="h-screen">

            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "19rem",
                    } as React.CSSProperties
                }
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
                    <header className="flex h-16 shrink-0 items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                    </header>

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