/**
 * page.js (Home)
 */

import { Hero, Industries } from "@/components";

import Carousel from "@/components/Home/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="h-32"></div>
      <div className="lg:w-3/4 mx-auto my-2">
        <Carousel />
      </div>
      <Industries />
      <div className="h-32"></div>
    </main>
  );
}
