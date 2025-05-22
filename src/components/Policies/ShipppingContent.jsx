import React from "react";

const ShippingContent = () => (
  <div className='p-8 max-w-4xl mx-auto bg-white shadow-md rounded-2xl grid gap-6'>
    <h1 className='text-3xl font-extrabold text-gray-800 mb-2 border-b pb-2'>
      Shipping Information
    </h1>
    <p className='text-gray-600'>
      We deliver across Nepal with care, speed, and transparency. Here's
      everything you need to know:
    </p>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Delivery Time
        </h2>
        <p className='text-gray-600 text-sm'>
          Your orders are delivered within 2–5 business days depending on your
          location.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Shipping Charges
        </h2>
        <p className='text-gray-600 text-sm'>
          Shipping costs vary by location and will be calculated at checkout.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Real-Time Tracking
        </h2>
        <p className='text-gray-600 text-sm'>
          You can track your orders live through your dashboard after dispatch.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Delivery Partners
        </h2>
        <p className='text-gray-600 text-sm'>
          We work with trusted local courier services for safe and fast
          delivery.
        </p>
      </div>
    </div>

    <div className='text-sm text-gray-500 mt-4'>Last updated: May 21, 2025</div>
  </div>
);

export default ShippingContent;
