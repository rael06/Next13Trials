import classes from "./movies.search.page.module.css";

type Props = {
  params: {
    search: string;
  };
};

export default async function Page(props: Props) {
  const search = `${props.params.search}-${new Date().toISOString()}`;

  return (
    <section className={classes.root}>
      <p>Page movies works! Search is {`${search}`}</p>
    </section>
  );
}

export async function generateStaticParams() {
  return [];
}
