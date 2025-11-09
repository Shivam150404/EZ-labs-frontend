import React from 'react'
import grad from '../assets/gradient1.svg'

export default function Hero(){
  return (
    <div className="h-screen flex items-center justify-center text-center relative overflow-hidden bg-gradient-to-b from-[#FF9D7D] to-[#FDD0C1]">
      <img src={grad} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-[48px] md:text-[80px] font-extrabold text-[#0F3255] leading-tight animate-fade-in">Varnan is where stories find their voice and form</h1>
        <p className="text-[20px] md:text-[28px] text-[#F15D2B] mt-4">Films · Brands · Art</p>
        <p className="text-[#252729] mt-6 max-w-2xl">Since 2009, we’ve been telling stories — stories of people, their journeys, and the places that shape them.</p>
      </div>
    </div>
  )
}
