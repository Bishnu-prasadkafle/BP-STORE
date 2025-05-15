import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Importing product images
import ladyhandbag from "../assets/ladyhand.png";
import converse from "../assets/converse.png";
import cream from "../assets/cream.png";
import perfume from "../assets/perfume.png";
import hat from "../assets/HAT.png";
import gopro from "../assets/gopro.png";
import serum from "../assets/serum1.png";
import watch from "../assets/watch.png";
import facewash from "../assets/face-wash1.png";
import bracelet from "../assets/bracelet.png";

const products = [
  {
    name: "CHANEL Mini flap bag",
    description: "Lambskin & gold-tone metal, black",
    price: 9900,
    image: ladyhandbag,
  },
  {
    name: "Converse Shoes",
    description: "Chuck 70 Platform Shoes Ecru US 9al",
    price: 5400,
    image: converse,
  },
  {
    name: "Face Cream",
    description: "Face toner for men and women",
    price: 5000,
    image: cream,
  },
  {
    name: "Veleno Perfume",
    description: "Veleno Perfume, 100ml",
    price: 28000,
    image: perfume,
  },
  {
    name: "Serum",
    description: " Suitable for all skin types – even sensitive skin",
    price: 599,
    image: serum,
  },
  {
    name: "Mens Face-Wash",
    description:
      "Suitable for all skin types / oily / dry / sensitive / acne-prone] ",
    price: 2000,
    image: facewash,
  },
  {
    name: "Apple Watch",
    description: "Apple Watch (Black) – Style Meets Smart Technology",
    price: 9500,
    image: watch,
  },
  {
    name: "Titanium Steel Men's Bracelet",
    description: "Made with premium titanium steel.",
    price: 2500,
    image: bracelet,
  },
  {
    name: "GoPro HERO4",
    description: "Waterproof Action Camera",
    price: 70000,
    image: gopro,
  },
  {
    name: "HAT",
    description: "Vintage Wear HAT",
    price: 2100,
    image: hat,
  },
];

const FeaturedProducts = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='relative px-6 py-10'>
      <h2 className='text-3xl font-bold text-gray-900 mb-6'>
        Featured{" "}
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
        className='flex flex-row   overflow-x-auto space-x-6 scrollbar-hide px-4'>
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
            <p className='text-gray-500 overflow-ellipsis text-sm mb-2'>
              {product.description}
            </p>
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
};

export default FeaturedProducts;
