import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductCard(props) {
  return (
     <div  className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 relative group">
      {/* {console.log(props._id)} */}
      <NavLink onClick={()=>window.scrollTo(0,0)} to={`/product/Item/${props.id.toString()}`}>
      <div className="flex justify-between items-center mb-4">
        <img src={props.brandLogo} alt={props.brand} className="h-12"/>
      </div>

      <div className="relative flex justify-center">
        <img src={props.images} alt={props.category} className="h-40 object-contain"/>

      </div>

      <div className="mt-4">
        <span className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">Best Seller</span>
      </div>

      <h3 className="mt-3 font-semibold text-gray-800">{props.name}</h3>
      <h3 className="text-gray-600 text-sm my-1">{props.brand} | {props.category}</h3>


      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-sm">Price</p>
        <p className="font-bold text-green-600 text-lg">₹{props.price}</p>
      </div>
      </NavLink>
    </div>
  )
}

export default ProductCard