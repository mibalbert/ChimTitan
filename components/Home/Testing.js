"use client";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import { carouselData } from "./carouselData";

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ResponsiveCarousel() {
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData("The load is complete");
    }, 1000);
  }, []);

  return (
    <div>
      <div>{data}</div>

      {/* <Carousel
        showArrows={true}
        // autoPlay={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
      >
        {carouselData.map(({ id, src, title }) => (
          <div key={id} className="h-60 flex flex-col">
            <div className="h-36">
              <Image width={150} height={50} src={src} alt="slides" />
            </div>
            <div className="h-20">
              <h2>{title}</h2>
            </div>
          </div>
        ))}
      </Carousel> */}
    </div>
  );
}
