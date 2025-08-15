"use client";

import Image from "next/image";
import { Suspense, useState } from "react";

import { ChatForm } from "../components/chat-form";
import { ChatDialogButton } from "../components/chat-dialog-button";
import { useTRPC } from "@/trpc/client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { TextLoop } from "../../../../../components/motion-primitives/text-loop";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { useCurrentTheme } from "@/hooks/use-current-theme";
import { cn } from "@/lib/utils";
import { SignedIn, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ChatSearchDialog } from "@/components/chat-search-dialog";

const words = ["Generate your gadget with Aura"];

export const HomeView = () => {
    const [isOpen, setIsOpen] = useState(false)


    // TODO: might use suspense infinite query instead
    const trpc = useTRPC();
    const { data: chats } = useQuery(trpc.chats.getMany.queryOptions());

    const { user } = useUser();

    let currectTheme = useCurrentTheme();
    if (currectTheme === "dark") {
        currectTheme = "dark";
    } else {
        currectTheme = "light";
    }

    const getTextColors = (theme: string) => {
        if (theme === "dark") {
            return ["hsl(var(--foreground))"];
        }
        return ["hsl(var(--foreground))"];
    };


    return (
        <div className={cn("flex flex-col max-w-5xl mx-auto w-full transition-all duration-300")}>
            <section className="space-y-6 py-[16vh] 2xl:py-48">
                <div className="flex flex-col items-center">
                    <Image
                        src="/logo.svg"
                        alt="Vibe"
                        width={50}
                        height={50}
                        className="hidden md:block"
                    />
                </div>
                <h1 className="text-2xl md:text-5xl font-bold text-center font-libre">

                    <TextType
                        text={words}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        textColors={getTextColors(currectTheme)}
                    />

                </h1>

                <TextLoop className='text-base md:text-xl text-muted-foreground text-center max-w-5xl w-full mx-auto'>
                    <span>How can I assist you today?</span>
                    <span>What is octave in music</span>
                    <span>How to study linear algebra</span>
                    <span>Build a simple landing page in tsx</span>
                </TextLoop>
                <div className="max-w-3xl mx-auto w-full">
                    <Suspense fallback={<p>Loading text area</p>}>
                        <ChatForm />
                    </Suspense>
                </div>
            </section>


            {user &&
                <>
                    <div className="mx-auto">
                        {/* <ChatDialogButton chats={chats} isHome /> */}
                        <Button
                            className="bg-transparent hover:bg-accent text-[12px] h-10"
                            variant="elevated"
                            onClick={() => setIsOpen(true)}
                        >
                            View chats
                        </Button>
                    </div>
                    <ChatSearchDialog chats={chats ?? []} isHome isOpen={isOpen} setIsOpen={setIsOpen} />
                </>}
        </div>
    )
}