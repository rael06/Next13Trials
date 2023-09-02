import { SupportedLocale } from "@/app/helpers/locale";
import "server-only";

const dictionaries = {
  [SupportedLocale.en_US]: () =>
    import("@/app/dictionaries/en.json").then((module) => module.default),
  [SupportedLocale.fr_FR]: () =>
    import("@/app/dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: SupportedLocale) =>
  dictionaries[locale]();
