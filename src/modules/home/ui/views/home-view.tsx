"use client";

import Image from "next/image";
import { Suspense } from "react";

import { ProjectForm } from "../components/project-form";
import { ProjectDialogButton } from "../components/project-dialog-button";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { TextLoop } from "../../../../../components/motion-primitives/text-loop";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import TextType from "@/blocks/TextAnimations/TextType/TextType";

const words = ["Generate your gadget with Aura"];

export const HomeView = () => {
    // TODO: might use suspense infinite query instead
    const trpc = useTRPC();
    const { data: projects } = useSuspenseQuery(trpc.projects.getMany.queryOptions());

    return (
        <div className="flex flex-col max-w-5xl mx-auto w-full">
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
                <h1 className="text-2xl md:text-5xl font-bold text-center">

                    <TextType
                        text={words}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </h1>

                <TextLoop className='text-lg md:text-xl text-muted-foreground text-center max-w-5xl w-full mx-auto'>
                    <span>How can I assist you today?</span>
                    <span>What is octave in music</span>
                    <span>How to study linear algebra</span>
                    <span>Build a simple landing page in tsx</span>
                </TextLoop>
                <div className="max-w-3xl mx-auto w-full">
                    <Suspense fallback={<p>Loading text area</p>}>
                        <ProjectForm />
                    </Suspense>
                </div>
            </section>

            <div className="mx-auto">
                <ProjectDialogButton projects={projects} />
            </div>
        </div>
    )
}