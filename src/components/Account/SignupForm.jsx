import React, { useState } from "react";
import { toast } from "react-toastify";

const SignupForm = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, accepted } = formData;

    if (!email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!accepted) {
      toast.error("Please accept the Terms & Policies");
      return;
    }

    toast.success("Signed up successfully");
    onSignup();
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        className='w-full p-2 border-b border-red-600 bg-transparent focus:outline-none'
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
        className='w-full p-2 border-b border-red-600 bg-transparent focus:outline-none'
      />
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        value={formData.confirmPassword}
        onChange={handleChange}
        className='w-full p-2 border-b border-red-600 bg-transparent focus:outline-none'
      />
      <label className='inline-flex items-center'>
        <input
          type='checkbox'
          name='accepted'
          checked={formData.accepted}
          onChange={handleChange}
          className='mr-2'
        />
        I accept Terms & Policies
      </label>
      <button
        type='submit'
        className='bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 ml-4'>
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
