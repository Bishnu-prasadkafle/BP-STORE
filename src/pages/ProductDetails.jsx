// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../data/Products";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../features/cart/CartSlice";
// import { toast } from "react-toastify";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const productId = Number(id);
//   // const product = products.find((p) => p.id.toString() === id);
//   const product = products.find((p) => p.id === productId);
//   const dispatch = useDispatch();
//   const [quantity, setQuantity] = useState(1);

//   if (!product)
//     return (
//       <div className='text-center mt-10 text-red-600'>Product not found.</div>
//     );

//   const handleAddToCart = () => {
//     dispatch(addToCart({ ...product, quantity, id: product.id.toString }));
//     toast.success("Successfully added to cart!");
//   };

//   return (
//     <div className='max-w-4xl mx-auto p-6 '>
//       <div className='flex flex-col md:flex-row gap-8'>
//         <img
//           src={product.image}
//           alt={product.name}
//           className='w-full md:w-1/2 object-contain rounded shadow'
//         />
//         <div className='md:w-1/2 flex flex-col justify-between'>
//           <div>
//             <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
//             <p className='text-red-600 text-2xl font-semibold mb-6'>
//               Rs. {product.price}
//             </p>
//             <p className='text-gray-700 mb-6'>{product.description}</p>
//           </div>
//           <div>
//             <div className='flex items-center mb-4 space-x-4'>
//               <button
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                 className='bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded'>
//                 -
//               </button>
//               <span className='text-xl'>{quantity}</span>
//               <button
//                 onClick={() => setQuantity((q) => q + 1)}
//                 className='bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded'>
//                 +
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition'>
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/Products";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className='text-center mt-10 text-red-600'>Product not found.</div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success("Successfully added to cart!");
  };

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <div className='flex flex-col md:flex-row gap-8'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full md:w-1/2 object-contain rounded shadow'
        />
        <div className='md:w-1/2 flex flex-col justify-between'>
          <div>
            <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
            <p className='text-red-600 text-2xl font-semibold mb-6'>
              Rs. {product.price}
            </p>
            <p className='text-gray-700 mb-6'>{product.description}</p>
          </div>
          <div>
            <div className='flex items-center mb-4 space-x-4'>
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className='bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded'>
                -
              </button>
              <span className='text-xl'>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className='bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded'>
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
