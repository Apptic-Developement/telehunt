import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate'

declare global {
  var prismaDb: PrismaClient;
}

export const prismaDb = globalThis.prismaDb ?? new PrismaClient().$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") globalThis.prismaDb = prismaDb;
