import { MiddlewaresConfig } from "./core";
import { revalidate } from "./revalidate";
import { redirectToLocale } from "./languageRedirect";

export const middlewaresConfig: MiddlewaresConfig = {
  "^(?!.*/api).*": [redirectToLocale],
  "/movies/[^/]+": [(request) => revalidate(request, { maxAgeMs: 1000 * 20 })],
};
