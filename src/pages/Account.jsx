import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoginForm from "../components/Account/LoginForm";
import SignupForm from "../components/Account/SignupForm";
import { ToastContainer } from "react-toastify";

const Account = () => {
  const [view, setView] = useState("login");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const initialView = searchParams.get("view");
    if (initialView === "signup") setView("signup");
  }, [searchParams]);

  const handleSignupSuccess = () => {
    setView("login");
  };

  const handleLoginSuccess = () => {
    navigate("/");
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='bg-white p-6 rounded shadow max-w-md w-full'>
        <div className='flex justify-between mb-6'>
          <button
            onClick={() => setView("login")}
            className={`font-semibold ${
              view === "login" ? "text-blue-600 underline" : ""
            }`}>
            Login
          </button>
          <button
            onClick={() => setView("signup")}
            className={`font-semibold ${
              view === "signup" ? "text-blue-600 underline" : ""
            }`}>
            Sign Up
          </button>
        </div>

        {view === "login" ? (
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        ) : (
          <SignupForm onSignupSuccess={handleSignupSuccess} />
        )}
      </div>
      <ToastContainer position='top-right' autoClose={3000} />
    </div>
  );
};

export default Account;
