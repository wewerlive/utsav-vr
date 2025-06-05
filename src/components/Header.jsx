import React, { useState, useEffect } from "react";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowNavbar(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 p-4 z-50 flex items-center justify-between ${showNavbar ? "" : "hidden"}`} style={{ transition: "opacity 1s" }}>
      <a href='/'>
        <img className='h-9 md:h-12' src="logo/logoCropped.webp" alt="utsavVR-logo" />
      </a>
      <a
        href="/about"
        className="ml-4 px-4 py-2 text-[#ffffff] font-semibold text-base md:text-lg"
      >
        About Us
      </a>
    </div>
  );
}