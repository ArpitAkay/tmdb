import BackgroundImageItem from "@/components/BackgroundImage/BackgroundImageItem";
import CastItem from "@/components/Cast/CastItem";
import MovieItem from "@/components/MovieItem/MovieItem";
import ReviewItem from "@/components/Review/ReviewItem";
import {
  AlternativeTitle,
  Cast,
  Genre,
  Movie,
  MovieDetails,
  MovieImages,
  Movies,
  Review,
} from "@/types/Movie";
import Link from "next/link";
import React from "react";

const getData = async (id: number): Promise<MovieDetails> => {
  const language = "en-US";
  const url = `${process.env.NEXT_PUBLIC_TMDB_API_URL}movie/${id}?language=${language}`;
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

const getImageData = async (id: number): Promise<MovieImages> => {
  const url = `${process.env.NEXT_PUBLIC_TMDB_API_URL}movie/${id}/images`;
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

const getReviewData = async (id: number): Promise<Review> => {
  const language = "en-US";
  const url = `${
    process.env.NEXT_PUBLIC_TMDB_API_URL
  }movie/${id}/reviews?language=${language}&page=${1}`;
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

const getRecommendedMovies = async (id: number): Promise<Movies> => {
  const language = "en-US";
  const url = `${
    process.env.NEXT_PUBLIC_TMDB_API_URL
  }movie/${id}/recommendations?language=${language}&page=${1}`;
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

const getAlternativeTitles = async (id: number): Promise<AlternativeTitle> => {
  const region = "US";
  const url = `${process.env.NEXT_PUBLIC_TMDB_API_URL}movie/${id}/alternative_titles?country=${region}`;
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

const getCastData = async (id: number): Promise<Cast> => {
  const language = "en-US";
  const url = `${process.env.NEXT_PUBLIC_TMDB_API_URL}movie/${id}/credits?language=${language}`;
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

const Page = async ({ params }: { params: { id: number } }) => {
  const data: MovieDetails = await getData(params.id);
  const imageData: MovieImages = await getImageData(params.id);
  const reviewData: Review = await getReviewData(params.id);
  const recommendedMovies: Movies = await getRecommendedMovies(params.id);
  const alternativeTitles: AlternativeTitle = await getAlternativeTitles(
    params.id
  );
  const castData: Cast = await getCastData(params.id);

  return (
    <div className="w-full h-full">
      <div className="w-full h-[95%] p-6 overflow-y-scroll grid 2xl:gap-4 grid-cols-1 2xl:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="relative">
            <BackgroundImageItem
              poster_path={data.poster_path}
              backdrop_path={data.backdrop_path}
              backdrops={imageData.backdrops}
            />
          </div>
          <div className="h-12 w-full flex justify-center items-center">
            <div className="h-4/5 w-4/5 overflow-x-scroll whitespace-nowrap flex justify-center">
              {data.genres.map((genre: Genre) => {
                return (
                  <span
                    key={genre.id}
                    className="text-sm p-2 rounded-2xl me-1 bg-slate-800 text-white"
                  >
                    {genre.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="2xl:col-span-2 text-justify">
          <Link
            href={data.homepage}
            target="_blank"
            className="hover:text-blue-800"
          >
            <p className="text-4xl">{data.title}</p>
          </Link>
          <p className="mt-2 text-xl">- {data.tagline}</p>
          <p className="mt-2">{data.overview}</p>
          <p className="text-lg mt-4">
            <b>Release Date : </b>
            {data.release_date}
          </p>
          <p>
            <b>Language :</b>
            {data.spoken_languages.map((item) => {
              return (
                <span key={item.iso_639_1} className="inline-block mx-1">
                  {item.english_name}
                </span>
              );
            })}
          </p>
          <p>
            <b>Adult : </b>
            {`${data.adult}`}
          </p>
          <p>
            <b>Status :</b> {data.status}
          </p>
          <p>
            <b className="inline-block">Production Company : </b>
            {data.production_companies.map((item) => (
              <span key={item.id} className="inline-block mx-1">
                {`${item.name}`}
              </span>
            ))}
          </p>
          <p>
            <b className="inline-block">Production Country : </b>
            {data.production_countries.map((item) => (
              <span key={item.iso_3166_1} className="inline-block mx-1">
                {`${item.name}`}
              </span>
            ))}
          </p>
          <p>
            <b className="inline-block">Alternative Titles : </b>
            {alternativeTitles.titles.map((item) => (
              <span key={item.iso_3166_1} className="inline-block mx-1">
                {`${item.title}`}
              </span>
            ))}
          </p>
        </div>
        <div className="2xl:col-span-3">
          <div>
            <p className="my-5 text-3xl text-center">Cast</p>
          </div>

          <div className="w-full h-96 bg-slate-800 overflow-scroll">
            {castData.cast.length === 0 && (
              <div className="w-full h-full flex justify-center items-center">
                <p className="text-2xl text-white">No cast found</p>
              </div>
            )}
            {castData.cast.length !== 0 && (
              <div className="w-full h-96 snap-mandatory snap-x flex overflow-x-scroll overflow-y-scroll scroll-smooth px-4">
                {castData.cast.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="snap-center flex-shrink-0 flex-grow-0 flex-auto w-full sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5 2xl:w-1/5 h-[79%] rounded-lg m-10 bg-slate-400"
                    >
                      <CastItem castItem={item} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="2xl:col-span-3">
          <div>
            <p className="my-5 text-3xl text-center">Reviews</p>
          </div>
          <div className="w-full h-96 bg-slate-800 overflow-scroll">
            {reviewData.results.length === 0 && (
              <div className="w-full h-full flex justify-center items-center">
                <p className="text-2xl text-white">No Reviews Found</p>
              </div>
            )}
            {reviewData.results.length !== 0 && (
              <div className="w-full h-96 snap-mandatory snap-x flex overflow-x-scroll overflow-y-scroll scroll-smooth">
                {reviewData.results.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="snap-center flex-shrink-0 flex-grow-0 flex-auto w-5/6 h-3/4 rounded-lg m-10 bg-slate-400 p-2"
                    >
                      <ReviewItem reviewItem={item} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {recommendedMovies.results.length !== 0 && (
          <div className="2xl:col-span-3 w-full h-5/6">
            <div>
              <p className="text-3xl text-center my-5">You may also like</p>
            </div>
            <div className="w-full h-full p-4 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 bg-slate-400 overflow-y-scroll">
              {recommendedMovies.results.map((item: Movie) => {
                return <MovieItem key={item.id} movieItem={item} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
