import React, { useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    toast.success("Password reset link sent");
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='w-full p-2 border-b border-red-600 bg-transparent focus:outline-none'
      />
      <button
        type='submit'
        className='bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700'>
        Reset Password
      </button>
      <p className='font-extralight'>
        We will send you link to reset your password
      </p>
    </form>
  );
};

export default ForgotPassword;
