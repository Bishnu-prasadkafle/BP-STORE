import React, { useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = products.find((p) => p.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const cartRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const action = params.get("action");

    if (action === "buy" && cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  if (!product) {
    return (
      <div className='text-center text-red-600 mt-10'>Product not found.</div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className='max-w-6xl mx-auto p-6'>
      {/* Product Details */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
        {/* Left Column: Main Image + Thumbnails */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className='w-full max-h-[400px] object-contain rounded mb-4'
          />

          {/* Small Similar Product Thumbnails */}
          <div className='flex gap-2 flex-wrap'>
            {relatedProducts.map((relProd) => (
              <Link key={relProd.id} to={`/product/${relProd.id}`}>
                <img
                  src={relProd.image}
                  alt={relProd.name}
                  className='h-16 w-16 object-contain border p-1 rounded hover:scale-105 transition'
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div>
          <h1 className='text-2xl font-bold mb-2'>{product.name}</h1>
          <p className='text-red-600 text-xl font-semibold mb-4'>
            Rs. {product.price}
          </p>
          <p className='text-gray-600 mb-4'>
            {product.description || "No description available."}
          </p>

          <select className='border p-2 rounded mb-4 w-full max-w-xs'>
            <option>Select Size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>

          {/* Add to Cart Section */}
          <div ref={cartRef} className='flex items-center space-x-4 mb-4'>
            <div className='flex items-center border rounded px-3 py-1'>
              <button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className='text-xl px-2 hover:text-red-600'>
                -
              </button>
              <span className='px-3'>{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className='text-xl px-2 hover:text-green-600'>
                +
              </button>
            </div>
            <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className='mt-12'>
        <h2 className='text-xl font-semibold mb-4'>Similar Products</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className='border rounded shadow p-4 flex flex-col items-center'>
              <img
                src={item.image}
                alt={item.name}
                className='h-28 object-contain mb-2'
              />
              <h3 className='text-sm font-semibold text-center'>{item.name}</h3>
              <p className='text-red-500 font-bold mt-1'>Rs. {item.price}</p>
              <Link
                to={`/product/${item.id}?action=buy`}
                className='mt-3 bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600'>
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
