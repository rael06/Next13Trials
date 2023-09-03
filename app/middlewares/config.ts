import { MiddlewaresConfig } from "./core";
import { revalidateOnTime } from "./revalidateOnTime";
import { redirectToLocale } from "./languageRedirect";

export const middlewaresConfig: MiddlewaresConfig = {
  "^(?!.*/api).*": [redirectToLocale],
  "/movies/[^/]+$": [
    (request) => revalidateOnTime(request, { maxAgeMs: 1000 * 20 }),
  ],
};
