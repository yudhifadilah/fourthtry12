"use client"
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const images = [
  { src: "/image1.jpg", alt: "KiD" },
  { src: "/image2.jpg", alt: "Udemy Machine Learning" },
  { src: "/image3.jpg", alt: "Rakamin Data Science" },
];

export function ImageGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative h-96">
          <Image
            className="h-full w-full rounded-xl object-cover object-center border border-black"
            src={image.src}
            alt={image.alt}
            width={450}
            height={250}
            quality={75}
          />
          <figcaption className="absolute bottom-4 left-4">
            <Typography variant="body" color="yellow">
               {index + 1}
            </Typography>
          </figcaption>
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
