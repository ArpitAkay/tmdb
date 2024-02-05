"use client";

import { ImageDetail } from "@/types/Movie";
import Image from "next/image";
import React from "react";

interface BackgroundImageItemProps {
  poster_path: string;
  backdrop_path: string;
  backdrops: ImageDetail[];
}

const BackgroundImageItem = (props: BackgroundImageItemProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div>
      <button
        className="absolute top-[45%]"
        disabled={currentIndex === 0}
        onClick={() => setCurrentIndex(currentIndex - 1)}
      >
        <svg
          className="h-12 w-12 text-gray-600"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </button>
      <Image
        src={`https://image.tmdb.org/t/p/original${
          props.backdrops.length > 0
            ? props.backdrops[currentIndex].file_path
            : props.backdrop_path
            ? props.backdrop_path
            : props.poster_path
        }`}
        alt={props.backdrop_path}
        width={850}
        height={850}
        className="object-cover flex transition-transform duration-10 ease-in-out"
      />
      <button
        className="absolute top-[45%] right-0"
        disabled={currentIndex === props.backdrops.length - 1}
        onClick={() => setCurrentIndex(currentIndex + 1)}
      >
        <svg
          className="h-12 w-12 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default BackgroundImageItem;
