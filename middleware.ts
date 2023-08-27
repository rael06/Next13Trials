import type { NextRequest } from "next/server";
import { getRouteMiddlewareConfig } from "./app/middlewares/core";

export async function middleware(request: NextRequest) {
  const route = request.nextUrl.pathname;

  const routeMiddlewares = getRouteMiddlewareConfig(route);

  for (const routeMiddleware of routeMiddlewares) {
    await routeMiddleware(request);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    "/((?!favicon))",
  ],
};
