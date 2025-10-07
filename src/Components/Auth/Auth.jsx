import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function Auth() {
    const[page,setPage]=useState(true)
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* <!-- Toggle Buttons --> */}
        <div className="text-center ">
          <div className="flex bg-gray-800 rounded-lg p-1 max-w-sm mx-auto relative items-center">
            {/* <div className=" absolute flex-1 py-2 px-4 rounded-md text-gray-400 h-full w-1/2 left-0 bg-[#0000005b] z-[1] "></div> */}
            <button
              className={`flex-1 py-2 px-4 rounded-md text-gray-400 ${page?"bg-blue-600 text-white":""}  font-medium transition-all hover:text-white`}
              onClick={()=>{setPage(true)}}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-md text-gray-400 ${page?"":"bg-blue-600 text-white"} font-medium transition-all hover:text-white `}
              onClick={()=>{setPage(false)}}
            >
              Sign Up
            </button>
          </div>
        </div>
        {page?<Login/>:<SignUp/>}
      </div>
    </div>
  );
}

export default Auth;
