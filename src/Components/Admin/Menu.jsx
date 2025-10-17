import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='h-[97%] rounded-lg bg-[#F8F7F1] w-[19%] border flex flex-col gap-1 px-2 py-3'>
        <div className="flex justify-center items-center h-[10vh] w-full text-lg font-semibold my-1">Menu</div>
        {/* <Link to={"dashboard"} className="flex justify-center items-center h-[10vh] w-full border bg-white rounded-lg shadow-lg hover:shadow-none">Dashboard</Link> */}
        <Link to={"users"} className="flex justify-center items-center h-[10vh] w-full border bg-white rounded-lg shadow-lg hover:shadow-none">Users</Link>
        <Link to={"products"} className="flex justify-center items-center h-[10vh] w-full border bg-white rounded-lg shadow-lg hover:shadow-none">Products</Link>
        
    </div>
  )
}

export default Menu