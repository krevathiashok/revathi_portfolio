import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedProject from './components/FeaturedProject'
import Portfolio from './components/Portfolio'
import LandingPageProject from './components/LandingPageProject'
import GraphicDesign from './components/GraphicDesign'
import LogoDesign from './components/LogoDesign'
import PrintBranding from './components/PrintBranding'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(el => {
          if (el.isIntersecting) {
            el.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="featured"><FeaturedProject /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="landing-page"><LandingPageProject /></section>
        <section id="graphic-design"><GraphicDesign /></section>
        <section id="logo-design"><LogoDesign /></section>
        <section id="print-branding"><PrintBranding /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
