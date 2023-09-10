"use client";

import { getDictionary } from "@/app/(pages)/[locale]/dictionaries";
import LocaleHelper from "@/app/helpers/locale";
import ParamsHelper from "@/app/helpers/params";
import { useParams } from "next/navigation";
import React from "react";

type DictionaryContextType = {
  dictionary: Awaited<ReturnType<typeof getDictionary>> | null;
};

export const DictionaryContext = React.createContext(
  {} as DictionaryContextType
);

type Props = {
  children: React.ReactNode;
};

export default function DictionaryContextProvider({ children }: Props) {
  const params = useParams();

  const [dictionary, setDictionary] = React.useState<Awaited<
    ReturnType<typeof getDictionary>
  > | null>(null);

  React.useEffect(() => {
    (async () => {
      if (!params?.locale) return;

      const locale = ParamsHelper.getSingle(params.locale);
      const supportedLocale = LocaleHelper.retrieveSupportedLocale(locale);
      const localeResponse = await fetch(
        "http://localhost:3000/api/locales/" + supportedLocale
      );
      const dictionary = await localeResponse.json();
      setDictionary(dictionary);
    })();
  }, [params?.locale]);

  return (
    <DictionaryContext.Provider value={{ dictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
}
