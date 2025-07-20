import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTRPC } from "@/trpc/client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { ChevronDownIcon } from "lucide-react";


interface Props {
    modelDisplayName: string[];
}

export const ModelDropdown = ({ modelDisplayName }: Props) => {
    const trpc = useTRPC(); 
    const { data: aiModels} = useSuspenseQuery(trpc.ai.getMany.queryOptions());

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="focus-visible:ring-0 bg-transparent hover:opacity-75 transition-opacity h-8"
                >
                    <span className="text-[12px]">Model name</span>
                    <ChevronDownIcon />


                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {aiModels.map((model) => (
                    <DropdownMenuItem key={model.id}>
                        {model.displayName}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}