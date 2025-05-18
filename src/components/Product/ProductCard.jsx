import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className='bg-white rounded-2xl shadow-md p-4 flex flex-col items-center'>
      <img
        src={product.image}
        alt={product.name}
        className='h-32 object-contain mb-4'
      />
      <h2 className='font-semibold text-center'>{product.name}</h2>
      <p className='text-red-600 font-bold mt-2'>Rs. {product.price}</p>
      <button className='bg-red-500 text-white px-4 py-1 rounded-full mt-3 text-sm hover:bg-red-600'>
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
