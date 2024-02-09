import { z } from "zod";

export const addChannelSchema = z.object({
  url: z.string().min(3).max(50),
  name: z.string().min(1),
  shortDescription: z.string().min(5).max(100),
  longDescription: z.string().min(10),
  tags: z.string().array().min(2).max(10),
  icon: z.string(),
});
