import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    </AuthProvider>
  </BrowserRouter>
);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./app/store";
// import { BrowserRouter } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//         <ToastContainer position='top-right' autoClose={2000} />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );
