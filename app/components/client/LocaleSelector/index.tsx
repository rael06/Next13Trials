"use client";

import LocaleHelper, { SupportedLocale } from "@/app/helpers/locale";
import ParamsHelper from "@/app/helpers/params";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

export default function LocaleSelector() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const localeSelect = React.useRef<HTMLSelectElement>(null);
  const currentLocale = LocaleHelper.retrieveSupportedLocale(
    ParamsHelper.getSingle(params?.locale)
  );

  function redirectToLocale() {
    const selectedLocale = localeSelect.current?.value;

    if (!selectedLocale || !pathname) return;

    const validSelectedLocale =
      LocaleHelper.retrieveSupportedLocale(selectedLocale);

    const newUrl = pathname.replace(
      `/${currentLocale}`,
      `/${validSelectedLocale}`
    );
    router.push(newUrl);
  }

  return (
    <select
      ref={localeSelect}
      onChange={redirectToLocale}
      value={currentLocale}
    >
      <option value={SupportedLocale.en_US}>en-US</option>
      <option value={SupportedLocale.fr_FR}>fr-FR</option>
    </select>
  );
}
