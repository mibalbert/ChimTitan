"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const vidUrl = {
  VID960: "HomePageVideos/containers-960x540.mp4",
  VID1280: "HomePageVideos/containers-1280x720.mp4",
  VID1920: "HomePageVideos/containers-1920x1080.mp4",
  VID2560: "HomePageVideos/containers-2560x1440.mp4",
};

const getVideoSource = (width) => {
  if (width < 1280) {
    return vidUrl.VID960;
  } else if (width < 1920) {
    return vidUrl.VID1280;
  } else if (width < 2560) {
    return vidUrl.VID1920;
  } else {
    return vidUrl.VID2560;
  }
};

const HeroVideo = () => {
  // const [src, setSrc] = useState(vidUrl.VID960);
  const [src, setSrc] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setSrc(getVideoSource(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <video
        key={src}
        className={
          "relative object-cover w-full h-full min-h-[60vh] sm:min-h-[500px] max-h-[85vh] shadow-md"
        }
        autoPlay
        loop
        muted
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroVideo;
