"use client";

import { Suspense, useEffect, useState } from "react";

import { useTRPC } from "@/trpc/client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { ProjectHeader } from "../components/project-header";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { MessagesContainer } from "../components/message-container";
import { Sidebar, SidebarContent, SidebarGroup, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { string } from "zod";
import { AppSidebar } from "../sidebars/app-sidebar";
// import { ErrorBoundary } from "react-error-boundary";

interface Props {
    projectId: string;
}

export const ProjectView = ({ projectId }: Props) => {
    const [isOpen, setIsOpen] = useState(true);
    const { isLoaded, isSignedIn, userId } = useAuth();
    const { has } = useAuth();
    const hasProAccess = has?.({ plan: "pro" });

    const trpc = useTRPC();
    const { data: projects } = useSuspenseQuery(trpc.projects.getMany.queryOptions())



    if (!isLoaded) {
        return <div>Loading authentication...</div>
    }

    if (!isSignedIn || !userId) {
        return <div>Please sign in to continue</div>
    }

    return (
        <div className="h-screen flex flex-col">

            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "16rem",
                    } as React.CSSProperties
                }
                open={isOpen}
                onOpenChange={setIsOpen}
            >

                <AppSidebar
                    projects={projects}
                    projectId={projectId}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}  
                />


                <SidebarInset className="flex flex-col">
                    <ProjectHeader />


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