import { getDictionary } from "@/app/(pages)/[locale]/dictionaries";
import LocaleHelper from "@/app/helpers/locale";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: { locale: string } }
) {
  const locale = params.locale;
  const supportedLocale = LocaleHelper.retrieveSupportedLocale(locale);

  const dictionary = await getDictionary(supportedLocale);
  return NextResponse.json(dictionary);
}
