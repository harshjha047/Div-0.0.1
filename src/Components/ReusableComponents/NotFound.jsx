import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='h-screen w-full  relative flex justify-center items-center overflow-hidden'>
        <div className="text-[#6300003a] cursor-default absolute text-[50rem] z-0 font-semibold">404</div>
        <div className="text-white flex flex-col absolute z-10">
            <div className=" w-full justify-center flex">404</div>
            <div className="w-full justify-center flex">SORRY WE CANNOT FIND THIS PAGE</div>
            <div className="w-full justify-center flex"><Link className='border px-4 rounded bg-[#00000027] cursor-pointer py-2' to={"/"}>Go back</Link></div>
        </div>
    </div>
  )
}

export default NotFound