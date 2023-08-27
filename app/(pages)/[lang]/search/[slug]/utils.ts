import { SEARCH_ROUTE } from "@/app/(pages)/[lang]/search/utils";

export const SEARCH_SLUG_ROUTE = `${SEARCH_ROUTE}/[slug]`;
export const SEARCH_SLUG_STRING_REGEX = `^${SEARCH_ROUTE}/[^/]+$`;
export function computeSearchSlugRoute(slug?: string): string {
  return SEARCH_SLUG_ROUTE.replace("[slug]", slug || "");
}
