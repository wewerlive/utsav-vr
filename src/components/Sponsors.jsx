import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Sponsors() {
  return (
    <div className="flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
        <div className="text-[#fdc500] text-3xl md:text-5xl font-bold mt-8 mb-16 text-white">Our Sponsors</div>
      <InfiniteMovingCards
        items={data}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const data = [
  {
    image: "sp1.png",
    name: "Adidas",
  },
  {
    image: "sp2.png",
    name: "Starbucks",
  },
  {
    image: "sp3.png",
    name: "HP",
  },
  {
    image: "sp4.png",
    name: "Gucci",
  },
  {
    image: "sp5.png",
    name: "Apple",
  },
  {
    image: "sp6.png",
    name: "Intel",
  },
  {
    image: "sp7.jpg",
    name: "Volkswagen",
  },
];
