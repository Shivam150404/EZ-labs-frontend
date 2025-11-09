import React from 'react'
import grad from '../assets/gradient4.svg'

export default function AboutUs(){
  return (
    <div className="min-h-screen flex items-center justify-center text-center relative bg-[#fff4f1]">
      <img src={grad} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="relative z-10 px-6 max-w-4xl">
        <h2 className="text-5xl font-bold text-[#0F3255] mb-4">About Us</h2>
        <p className="text-[#252729]">Every project is more than just a brief — it’s a new chapter waiting to be written. Together, we craft tales that inspire, connect, and endure.</p>
      </div>
    </div>
  )
}
