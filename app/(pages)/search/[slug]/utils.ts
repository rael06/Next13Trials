export const SEARCH_SLUG_ROUTE = "/search/[slug]";
export const SEARCH_SLUG_STRING_REGEX = "^/search/[^/]+$";
export function computeSearchSlugRoute(slug?: string): string {
  return SEARCH_SLUG_ROUTE.replace("[slug]", slug || "");
}
