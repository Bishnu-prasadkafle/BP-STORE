import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./Context/AuthContext.jsx";
// import { Provider } from "react-redux";
// import { store } from "./Redux/Store.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <StrictMode>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </StrictMode>
    </AuthProvider>
  </BrowserRouter>
);
