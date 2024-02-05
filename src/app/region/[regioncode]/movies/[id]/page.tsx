import Button from "@/components/Button/Button";
import MovieItem from "@/components/MovieItem/MovieItem";
import { Movie, Movies } from "@/types/Movie";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const getData = async (id: number, regioncode: string): Promise<Movies> => {
  const language = "en-US";
  const url = `${process.env.NEXT_PUBLIC_TMDB_API_URL}movie/popular?language=${language}&page=${id}&region=${regioncode}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("Something broke");
  }

  return res.json();
};

const Page = async ({
  params,
}: {
  params: { id: number; regioncode: string };
}) => {
  const data = await getData(params.id, params.regioncode);

  if (data.results.length === 0) {
    return notFound();
  }

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="h-full overflow-y-scroll">
        <div
          className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 bg-slate-300
      "
        >
          {data.results.map((movieItem: Movie) => {
            return <MovieItem key={movieItem.id} movieItem={movieItem} />;
          })}
        </div>
      </div>
      <div className="mt-2 w-28 flex justify-between absolute bottom-2">
        <div>
          <Link
            className={`${data.page === 1 ? "pointer-events-none" : ""}`}
            href={`/region/${params.regioncode}/movies/${data.page - 1}`}
          >
            <Button type="button" disabled={data.page === 1}>
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
            </Button>
          </Link>
        </div>
        <div>
          <Link
            className={`${
              data.page === data.total_pages ? "pointer-events-none" : ""
            }`}
            href={`/region/${params.regioncode}/movies/${data.page + 1}`}
          >
            <Button type="button" disabled={data.page === data.total_pages}>
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
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
