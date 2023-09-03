import { fetchMovie } from "@/app/services/api/tmdb";
import classes from "./movies.[slug].page.module.css";
import { SupportedLocale } from "@/app/helpers/locale";
import { getDictionary } from "@/app/(pages)/[locale]/dictionaries";
import MovieCard from "@/app/components/MovieCard";
import { redirect } from "next/navigation";

type Props = {
  params: {
    locale: SupportedLocale;
    movieId: number;
  };
};

export default async function Page({ params }: Props) {
  const { locale, movieId } = params;
  const dict = await getDictionary(locale);
  const movie = await fetchMovie(locale, movieId);
  if (!movie) {
    redirect(`/${locale}/movies/${movieId}/404`);
  }

  return (
    <section className={classes.root}>
      <p>Page movie works! Id is {`${movieId}-${new Date().toISOString()}`}</p>
      <p>{dict["movies-results"]}</p>

      <MovieCard movie={movie} />
    </section>
  );
}

export async function generateStaticParams() {
  return [];
}
