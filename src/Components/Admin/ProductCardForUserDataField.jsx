import React, { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { useAdmin } from '../../Contexts/AdminContext';
import { Link } from 'react-router-dom';

function ProductCardForUserDataField({avshasa}) {
//   const {DeleteUser}=useAdmin()
  return (
    <Link to={`/admin/products/${avshasa._id}`} className="h-[15vh] rounded-md w-full bg-[#ffffffdc] shadow-sm flex justify-evenly flex-col px-2 py-1 hover:shadow-lg">
              <div className="w-full justify-between  flex">
                <div className=" text-xl ">{avshasa?.name}</div>
              </div>
              <div className="flex justify-between items-center ">
                <div className="">
                  <div className=" text-sm text-zinc-700">
                    <span>₹ {avshasa?.new_price}</span> | <span>category : {avshasa?.category}</span> | <span>brand : {avshasa?.brand}</span> | <span>stock : {avshasa?.stock}</span> | <span>#{avshasa?._id}</span>
                    
                  </div>
                </div>
    
              </div>
            </Link>
  )
}

export default ProductCardForUserDataField