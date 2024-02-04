import { PrismaClient } from "@prisma/client";

declare global {
  var prismaDb: PrismaClient;
}

export const prismaDb = globalThis.prismaDb ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prismaDb = prismaDb;
