import type { NextRequest } from "next/server";

let lastRevalidation = 0;

export async function middleware(request: NextRequest) {
  if (lastRevalidation < Date.now() - 1000 * 3) {
    lastRevalidation = Date.now();
    await fetch(
      `${request.nextUrl.protocol}//${request.nextUrl.host}/api/revalidate?secret=my_secret_token&path=${request.nextUrl.pathname}`
    );
    return;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/movies/:path*"],
};
