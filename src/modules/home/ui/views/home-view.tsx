"use client";

import Image from "next/image";
import { Suspense } from "react";

import { ProjectForm } from "../components/project-form";
import { ProjectDialogButton } from "../components/project-dialog-button";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

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
                    Generate something with Aura
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-center">
                    Create a story
                </p>
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