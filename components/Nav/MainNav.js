/** MainNav.js */
"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import SecondaryNav from "./SecondaryNav";
import { useState, useEffect } from "react";

const MainNav = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".main-nav")) {
        setNav(false);
      }
    };

    if (nav) {
      document.addEventListener("click", handleOutsideClick);
      document.body.style.overflow = "hidden"; // Stops scrolling
    } else {
      document.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "auto"; // Enables scrolling
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "auto"; // Clean up on component unmount
    };
  }, [nav]);

  return (
    <div className="fixed main-nav z-50 w-full">
      <div className=" bg-zinc-800 w-full">
        <nav className="flex justify-between items-center h-[60px] max-w-screen-2xl mx-auto px-10 text-white">
          <div>Icon</div>
          <div>1993</div>
          <div
            className="p-3 hover:cursor-pointer"
            onClick={() => setNav(!nav)}
          >
            {nav ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </div>
      {nav && <SecondaryNav />}
    </div>
  );

  // return (
  //   <div>
  //     <div className=" bg-zinc-800 w-full">
  //       <nav className="flex justify-between items-center h-[60px] max-w-screen-2xl mx-auto px-10   text-white">
  //         <div>Icon</div>
  //         <div>1993</div>
  //         <div
  //           className="p-3 hover:cursor-pointer"
  //           onClick={() => setNav(!nav)}
  //         >
  //           {nav ? <FaTimes /> : <FaBars />}
  //         </div>
  //       </nav>
  //     </div>
  //     {nav && <SecondaryNav />}
  //   </div>
  // );
};

export default MainNav;
