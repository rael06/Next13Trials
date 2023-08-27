import { MiddlewaresConfig } from "./core";
import { revalidate } from "./revalidate";

export const middlewaresConfig: MiddlewaresConfig = {
  "^/movies/[a-z-]+$": [
    (request) => revalidate(request, { maxAgeMs: 1000 * 3 }),
  ],
};
