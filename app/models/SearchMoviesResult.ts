import { Movie } from "./Movie";

export type SearchMoviesResult = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
