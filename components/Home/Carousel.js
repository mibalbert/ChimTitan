"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { carouselData } from "./carouselData.js";

// Define the props

const Carousel = () => {
  const autoplayOptions = {
    delay: 2200,
    // delay: 2500,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      duration: 1200,
      // duration: 60,
      // align: "start",
      align: "center",
      containScroll: "trimSnaps",
    },
    [Autoplay(autoplayOptions)]
  );

  return (
    <div className="w-full">
      <div className="max-w-[1300px] mx-auto ">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {carouselData.map(({ id, src, title }) => {
              return (
                <div className="relative flex-[0_0_10%] text-center" key={id}>
                  <Image
                    src={src}
                    // fill
                    width={100}
                    height={50}
                    className="object-contain mx-auto"
                    alt={title}
                  />
                  <div className="py-3 text-zinc-600 text-sm">{title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
