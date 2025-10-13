import React from "react";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";
import { useShop } from "./Contexts/ShopContext";
import { Toaster } from "react-hot-toast";

function App() {
  
  return (
     <>
    <div className="bg-[#141D2D] flex flex-col ">
      <div className="h-[15vh]"></div>
      <Nav/>
      <Toaster />
      <Outlet/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
