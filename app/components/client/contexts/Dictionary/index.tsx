"use client";

import { Dictionary } from "@/app/(pages)/[locale]/dictionaries";
import React from "react";

type DictionaryContextType = {
  dictionary: Dictionary;
};

export const DictionaryContext = React.createContext(
  {} as DictionaryContextType
);

type Props = {
  children: React.ReactNode;
  dictionary: Dictionary;
};

export default function DictionaryContextProvider({
  children,
  dictionary,
}: Props) {
  return (
    <DictionaryContext.Provider value={{ dictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
}
