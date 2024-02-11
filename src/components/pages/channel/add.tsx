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
import React, { FormEvent, useTransition } from "react";
import addChannelAction from "@/actions/addChannel";
import { addChannelSchema } from "@/schemas/formSchema";
import TagInput from "@/components/utils/tag-input";
import { Textarea } from "@/components/ui/textarea";

export default function Add() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof addChannelSchema>>({
    resolver: zodResolver(addChannelSchema),
    defaultValues: {
      url: "",
      channelName: "",
      shortDescription: "",
      longDescription: "",
      tags: [],
      icon: "",
    },
  });

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
          <form
            className="flex flex-col gap-4"
            autoComplete="false"
            onSubmit={form.handleSubmit(onSubmit)}
          >
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
                        className="h-full rounded-l-none"
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
              name="channelName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="channelName">Channel Name</FormLabel>
                  <FormControl>
                    <Input
                      id="channelName"
                      type="text"
                      {...field}
                      placeholder="Your channel name."
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
                  <FormLabel htmlFor="shortDescription">
                    Short Description
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="shortDescription"
                      type="text"
                      {...field}
                      placeholder="Describe your channel in short."
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
                  <FormLabel htmlFor="longDescription">
                    Long Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      id="longDescription"
                      rows={5}
                      placeholder="Describe your channel in detail, including what it's about, who it's for, and what makes it special."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Channel Tag */}
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="tags">Tags</FormLabel>
                  <FormControl>
                    <TagInput
                      tags={form.getValues("tags")}
                      setTags={form.setValue}
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
  );
};
