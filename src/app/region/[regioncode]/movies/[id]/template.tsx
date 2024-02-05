"use client";

import SearchMovies from "@/actions/SearchMovies";
import Button from "@/components/Button/Button";
import InputBox from "@/components/InputBox/InputBox";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const [state, formAction] = useFormState(SearchMovies, initialState);
  const [searchVal, setSearchVal] = React.useState(
    searchParams.get("query") || ""
  );

  return (
    <div className="w-full h-full p-2">
      <div className="w-full h-12 flex justify-center mt-1">
        <form className="w-full sm:w-1/2 flex" action={formAction}>
          <div className="w-5/6 me-2">
            <InputBox
              type="text"
              name="search"
              value={searchVal}
              handleChange={setSearchVal}
              placeholder="Search your movies..."
            />
          </div>
          <Button type={"submit"} disabled={false}>
            <p>Search</p>
          </Button>
          <p aria-live="polite" className="sr-only" role="status">
            {state?.message}
          </p>
        </form>
      </div>
      <div className="w-full h-full pb-36 mt-4">{children}</div>
    </div>
  );
}
