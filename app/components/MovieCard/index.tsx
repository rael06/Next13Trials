import { Movie } from "@/app/models/Movie";
import React from "react";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  return (
    <>
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
    </>
  );
}
