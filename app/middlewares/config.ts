import { MiddlewaresConfig } from "./core";
import { revalidate } from "./revalidate";
import { languageRedirect } from "./languageRedirect";
import { sluggedMoviesRouteUtils } from "../(pages)/[lang]/movies/[id]/utils";

export const middlewaresConfig: MiddlewaresConfig = {
  [sluggedMoviesRouteUtils.strRegex]: [
    (request) => revalidate(request, { maxAgeMs: 1000 * 20 }),
  ],
  "/.*": [languageRedirect],
};
