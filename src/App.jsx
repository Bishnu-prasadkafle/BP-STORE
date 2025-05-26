import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { HomeIcon } from "lucide-react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Topbanner from "./components/Topbanner";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import Account from "./pages/Account";
import Cart from "./pages/Cart";

// import ProtectedRoute from "./components/Account/ProtectedRoute";
// import MyAccount from "./components/Account/MyAccount";

function App() {
  return (
    <>
      <Topbanner />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/products' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account' element={<Account />} />

        <Route path='/policies' element={<Policies />} />
      </Routes>
      <Footer />
      {/* ✅ ToastContainer added here */}
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme='colored'
      />
    </>
  );
}

export default App;
