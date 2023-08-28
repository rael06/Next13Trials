import { moviesRouteUtils } from "@/app/(pages)/[lang]/movies/utils";
import { SluggedPageRouteUtils } from "@/app/utils/PageRouteUtils";

const slugName = "id";

export const sluggedMoviesRouteUtils = new SluggedPageRouteUtils({
  slugName,
  route: `${moviesRouteUtils.route}/[${slugName}}]`,
  strRegex: `${moviesRouteUtils.strRegex}/[^/]+`,
});
