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
import { Button, ButtonWithLoader } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import addChannelAction, { AddChannelActionData } from "@/actions/addChannel";
import { addChannelSchema } from "@/schemas/formSchema";
import TagInput from "@/components/utils/tag-input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Add() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof addChannelSchema>>({
    resolver: zodResolver(addChannelSchema),
    defaultValues: {
      url: "vizu_stock_market",
      channelName: "esdrftvgbhnjdrftvgbhnjmrftgybhunj",
      shortDescription: "123456789012345678990123",
      longDescription:
        "12345678901234567899012345678901234567899012234567899dfghjkzxcvbnmdfghjklxcvbnmdfghjk",
      tags: ["anime", "hehe"],
    },
    shouldFocusError: true,
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof addChannelSchema>) {
    startTransition(() => {
      addChannelAction(values)
        .then((res) => {
          if (!res.forField) {
            if (res.error) {
              return toast({
                title: "Error",
                description: res.errorMessage,
              });
            }
            if (res.success) {
              return toast({
                title: "Success",
                description: res.successMessage,
              });
            }
          } else {
            form.setFocus(res.forField);
            form.setError(res.forField, {
              message: res.errorMessage,
            });
          }
        })
        .catch((err) => {
          return toast({
            title: "Something went wrong!",
            description: "Please try again after some time.",
          });
        });
    });
  }

  async function onAutoFetch() {
    try {
      const res = await fetch("/api/getChannelFromLink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: form.getValues("url") }),
      });

      const data = await res.json();
      if (res.ok) {
        form.setValue("channelName", data.name);
        form.setValue(
          data.description.length > 100
            ? "longDescription"
            : "shortDescription",
          data.description,
        );
        return;
      }
      return toast({
        title: data.title,
        description: data.description,
      });
    } catch (error) {
      return toast({
        title: "Something went wrong!",
        description: "Please try again after some time.",
      });
    }
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
            <ButtonWithLoader
              disabled={isPending}
              loading={isPending}
              text="Submit"
            />
          </form>
        </Form>
        <Button onClick={onAutoFetch} variant="link">
          Auto fetch from url
        </Button>
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
