import { z } from "zod";
import { toast } from "sonner";
import { Suspense, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextareaAutoSize from "react-textarea-autosize";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";


import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { ArrowUpIcon, Loader2Icon } from "lucide-react";
// import { Usage } from "./usage";
import { ModelDropdown } from "@/components/model-dropdown";
import { AiModel } from "@/generated/prisma";
import { useMessageStore } from "@/stores/message-store";

interface Props {
    projectId: string;
    isStreaming: boolean;
    isFetching: boolean;
}

const formSchema = z.object({
    value: z
        .string()
        .min(1, { message: "Value is required" })
        .max(10000, { message: "Value is too long" }),
})


export const MessageForm = ({ projectId, isStreaming, isFetching }: Props) => {
    const trpc = useTRPC();
    const queryClient = useQueryClient();

    const setGlobalMessage = useCallback(useMessageStore((state) => state.setGlobalMessage), []);
    const globalModelId = useMessageStore(state => state.globalModelId);



    const { data: aiModels } = useSuspenseQuery(trpc.ai.getMany.queryOptions());
    const [selectedModel, setSelectedModel] = useState<AiModel | null>(() => {
        if (globalModelId) {
            const model = (aiModels.find(model => model.id === globalModelId));
            return model || null;
        }
        const defaultModel = aiModels.find(model => model.name === "gpt-4.1");
        return defaultModel || aiModels[0] || null;
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            value: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values.value);
        setGlobalMessage(projectId, values.value, selectedModel?.id ?? "");
        form.reset();
    }



    const [isFocused, setIsFocused] = useState(false);
    const isPending = isStreaming || isFetching;
    const isButtonDisabled = !form.formState.isValid || isStreaming || isFetching;
    // const showUsage = !!usage;
    const showUsage = false;


    return (
        <Form {...form}>
            {/* {showUsage && (
                <Usage
                    points={usage.remainingPoints}
                    msBeforeNext={usage.msBeforeNext}
                />
            )} */}
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn(
                    "relative border p-4 pt-1 rounded-t-md bg-sidebar dark:bg-sidebar transition-all",
                    isFocused && "shadow-xs",
                    showUsage && "rounded-t-none"
                )}
            >
                <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                        <TextareaAutoSize
                            {...field}
                            // disabled={}
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
                    <div className="text-[10px] text-muted-foreground font-mono">
                        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                            <span>&#8984;</span>Enter
                        </kbd>
                        &nbsp;to submit
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Suspense fallback={<p>Loading models ... </p>}>
                            <ModelDropdown aiModels={aiModels} selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
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
    )
}