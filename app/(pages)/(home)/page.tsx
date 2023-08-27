import classes from "./home.page.module.css";
import Link from "next/link";
import SearchBar from "../../components/SearchBar";

export default function Home() {
  return (
    <section className={classes.root}>
      <Link href="/movies/toto">Movies</Link>
      <SearchBar />
    </section>
  );
}
