import { auth } from "@/lib/auth";
import { authRoutes, authUrl } from "@/lib/routes";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedin = !!req.auth;
  if (!isLoggedin && authRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(authUrl, req.url));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
