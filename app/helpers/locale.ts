export enum SupportedLocale {
  en_US = "en-US",
  fr_FR = "fr-FR",
}

export default class LocaleHelper {
  public static readonly defaultLocale = SupportedLocale.en_US;
  public static readonly supportedLocales = Object.values(SupportedLocale);

  public static retrieveSupportedLocale(
    locale: string
  ): SupportedLocale | undefined {
    const result =
      LocaleHelper.supportedLocales.find(
        (supportedLocale) => supportedLocale === locale
      ) ||
      LocaleHelper.supportedLocales.find((supportedLocale) =>
        supportedLocale.startsWith(locale)
      );
    return result;
  }
}
