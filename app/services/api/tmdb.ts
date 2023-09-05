import { Movie } from "@/app/models/Movie";
import { SearchMoviesResult } from "@/app/models/SearchMoviesResult";
import { SupportedLocale } from "@/app/helpers/locale";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.TMDB_API_KEY;

export const fallbackImageUrl = "/images/movie-fallback.png";

export async function fetchMovies(
  locale: SupportedLocale,
  search: string
): Promise<SearchMoviesResult | null> {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&language=${locale}&query=${search}&page=1&include_adult=false`;
  return fetchTmdb<SearchMoviesResult>(url);
}

export async function fetchMovie(
  locale: SupportedLocale,
  id: number
): Promise<Movie | null> {
  const url = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=${locale}`;
  return fetchTmdb<Movie>(url);
}

export function getImage(path: string) {
  return path ? `https://image.tmdb.org/t/p/w500/${path}` : fallbackImageUrl;
}

async function fetchTmdb<T>(url: string): Promise<T | null> {
  return fetch(url).then(async (res) => {
    const responseBody = await res.json();
    if (responseBody.success === false) {
      return null;
    }

    return responseBody;
  }) as Promise<T | null>;
}
