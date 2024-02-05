"use server";

import { redirect } from "next/navigation";

const SearchMovies = (prevState: { message: string }, formData: FormData) => {
  const search = formData.get("search");
  redirect(`/region/IN/movies/1/search?query=${search}`);
};

export default SearchMovies;
