"use client";
import { useParams } from "next/navigation";

export default function MovieIdFromParams() {
  const params = useParams();
  return <p>Movie {params?.movieId}</p>;
}
