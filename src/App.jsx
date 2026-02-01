import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {/* ✅ Login Popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="app">
        {/* ✅ Navbar (always visible) */}
        <Navbar setShowLogin={setShowLogin} />

        {/* ✅ Page Routes */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />

         
         
        </Routes>
      </div>

      {/* ✅ Footer (always visible) */}
      <Footer />
    </div>
  );
};

export default App;
