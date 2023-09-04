import { MiddlewaresConfig } from "./core";
import { revalidateOnTime } from "./revalidateOnTime";
import { redirectToLocale } from "./redirectToLocale";
import LocaleHelper from "../helpers/locale";

const supportedLocaleSegment = `:locale((?:${LocaleHelper.supportedLocales.join(
  "|"
)}))`;

export const middlewaresConfig: MiddlewaresConfig = {
  "/(.*)": [redirectToLocale],
  [`/${supportedLocaleSegment}/movies/:movieId`]: [
    (request) => revalidateOnTime(request, { maxAgeMs: 1000 * 20 }),
  ],
};
