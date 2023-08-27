import classes from "./search.[slug].page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page(props: Props) {
  const searchText = `${props.params.slug}-${new Date().toISOString()}`;

  return (
    <section className={classes.root}>
      <p>Page search works! Slug is {`${searchText}`}</p>
    </section>
  );
}

export async function generateStaticParams() {
  return [];
}
