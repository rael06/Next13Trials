import { PageRouteUtils } from "@/app/utils/PageRouteUtils";
import { sluggedLangRouteUtils } from "../utils";

const route = "search";

export const searchRouteUtils = new PageRouteUtils({
  route: `${sluggedLangRouteUtils.route}/${route}`,
  strRegex: `${sluggedLangRouteUtils.strRegex}/${route}`,
});
