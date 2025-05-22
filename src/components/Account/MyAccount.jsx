// // src/components/MyAccount.jsx
// import { useState } from "react";
// import SignupForm from "./SignupForm";
// import LoginForm from "./LoginForm";

// export default function MyAccount() {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6'>
//       <div className='bg-white p-6 shadow-md rounded-lg w-full max-w-md'>
//         <div className='flex justify-around mb-4'>
//           <button
//             onClick={() => setIsLogin(true)}
//             className={`px-4 py-2 rounded ${
//               isLogin ? "bg-yellow-500 text-white" : "bg-gray-200"
//             }`}>
//             Login
//           </button>
//           <button
//             onClick={() => setIsLogin(false)}
//             className={`px-4 py-2 rounded ${
//               !isLogin ? "bg-yellow-500 text-white" : "bg-gray-200"
//             }`}>
//             Sign Up
//           </button>
//         </div>
//         {isLogin ? <LoginForm /> : <SignupForm />}
//       </div>
//     </div>
//   );
// }
