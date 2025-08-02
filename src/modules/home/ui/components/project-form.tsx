"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextareaAutoSize from "react-textarea-autosize";
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";


import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { ArrowUpIcon, Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { PROJECT_TEMPLATES } from "../../constants";
import { useClerk } from "@clerk/nextjs";
import { type AiModel } from "@/generated/prisma";
import { ModelDropdown } from "@/components/model-dropdown";
import { AISuggestion, AISuggestions } from "@/components/ui/kibo-ui/ai/suggestion";
import { useChat } from "@/hooks/use-chat";
import { useMessageStore } from "@/stores/message-store";


const formSchema = z.object({
    value: z
        .string()
        .min(1, { message: "Value is required" })
        .max(10000, { message: "Value is too long" }),
})


export const ProjectForm = () => {
    const [projectId, setProjectId] = useState("");
    const [success, setSuccess] = useState(false);
    const [userMessage, setUserMessage] = useState("");

    const router = useRouter();
    const clerk = useClerk();

    const trpc = useTRPC();
    const queryClient = useQueryClient();

    // const { sendMessage } = useChat(projectId || "");
    const messageSentRef = useRef(false);

    const setGlobalMessage = useCallback(useMessageStore((state) => state.setGlobalMessage), []);


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

    useEffect(() => {
        if (success && projectId && userMessage && selectedModel?.id && !messageSentRef.current) {
            messageSentRef.current = true; // Prevent sending multiple times
            console.log(projectId + "  " + userMessage + "  " + selectedModel?.id)
            toast.info(projectId + "  " + userMessage + "  " + selectedModel?.id)
            setGlobalMessage(projectId, userMessage, selectedModel?.id);
            router.push(`/projects/${projectId}`);
        }
    }, [success, projectId, userMessage, selectedModel?.id, router, setGlobalMessage]);

    const mutateProject = useMutation(trpc.projects.create.mutationOptions({
        onSuccess: (data) => {
            form.reset();
            queryClient.invalidateQueries(
                trpc.projects.getMany.queryOptions()
            );

            setProjectId(data.id)
            setSuccess(true);

            // TODO: add usage
            // queryClient.invalidateQueries(
            //     trpc.usage.status.queryOptions()
            // )
        },
        onError: (error) => {
            toast.error(error.message);
            if (error.data?.code === "UNAUTHORIZED") {
                clerk.openSignIn();
            }
            if (error.data?.code === "TOO_MANY_REQUESTS") {
                router.push("/pricing");
            }
        }
    }))

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setUserMessage(values.value);
        await mutateProject.mutateAsync({
            value: values.value,
            aiModelId: selectedModel?.id,
        })

    }

    const onSelect = (value: string) => {
        form.setValue("value", value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        })
    }



    const [isFocused, setIsFocused] = useState(false);
    const isPending = mutateProject.isPending;
    const isButtonDisabled = isPending || !form.formState.isValid;


    return (

        <Form {...form}>
            <section className="space-y-6">
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={cn(
                        "relative border p-4 pt-1 rounded-xl bg-sidebar dark:bg-sidebar transition-all",
                        isFocused && "shadow-xs",
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
                                placeholder="What would you like to generate?"
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

                <div className="flex-wrap justify-center gap-2 hidden md:flex max-w-3xl">
                    {PROJECT_TEMPLATES.map((template) => (
                        <AISuggestion
                            key={template.title}
                            onClick={() => onSelect(template.prompt)}
                            suggestion={template.title}
                            className="bg-transparent text-[12px] font-mono"
                        />
                    ))}
                </div>
            </section>
        </Form>
    )
}