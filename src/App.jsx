import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HeroOpenNavigation from './components/HeroOpenNavigation.jsx'
import AboutTeam from './components/AboutTeam.jsx'
import AboutUs from './components/AboutUs.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'

export default function App(){ 
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section id="hero"><Hero /></section>
        <section id="open"><HeroOpenNavigation /></section>
        <section id="team"><AboutTeam /></section>
        <section id="about"><AboutUs /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  )
}
