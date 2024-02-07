import { z } from "zod";

export const addChannelSchema = z.object({
    channelUrl: z.string().min(2).max(50),
});
