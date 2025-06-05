import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { Link } from "react-router-dom";

export default function RathYatra() {
  const images = [
    "rath/rath1.webp",
    "rath/rath3.webp",
    "rath/rath4.webp",
    "rath/rath5.webp",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center gap-y-5"
      >
        <p className="font-bold text-4xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Featured tour <br /> <span className="text-yellow-500">Ratha Yatra 2024</span>

        </p>
        <div className="font-normal text-sm px-6 md:text-2xl text-white max-w-7xl">
          Ratha Yatra, or the Chariot Festival, is a major Hindu celebration in Puri, Odisha.
          During this event, deities Lord Jagannath, Balabhadra, and Subhadra are taken in grand chariots from the Jagannath Temple to the Gundicha Temple.
          This vibrant festival attracts millions of devotees and symbolizes unity and equality.
        </div>
        {/* <Link to={`glimpse`}>
          <button className="px-10 py-3 text-base md:text-xl rounded-full bg-yellow-600 font-bold text-white transform hover:scale-105 hover:bg-yellow-500 transition-colors duration-200">
            Try the 360° experience now
          </button>
        </Link> */}
      </motion.div>
    </ImagesSlider>
  );
}