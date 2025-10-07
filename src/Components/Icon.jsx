import React from 'react'

function Icon({children}) {
  return (
    <div className=' relative text-2xl font-light w-8 h-8 flex justify-center items-center rounded-full hover:bg-white hover:text-black hover:shadow'>{children}</div>
  )
}

export default Icon