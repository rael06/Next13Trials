import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import LocaleHelper, { SupportedLocale } from "../helpers/locale";

export async function redirectToLocale(request: NextRequest) {
  // Get the preferred locale, similar to above or using a library
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  const isPathnameMissingLocale = !LocaleHelper.supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect if there is no locale
  if (!isPathnameMissingLocale) {
    return NextResponse.next();
  }

  const supportedLocale = getSupportedLocale(request);

  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(
    new URL(`/${supportedLocale.concat(pathname)}`, request.url)
  );
}

function getSupportedLocale(request: NextRequest): SupportedLocale {
  const acceptLanguageHeader = request.headers.get("Accept-Language");
  const acceptLanguage = acceptLanguageHeader
    ? acceptLanguageHeader.split(",")[0]
    : SupportedLocale.en_US;
  const locale = acceptLanguage.split("-")[0];

  return LocaleHelper.retrieveSupportedLocale(locale);
}
