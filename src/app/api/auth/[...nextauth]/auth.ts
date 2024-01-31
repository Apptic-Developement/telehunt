import NextAuth from "next-auth"
import Auth0 from "next-auth/providers/auth0"
import authConfig from "../../../../../auth.config";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  session: { strategy: 'jwt' },
  ...authConfig
})