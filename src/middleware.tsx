import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./middleware/ironSession";

export async function middleware(request: NextRequest) {
  const session = await getSession();

  if (!request.nextUrl.pathname.includes("/login") && !session?.token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname.includes("/login") && session?.token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
