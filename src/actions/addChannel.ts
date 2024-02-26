"use server";

import { addChannelSchema } from "@/schemas/formSchema";
import { z } from "zod";
import { prismaDb } from "@/lib/db";
import { auth } from "@/lib/auth";

export interface AddChannelActionData {
  success?: boolean;
  error?: boolean;
  errorMessage?: string;
  successMessage?: string;
  postUrl?: string;
}

const addChannelAction = async (
  formData: z.infer<typeof addChannelSchema>,
): Promise<AddChannelActionData> => {
  const session = await auth();
  if (typeof session?.user === "undefined") {
    return {
      error: true,
      errorMessage: "Invalid user id.",
    } as AddChannelActionData;
  }
  formData.channelName = formData.channelName.trim();
  formData.longDescription = formData.longDescription.trim();
  formData.url = formData.url.trim();
  formData.shortDescription = formData.shortDescription.trim();
  formData.tags = formData.tags.map((tag) => tag.trim());

  try {
    const validFormData = addChannelSchema.parse(formData);
    const user = await prismaDb.user.findFirst({
      select: {
        id: true,
      },
      where: {
        id: session.user.id,
      },
    });
    if (!user) {
      return {
        error: true,
        errorMessage: "User not found.",
      } as AddChannelActionData;
    }

    const isExistPost = await prismaDb.post.findFirst({
      where: {
        url: validFormData.url,
      },
    });
    if (isExistPost) {
      return {
        error: true,
        errorMessage: "Channel already exists.",
      } as AddChannelActionData;
    }
    const tags = await Promise.all(
      validFormData.tags.map(async (tag) => {
        return prismaDb.tag.upsert({
          where: { id: tag },
          create: { id: tag },
          update: {},
        });
      }),
    );

    const createPost = await prismaDb.post.create({
      data: {
        url: validFormData.url,
        name: validFormData.channelName,
        shortDescription: validFormData.shortDescription,
        longDescription: validFormData.longDescription,
        type: "CHANNEL",
        author: {
          connect: {
            id: user.id,
          },
        },
        tags: {
          connect: tags.map((tag) => ({ id: tag.id })),
        },
      },
    });

    return {
      success: true,
      error: false,
      successMessage: `Successfully created '${createPost.name}' channel. `,
      postUrl: createPost.url,
    } as AddChannelActionData;
  } catch (error) {
    return {
      success: false,
      error: true,
      errorMessage: "Something went wrong!",
    } as AddChannelActionData;
  }
};

export default addChannelAction;
