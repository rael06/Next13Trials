import { NextRequest, NextResponse } from "next/server";
import { middlewaresConfig } from "./config";
import { pathToRegexp } from "path-to-regexp";

type Middleware = (
  request: NextRequest & unknown
) => Promise<NextResponse<unknown> | undefined>;

export type MiddlewaresConfig = Record<string, Middleware[]>;

const computedMiddlewaresConfig: Map<RegExp, Middleware[]> =
  computeMiddlewaresConfig(middlewaresConfig);

function computeMiddlewaresConfig(
  middlewaresConfig: Record<string, Middleware[]>
) {
  const computedMiddlewaresConfig = new Map<RegExp, Middleware[]>();
  for (const [regexStr, middlewares] of Object.entries(middlewaresConfig)) {
    const regex = pathToRegexp(regexStr);
    computedMiddlewaresConfig.set(regex, middlewares);
  }
  return computedMiddlewaresConfig;
}

export function getRouteMiddlewareConfig(route: string): Middleware[] {
  let routeMiddlewares: Middleware[] = [];
  computedMiddlewaresConfig.forEach((middlewares, regex) => {
    if (regex.test(route)) {
      routeMiddlewares = [...routeMiddlewares, ...middlewares];
    }
  });
  return routeMiddlewares;
}
