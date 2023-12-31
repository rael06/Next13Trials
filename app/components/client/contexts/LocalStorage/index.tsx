"use client";

import LocaleHelper, { SupportedLocale } from "@/app/helpers/locale";
import LocalStorage, { LocalStorageKey } from "@/app/helpers/localStorage";
import ParamsHelper from "@/app/helpers/params";
import { useParams } from "next/navigation";
import React from "react";

type LocalStorageContextType = {
  localeItem: {
    value: SupportedLocale;
    setValue: (locale: SupportedLocale) => void;
  };
};

export const LocalStorageContext = React.createContext(
  {} as LocalStorageContextType
);

type Props = {
  children: React.ReactNode;
};

export default function LocalStorageContextProvider({ children }: Props) {
  const params = useParams();

  const [localeState, setLocaleState] = React.useState<SupportedLocale>(
    SupportedLocale.en_US
  );

  function setLocale(locale: SupportedLocale) {
    LocalStorage.set(LocalStorageKey.locale, locale);
    setLocaleState(locale);
  }

  React.useEffect(() => {
    if (!params?.locale) return;

    const locale = ParamsHelper.getSingle(params.locale);
    const supportedLocale = LocaleHelper.retrieveSupportedLocale(locale);
    setLocale(supportedLocale);
  }, [params?.locale]);

  return (
    <LocalStorageContext.Provider
      value={{ localeItem: { value: localeState, setValue: setLocale } }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
}
