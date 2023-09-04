"use client";

import React from "react";
import LocalStorageContextProvider from "./localStorage";

type Props = {
  children: React.ReactNode;
};

export default function MainContext({ children }: Props) {
  return (
    <>
      <LocalStorageContextProvider>{children}</LocalStorageContextProvider>
    </>
  );
}
