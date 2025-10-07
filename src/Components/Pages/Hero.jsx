import React, { useState } from 'react'
import List from "./DataApi.js"
import { NavLink, useNavigate } from 'react-router-dom'

function Hero() {
    const navigate=useNavigate()

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
    <img src="https://images.pexels.com/photos/33597709/pexels-photo-33597709.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Sneakers Collection" />
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 max-w-2xl px-4">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Discover Our Sneakers</h2>
      <p className="text-lg md:text-xl mb-8 text-gray-200">Step into comfort and style with our exclusive collection</p>
      <button onClick={()=>{navigate("/product")}} className="inline-block bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">Shop Now</button>
    </div>
  </section>
  )
}

export default Hero