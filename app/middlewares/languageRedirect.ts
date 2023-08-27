import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function languageRedirect(request: NextRequest) {
  let locales = ["en", "fr"];

  // Get the preferred locale, similar to above or using a library

  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

function getLocale(request: NextRequest) {
  const acceptLanguageHeader = request.headers.get("Accept-Language");
  const acceptLanguage = acceptLanguageHeader
    ? acceptLanguageHeader.split(",")[0]
    : "en-US";
  const locale = acceptLanguage.split("-")[0];
  return locale;
}
