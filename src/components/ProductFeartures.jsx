import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { products } from "../data/Products";
import { Link } from "react-router";

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
        className='flex flex-row overflow-x-auto space-x-6 scrollbar-hide px-4'>
        {products.slice(0, 10).map((product) => (
          <div
            key={product.id}
            className='w-80 flex-shrink-0 rounded-xl shadow-md p-4 bg-white relative transition-transform duration-300 hover:scale-105'>
            <img
              src={product.image}
              alt={product.name}
              className='w-full h-48 object-contain mb-4'
            />
            <h3 className='text-lg font-semibold text-gray-900 mb-1'>
              {product.name}
            </h3>
            {/* <p className='text-gray-500 overflow-ellipsis text-sm mb-2'>
              {product.description}
            </p> */}
            <div className='text-red-600 font-bold text-xl mb-1'>
              NRS: {product.price.toLocaleString()}
            </div>
            <Link to={`/product/${product.id}?action=buy`}>
              <button className='absolute bottom-4 right-4 w-10 h-10 rounded-full bg-red-600 text-white text-xl flex items-center justify-center'>
                +
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;
