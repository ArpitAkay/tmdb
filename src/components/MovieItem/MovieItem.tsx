import { Movie } from "@/types/Movie";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MovieItemProps {
  movieItem: Movie;
}

const MovieItem = (props: MovieItemProps) => {
  return (
    <Link href={`/movie/detail/${props.movieItem.id}`}>
      <div
        id={String(props.movieItem.id)}
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-slate-400 duration-300 cursor-pointer"
      >
        <Image
          src={`${
            props.movieItem.poster_path
              ? "https://image.tmdb.org/t/p/original" +
                props.movieItem.poster_path
              : "/images/default.jpg"
          }`}
          width={400}
          height={350}
          alt="Picture of the author"
          className="object-cover"
        />
        <span className="block">{props.movieItem.original_title}</span>
        <span>{props.movieItem.release_date.split("-")[0]}</span>
      </div>
    </Link>
  );
};

export default MovieItem;
