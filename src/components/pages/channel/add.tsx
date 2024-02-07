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
import { useTransition } from "react";
import addChannelAction from '@/actions/addChannel'
import {addChannelSchema} from '@/schemas/formSchema'

export default function Add() {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof addChannelSchema>>({
        resolver: zodResolver(addChannelSchema),
        defaultValues: {
            channelUrl: "",
        },
    });

    function onSubmit(values: z.infer<typeof addChannelSchema>) {
        startTransition(() => (
            addChannelAction(values)
        ))
    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Add</Button>
            </SheetTrigger>
            <SheetContent className="w-full">
                <SheetHeader>
                    <SheetTitle>Add Channel</SheetTitle>
                    <SheetDescription>Add a new channel to telehunt.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <Form {...form}>
                        <form autoComplete="false" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="channelUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="url">Channel Url</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center h-10">
                                                <div className="bg-secondary text-secondary-foreground h-full flex items-center px-5 rounded-l-md">
                                                    <span>t.me/</span>
                                                </div>
                                                <Input
                                                    id="url"
                                                    className="h-full"
                                                    type="text"
                                                    placeholder="telehunt"
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
            </SheetContent>
        </Sheet>
    );
}

// <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input id="name" value="Pedro Duarte" className="col-span-3" />
