import NextAuth from "next-auth";
import authConfig from "../../auth.config";
import { prismaDb } from "@/lib/db";
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (!user || typeof user.email === "undefined" || user.email === null) {
        return false;
      }

      const existingUser = await prismaDb.user.findFirst({
        where: { email: user.email as string },
      });

      if (!existingUser) {
        await prismaDb.user.create({
          data: {
            name: user.name as string,
            email: user.email as string,
            role: 'USER'
          },
        });
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
  },
});
