import { PageRouteUtils } from "@/app/utils/PageRouteUtils";
import { sluggedLangRouteUtils } from "../utils";

const route = "movies";

export const moviesRouteUtils = new PageRouteUtils({
  route: `${sluggedLangRouteUtils.route}/${route}`,
  strRegex: `${sluggedLangRouteUtils.strRegex}/${route}`,
});
