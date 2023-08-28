"use client";

import React from "react";
import classes from "./SearchBar.component.module.css";
import { useRouter } from "next/navigation";
import { sluggedSearchRouteUtils } from "@/app/(pages)/[lang]/search/[searchText]/utils";

export default function SearchBar() {
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const searchText = searchInputRef.current?.value;
      if (!searchText) {
        return;
      }

      router.push(sluggedSearchRouteUtils.getSluggedRoute(searchText));
    },
    [router]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const searchText = searchInputRef.current?.value;
        if (!searchText) {
          return;
        }

        router.push(sluggedSearchRouteUtils.getSluggedRoute(searchText));
      }
    },
    [router]
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
