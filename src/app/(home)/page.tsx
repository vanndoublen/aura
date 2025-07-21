import { HomeView } from "@/modules/home/ui/views/home-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
const Page = () => {
    const queryClient = getQueryClient();
    // TODO: might need to use infiniteQuery instead
    void queryClient.prefetchQuery(trpc.projects.getMany.queryOptions());

    void queryClient.prefetchQuery(trpc.ai.getMany.queryOptions());

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {/* <ErrorBoundary fallback={<p>Error!</p>}> */}
            <Suspense fallback={<p>Loading ... </p>}>
                <HomeView />
            </Suspense>
            {/* </ErrorBoundary> */}
        </HydrationBoundary>
    )
}

export default Page;