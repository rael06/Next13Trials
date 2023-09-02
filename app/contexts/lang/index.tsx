"use client";

import { SupportedLocale } from "@/app/helpers/lang";
import LocalStorage from "@/app/helpers/localStorage";
import ParamsHelper from "@/app/helpers/params";
import { useParams } from "next/navigation";
import React from "react";

export type LangContextType = {
  lang: string;
  setLang: (lang: string) => void;
};

export const LangContext = React.createContext<LangContextType>(undefined!);

type Props = {
  children: React.ReactNode;
};

export default function LangContextProvider({ children }: Props) {
  const params = useParams();

  const [lang, setLang] = React.useState<string>(SupportedLocale.en_US);

  React.useEffect(() => {
    if (!params?.lang) return;
    const lang = ParamsHelper.getUnique(params.lang);
    LocalStorage.set("lang", lang);
    setLang(lang);
  }, [params?.lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
