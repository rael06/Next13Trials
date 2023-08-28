import { fetchMovies } from "@/app/services/api/tmdb";
import classes from "./search.[slug].page.module.css";
import { SupportedLocale } from "@/app/utils/lang";
import { getDictionary } from "@/app/(pages)/[lang]/dictionaries";
import Link from "next/link";
import { sluggedMoviesRouteUtils } from "../../movies/[id]/utils";

type Props = {
  params: {
    lang: SupportedLocale;
    searchText: string;
  };
};

export default async function Page({ params }: Props) {
  const { lang, searchText } = params;
  const movies = await fetchMovies(lang, searchText);
  const dict = await getDictionary(lang);

  return (
    <section className={classes.root}>
      <p>
        Page search works! Slug is {`${searchText}-${new Date().toISOString()}`}
      </p>
      <p>{dict["movies-results"]}</p>
      <ul>
        {movies.results?.map((movie) => (
          <li key={movie.id}>
            <Link href={`/${lang}/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// export async function generateStaticParams() {
//   return [];
// }
