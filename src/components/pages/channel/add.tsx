"use client";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import addChannelAction from "@/actions/addChannel";
import { addChannelSchema } from "@/schemas/formSchema";

export default function Add() {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof addChannelSchema>>({
        resolver: zodResolver(addChannelSchema),
        defaultValues: {
            url: "",
            name: "",
            shortDescription: "",
            longDescription: "",
            tags: [],
            icon: ""
        },
    });

    function setTag(tag: string) {
        return
    }
    function onSubmit(values: z.infer<typeof addChannelSchema>) {
        startTransition(() => addChannelAction(values));
    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Add</Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col w-full gap-6 overflow-scroll">
                <SheetHeader>
                    <SheetTitle>Add Channel</SheetTitle>
                    <SheetDescription>Add a new channel to telehunt.</SheetDescription>
                </SheetHeader>
                <Form {...form}>
                    <form className="flex flex-col gap-4" autoComplete="false" onSubmit={form.handleSubmit(onSubmit)}>
                        {/* Channel Url */}
                        <FormField
                            control={form.control}
                            name="url"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="url">Channel Url</FormLabel>
                                    <FormControl>
                                        <ChannelUrl>
                                            <Input
                                                id="url"
                                                className="h-full"
                                                type="text"
                                                placeholder="telehunt"
                                                {...field}
                                            />
                                        </ChannelUrl>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Channel Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Telehunt"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Channel Short description */}
                        <FormField
                            control={form.control}
                            name="shortDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="shortDescription">Short Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="shortDescription"
                                            type="text"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Channel Long description */}
                        <FormField
                            control={form.control}
                            name="longDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="longDescription">Long Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="longDescription"
                                            type="text"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button>Submit</Button>
                    </form>
                </Form>
                <Button variant="link">Auto fetch from url</Button>
            </SheetContent>
        </Sheet>
    );
}

const ChannelUrl = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center h-10">
            <div className="bg-secondary text-secondary-foreground h-full flex items-center px-5 rounded-l-md">
                <span>t.me/</span>
            </div>
            {children}
        </div>
    )
}

