import React from 'react'
import grad from '../assets/gradient2.svg'

export default function HeroOpenNavigation(){
  return (
    <div className="h-screen flex items-center justify-center text-center relative overflow-hidden bg-gradient-to-b from-[#FDD0C1] to-[#FF9D7D]">
      <img src={grad} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="relative z-10 max-w-3xl px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-[#0F3255] animate-fade-up">Stories built with intention</h2>
        <p className="text-[#252729] mt-4 max-w-xl">Navigation open state / CTA demo.</p>
      </div>
    </div>
  )
}
