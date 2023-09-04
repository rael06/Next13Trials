import { MiddlewaresConfig } from "./core";
import { revalidateOnTime } from "./revalidateOnTime";
import { redirectToLocale } from "./redirectToLocale";

export const middlewaresConfig: MiddlewaresConfig = {
  "/((?!api).*)": [redirectToLocale],
  "/:locale/movies/:movieId": [
    (request) => revalidateOnTime(request, { maxAgeMs: 1000 * 20 }),
  ],
};
