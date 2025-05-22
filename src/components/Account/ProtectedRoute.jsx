// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);

//   if (!user) {
//     // If no user, redirect to login page
//     return <Navigate to='/login' replace />;
//   }

//   // Otherwise, render children (protected component)
//   return children;
// };

// export default ProtectedRoute;
