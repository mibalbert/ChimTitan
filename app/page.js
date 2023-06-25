/**
 * page.js (Home)
 */

import {
  Hero,
  Industries,
  Carousel,
  ShowOff,
  AboutUs,
  Testing,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Industries />
      <ShowOff />
      <Carousel />
    </main>
  );
}
