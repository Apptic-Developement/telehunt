import Auth0 from "next-auth/providers/auth0";

import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
    }),
  ],
} satisfies NextAuthConfig;
