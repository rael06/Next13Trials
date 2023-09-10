import SearchBar from "@/app/components/client/SearchBar";
import { getDictionary } from "../dictionaries";
import classes from "./home.page.module.css";
import { SupportedLocale } from "@/app/helpers/locale";

type Props = {
  params: {
    locale: SupportedLocale;
  };
};

export async function generateMetadata({ params }: Props) {
  const dictionary = await getDictionary(params.locale);
  return {
    title: dictionary.page.home.title,
    description: dictionary.page.home.description,
  };
}

export default function Home() {
  return (
    <section className={classes.root}>
      <SearchBar />
    </section>
  );
}
