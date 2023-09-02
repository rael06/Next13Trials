import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { SUPPORTED_LOCALES, SupportedLocale } from "@/app/helpers/lang";

export async function languageRedirect(request: NextRequest) {
  // Get the preferred locale, similar to above or using a library
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = SUPPORTED_LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (!pathnameIsMissingLocale) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

function getLocale(request: NextRequest): SupportedLocale {
  const acceptLanguageHeader = request.headers.get("Accept-Language");
  const acceptLanguage = acceptLanguageHeader
    ? acceptLanguageHeader.split(",")[0]
    : "en-US";
  const locale = acceptLanguage.split("-")[0];
  return (
    SUPPORTED_LOCALES.find((supportedLocale) => supportedLocale === locale) ||
    SUPPORTED_LOCALES.find((supportedLocale) =>
      supportedLocale.startsWith(locale)
    ) ||
    SupportedLocale.en_US
  );
}
