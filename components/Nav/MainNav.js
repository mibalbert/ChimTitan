/**
 * MainNav.js
 */
"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import SecondaryNav from "./SecondaryNav";
import { useState, useEffect } from "react";

const MainNav = () => {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".main-nav")) {
        setNav(false);
      }
    };
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      currentPosition > 100
        ? setScrollPosition(true)
        : setScrollPosition(false);
    };
    window.addEventListener("scroll", handleScroll);

    if (nav) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nav]);

  return (
    <>
      {nav && <div className="fixed inset-0 bg-black opacity-30  z-40" />}
      <div className="fixed main-nav z-50 w-full">
        <div
          className={` w-full duration-700 ${
            scrollPosition ? "bg-zinc-900" : "backdrop-blur-sm"
          }`}
        >
          <nav
            className={`flex justify-between items-center h-[60px] max-w-screen-2xl mx-auto px-10 text-white  `}
          >
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
    </>
  );
  // <>
  //   {nav && <div className="fixed inset-0 bg-black opacity-50 z-40" />}
  //   <div
  //     className={`fixed top-0 left-0 right-0 z-50 ${
  //       nav ? "overflow-hidden" : ""
  //     }`}
  //   >
  //     <div className="bg-zinc-800 w-full">
  //       <nav className="flex justify-between items-center h-16 max-w-screen-2xl mx-auto px-10 text-white">
  //         <div>Icon</div>
  //         <div>1993</div>
  //         <div className="p-3 hover:cursor-pointer" onClick={toggleNav}>
  //           {nav ? <FaTimes /> : <FaBars />}
  //         </div>
  //       </nav>
  //     </div>
  //     {nav && <SecondaryNav />}
  //   </div>
  // </>;
};

export default MainNav;
