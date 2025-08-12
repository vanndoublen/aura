import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { type AiModel } from "@/generated/prisma";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";


interface Props {
    aiModels: AiModel[];
    selectedModel: AiModel | null;
    setSelectedModel: (value: AiModel) => void;
}

export const ModelDropdown = ({ aiModels, selectedModel, setSelectedModel }: Props) => {
    const [searchValue, setSearchValue] = useState("");
    const [filteredModels, setFilteredModels] = useState<AiModel[]>(aiModels);

    useEffect(() => {
        setFilteredModels(aiModels);
    }, [aiModels]);

    const handleOnChangeSearch = (modelName: string) => {
        setSearchValue(modelName);
        if (modelName.length === 0) {
            setFilteredModels(aiModels);
        } else {
            const result = aiModels.filter(model => model.displayName?.toLowerCase().includes(modelName.toLowerCase()))
            setFilteredModels(result);
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="focus-visible:ring-0 bg-transparent hover:opacity-75 transition-opacity h-8 border-0"
                >
                    <span className="text-[12px]">{selectedModel ? selectedModel.displayName : "Select Model"}</span>
                    <ChevronDownIcon />


                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <Input
                    placeholder="Search AI Models"
                    value={searchValue}
                    onChange={(e) => handleOnChangeSearch(e.target.value)}
                    onKeyDown={(e) => e.stopPropagation()}
                    className="!text-sm shadow-none !bg-transparent border-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"

                />
                <DropdownMenuSeparator />
                {filteredModels.map((model) => (
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
                {filteredModels.length === 0 && searchValue && (
                    <div className="text-sm p-2 flex justify-center text-muted-foreground">
                        No models found
                    </div>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}