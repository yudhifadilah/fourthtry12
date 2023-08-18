"use client"
import Image from "next/image";

const images = [
  { src: "/images/image1.jpg", alt: "KiD" },
  { src: "/images/image2.jpg", alt: "Udemy Machine Learning" },
  { src: "/images/image3.jpg", alt: "Rakamin Data Science" },
];

export function ImageGrid() {
  return (
    <div className="container mx-auto px-8">
      <div className="flex justify-between flex flex-wrap">
      {images.map((image, index) => (
        <div key={index} className="flex flex-row md:w-1/3 p-4">
          <Image
            className="grid grid-cols-5 gap-5 border border-black"
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
   // </div>
  );
}

export default ImageGrid;
