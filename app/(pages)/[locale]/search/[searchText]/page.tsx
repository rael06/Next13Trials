import { fetchMovies } from "@/app/services/api/tmdb";
import classes from "./search.[slug].page.module.css";
import { SupportedLocale } from "@/app/helpers/locale";
import { getDictionary } from "@/app/(pages)/[locale]/dictionaries";
import Link from "next/link";

type Props = {
  params: {
    locale: SupportedLocale;
    searchText: string;
  };
};

export default async function Page({ params }: Props) {
  const { locale, searchText } = params;
  const movies = await fetchMovies(locale, searchText);
  const dict = await getDictionary(locale);

  return (
    <section className={classes.root}>
      <p>
        Page search works! Slug is {`${searchText}-${new Date().toISOString()}`}
      </p>
      <p>{dict["movies-results"]}</p>
      <ul>
        {movies.results?.map((movie) => (
          <li key={movie.id}>
            <Link href={`/${locale}/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export const metadata = {
  title: "Search",
  description: "Search page",
};
