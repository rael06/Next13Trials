import { NextRequest } from "next/server";
import { getRouteMiddlewareConfig } from "./app/middlewares/core";

export async function middleware(request: NextRequest) {
  const route = request.nextUrl.pathname;

  const routeMiddlewares = getRouteMiddlewareConfig(route);

  const nextResponses = [];
  for (const routeMiddleware of routeMiddlewares) {
    const response = await routeMiddleware(request);
    // In case of redirection we need to return the response immediately because redirection must be the last NextResponse
    if (response?.status === 307) {
      return response;
    }

    if (response?.status === 404) {
      return response;
    }

    nextResponses.push(response);
  }

  return nextResponses[nextResponses.length - 1] || undefined;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};
