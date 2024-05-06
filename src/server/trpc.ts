import { initTRPC, TRPCError } from '@trpc/server';
import type { Context, TestSession } from './context';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { experimental_createServerActionHandler } from '@trpc/next/dist/app-dir/server';
import { headers } from 'next/headers';
const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter: (opts) => {
    const { shape, error } = opts;

    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
            ? error.cause.flatten
            : null,
      },
    };
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = publicProcedure.use((opts) => {
  const { session } = opts.ctx;
  if (!session.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
    });
  }
  return opts.next({ ctx: { session } });
});

export const createAction = experimental_createServerActionHandler(t, {
  async createContext() {
    const session: TestSession = {
      user: {
        name: 'Pranoy',
      },
    };

    return {
      session,
      headers: {
        cookies: headers().get('cookie') ?? '',
      },
    };
  },
});
