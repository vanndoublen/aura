"use client";

import { Suspense } from "react";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { MessagesContainer } from "../components/message-container";
import { AppSidebar } from "../sidebars/app-sidebar";
import { useAuth } from "@clerk/nextjs";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface Props {
  projectId: string;
}

export const ProjectView = ({ projectId }: Props) => {
  const { isLoaded, isSignedIn, userId } = useAuth();
  const { has } = useAuth();
  const hasProAccess = has?.({ plan: "pro" });

  const trpc = useTRPC();
  const { data: projects } = useSuspenseQuery(
    trpc.projects.getMany.queryOptions()
  );

  if (!isLoaded) {
    return <div>Loading authentication...</div>;
  }

  if (!isSignedIn || !userId) {
    return <div>Please sign in to continue</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "16rem",
          } as React.CSSProperties
        }
        defaultOpen={true} 
      >
        <AppSidebar projects={projects} projectId={projectId} />

        <SidebarInset className="flex flex-col">
          <SidebarTrigger className="md:hidden border-none fixed top-2 left-4" />
          <Suspense fallback={<p>loading messages. ... . </p>}>
            <MessagesContainer projectId={projectId} />
          </Suspense>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};