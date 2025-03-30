"use client"
import { url } from "inspector";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 2,
    url: "https://www.pexels.com/photo/green-and-blue-peacock-feather-674010/",
  },

  {
    id: 3,
    url: "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 4,
    url: "https://www.pexels.com/photo/close-up-photo-of-glowing-blue-butterflies-326055/",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className="">
      <div className=" h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="30vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className=" flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className=" w-1/4 h-32 relative gap-4 mt-8"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="50vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
