import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "./lib/auth";

const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const isAuthenticated = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");

  if (!isAuthPage) {
    if (!isAuthenticated) {
      return Response.redirect(new URL("/login", req.url));
    }
  } else {
    if (isAuthenticated) {
      return Response.redirect(new URL("/", req.url));
    }
  }

  const res = NextResponse.next();
  return res;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
