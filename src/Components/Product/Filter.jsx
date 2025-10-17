// import { useProduct } from '../Context/ProductContext'

import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "../Admin/SearchBar"
import { IoSearch } from "react-icons/io5"
import { useShop } from "../../Contexts/ShopContext"

function Filter() {
    const {filtered, setFiltered}=useState("all")
    const {search,setSearch,data,filteredData, setFilteredData}=useShop()
    
      useEffect(()=>setFilteredData(data),[data])
       useEffect(()=>{
              setFilteredData(
          data?.filter((user) => {
            return (
              user?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
              user?.description?.toLowerCase()?.includes(search?.toLowerCase()) ||
              user?.category?.toLowerCase()?.includes(search?.toLowerCase()) ||
              user?.brand?.toLowerCase()?.includes(search?.toLowerCase())
            );
          })
        );
      },[search])
      useEffect(()=>setFilteredData(data),[])
      console.log(filteredData);
      
  return (
     <div className="w-full  h-[15vh] top-[18vh] absolute ">
      <div className="w-[100%]  sm:mx-auto lg:mx-auto sm:w-[90%] lg:w-[90%] flex justify-between">
        <div className="">
        <NavLink to={"/product"} onClick={()=>setFiltered("all")} className={`border py-3 px-6 hover:border-white hover:text-white ${filtered ==="all"?console.log("hello"):"border-[#ffffff2d]"}  text-[#d1d1d1]`}>All</NavLink>
        <NavLink to={'/product/Nike'} onClick={()=>setFiltered("Nike")} className={`border  py-3 px-6 hover:border-white hover:text-white border-[#ffffff2d] text-[#d1d1d1]`}>Nike</NavLink>
        <NavLink to={'/product/Adidas'} onClick={()=>setFiltered("Adidas")} className={`border  py-3 px-6 hover:border-white hover:text-white border-[#ffffff2d] text-[#d1d1d1]`}>Adidas</NavLink>
        <NavLink to={'/product/Puma'} onClick={()=>setFiltered("Puma")} className={`border py-3 px-6 hover:border-white hover:text-white border-[#ffffff2d] text-[#d1d1d1]`}>Puma</NavLink>
      </div>
      <div className=" relative">
        <form action="">            
          <button className="bg-[#fff] h-full pl-2 text-lg absolute right-3" type='submit'><IoSearch/></button>
                    <input
                      list="search"
                      name="search"
                      id="searchBar"
                      className={`bg-[#fff] border-none h-full pl-4 py-2 focus:border-none focus:outline-none outline-none`}
                      placeholder="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    /></form></div>
      </div>
    </div>
  )
}

export default Filter