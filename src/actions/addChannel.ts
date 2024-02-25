"use server";

import { addChannelSchema } from "@/schemas/formSchema";
import { z } from "zod";

const addChannelAction = async (values: z.infer<typeof addChannelSchema>) => {
  values.channelName = values.channelName.trim();
  values.longDescription = values.longDescription.trim();
  values.url = values.url.trim();
  values.shortDescription = values.shortDescription.trim();
  values.tags = values.tags.map((tag) => tag.trim());

  return 
};

export default addChannelAction;
