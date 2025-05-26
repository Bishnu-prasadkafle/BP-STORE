import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleIncrease = (id, currentQuantity) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecrease = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  if (cartItems.length === 0) {
    return (
      <div className='text-center mt-10 text-gray-600 h-screen'>
        🛒 Your cart is empty.
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-6'>Your Shopping Cart</h1>
      <div className='space-y-6'>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between p-4 border rounded shadow'>
            <div className='flex items-center gap-4'>
              <img
                src={item.image}
                alt={item.name}
                className='w-20 h-20 object-contain rounded'
              />
              <div>
                <h2 className='font-semibold'>{item.name}</h2>
                <p className='text-gray-600'>Rs. {item.price}</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <button
                onClick={() => handleDecrease(item.id, item.quantity)}
                className='bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded text-lg'>
                -
              </button>
              <span className='text-xl'>{item.quantity}</span>
              <button
                onClick={() => handleIncrease(item.id, item.quantity)}
                className='bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded text-lg'>
                +
              </button>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className='text-red-600 hover:underline'>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
