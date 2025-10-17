import React, { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { useAdmin } from '../../Contexts/AdminContext';

function UserCardForUserDataField({data}) {
  const {DeleteUser}=useAdmin()
  return (
    <div className="h-[15vh] rounded-md w-full bg-[#ffffffdc] shadow-sm flex justify-evenly flex-col px-2 py-1">
              <div className="w-full justify-between  flex">
                <div className=" text-xl w-[20%]">{data?.name}</div>
    
                <div className=" w-[10%] flex justify-evenly items-center">
                  <div className="  text-lg text-red-500 hover:text-red-800 border" onClick={()=>DeleteUser(data?._id)} >
                    <AiOutlineDelete />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="">
                  <div className=" text-sm text-zinc-700">
                    {data?.email}
                  </div>
                  <div className=" ">{data?.role}</div>
                </div>
    
                <div className=" bg-[#ececec21] w-[10%] flex flex-col justify-center items-center py-1 shadow-sm rounded-md"><div className=" text-sm text-zinc-700 font-semibold p-1 leading-none">Order</div><div className="leading-none">{data?.orders?.length}</div></div>
              </div>
            </div>
  )
}

export default UserCardForUserDataField