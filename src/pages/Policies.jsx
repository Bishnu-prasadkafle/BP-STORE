import React from "react";
<nav className='mb-6 space-x-4 text-blue-600 underline'>
  <a href='#terms'>Terms</a>
  <a href='#privacy'>Privacy</a>
  <a href='#return'>Return</a>
  <a href='#shipping'>Shipping</a>
</nav>;

import TermsContent from "../components/Policies/TermsContent";
import PrivacyContent from "../components/Policies/PrivacyContent";
import ReturnRefundContent from "../components/Policies/ReturnRefundContent";
import ShippingContent from "../components/Policies/ShipppingContent";
const Policies = () => {
  return (
    <div className='max-w-4xl mx-auto  py-6 space-y-2 text-gray-900'>
      <h1 className='text-3xl font-bold mb-6'>
        Our
        <span className='text-red-600'> Policies</span>
      </h1>

      <TermsContent />
      <PrivacyContent />
      <ReturnRefundContent />
      <ShippingContent />
    </div>
  );
};

export default Policies;
