"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div>
        <h3 className="text-center">Something broke</h3>
      </div>
      <div className="mt-2">
        <Image
          src="/images/ErrorLoadingMovies.jpg"
          alt="Error Loading Movies"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      <div className="mt-2">
        <button type="button" onClick={reset}>
          <p>Wanna Retry Bro</p>
        </button>
      </div>
    </div>
  );
};

export default Error;
