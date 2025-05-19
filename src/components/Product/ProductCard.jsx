import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}?action=buy`} className='w-full'>
      <div className='bg-white rounded-2xl shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition'>
        <img
          src={product.image}
          alt={product.name}
          className='h-32 object-contain mb-4'
        />
        <h2 className='font-semibold text-center'>{product.name}</h2>
        <p className='text-red-600 font-bold mt-2'>Rs. {product.price}</p>
        <button
          className='bg-red-500 text-white px-4 py-1 rounded-full mt-3 text-sm hover:bg-red-600'
          onClick={(e) => e.stopPropagation()} // Prevent link navigation when clicking the button
        >
          Buy Now
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
