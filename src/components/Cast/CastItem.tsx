import { Actor } from "@/types/Movie";
import Image from "next/image";
import React from "react";

interface CastItemProps {
  castItem: Actor;
}

const CastItem = (props: CastItemProps) => {
  return (
    <div className="w-full h-full">
      <div className="h-full w-full grid grid-cols-3">
        <div className="col-span-2 h-full w-11/12 relative">
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
        <div className="text-white pt-4 pe-2">
          <p className="text-sm">
            {`Character Name : ${props.castItem.character}`}
          </p>
          <p className="text-sm">{`Original Name : ${props.castItem.original_name}`}</p>
          <p className="text-sm">{`Gender : ${
            props.castItem.gender === 1 ? "Female" : "Male"
          }`}</p>
        </div>
      </div>
    </div>
  );
};

export default CastItem;
