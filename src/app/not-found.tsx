import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image src="/images/404NotFound.jpg" alt="404" width={600} height={600} />
    </div>
  );
};

export default NotFound;
