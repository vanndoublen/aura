"use client";

import Link from "next/link";

import { useState } from "react";
import { format } from "date-fns";
import { Minimize2Icon, SearchIcon } from "lucide-react";


import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Project } from "@/generated/prisma";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarMenuButton } from "@/components/ui/sidebar";

interface Props {
    projects: Project[];
    isHome?: boolean;
}

export const ProjectDialogButton = ({ projects, isHome }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [filteredProjects, setFilterProjects] = useState<Project[]>(projects);



    const handleSearchChange = (value: string) => {
        if (value.length === 0) {
            setFilterProjects(projects);
        } else {
            const filteredResult = projects.filter(item => item.name.toLowerCase().includes(value.toLowerCase()) || format(item.updatedAt, "MMM dd, yyyy").toLowerCase().includes(value.toLowerCase()));
            setFilterProjects(filteredResult);
        }
        setSearchValue(value);
    }

    return (
        <div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>

                {isHome ? (
                    <Button
                        className="bg-transparent hover:bg-accent text-[12px] h-10"
                        variant="elevated"
                        onClick={() => setIsOpen(true)}
                    >
                        View projects
                    </Button>
                ) : (
                    <SidebarMenuButton
                        onClick={() => setIsOpen(true)}
                    >
                        <SearchIcon />
                        <span>Search</span>
                    </SidebarMenuButton>
                )}

                <DialogContent showCloseButton={false} className="!max-w-7xl !w-[70vw] !rounded-4xl">
                    <DialogHeader className="">
                        <DialogTitle>Projects</DialogTitle>
                    </DialogHeader>
                    <Input
                        placeholder="Search your project"
                        value={searchValue}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />


                    <ScrollArea className="h-[400px] min-h-1xl w-full mx-auto border-t">
                        <div className="flex flex-col ">

                            {filteredProjects.map((project) => (
                                <Button
                                    asChild
                                    variant="ghost"
                                    key={project.id}
                                    className="bg-transparent py-4 border-none h-10 flex text-start justify-between max-w-7xl w-[65vw] rounded-2xl"
                                >
                                    <Link href={isHome ? `projects/${project.id}` : `${project.id}`} >

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
                            onClick={() => setIsOpen(false)}
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

