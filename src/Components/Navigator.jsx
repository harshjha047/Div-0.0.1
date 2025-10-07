import React from "react";
import { NavLink } from "react-router-dom";

function Navigator() {
  const element = [
    { name: "Home", url: "/" },
    { name: "Product", url: "/product" },
    { name: "Help", url: "/help" },
    { name: "About Us", url: "/aboutus" },
  ];
  return (
    <div className="flex px-8 bg-[#11111121] relative rounded-2xl shadow-md">
      {element.map((e, i) => {
        return (
          <NavLink to={e.url}  key={i} className={()=>`m-4 font-semibold hover:text-[#ffffff] cursor-pointer navidatorItem flex flex-col justify-center items-center`}>
         {e.name} <div className={`navidatorItemLine h-[2px] bg-white`}></div> 
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navigator;
