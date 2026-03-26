import { ChatView } from "@/modules/chats/ui/views/chat-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

interface Props {
    params: Promise<{
        chatId: string;
    }>
}

const Page = async ({ params }: Props) => {
    const { chatId } = await params;

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.chats.getMany.queryOptions());

    void queryClient.prefetchQuery(trpc.messages.getMany.queryOptions({
        chatId: chatId
    }))



    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<p>Loading ... </p>}>
                <ChatView chatId={chatId} />
            </Suspense>
        </HydrationBoundary>
    )
}

export default Page; 