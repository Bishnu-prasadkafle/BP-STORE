import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import trekkingpole from "../assets/trekkingpole.png";
import gel from "../assets/Gel.png";
// import cream from "../assets/cream.png";
import boot from "../assets/boots1.png";
import scarf from "../assets/scarf.png";
import bag from "../assets/bag.png";
import serum from "../assets/serum1.png";
// import watch from "../assets/watch.png";
// import facewash from "../assets/face-wash1.png";
// import bracelet from "../assets/bracelet.png";

const products = [
  {
    name: "Treeking Pole",
    description: "Adjustable Lightweight Trekking Poles ",
    price: 1100,
    image: trekkingpole,
  },

  {
    name: "Skin Care Gel",
    description: "Made In Aruba World's Finest Aloe",
    price: 2200,
    image: gel,
  },

  {
    name: "Trekking Boot",
    price: 22000,
    image: boot,
    description: " Crafted from high-quality materials ",
  },
  {
    name: "Scarf",
    description:
      "  handmade scarf is crafted from 100% soft, breathable cotton — perfect for year-round wear. ",
    price: 2000,
    image: scarf,
  },
  {
    name: "Trekking Bag",
    description: "",
    price: 6800,
    image: bag,
  },
  {
    name: "Serum",
    description: ".........",
    price: 1800,
    image: serum,
  },
];

function Updateproducts() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='relative px-6 py-10'>
      <h2 className='text-3xl font-bold text-gray-900 mb-6'>
        Latest{" "}
        <span className='text-red-600 border-b-4 border-red-600'>Products</span>
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2'>
        <ArrowLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2'>
        <ArrowRight />
      </button>

      {/* Product Scroll Container */}
      <div
        ref={scrollRef}
        className='flex flex-row overflow-x-auto space-x-6 scrollbar-hide px-4'>
        {products.map((product, index) => (
          <div
            key={index}
            className='w-80 flex-shrink-0 rounded-xl shadow-md p-4 bg-white relative transition-transform duration-300 hover:scale-105'>
            <img
              src={product.image}
              alt={product.name}
              className='w-full h-48 object-contain mb-4'
            />
            <h3 className='text-lg font-semibold text-gray-900 mb-1'>
              {product.name}
            </h3>
            <p className='text-gray-500 text-sm mb-2'>{product.description}</p>
            <div className='text-red-600 font-bold text-xl mb-1'>
              NRS: {product.price.toLocaleString()}
            </div>
            <button className='absolute bottom-4 right-4 w-10 h-10 rounded-full bg-red-600 text-white text-xl flex items-center justify-center'>
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Updateproducts;
