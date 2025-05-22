import React from "react";

const TermsContent = () => (
  <div className='p-8 max-w-4xl mx-auto bg-white shadow-md rounded-2xl grid gap-6'>
    <h1 className='text-3xl font-extrabold text-gray-800 mb-2 border-b pb-2'>
      Terms of Service
    </h1>
    <p className='text-gray-600'>
      By accessing <strong>BP–SHOP</strong>, you agree to these Terms and
      Conditions. If you disagree with any part, please do not use our website.
    </p>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Age Requirement
        </h2>
        <p className='text-gray-600 text-sm'>
          You must be at least 18 years old to make purchases on our platform.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Pricing Policy
        </h2>
        <p className='text-gray-600 text-sm'>
          Product prices may change at any time without prior notification.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          Right to Refuse
        </h2>
        <p className='text-gray-600 text-sm'>
          We reserve the right to refuse service to anyone for any reason at any
          time.
        </p>
      </div>

      <div className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-xl shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>
          User Conduct
        </h2>
        <p className='text-gray-600 text-sm'>
          Users are expected to behave respectfully. Any misuse or abuse may
          result in account suspension.
        </p>
      </div>
    </div>

    <div className='text-sm text-gray-500 mt-4'>Last updated: May 21, 2025</div>
  </div>
);

export default TermsContent;
