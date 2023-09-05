"use client";

import React, { useContext } from "react";
import classes from "./SearchBar.component.module.css";
import { useRouter } from "next/navigation";
import { LocalStorageContext } from "@/app/contexts/localStorage";

export default function SearchBar() {
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { localeItem } = useContext(LocalStorageContext);
  const locale = localeItem.value;

  const goToSearchResultsPage = React.useCallback(
    (searchText: string) => {
      router.push(`/${locale}/search/${searchText}`);
    },
    [router, locale]
  );

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const searchText = searchInputRef.current?.value;
      if (!searchText) {
        return;
      }

      goToSearchResultsPage(searchText);
    },
    [goToSearchResultsPage]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const searchText = searchInputRef.current?.value;
        if (!searchText) {
          return;
        }

        goToSearchResultsPage(searchText);
      }
    },
    [goToSearchResultsPage]
  );

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Type a movie title..."
        onKeyDown={handleKeyDown}
      />
      <button type="submit">Search</button>
    </form>
  );
}
