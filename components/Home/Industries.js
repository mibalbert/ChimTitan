"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { industriesData } from "./industriesData.js";

const Industries = () => {
  const [showMore, setShowMore] = useState(false);
  const [visibleIndustries, setVisibleIndustries] = useState([]);

  const toggleShowMore = () => {
    setShowMore(() => !showMore);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (!showMore && screenWidth < 700) {
        setVisibleIndustries(industriesData.slice(0, 2));
      } else if (!showMore && screenWidth < 1100) {
        setVisibleIndustries(industriesData.slice(0, 2));
      } else if (!showMore && screenWidth < 1280) {
        setVisibleIndustries(industriesData.slice(0, 4));
      } else {
        setVisibleIndustries(industriesData);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showMore]);

  return (
    <div className="w-full bg-white py-32 pb-24">
      <div
        className="text-bold text-2xl max-w-[92%] 
      2xl:max-w-[1300px] mx-auto text-center md:text-left
      pb-12
      "
      >
        We cover a wide range of Industries
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[92%] 
      2xl:max-w-[1300px] mx-auto gap-7 md:gap-5 lg:gap-5 "
      >
        {visibleIndustries.map(({ id, link, title, img, description }) => {
          return (
            // <a key={id} href={link} className="bg-zinc-50 shadow-md">
            //   <div className="h-72 relative">
            //     <Image
            //       className="object-cover"
            //       src={img}
            //       alt="Industry image"
            //       fill="true"
            //     />
            //   </div>
            //   <div className="p-8">
            //     <div className="font-bold text-xl">{title}</div>
            //     <div className="mt-2">{description}</div>
            //   </div>
            // </a>
            <a key={id} href={link} className="">
              <div className="h-96 relative ">
                <Image
                  className="object-cover"
                  src={img}
                  alt="Industry image"
                  fill="true"
                />
                <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-end p-8 bg-gradient-to-t from-zinc-900 via-zinc-900/90  to-white/10 text-white">
                  <div className="font-boldish text-4xl ">{title}</div>
                  <div className="mt-2 min-h-[25%]">{description}</div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      {!showMore && visibleIndustries.length < industriesData.length && (
        <div className="flex justify-center mt-8">
          <button
            className="font-bold py-2 underline underline-offset-8"
            onClick={toggleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Industries;
