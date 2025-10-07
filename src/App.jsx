import React from "react";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";
import { useShop } from "./Contexts/ShopContext";

function App() {
  
  return (
     <>
    <div className="bg-[#141D2D] flex flex-col ">
      <Nav/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
