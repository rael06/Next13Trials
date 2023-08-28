import { fetchMovie } from "@/app/services/api/tmdb";
import classes from "./movies.[slug].page.module.css";
import { SupportedLocale } from "@/app/utils/lang";
import { getDictionary } from "@/app/(pages)/[lang]/dictionaries";

type Props = {
  params: {
    lang: SupportedLocale;
    id: number;
  };
};

export default async function Page({ params }: Props) {
  const { lang, id } = params;
  const movie = await fetchMovie(lang, id);
  const dict = await getDictionary(lang);

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
