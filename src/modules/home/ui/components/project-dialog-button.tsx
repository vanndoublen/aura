"use client";

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Project } from "@/generated/prisma";
import Link from "next/link";
import { useState } from "react";

interface Props {
    projects: Project[];
}

export const ProjectDialogButton = ({ projects }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button
                className="bg-transparent text-[12px] h-10"
                variant="elevated"
                onClick={() => setIsOpen(true)}
            >
                View projects
            </Button>


            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Projects</DialogTitle>
                        <DialogDescription>
                            Select one of your past projects
                        </DialogDescription>
                    </DialogHeader>

                    {projects.map((project) => (
                        <Button
                            asChild
                            variant="link"
                            key={project.id}
                        >
                            <Link href={`projects/${project.id}`} >
                                {project.name}
                            </Link>
                        </Button>
                    ))}

                    <DialogFooter>
                        <Button
                            className="w-full"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

