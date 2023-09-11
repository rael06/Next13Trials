"use client";

import React from "react";
import LocalStorageContextProvider from "./LocalStorage";
import DictionaryContextProvider from "./Dictionary";
import { Dictionary } from "@/app/(pages)/[locale]/dictionaries";

type Props = {
  children: React.ReactNode;
  dictionary: Dictionary;
};

export default function RootContext({ children, dictionary }: Props) {
  return (
    <>
      <LocalStorageContextProvider>
        <DictionaryContextProvider dictionary={dictionary}>
          {children}
        </DictionaryContextProvider>
      </LocalStorageContextProvider>
    </>
  );
}
