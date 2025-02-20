import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { LoginPopup } from "./components/LoginPopup/LoginPopup";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import Loader from "./components/Loader/Loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const App = () => {
  //display popup for login
  const [showLogin, setShowLogin] = useState(false);

  useGSAP(() => {
    var t1 = gsap.timeline();
    t1.from(".loader h3", {
      x: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    });
    t1.to(".loader h3", {
      opacity: 0,
      x: -10,
      duration: 1,
      stagger: 0.1,
    });
    t1.to(".loader", {
      opacity: 0,
    });
    t1.to(".loader", {
      display: "none",
    });
    t1.from(".navbar .log,.navbar .navbar-menu a,.navbar .navbar-right ", {
      y: -30,
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
      stagger: 0.1,
    },"-=0.9");
    t1.from(".header",{
        y: 100,
        opacity: 0,
      },"-=0.8");
  });

  return (
    <>
      <Loader />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="app">
        {/* <Navbar setShowLogin={setShowLogin}/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
