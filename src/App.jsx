import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// import { HomeIcon } from "lucide-react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Topbanner from "./components/Topbanner";

function App() {
  return (
    <>
      <Topbanner />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<div>Products</div>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<div>Contact</div>} />
        <Route path='/cart' element={<div>Cart</div>} />
        <Route path='/account' element={<div>Account</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
