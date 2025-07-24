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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Project } from "@/generated/prisma";
import { format } from "date-fns";
import { Minimize, Minimize2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
    projects: Project[];
    onDialogOpen: (open: boolean) => void;
}

export const ProjectDialogButton = ({ projects, onDialogOpen }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
        onDialogOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
        onDialogOpen(false);
    }

    return (
        <div>
            <Button
                className="bg-transparent hover:bg-accent text-[12px] h-10"
                variant="elevated"
                onClick={onOpen}
            >
                View projects
            </Button>


            <Dialog open={isOpen} onOpenChange={onOpen}>
                <DialogContent showCloseButton={false} className="!max-w-6xl !w-[90vw] !rounded-4xl">
                    <DialogHeader className="">
                        <DialogTitle>Projects</DialogTitle>
                        {/* <DialogDescription>
                            Select one of your past projects
                        </DialogDescription> */}
                    </DialogHeader>

                    <ScrollArea className="h-[560px] min-h-1xl w-full mx-auto border-t ">
                        <div className="flex flex-col">

                            {projects.map((project) => (
                                <Button
                                    asChild
                                    variant="ghost"
                                    key={project.id}
                                    className="bg-transparent py-4 border-none h-10 flex text-start justify-between rounded-2xl"
                                >
                                    <Link href={`projects/${project.id}`} >

                                        <span>{project.name}</span>
                                        <span className="text-sm">{format(project.updatedAt, "MMM dd, yyyy")}</span>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </ScrollArea>

                    <DialogFooter className="!h-12 w-full border-t pt-2 !flex !justify-between">
                        <Button
                            size="icon"
                            // className="w-full bg-accent text-foreground font-semibold"
                            onClick={onClose}
                            variant="ghost"
                            className="border-none hover:bg-transparent"
                        >
                            <Minimize2Icon className="h-4 w-4" />
                        </Button>

                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

