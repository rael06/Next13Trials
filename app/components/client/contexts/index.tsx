"use client";

import React from "react";
import LocalStorageContextProvider from "./LocalStorage";
import DictionaryContextProvider from "./Dictionary";

type Props = {
  children: React.ReactNode;
};

export default function MainContext({ children }: Props) {
  return (
    <>
      <LocalStorageContextProvider>
        <DictionaryContextProvider>{children}</DictionaryContextProvider>
      </LocalStorageContextProvider>
    </>
  );
}
