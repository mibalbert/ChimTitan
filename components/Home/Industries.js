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
    <div className="w-full bg-zinc-100">
      <div className="text-bold text-2xl max-w-[92%] 2xl:max-w-[1300px] mx-auto py-8 md:py-16 mt-10 md:mt-0 text-center md:text-left">
        We cover a wide range of Industries
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[92%] 2xl:max-w-[1300px] mx-auto gap-7 md:gap-5 lg:gap-10 ">
        {visibleIndustries.map(({ id, link, title, img, description }) => {
          return (
            <a key={id} href={link} className="bg-white">
              <div className="h-72 relative">
                <Image
                  className="object-cover"
                  src={img}
                  alt="Industry image"
                  fill="true"
                />
              </div>
              <div className="p-8">
                <div className="font-bold text-xl">{title}</div>
                <div className="mt-2">{description}</div>
              </div>
            </a>
          );
        })}
      </div>
      {!showMore && visibleIndustries.length < industriesData.length && (
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
