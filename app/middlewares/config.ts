import { SEARCH_SLUG_STRING_REGEX } from "@/app/(pages)/[lang]/search/[slug]/utils";
import { MiddlewaresConfig } from "./core";
import { revalidate } from "./revalidate";
import { languageRedirect } from "./languageRedirect";

export const middlewaresConfig: MiddlewaresConfig = {
  [SEARCH_SLUG_STRING_REGEX]: [
    (request) => revalidate(request, { maxAgeMs: 1000 * 3 }),
  ],
  "/.*": [languageRedirect],
};
