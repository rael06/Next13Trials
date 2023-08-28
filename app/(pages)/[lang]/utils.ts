import { SluggedPageRouteUtils } from "@/app/utils/PageRouteUtils";

const slugName = "lang";

export const sluggedLangRouteUtils = new SluggedPageRouteUtils({
  slugName,
  route: `[${slugName}]`,
  strRegex: `^/[^/]+`,
});
