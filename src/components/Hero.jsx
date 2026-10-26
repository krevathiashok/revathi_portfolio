import { useState } from 'react'
import { Sparkles, Layers, Cpu, ArrowUpRight } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16
    setMousePos({ x, y })
  }

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      {/* Background grid */}
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="hero__container container">
        {/* LEFT */}
        <div className="hero__left">
          <div className="hero__badge animate-fadeInUp">
            <span className="hero__badge-dot" />
            Open to Opportunities &amp; Creative Collaborations
          </div>

          <h1 className="hero__heading animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Designing{' '}
            <span className="gradient-text">Experiences.</span>
            <br />
            Creating Visual{' '}
            <span className="gradient-text">Stories.</span>
            <br />
            Building for the{' '}
            <span className="gradient-text">Web.</span>
          </h1>

          <p className="hero__sub animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            I blend user-centered design, AI-powered creativity, and hands-on web development to create
            meaningful digital experiences — from intuitive interfaces and brand visuals to functional web applications.
          </p>

          <div className="hero__chips animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <span className="hero__chip hero__chip--blue">UI/UX Designer</span>
            <span className="hero__chip hero__chip--purple">AI Creative Designer</span>
            <span className="hero__chip hero__chip--green">Web App Builder</span>
          </div>

          <div className="hero__ctas animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button
              className="btn btn-primary"
              onClick={() => handleScroll('#featured')}
            >
              Explore My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className="btn btn-outline"
              onClick={() => handleScroll('#contact')}
            >
              Let's Connect
            </button>
          </div>
        </div>

        {/* RIGHT — Animated Visual Composition with Revathi's Admini AI Artwork */}
        <div className="hero__right animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div
            className="hero__visual-wrapper"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false)
              setMousePos({ x: 0, y: 0 })
            }}
          >
            {/* Glowing background aura */}
            <div className="hero__glow" />

            {/* Main Animated Showcase Card */}
            <div
              className={`hero__showcase-card ${isHovered ? 'hero__showcase-card--hovered' : 'animate-hero-float'}`}
              style={{
                transform: isHovered
                  ? `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) translateY(-8px)`
                  : undefined,
              }}
            >
              {/* Card top bar */}
              <div className="hero__card-topbar">
                <div className="hero__card-dots">
                  <span className="hero__db-dot hero__db-dot--red" />
                  <span className="hero__db-dot hero__db-dot--yellow" />
                  <span className="hero__db-dot hero__db-dot--green" />
                </div>
                <div className="hero__card-label">
                  <Cpu size={12} className="hero__card-label-icon" />
                  <span>Admini — AI SaaS Creative Direction</span>
                </div>
                <a
                  href="#portfolio"
                  onClick={(e) => { e.preventDefault(); handleScroll('#portfolio') }}
                  className="hero__card-link"
                  title="View Case Study"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* The Hero Image */}
              <div className="hero__image-container">
                <img
                  src="/images/admini-hero.png"
                  alt="Admini AI-powered business development ecosystem showcase by Revathi"
                  className="hero__artwork-img"
                  loading="eager"
                />
                <div className="hero__image-sheen" aria-hidden="true" />
              </div>
            </div>

            {/* Floating interactive badge 1: Top Right */}
            <div className="hero__float-badge hero__float-badge--top animate-float">
              <div className="hero__float-badge-icon hero__float-badge-icon--blue">
                <Sparkles size={16} />
              </div>
              <div className="hero__float-badge-text">
                <span className="hero__float-badge-title">AI Design Workflows</span>
                <span className="hero__float-badge-sub">Intelligent SaaS UI</span>
              </div>
            </div>

            {/* Floating interactive badge 2: Bottom Left */}
            <div className="hero__float-badge hero__float-badge--bottom animate-float-delayed">
              <div className="hero__float-badge-icon hero__float-badge-icon--purple">
                <Layers size={16} />
              </div>
              <div className="hero__float-badge-text">
                <span className="hero__float-badge-title">Design Systems</span>
                <span className="hero__float-badge-sub">Figma ➔ Live React Code</span>
              </div>
            </div>

            {/* Subtle animated floating dots */}
            <div className="hero__dot hero__dot--blue" />
            <div className="hero__dot hero__dot--purple" />
            <div className="hero__dot hero__dot--teal" />
            <div className="hero__dot hero__dot--pink" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
