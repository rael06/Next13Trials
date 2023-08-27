import { fetchMovies } from "@/app/services/api/tmdb";
import classes from "./search.[slug].page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page(props: Props) {
  const searchText = props.params.slug;
  const movies = await fetchMovies(searchText);

  return (
    <section className={classes.root}>
      <p>
        Page search works! Slug is {`${searchText}-${new Date().toISOString()}`}
      </p>
      <p>Here are the movies:</p>
      <ul>
        {movies.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </section>
  );
}

// export async function generateStaticParams() {
//   return [];
// }
