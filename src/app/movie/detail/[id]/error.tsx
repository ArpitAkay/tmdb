"use client";

import Image from "next/image";
import React from "react";

const error = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div>
          <p>Error loading movie data</p>
        </div>
        <div>
          <Image
            src="/images/ErrorLoadingMovies.jpg"
            alt="404"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default error;
