import React from "react";

const ReturnRefundContent = () => (
  <div className='p-8 max-w-4xl mx-auto bg-white shadow-md rounded-2xl grid gap-6'>
    <h1 className='text-3xl font-extrabold text-gray-800 mb-2 border-b pb-2'>
      Return & Refund Policy
    </h1>
    <p className='text-gray-600'>
      We want you to be completely satisfied with your purchase. Here's how
      returns and refunds work:
    </p>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Return Window
        </h2>
        <p className='text-gray-600 text-sm'>
          You can return items within 7 days of delivery for a full refund.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Product Condition
        </h2>
        <p className='text-gray-600 text-sm'>
          Items must be unused, undamaged, and in original packaging.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Refund Processing
        </h2>
        <p className='text-gray-600 text-sm'>
          Refunds are processed within 7 working days after receiving the item.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Non-returnable Items
        </h2>
        <p className='text-gray-600 text-sm'>
          Certain items like perishable goods, customized products, and personal
          care items are not eligible for return.
        </p>
      </div>
    </div>

    <div className='text-sm text-gray-500 mt-4'>Last updated: May 21, 2025</div>
  </div>
);

export default ReturnRefundContent;
