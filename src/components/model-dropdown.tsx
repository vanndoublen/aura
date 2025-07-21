import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { type AiModel } from "@/generated/prisma";
import { CheckIcon, ChevronDownIcon } from "lucide-react";


interface Props {
    aiModels: AiModel[];
    selectedModel: AiModel | null;
    setSelectedModel: (value: AiModel) => void;
}

export const ModelDropdown = ({ aiModels, selectedModel, setSelectedModel }: Props) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="focus-visible:ring-0 bg-transparent hover:opacity-75 transition-opacity h-8 border-0"
                >
                    <span className="text-[12px]">{selectedModel ? selectedModel.displayName : "Selet Model"}</span>
                    <ChevronDownIcon />


                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select AI Model</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {aiModels.map((model) => (
                    <DropdownMenuItem
                        key={model.id}
                        onSelect={() => setSelectedModel(model)}
                        className={model.id === selectedModel?.id ? "font-semibold bg-accent text-accent-foreground" : ""}
                    >
                        {model.displayName}
                        {model.id === selectedModel?.id && (
                            <CheckIcon className="ml-auto h-4 w-4" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}