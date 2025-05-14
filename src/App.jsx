import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// import { HomeIcon } from "lucide-react";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<div>Products</div>} />
        <Route path='/about' element={<div>About</div>} />
        <Route path='/contact' element={<div>Contact</div>} />
        <Route path='/cart' element={<div>Cart</div>} />
        <Route path='/account' element={<div>Account</div>} />
      </Routes>
    </>
  );
}

export default App;
