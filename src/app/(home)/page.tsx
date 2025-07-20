import { TextareaForm } from "@/modules/home/ui/components/textarea-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Page = () => {
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
                    <TextareaForm />
                </div>
            </section>
            {/* TODO: view past projects  */}
            {/* <ProjectList /> */}
            <div className="mx-auto">
                <Button asChild className="bg-transparent" variant="elevated" >
                    <Link href="/readings">
                        View past readings
                    </Link>
                </Button>
            </div>
        </div>

    )
}

export default Page;