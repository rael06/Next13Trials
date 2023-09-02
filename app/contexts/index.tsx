"use client";

import React from "react";
import LangContextProvider from "./lang";

type Props = {
  children: React.ReactNode;
};

export default function MainContext({ children }: Props) {
  return (
    <>
      <LangContextProvider>{children}</LangContextProvider>
    </>
  );
}
