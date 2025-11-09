import React from 'react'
import grad from '../assets/gradient3.svg'

export default function AboutTeam(){
  return (
    <div className="min-h-screen flex items-center justify-center text-center relative bg-[#fffaf8]">
      <img src={grad} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="relative z-10 px-6 max-w-4xl">
        <h2 className="text-5xl font-bold text-[#0F3255] mb-4">About the Team</h2>
        <p className="text-[#252729]">We’re a collective of filmmakers, brand strategists, and art curators united by the belief that every project deserves to be more than a message — it deserves to be a masterpiece.</p>
      </div>
    </div>
  )
}
