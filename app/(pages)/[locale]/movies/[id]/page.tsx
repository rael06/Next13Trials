import { fetchMovie } from "@/app/services/api/tmdb";
import classes from "./movies.[slug].page.module.css";
import { SupportedLocale } from "@/app/helpers/locale";
import { getDictionary } from "@/app/(pages)/[locale]/dictionaries";

type Props = {
  params: {
    locale: SupportedLocale;
    id: number;
  };
};

export default async function Page({ params }: Props) {
  const { locale, id } = params;
  const movie = await fetchMovie(locale, id);
  const dict = await getDictionary(locale);

  return (
    <section className={classes.root}>
      <p>Page movie works! Id is {`${id}-${new Date().toISOString()}`}</p>
      <p>{dict["movies-results"]}</p>
      <p>{movie?.title}</p>
    </section>
  );
}

export async function generateStaticParams() {
  return [];
}
