// src/components/Account/LoginForm.jsx
import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("bp_users")) || [];

    // Find user
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      toast.error("Invalid email or password!");
      return;
    }

    // Login success
    login(foundUser); // Save to context
    toast.success(`Welcome back, ${foundUser.name}!`);
    navigate("/");
  };

  return (
    <div className='max-w-md mx-auto mt-12 p-6 bg-white rounded shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Login to BP-Shop</h2>
      <form onSubmit={handleSubmit}>
        <label className='block mb-2 font-semibold'>Email</label>
        <input
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
          className='w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500'
        />

        <label className='block mb-2 font-semibold'>Password</label>
        <div className='relative'>
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            className='w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500'
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-3 top-3 text-sm text-gray-600 hover:text-red-500'>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type='submit'
          className='w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition'>
          Login
        </button>
      </form>

      <p className='mt-4 text-center text-gray-600'>
        Don't have an account?{" "}
        <Link to='/account' className='text-red-600 hover:underline'>
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
