import React from 'react'

function Loader() {
  return (
    <div className='h-screen fixed top-0 w-full z-50 bg-black flex justify-center items-center'>
        <div className="h-[10vh] w-[10vh] border-[2vh] border-[#111]  border-r-white  animate-spin rounded-full "></div>
        </div>
  )
}

export default Loader