import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setView }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user
    localStorage.setItem("user", JSON.stringify({ name }));

    // Navigate to home
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='w-full p-2 mb-4 border rounded'
        required
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='w-full p-2 mb-4 border rounded'
        required
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='w-full p-2 mb-4 border rounded'
        required
      />
      <button
        type='submit'
        className='w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition'>
        Login
      </button>

      <p className='mt-4 text-sm text-center'>
        <button
          type='button'
          onClick={() => setView("forgot")}
          className='text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-105 underline'>
          Forgot your password?
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
