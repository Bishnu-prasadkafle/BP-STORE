import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import LoginForm from "../components/Account/LoginForm";
import SignupForm from "../components/Account/SignupForm";
import ForgotPassword from "../components/Account/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const [searchParams] = useSearchParams();
  const initialView = searchParams.get("view") || "login";

  const [view, setView] = useState(initialView);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  const renderView = () => {
    if (view === "signup")
      return <SignupForm onSignup={() => setView("login")} setView={setView} />;
    if (view === "login")
      return <LoginForm onLogin={() => setView("login")} setView={setView} />;
    if (view === "forgot") return <ForgotPassword setView={setView} />;
    return <LoginForm onLogin={handleLogin} setView={setView} />;
  };

  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-[#1a1a1a] dark:to-[#0f0f0f] px-4 py-10 text-gray-900 dark:text-white'>
      <div className='bg-white dark:bg-[#121212] shadow-lg rounded-xl p-8 w-full max-w-md'>
        <div className='flex justify-between mb-6'>
          <button
            onClick={() => setView("login")}
            className={`font-semibold ${
              view === "login" ? "text-red-600 underline" : ""
            }`}>
            Login
          </button>
          <button
            onClick={() => setView("signup")}
            className={`font-semibold ${
              view === "signup" ? "text-red-600 underline" : ""
            }`}>
            Sign Up
          </button>
        </div>
        {renderView()}
      </div>
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Account;
