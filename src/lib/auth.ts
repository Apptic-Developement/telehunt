import NextAuth from "next-auth";
import authConfig from "../../auth.config";
import { prismaDb } from '@/lib/db'
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (!user || ['null', 'undefined'].includes(typeof user.email)) {
        return false
      }
      const find = await prismaDb.user.findFirst({
        where: {
          email: user.email as string
        }
      })
      if (!find) {
        const newUser = await prismaDb.user.create({
          data: {
            name: user.name as string,
            email: user.email as string
          }
        })

        console.log("New User: ", newUser)
      } else {
        console.log("Old User: ", find)
      }
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session }) {
      return session
    },
    async jwt({ token, user, account, profile }) {
      return token
    }

  }
});
