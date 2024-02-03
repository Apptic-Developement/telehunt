import NextAuth from "next-auth"
import authConfig from "../../auth.config"
import { db } from "./db"
import { DrizzleAdapter } from '@auth/drizzle-adapter';

export const { handlers: {GET, POST}, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})