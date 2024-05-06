import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@/server/api/trpc';
import { z } from 'zod';

export const postRouter = createTRPCRouter({
  greet: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(async (opts) => {
      return `Hello ${opts.input.name} - From Server`;
    }),
});
