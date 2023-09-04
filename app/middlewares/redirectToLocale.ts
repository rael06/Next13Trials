import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import LocaleHelper, { SupportedLocale } from "../helpers/locale";

export async function redirectToLocale(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isPathnameMissingLocale = !LocaleHelper.supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!isPathnameMissingLocale) {
    return NextResponse.next();
  }

  const supportedLocale = getSupportedLocaleFromHeader(request);

  return NextResponse.redirect(
    new URL(`/${supportedLocale.concat(pathname)}`, request.url)
  );
}

function getSupportedLocaleFromHeader(request: NextRequest): SupportedLocale {
  const acceptLanguageHeader = request.headers.get("Accept-Language");
  const acceptLanguage = acceptLanguageHeader
    ? acceptLanguageHeader.split(",")[0]
    : SupportedLocale.en_US;

  return LocaleHelper.retrieveSupportedLocale(acceptLanguage);
}
