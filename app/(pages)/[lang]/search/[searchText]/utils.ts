import { SluggedPageRouteUtils } from "@/app/utils/PageRouteUtils";
import { searchRouteUtils } from "@/app/(pages)/[lang]/search/utils";

const slugName = "searchText";

export const sluggedSearchRouteUtils = new SluggedPageRouteUtils({
  slugName,
  route: `${searchRouteUtils.route}/[${slugName}]`,
  strRegex: `${searchRouteUtils.strRegex}/[^/]+`,
});
