import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ChevronLeft, Sidebar } from "lucide-react"
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { UserControl } from "@/components/user-control";

export const ChatHeader = () => {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4">
            <div className="flex items-center">
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 border-none focus-visible:ring-0 hover:bg-transparent hover:opacity-75 transition-opacity pl-2!"
                    asChild
                >
                    <Link href={`/`}>
                        <ChevronLeft />

                        <span className="text-sm font-medium text-[12px]">Home</span>
                    </Link>
                </Button>
            </div>
            <div className="flex items-center gap-x-4">



                <UserControl />

            </div>
        </header>

    )
}