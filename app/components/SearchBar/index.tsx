"use client";

import React from "react";

import classes from "./SearchBar.component.module.css";
import { useRouter } from "next/navigation";
import { computeSearchSlugRoute } from "@/app/(pages)/search/[slug]/utils";

export default function SearchBar() {
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push(computeSearchSlugRoute(searchInputRef.current?.value));
    },
    [router]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        router.push(computeSearchSlugRoute(searchInputRef.current?.value));
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
