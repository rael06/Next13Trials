import { getDictionary } from "../dictionaries";
import classes from "./home.page.module.css";
import SearchBar from "@/app/components/SearchBar";
import { SupportedLocale } from "@/app/helpers/locale";

type Props = {
  params: {
    locale: SupportedLocale;
  };
};

export async function generateMetadata({ params }: Props) {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.page.home.title,
    description: dict.page.home.description,
  };
}

export default function Home() {
  return (
    <section className={classes.root}>
      <SearchBar />
    </section>
  );
}
