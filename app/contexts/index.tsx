"use client";

import React from "react";
import LocaleContextProvider from "./locale";

type Props = {
  children: React.ReactNode;
};

export default function MainContext({ children }: Props) {
  return (
    <>
      <LocaleContextProvider>{children}</LocaleContextProvider>
    </>
  );
}
