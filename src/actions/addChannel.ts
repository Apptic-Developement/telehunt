"use server";

import { addChannelSchema } from "@/schemas/formSchema";
import { z } from "zod";

const addChannelAction = async (values: z.infer<typeof addChannelSchema>) => {
  return console.log(values);
};

export default addChannelAction;
