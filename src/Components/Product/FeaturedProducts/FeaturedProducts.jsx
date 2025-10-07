import React, { useState } from 'react'
import List from '../../Pages/DataApi'
import { NavLink } from 'react-router-dom'

function FeaturedProducts() {
    const [FeaturedProducts,setFeaturedProducts]=useState(List.FeaturedProducts)

  return (
     <section className="p-10">
    <h2 className="text-2xl font-bold mb-6 text-gray-50">Featured Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

    {/* <!-- PRODUCT --> */}
 {FeaturedProducts.map((e,i)=>{
    return(
    <NavLink to={`/product`} key={i}>
      
<div className=" overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  {/* <!-- Image Container --> */}
  <div className="relative group boxele">
    <div className=" absolute h-full w-full  hover:bg-[#1111116e] cursor-pointer"></div>
    
    <img className="rounded-t-lg w-full h-[45vh] object-cover " src={e.ImgUrl} alt="JORDAN 1 RETRO HIGH DIOR" />
  <h5 className=' absolute bottom-0 mb-2 ml-3 cursor-pointer text-lg font-bold tracking-tight text-gray-900 dark:text-white '>{e.title}</h5>

  </div>
</div>
    </NavLink>)
 })}


    </div>
  </section>
  )
}

export default FeaturedProducts