import React from 'react'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Header(){
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <a href="#hero" className="text-xl font-bold text-[#0F3255]">V Films</a>
        <nav className="flex gap-6">
          {links.map(l=> (
            <a key={l.href} href={l.href} className="text-[#0F3255] hover:text-[#F15D2B] transition"
              onClick={(e)=>{ e.preventDefault(); const id=l.href.replace('#',''); const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth', block:'start'}); }}
            >{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
