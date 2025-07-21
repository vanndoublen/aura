import { z } from "zod";
import { toast } from "sonner";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextareaAutoSize from "react-textarea-autosize";
import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";


import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { ArrowUpIcon, Loader2Icon } from "lucide-react";
// import { Usage } from "./usage";
import { useRouter } from "next/navigation";
import { ModelDropdown } from "@/components/model-dropdown";
import { AiModel } from "@/generated/prisma";

interface Props {
    projectId: string;
}

const formSchema = z.object({
    value: z
        .string()
        .min(1, { message: "Value is required" })
        .max(10000, { message: "Value is too long" }),
})


export const MessageForm = ({ projectId }: Props) => {
    const router = useRouter();

    const trpc = useTRPC();
    const queryClient = useQueryClient();

    // const { data: usage } = useQuery(trpc.usage.status.queryOptions());
    const { data: aiModels } = useSuspenseQuery(trpc.ai.getMany.queryOptions());
    const [selectedModel, setSeletedModel] = useState<AiModel | null>(() => {
        const defaultModel = aiModels.find(model => model.name === "gpt-4.1");
        return defaultModel || aiModels[0] || null;
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            value: "",
        },
    });

    const mutateMessage = useMutation(trpc.messages.create.mutationOptions({
        onSuccess: () => {
            form.reset();
            queryClient.invalidateQueries(
                trpc.messages.getMany.queryOptions({ projectId })
            );
            //  TODO: usage
            // queryClient.invalidateQueries(
            //     trpc.usage.status.queryOptions()
            // );
        },
        onError: (error) => {
            toast.error(error.message);
            if (error.data?.code === "TOO_MANY_REQUESTS") {
                router.push("/pricing");
            }
        }
    }))

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await mutateMessage.mutateAsync({
            value: values.value,
            aiModelId: selectedModel?.id,
            projectId,
        })
    }



    const [isFocused, setIsFocused] = useState(false);
    const isPending = mutateMessage.isPending;
    const isButtonDisabled = isPending || !form.formState.isValid;
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
                    "relative border p-4 pt-1 rounded-t-xl bg-sidebar dark:bg-sidebar transition-all",
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
                            disabled={isPending}
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
                            <ModelDropdown aiModels={aiModels} selectedModel={selectedModel} setSelectedModel={setSeletedModel} />
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