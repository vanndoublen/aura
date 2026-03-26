import { HomeView } from "@/modules/home/ui/views/home-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
const Page = () => {
    return (
        <>
            {/* <ErrorBoundary fallback={<p>Error!</p>}> */}
            <Suspense fallback={<p>Loading ... </p>}>
                <HomeView />
            </Suspense>
            {/* </ErrorBoundary> */}
        </>
    )
}

export default Page;