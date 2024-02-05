"use client";

import { Region } from "@/types/Region";
import Link from "next/link";
import React from "react";

const Narbar = () => {
  const [selectedRegion, setSelectedRegion] = React.useState<Region>({
    iso_3166_1: "IN",
    english_name: "India",
    native_name: "India",
  });
  const [regions, setRegions] = React.useState<Region[]>();
  const [openPopover, setOpenPopover] = React.useState<boolean>(false);

  const openRegionPopover = async () => {
    if (openPopover) {
      setOpenPopover(false);
      return;
    }
    const language = "en-US";
    const url = `${process.env.NEXT_PUBLIC_TMDB_API_URL}configuration/countries?language=${language}`;
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

    const data: Region[] = await res.json();
    setRegions(
      data.sort((a, b) => a.english_name.localeCompare(b.english_name))
    );
    setOpenPopover(!openPopover);
  };

  return (
    <nav className="w-full h-full bg-slate-800">
      <div className="px-8 py-4 flex justify-between">
        <div>
          <span className="text-white text-lg mr-4">TMDB</span>
          <span className="text-white text-lg mr-4 cursor-pointer">
            <Link href={`/region/IN/movies/1`}>Home</Link>
          </span>
        </div>
        <div className="w-24 flex justify-between">
          <div className="text-white border-2 border-white rounded-lg p-1 cursor-pointer select-none relative">
            <button className="w-auto px-1" onClick={openRegionPopover}>
              {selectedRegion.iso_3166_1}
            </button>
            {openPopover && (
              <div className="w-36 h-52 bg-slate-800 absolute top-10 right-0 z-10 overflow-scroll border-2 border-white rounded-sm">
                {regions?.map((region) => {
                  return (
                    <div
                      key={region.iso_3166_1}
                      className="w-full flex justify-center py-2 ps-4 pe-2"
                    >
                      <button onClick={() => setSelectedRegion(region)}>
                        <Link href={`/region/${region.iso_3166_1}/movies/1`}>
                          {region.english_name}
                        </Link>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div>
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx="12" cy="12" r="5" />{" "}
              <line x1="12" y1="1" x2="12" y2="3" />{" "}
              <line x1="12" y1="21" x2="12" y2="23" />{" "}
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{" "}
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />{" "}
              <line x1="1" y1="12" x2="3" y2="12" />{" "}
              <line x1="21" y1="12" x2="23" y2="12" />{" "}
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{" "}
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Narbar;
