import { MiddlewaresConfig } from "./core";
import { revalidate } from "./revalidate";
import { languageRedirect } from "./languageRedirect";

export const middlewaresConfig: MiddlewaresConfig = {
  "^(?!.*/api).*": [languageRedirect],
  "/movies/[^/]+": [(request) => revalidate(request, { maxAgeMs: 1000 * 20 })],
};
