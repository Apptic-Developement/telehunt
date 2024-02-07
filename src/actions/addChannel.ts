'use server';

import { addChannelSchema } from "@/schemas/formSchema";
import { z } from "zod";
import {telegram_scraper} from 'telegram-scraper'


const addChannelAction = async (values: z.infer<typeof addChannelSchema>) => {
    console.log(await telegram_scraper(values.channelUrl))
    return
}

export default addChannelAction