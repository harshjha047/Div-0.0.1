// import { useProduct } from '../Context/ProductContext'

import { useState } from "react"
import { NavLink } from "react-router-dom"

function Filter() {
    const {filtered, setFiltered}=useState("all")
  return (
     <div className="w-full  h-[15vh] top-[18vh] absolute ">
      <div className="w-[100%]  sm:mx-auto lg:mx-auto sm:w-[90%] lg:w-[90%]">
        <NavLink to={"/product"} onClick={()=>setFiltered("all")} className={`border py-3 px-6 hover:border-white hover:text-white ${filtered ==="all"?console.log("hello"):"border-[#ffffff2d]"}  text-[#d1d1d1]`}>All</NavLink>
        <NavLink to={'/product/Nike'} onClick={()=>setFiltered("Nike")} className={`border  py-3 px-6 hover:border-white hover:text-white border-[#ffffff2d] text-[#d1d1d1]`}>Nike</NavLink>
        <NavLink to={'/product/Adidas'} onClick={()=>setFiltered("Adidas")} className={`border  py-3 px-6 hover:border-white hover:text-white border-[#ffffff2d] text-[#d1d1d1]`}>Adidas</NavLink>
        <NavLink to={'/product/Puma'} onClick={()=>setFiltered("Puma")} className={`border py-3 px-6 hover:border-white hover:text-white border-[#ffffff2d] text-[#d1d1d1]`}>Puma</NavLink>
      </div>
    </div>
  )
}

export default Filter