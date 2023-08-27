import { SEARCH_SLUG_STRING_REGEX } from "@/app/(pages)/search/[slug]/utils";
import { MiddlewaresConfig } from "./core";
import { revalidate } from "./revalidate";

export const middlewaresConfig: MiddlewaresConfig = {
  [SEARCH_SLUG_STRING_REGEX]: [
    (request) => revalidate(request, { maxAgeMs: 1000 * 3 }),
  ],
};
