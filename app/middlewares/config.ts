import { Middleware } from "./core";
import { revalidate } from "./revalidate";

export const middlewaresConfig: Record<
  string,
  {
    middlewares: Middleware[];
  }
> = {
  "^/movies/[a-z-]+$": {
    middlewares: [(request) => revalidate(request, { maxAgeMs: 3000 })],
  },
};
