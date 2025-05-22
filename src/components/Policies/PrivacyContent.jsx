import React from "react";

const PrivacyContent = () => (
  <div className='p-8 max-w-4xl mx-auto bg-white shadow-md rounded-2xl grid gap-6'>
    <h1 className='text-3xl font-extrabold text-gray-800 mb-2 border-b pb-2'>
      Privacy Policy
    </h1>
    <p className='text-gray-600'>
      We respect your privacy. This policy explains how we collect, use, and
      protect your information.
    </p>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Data Collection
        </h2>
        <p className='text-gray-600 text-sm'>
          We only collect essential data to provide and improve our services.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Data Sharing
        </h2>
        <p className='text-gray-600 text-sm'>
          We never sell or share your personal data with third parties.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          User Control
        </h2>
        <p className='text-gray-600 text-sm'>
          You have full control over your data and can request its deletion
          anytime.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>Security</h2>
        <p className='text-gray-600 text-sm'>
          We use industry-standard measures to protect your information from
          unauthorized access.
        </p>
      </div>
    </div>

    <div className='text-sm text-gray-500 mt-4'>Last updated: May 21, 2025</div>
  </div>
);

export default PrivacyContent;
