import { fetchMovies } from "@/app/services/api/tmdb";
import classes from "./search.[slug].page.module.css";
import { SupportedLocale } from "@/app/utils/lang";
import { getDictionary } from "@/app/(pages)/[lang]/dictionaries";

type Props = {
  params: {
    lang: SupportedLocale;
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const { lang, slug: searchText } = params;
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
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </section>
  );
}

// export async function generateStaticParams() {
//   return [];
// }
