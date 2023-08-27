import classes from "./home.page.module.css";
import SearchBar from "@/app/components/SearchBar";

export default function Home() {
  return (
    <section className={classes.root}>
      <SearchBar />
    </section>
  );
}
