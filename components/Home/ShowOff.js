/**
 * ShowOff.js
 */

import Image from "next/image";

const ShowOff = () => {
  return (
    <div className="grid grid-cols-2 max-w-[92%] 2xl:max-w-[1300px] mx-auto min-h-[700px]">
      <div className=" col-span-2 md:col-span-1 bg-gray-300">
        The description
      </div>
      <div className="relative col-span-2 md:col-span-1 bg-slate-500">
        <Image
          className="object-cover w-full h-full"
          src={"/HomePageImg/pexels-pixabay-257636(1).jpg"}
          alt=""
          width={300}
          height={400}
        />
      </div>
    </div>
  );
};

export default ShowOff;
