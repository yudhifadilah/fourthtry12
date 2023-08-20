"use client"
import Image from "next/image";

const images = [
  { src: "/images/image1.jpg", alt: "KiD" },
  { src: "/images/image2.jpg", alt: "Udemy Machine Learning" },
  { src: "/images/image3.jpg", alt: "Rakamin Data Science" },
];

export function ImageGrid() {
  return (
    <div className="container mx-lg px-8">
          <div className="px-8">
      <div className="flex justify-between flex flex-wrap border border-black">
      {images.map((image, index) => (
        <div key={index} className="flex flex-row md:w-1/2 p-3">
          <Image
            className="grid grid-cols-3 gap-3 border border-black"
            src={image.src}
            alt={image.alt}
            width={230}
            height={90}
            quality={75}
          />
        </div>
      ))}
        </div>
        </div>
   </div>
  );
}

export default ImageGrid;
