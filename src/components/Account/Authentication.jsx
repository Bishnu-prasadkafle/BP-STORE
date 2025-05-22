// import React, { useState } from "react";

// const AuthCard = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `${isLogin ? "Logging in" : "Signing up"} with data:\n` +
//         JSON.stringify(form, null, 2)
//     );
//   };

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-200/50 to-zinc-500 dark:from-[#1a1a1a]/70 dark:to-[#0f0f0f] px-4'>
//       <div className='bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-xs text-white'>
//         <div className='flex justify-between mb-6'>
//           <button
//             onClick={() => setIsLogin(true)}
//             className={`pb-1 font-semibold ${
//               isLogin
//                 ? "border-b-2 border-red-600 text-red-600"
//                 : "text-gray-300"
//             }`}>
//             LOG IN
//           </button>
//           <button
//             onClick={() => setIsLogin(false)}
//             className={`pb-1 font-semibold ${
//               !isLogin
//                 ? "border-b-2 border-red-600 text-red-600"
//                 : "text-gray-300"
//             }`}>
//             SIGN UP
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className='space-y-4'>
//           <div>
//             <input
//               type='text'
//               name='phone'
//               placeholder='Phone Number'
//               value={form.phone}
//               onChange={handleChange}
//               className='w-full bg-transparent border-b border-white/40 focus:border-red-600 outline-none py-1 text-sm placeholder-white/60'
//             />
//           </div>
//           <div>
//             <input
//               type='password'
//               name='password'
//               placeholder='Password'
//               value={form.password}
//               onChange={handleChange}
//               className='w-full bg-transparent border-b border-white/40 focus:border-red-600 outline-none py-1 text-sm placeholder-white/60'
//             />
//           </div>

//           {!isLogin && (
//             <div>
//               <input
//                 type='password'
//                 name='confirmPassword'
//                 placeholder='Confirm Password'
//                 value={form.confirmPassword}
//                 onChange={handleChange}
//                 className='w-full bg-transparent border-b border-white/40 focus:border-red-600 outline-none py-1 text-sm placeholder-white/60'
//               />
//             </div>
//           )}

//           <button
//             type='submit'
//             className='w-full bg-red-600 hover:bg-red-700 transition text-white text-sm font-medium py-2 rounded-full mt-2'>
//             {isLogin ? "LOG IN" : "SIGN UP"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AuthCard;
