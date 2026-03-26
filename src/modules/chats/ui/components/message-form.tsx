import { z } from "zod";
import { Suspense, useCallback, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextareaAutoSize from "react-textarea-autosize";
import { useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { ArrowUpIcon, Loader2Icon, PaperclipIcon, XIcon } from "lucide-react";
import { ModelDropdown } from "@/components/model-dropdown";
import { AiModel } from "@/generated/prisma";
import { useMessageStore } from "@/stores/message-store";
import { Usage } from "./usage";

interface Props {
    chatId: string;
    isStreaming: boolean;
    isFetching: boolean;
}

const formSchema = z.object({
    value: z
        .string()
        .min(1, { message: "Value is required" })
        .max(10000, { message: "Value is too long" }),
    files: z.array(z.instanceof(File)).optional()
});

export const MessageForm = ({ chatId, isStreaming, isFetching }: Props) => {
    const trpc = useTRPC();
    const queryClient = useQueryClient();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const setGlobalMessage = useCallback(useMessageStore((state) => state.setGlobalMessage), []);
    const globalModelId = useMessageStore(state => state.globalModelId);

    const { data: usage } = useQuery(trpc.usage.status.queryOptions());

    const { data: aiModels } = useSuspenseQuery(trpc.ai.getMany.queryOptions());
    const [selectedModel, setSelectedModel] = useState<AiModel | null>(() => {
        if (globalModelId) {
            const model = (aiModels.find(model => model.id === globalModelId));
            return model || null;
        }
        const defaultModel = aiModels.find(model => model.name === "gpt-4.1");
        return defaultModel || aiModels[0] || null;
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            value: "",
            files: [],
        },
    });

    const selectedFiles = form.watch("files");

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values.value, values.files);
        setGlobalMessage(chatId, values.value, selectedModel?.id ?? "", values.files);
        form.reset();
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = Array.from(event.target.files || []);
        const currentFiles = form.getValues("files") || [];
        form.setValue("files", [...currentFiles, ...newFiles]);
    };

    const handleFileRemove = (index: number) => {
        const currentFiles = form.getValues("files") || [];
        const updatedFiles = currentFiles.filter((_, i) => i !== index);
        form.setValue("files", updatedFiles);
    };

    const handleFileButtonClick = () => {
        fileInputRef.current?.click();
    };

    const [isFocused, setIsFocused] = useState(false);
    const isPending = isStreaming || isFetching;
    const isButtonDisabled = !form.formState.isValid || isStreaming || isFetching;
    const showUsage = !!usage;

    return (
        <Form {...form}>
            {showUsage && (
                <Usage
                    points={usage.remainingPoints}
                    msBeforeNext={usage.msBeforeNext}
                />
            )}
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn(
                    "relative border p-4 pt-1 rounded-t-md bg-sidebar dark:bg-sidebar transition-all",
                    isFocused && "shadow-xs",
                    showUsage && "rounded-t-none"
                )}
            >
                {/* Hidden file input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileSelect}
                    className="hidden"
                    accept="*/*"
                />

                {/* File preview */}
                {selectedFiles && selectedFiles.length > 0 && (
                    <div className="mb-2 space-y-1">
                        {selectedFiles.map((file, index) => (
                            <div key={index} className="p-2 bg-muted rounded-md flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <PaperclipIcon className="size-4" />
                                    <span className="text-sm truncate max-w-[200px]">
                                        {file.name}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        ({(file.size / 1024).toFixed(1)} KB)
                                    </span>
                                </div>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleFileRemove(index)}
                                    className="h-6 w-6 p-0"
                                >
                                    <XIcon className="size-3" />
                                </Button>
                            </div>
                        ))}
                    </div>
                )}

                <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                        <TextareaAutoSize
                            {...field}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            minRows={2}
                            maxRows={8}
                            className="pt-4 resize-none border-none w-full outline-none bg-transparent"
                            placeholder="What would you like to build?"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                                    e.preventDefault();
                                    form.handleSubmit(onSubmit)(e);
                                }
                            }}
                        />
                    )}
                />
                <div className="flex gap-2 items-end justify-between pt-2">
                    <div className="text-[12px] text-muted-foreground font-mono">
                        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                            <span>&#8984;</span>Enter
                        </kbd>
                        &nbsp;to submit
                    </div>
                    <div className="flex items-center gap-x-2">
                        {/* File upload button */}
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={handleFileButtonClick}
                            className="h-8 w-8 p-0"
                            disabled={isPending}
                        >
                            <PaperclipIcon className="size-4" />
                        </Button>

                        <Suspense fallback={<p>Loading models ... </p>}>
                            <ModelDropdown
                                aiModels={aiModels}
                                selectedModel={selectedModel}
                                setSelectedModel={setSelectedModel}
                            />
                        </Suspense>
                        <Button
                            disabled={isButtonDisabled}
                            className={cn(
                                "size-8 rounded-full",
                                isButtonDisabled && "bg-muted-foreground border"
                            )}
                        >
                            {isPending ? (
                                <Loader2Icon className="size-4 animate-spin" />
                            ) : (
                                <ArrowUpIcon />
                            )}
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};