import { Movie } from "@/app/models/Movie";
import { SearchMoviesResult } from "@/app/models/SearchMoviesResult";
import { SupportedLocale } from "@/app/helpers/locale";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.TMDB_API_KEY;

export const fallbackImageUrl = "/images/movie-fallback.png";

export async function fetchMovies(
  locale: SupportedLocale,
  search: string
): Promise<SearchMoviesResult> {
  return fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&language=${locale}&query=${search}&page=1&include_adult=false`
  ).then(async (res) => await res.json()) as Promise<SearchMoviesResult>;
}

export async function fetchMovie(
  locale: SupportedLocale,
  id: number
): Promise<Movie | null> {
  return fetch(
    `${baseUrl}/movie/${id}?api_key=${apiKey}&language=${locale}`
  ).then(async (res) => {
    if (res.status >= 400) return null;
    return await res.json();
  }) as Promise<Movie | null>;
}

export function getImage(path: string) {
  return path ? `https://image.tmdb.org/t/p/w500/${path}` : fallbackImageUrl;
}
