import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrump(props) {
    const {product} = props 
  return (
    <>
    {/* <!-- Breadcrumb --> */}
     <div className="container mx-auto px-4 py-4">
    <nav className="text-gray-400">
      <Link to={"/"} className="hover:text-white">Home</Link>
      <span className="mx-2">|</span>
      <Link to={"/product"} className="hover:text-white">Products</Link>
      <span className="mx-2">|</span>
      <span className="text-white">{product?.name}</span>
    </nav>
  </div>


    </>
  )
}

export default BreadCrump