"use client";

import { Suspense, useEffect, useState } from "react";
import { useTRPC } from "@/trpc/client";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { MessagesContainer } from "../components/message-container";
import { AppSidebar } from "../sidebars/app-sidebar";
import { SignedIn, useAuth } from "@clerk/nextjs";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ChatSearchDialog } from "@/components/chat-search-dialog";
import { useMessageStore } from "@/stores/message-store";

interface Props {
  chatId: string;
}

export const ChatView = ({ chatId }: Props) => {
  const queryClient = useQueryClient();
  const globalUserMessage = useMessageStore(state => state.globalUserMessage);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isLoaded, isSignedIn, userId } = useAuth();
  const { has } = useAuth();
  const hasProAccess = has?.({ plan: "pro" });

  const trpc = useTRPC();
  const { data: chats } = useSuspenseQuery(
    trpc.chats.getMany.queryOptions()
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
        <AppSidebar chats={chats} chatId={chatId} isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />

        <SidebarInset className="flex flex-col">
          <SidebarTrigger className="md:hidden border-none fixed top-2 left-4" />
          <Suspense fallback={<p>loading messages. ... . </p>}>
            <MessagesContainer chatId={chatId} />
          </Suspense>
        </SidebarInset>

        <SignedIn>
          <ChatSearchDialog chats={chats} isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
        </SignedIn>

      </SidebarProvider>
    </div>
  );
};