import React from "react";
import Image from "next/image";
const Loading = () => {
  return (
    <Image
      src="https://media.tenor.com/FaeBjdx0UhcAAAAi/sneaker-shoe.gif"
      alt="Loading Image"
      priority
      width={300}
      height={300}
      className="flex justify-center mx-20 my-16 opacity-30"
    />
  );
};
export default Loading;
