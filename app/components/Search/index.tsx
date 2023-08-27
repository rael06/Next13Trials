import React from "react";

type Props = {
  params: {
    search: string;
  };
};

export default async function Search({ params }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const search = `${params.search}-${new Date().toISOString()}`;

  return <p>Page movies works! Search is {`${search}`}</p>;
}
