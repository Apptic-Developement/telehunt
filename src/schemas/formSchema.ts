import * as z from "zod";

const validTagRegex = /^[\w-]+$/;

export const addChannelSchema = z.object({
  url: z
    .string()
    .min(3, { message: "Url must contain at least 3 character(s)" })
    .max(50, { message: "Url must contain at most 50 character(s)" }),
  channelName: z.string()
  .min(1, { message: "Name must contain at least 1 character(s)" }),
  shortDescription: z.string()
  .min(5, { message: "Short Description must contain at least 5 character(s)" })
  .max(100, { message: "Short Description must contain at most 100 character(s)" }),
  longDescription: z.string()
  .min(50, { message: "Long Description must contain at least 50 character(s)" })
  .max(500, { message: "Long Description must contain at most 500 character(s)" }),
  tags: z
    .array(z.string())
    .min(2, { message: "Please add at least 2 tags." })
    .max(10, { message: "You can add up to 10 tags." })
    .refine((tags) => tags.every((tag) => validTagRegex.test(tag)), {
      message: 'Tags can only contain letters, numbers, "_" and "-" symbols.',
    }),
  icon: z.string(),
});
