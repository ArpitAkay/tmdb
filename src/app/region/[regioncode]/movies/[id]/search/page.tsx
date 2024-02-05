import Button from "@/components/Button/Button";
import MovieItem from "@/components/MovieItem/MovieItem";
import { Movies } from "@/types/Movie";
import Link from "next/link";
import React from "react";

const getData = async (page: number, query: string): Promise<Movies> => {
  const language = "en-US";
  const include_adult = true;
  const url = `${process.env.NEXT_PUBLIC_TMDB_API_URL}search/movie?query=${query}&include_adult=${include_adult}&language=${language}&page=${page}&region={region}`;
  console.log(url);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: { query: string };
}) => {
  const data: Movies = await getData(params.id, searchParams.query);
  return (
    <div className="w-full h-full p-2 flex flex-col items-center">
      <div className="h-8">
        <span>Results found : {data.total_results}</span>
      </div>
      <div className="w-full h-full overflow-y-scroll">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {data.results.map((movie) => {
            return <MovieItem key={movie.id} movieItem={movie} />;
          })}
        </div>
      </div>
      <div className="mt-2 w-28 flex justify-between absolute bottom-2">
        <div>
          <Button type="submit" disabled={data.page === 1}>
            <Link
              className={`${data.page === 1 ? "pointer-events-none" : ""}`}
              href={`/region/IN/movies/${data.page - 1}/search?query=${
                searchParams.query
              }`}
            >
              <svg
                className="h-8 w-8 text-white"
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
            </Link>
          </Button>
        </div>
        <div>
          <Button type="submit" disabled={data.page === data.total_pages}>
            <Link
              className={`${
                data.page === data.total_pages ? "pointer-events-none" : ""
              }`}
              href={`/region/IN/movies/${data.page + 1}/search?query=${
                searchParams.query
              }`}
            >
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
