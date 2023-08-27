import { NextRequest } from "next/server";
import { middlewaresConfig } from "./config";

export type Middleware = (
  request: NextRequest & unknown
) => Promise<unknown> | unknown;

const computedMiddlewaresConfig: Map<RegExp, Middleware[]> =
  computeMiddlewaresConfig(middlewaresConfig);

function computeMiddlewaresConfig(
  middlewaresConfig: Record<string, { middlewares: Middleware[] }>
) {
  const computedMiddlewaresConfig = new Map<RegExp, Middleware[]>();
  for (const [regex, { middlewares }] of Object.entries(middlewaresConfig)) {
    computedMiddlewaresConfig.set(new RegExp(regex), middlewares);
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
