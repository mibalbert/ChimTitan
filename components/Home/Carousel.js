"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

// Define the props

const Carousel = () => {
  const images = [
    "https://placehold.co/480x300?font=roboto&text=Slide+1",
    "https://placehold.co/480x300?font=roboto&text=Slide+2",
    "https://placehold.co/480x300?font=roboto&text=Slide+3",
    "https://placehold.co/480x300?font=roboto&text=Slide+4",
    "https://placehold.co/480x300?font=roboto&text=Slide+1",
    "https://placehold.co/480x300?font=roboto&text=Slide+2",
    "https://placehold.co/480x300?font=roboto&text=Slide+3",
    "https://placehold.co/480x300?font=roboto&text=Slide+4",
    "https://placehold.co/480x300?font=roboto&text=Slide+1",
    "https://placehold.co/480x300?font=roboto&text=Slide+2",
    "https://placehold.co/480x300?font=roboto&text=Slide+3",
    "https://placehold.co/480x300?font=roboto&text=Slide+4",
    "https://placehold.co/480x300?font=roboto&text=Slide+1",
    "https://placehold.co/480x300?font=roboto&text=Slide+2",
    "https://placehold.co/480x300?font=roboto&text=Slide+3",
    "https://placehold.co/480x300?font=roboto&text=Slide+4",
    "https://placehold.co/480x300?font=roboto&text=Slide+1",
    "https://placehold.co/480x300?font=roboto&text=Slide+2",
    "https://placehold.co/480x300?font=roboto&text=Slide+3",
    "https://placehold.co/480x300?font=roboto&text=Slide+4",
    "https://placehold.co/480x300?font=roboto&text=Slide+1",
    "https://placehold.co/480x300?font=roboto&text=Slide+2",
    "https://placehold.co/480x300?font=roboto&text=Slide+3",
    "https://placehold.co/480x300?font=roboto&text=Slide+4",
  ];

  const autoplayOptions = {
    delay: 2200,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      duration: 800,
      align: "start",
      containScroll: "trimSnaps",
    },
    [Autoplay(autoplayOptions)]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((src, i) => {
          return (
            <div className="relative h-64 flex-[0_0_10%] " key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              {/* <Image src={src} fill className="object-cover" alt="alt" /> */}
              <div className="object-cover py-10  bg-slate-300">
                {i} asdasdas dasdasda sd asdasdasdasd a
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Carousel;
