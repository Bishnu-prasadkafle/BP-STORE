// ✅ SignupForm.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return toast.error("Please fill all fields");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    const users = JSON.parse(localStorage.getItem("bp_users")) || [];
    const userExists = users.find((user) => user.email === email);
    if (userExists) return toast.error("User already exists");

    const updatedUsers = [...users, { name, email, password }];
    localStorage.setItem("bp_users", JSON.stringify(updatedUsers));
    toast.success("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className='max-w-md mx-auto mt-10 bg-white p-6 rounded shadow'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Full Name'
          className='w-full p-2 border mb-3 rounded'
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          className='w-full p-2 border mb-3 rounded'
          onChange={handleChange}
          value={formData.email}
        />
        <div className='relative'>
          <input
            type={showPassword ? "text" : "password"}
            name='password'
            placeholder='Password'
            className='w-full p-2 border mb-3 rounded'
            onChange={handleChange}
            value={formData.password}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-3 top-2 cursor-pointer text-sm text-blue-600'>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          className='w-full p-2 border mb-4 rounded'
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <label className='flex items-center text-sm mb-4'>
          <input type='checkbox' required className='mr-2' /> I agree to the
          Terms & Conditions
        </label>

        <button
          type='submit'
          className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded'>
          Sign Up
        </button>

        {/* <Link
          to='/login'
          className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded'>
          Sign up
        </Link> */}
      </form>
      <p className='text-center text-sm mt-4'>
        Already have an account?{" "}
        <Link to='/login' className='text-blue-600'>
          Login here
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
