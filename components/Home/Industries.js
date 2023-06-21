"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Industries = () => {
  const industries = [
    {
      id: 1,
      title: "Light Industry",
      link: "light-industry",
      img: "/HomePageImg/pexels-pixabay-209251.jpg",
      description: `ASNDIU ASND ASDKJAS JDkjas DKJAKJS as`,
    },
    {
      id: 2,
      title: "Light Industry",
      link: "light-industry",
      img: "/HomePageImg/pexels-pixabay-209251.jpg",
      description: "ASNDIU ASND ASDKJAS JDkjas DKJAKJS DNKJANDKJN ",
    },
    {
      id: 3,
      title: "Light Industry",
      link: "light-industry",
      img: "/HomePageImg/pexels-pixabay-209251.jpg",
      description: "ASNDIU ASND ASDKJAS JDkjas DKJAKJS DNKJANDKJN ",
    },
    {
      id: 4,
      title: "Light Industry",
      link: "light-industry",
      img: "/HomePageImg/pexels-pixabay-209251.jpg",
      description: "ASNDIU ASND ASDKJAS JDkjas DKJAKJS DNKJANDKJN ",
    },
    {
      id: 5,
      title: "Light Industry",
      link: "light-industry",
      img: "/HomePageImg/pexels-pixabay-209251.jpg",
      description: "ASNDIU ASND ASDKJAS JDkjas DKJAKJS DNKJANDKJN ",
    },
    {
      id: 6,
      title: "Light Industry",
      link: "light-industry",
      img: "/HomePageImg/pexels-pixabay-209251.jpg",
      description: "ASNDIU ASND ASDKJAS JDkjas DKJAKJS DNKJANDKJN ",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  const visibleIndustries = showMore ? industries : industries.slice(0, 3);

  return (
    // <div className="w-full">
    //   <div className="text-2xl max-w-[1300px] mx-auto py-8 md:py-16 mt-10 md:mt-0  text-center md:text-left ">
    //     We cover a wide range of Industries
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto  gap-7 md:gap-5 lg:gap-10 p-10 sm:p-5 lg:p-0">
    //     {industries.map(({ id, link, title, img, description }) => {
    //       return (
    //         <Link key={id} href={link} className="bg-zinc-100">
    //           <div className="h-72 relative">
    //             <Image
    //               className="object-cover"
    //               src={img}
    //               alt="Industry image"
    //               fill="true"
    //             />
    //           </div>
    //           <div className="p-8">
    //             <div className="font-bold text-xl">{title}</div>
    //             <div className="mt-2">{description}</div>
    //           </div>
    //         </Link>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="w-full">
      <div className="text-2xl max-w-[1300px] mx-auto py-8 md:py-16 mt-10 md:mt-0  text-center md:text-left ">
        We cover a wide range of Industries
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto  gap-7 md:gap-5 lg:gap-10 p-10 sm:p-5 lg:p-0">
        {visibleIndustries.map(({ id, link, title, img, description }) => {
          return (
            <Link key={id} href={link} className="bg-zinc-100">
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
            </Link>
          );
        })}
      </div>
      {!showMore && industries.length > 3 && (
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
