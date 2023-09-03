"use client";

import LocaleHelper, { SupportedLocale } from "@/app/helpers/locale";
import LocalStorage, { LocalStorageKey } from "@/app/helpers/localStorage";
import ParamsHelper from "@/app/helpers/params";
import { useParams } from "next/navigation";
import React from "react";

type LocaleContextType = {
  locale: SupportedLocale;
  setLocale: (lang: SupportedLocale) => void;
};

export const LocaleContext = React.createContext<LocaleContextType>(undefined!);

type Props = {
  children: React.ReactNode;
};

export default function LocaleContextProvider({ children }: Props) {
  const params = useParams();

  const [localeState, setLocaleState] = React.useState<SupportedLocale>(
    SupportedLocale.en_US
  );

  React.useEffect(() => {
    if (!params?.locale) return;

    const locale = ParamsHelper.getSingle(params.locale);

    const supportedLocale = LocaleHelper.retrieveSupportedLocale(locale);

    LocalStorage.set(LocalStorageKey.locale, supportedLocale);
    setLocaleState(supportedLocale);
  }, [params?.locale]);

  function setLocale(lang: SupportedLocale) {
    LocalStorage.set(LocalStorageKey.locale, lang);
    setLocaleState(lang);
  }

  return (
    <LocaleContext.Provider value={{ locale: localeState, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
