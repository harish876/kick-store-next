import React from "react";
import Link from "next/link";
import ShoeCard from "../card/ShoeCard";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const ShoeCarousel = ({ items, brand }) => {
  const options = {
    type: "loop",
    gap: "1.5rem",
    autoplay: true,
    pagination: false,
    pauseOnHover: false,
    resetProgress: false,
    perPage: "5",
    breakpoints: {
      960: {
        perPage: "3",
      },
      800: {
        perPage: "2",
      },
      640: {
        perPage: "1",
      },
    },
    classes: {
      arrows: "splide__arrows your-class-arrows",
      arrow: "splide__arrow your-class-arrow",
      prev: "splide__arrow--prev your-class-prev",
      next: "splide__arrow--next your-class-next",
    },
  };
  return (
    <>
      <h1 className="text-center text-3xl m-2 mx-auto uppercase bg-white text-gray-700 px-2 tracking-normal">
        {brand}
      </h1>
      <div className="h-1 bg-form-blue-dark w-1/12 mx-auto"></div>
      <Link className="inline-block right-0" href="./collections/shoes">
        <div className="flex flex-row justify-center align-middle my-auto mx-auto p-2 absolute right-12 hover:bg-button-hover">
          <div className="font-bold">View All</div>
        </div>
      </Link>
      <Splide
        options={options}
        aria-labelledby="autoplay-example-heading"
        className="my-0"
        hasTrack={false}
      >
        <div style={{ position: "relative" }}>
          <SplideTrack>
            {items &&
              items.map((item) => {
                return (
                  <SplideSlide key={item.id}>
                    <div className="flex flex-col md:flex-row h-full">
                      <ShoeCard data={item} />
                    </div>
                  </SplideSlide>
                );
              })}
          </SplideTrack>
        </div>
      </Splide>
    </>
  );
};

export default ShoeCarousel;
