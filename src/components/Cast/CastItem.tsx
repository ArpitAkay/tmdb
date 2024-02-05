import { Actor, Cast } from "@/types/Movie";
import Image from "next/image";
import React from "react";

interface CastItemProps {
  castItem: Actor;
}

const CastItem = (props: CastItemProps) => {
  return (
    <div className="w-full h-full">
      <div className="h-full w-full flex flex-row">
        <div className="h-full w-11/12 sm:w-2/5 relative">
          <Image
            src={
              props.castItem.profile_path
                ? `https://image.tmdb.org/t/p/original${props.castItem.profile_path}`
                : "/images/default.jpg"
            }
            alt={props.castItem.name}
            fill
          />
        </div>
        <div className="text-white p-4">
          <p>Character Name : {props.castItem.character}</p>
          <p>Original Name : {props.castItem.original_name}</p>
          <p>Gender : {props.castItem.gender === 1 ? "Female" : "Male"}</p>
        </div>
      </div>
    </div>
  );
};

export default CastItem;
