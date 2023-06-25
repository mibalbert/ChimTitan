"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { carouselData } from "./carouselData.js";

// Define the props

const Carousel = () => {
  const [width, setWidth] = useState(10);

  const handleResize = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 500) {
      setWidth(28);
      // console.log(width);
    } else if (screenWidth < 700) {
      setWidth(21);
      // console.log(width);
    } else if (screenWidth < 1100) {
      setWidth(15);
      // console.log(width);
    } else if (screenWidth < 1300) {
      setWidth(13);
      // console.log(width);
    } else {
      setWidth(10);
      // console.log(width);
    }
  });

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

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
    <div className="w-full bg-white pt-10 pb-32">
      <div className="max-w-[92%] 2xl:max-w-[1300px] mx-auto">
        {/* <div className="text-xl w-full text-center py-10">Our Partners</div> */}
        <div className="text-bold text-2xl max-w-[92%] 2xl:max-w-[1300px] mx-auto py-8 md:py-16 mt-10 md:mt-0 text-center md:text-left">
          Our Partners
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {carouselData.map(({ id, src, title }) => {
              const itemStyle = {
                flex: `0 0 ${width}%`,
              };
              return (
                <div
                  className="relative text-center"
                  style={itemStyle}
                  key={id}
                >
                  <Image
                    src={src}
                    width={100}
                    height={50}
                    className="object-contain mx-auto "
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
  // <div className="w-full">
  //   <div className="max-w-[1300px] mx-auto ">
  //     <div className="overflow-hidden" ref={emblaRef}>
  //       <div className="flex">
  //         {carouselData.map(({ id, src, title }) => {
  //           return (
  //             <div
  //               className={`relative  text-center flex-[0_0_${width}%]`}
  //               key={id}
  //             >
  //               <Image
  //                 src={src}
  //                 // fill
  //                 width={100}
  //                 height={50}
  //                 className="object-contain mx-auto "
  //                 alt={title}
  //               />
  //               <div className="py-3 text-zinc-600 text-sm">{title}</div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // );
};
export default Carousel;
