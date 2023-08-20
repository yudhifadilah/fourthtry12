"use client"
import React from 'react'
import Image from "next/image";


const images = [
    { src: "/images/1.png", alt: "PHP" },
    { src: "/images/2.png", alt: "Go" },
    { src: "/images/3.png", alt: "Ci4" },
    { src: "/images/4.png", alt: "Tailwind" },

  ];
 
export function Skill() {
  return (
    <div className="container mx-lg px-8">
    <div className="px-8">
    <div className="flex justify-between flex flex-wrap border border-black">
    {images.map((image, index) => (
        <div key={index} className="flex flex-row md:w-1/2 p-4">
          <Image
            className="grid grid-cols-3 gap-3 border border-black "
            src={image.src}
            alt={image.alt}
            width={170}
            height={90}
            quality={75}
          />
          </div>
      ))}
  </div>
  </div>
</div>
  );
};