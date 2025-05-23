// // src/components/Account/SignupForm.jsx
// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const SignupForm = ({ onSignupSuccess }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, password, confirmPassword } = formData;

//     if (!name || !email || !password || !confirmPassword) {
//       return toast.error("Please fill all fields");
//     }

//     if (password !== confirmPassword) {
//       return toast.error("Passwords do not match");
//     }

//     const users = JSON.parse(localStorage.getItem("bp_users")) || [];
//     if (users.find((user) => user.email === email)) {
//       return toast.error("User already exists");
//     }

//     users.push({ name, email, password });
//     localStorage.setItem("bp_users", JSON.stringify(users));

//     toast.success("Signup successful. Please login.");
//     onSignupSuccess(); // switch to login view
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type='text'
//         name='name'
//         placeholder='Full Name'
//         className='w-full p-2 border mb-3 rounded'
//         onChange={handleChange}
//         value={formData.name}
//       />
//       <input
//         type='email'
//         name='email'
//         placeholder='Email'
//         className='w-full p-2 border mb-3 rounded'
//         onChange={handleChange}
//         value={formData.email}
//       />
//       <input
//         type='password'
//         name='password'
//         placeholder='Password'
//         className='w-full p-2 border mb-3 rounded'
//         onChange={handleChange}
//         value={formData.password}
//       />
//       <input
//         type='password'
//         name='confirmPassword'
//         placeholder='Confirm Password'
//         className='w-full p-2 border mb-4 rounded'
//         onChange={handleChange}
//         value={formData.confirmPassword}
//       />
//       <label className='text-sm block mb-4'>
//         <input type='checkbox' required className='mr-2' />I agree to the Terms
//         & Conditions
//       </label>
//       <button
//         type='submit'
//         className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>
//         Sign Up
//       </button>
//     </form>
//   );
// };

// export default SignupForm;
// src/components/Account/SignupForm.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignupForm = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Add a small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setIsLoading(false);
      return toast.error("Please fill all fields");
    }

    if (password !== confirmPassword) {
      setIsLoading(false);
      return toast.error("Passwords do not match");
    }

    const users = JSON.parse(localStorage.getItem("bp_users")) || [];
    if (users.find((user) => user.email === email)) {
      setIsLoading(false);
      return toast.error("User already exists");
    }

    users.push({ name, email, password });
    localStorage.setItem("bp_users", JSON.stringify(users));

    toast.success("Signup successful. Please login.");
    setIsLoading(false);
    onSignupSuccess(); // switch to login view
  };

  return (
    <div className='max-w-md mx-auto'>
      <div className='bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 max-w-md'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg
              className='w-8 h-8 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
              />
            </svg>
          </div>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
            Create Account
          </h2>
          <p className='text-gray-600'>Join us today</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Full Name Input */}
          <div className='relative'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Full Name
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </div>
              <input
                type='text'
                name='name'
                placeholder='Enter your full name'
                required
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white'
                onChange={handleChange}
                value={formData.name}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className='relative'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Email Address
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              </div>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                required
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white'
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className='relative'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Password
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                placeholder='Create a password'
                required
                className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white'
                onChange={handleChange}
                value={formData.password}
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 pr-3 flex items-center'
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <svg
                    className='h-5 w-5 text-gray-400 hover:text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-5 w-5 text-gray-400 hover:text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className='relative'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Confirm Password
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name='confirmPassword'
                placeholder='Confirm your password'
                required
                className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white'
                onChange={handleChange}
                value={formData.confirmPassword}
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 pr-3 flex items-center'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? (
                  <svg
                    className='h-5 w-5 text-gray-400 hover:text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-5 w-5 text-gray-400 hover:text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input
                type='checkbox'
                required
                className='w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2'
              />
            </div>
            <div className='ml-3 text-sm'>
              <label className='text-gray-700'>
                I agree to the{" "}
                <button
                  type='button'
                  className='text-red-600 hover:text-red-700 hover:underline font-medium'>
                  Terms & Conditions
                </button>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isLoading}
            className='w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 focus:ring-4 focus:ring-red-300 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'>
            {isLoading ? (
              <>
                <svg
                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                </svg>
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-600'>
            Already have an account?{" "}
            <button className='text-red-600 hover:text-red-700 font-medium hover:underline'>
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
