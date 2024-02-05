import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex justify-center">
        <h3>Not Results Found</h3>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/NoResultFound.jpg"
          alt="404"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default NotFound;
