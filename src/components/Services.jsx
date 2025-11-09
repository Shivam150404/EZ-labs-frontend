import React from 'react'

const cards = [
  { title: 'Film Production', desc: 'From concept to screen.' },
  { title: 'Branding', desc: 'Identity and strategy.' },
  { title: 'Art Curation', desc: 'Exhibitions & displays.' },
]

export default function Services(){
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#0F3255] px-6">
      <h2 className="text-5xl font-bold text-[#F15D2B] mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map(c=> (
          <div key={c.title} className="w-72 p-6 bg-[#fff4f1] rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
            <p className="text-[#252729]">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
