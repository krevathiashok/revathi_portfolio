import { ExternalLink, Globe, Sun, Wind, Zap, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import './LandingPageProject.css'

export default function LandingPageProject() {
  const liveUrl = 'https://www.aureonconsultancy.in/'

  return (
    <section className="landing-showcase section" id="landing-page">
      <div className="container">
        <div data-animate>
          <SectionHeader
            chip="Featured Client Web Project"
            title="Landing Page & Web Presence"
            subtitle="Commercial web design and frontend implementation built for Aureon Consultancy, a renewable energy advisory firm."
            align="center"
          />
        </div>

        <div className="landing-showcase__card" data-animate>
          {/* LEFT: Realistic Laptop Mockup */}
          <div className="landing-showcase__mockup-col">
            <div className="laptop-mockup">
              {/* Laptop Lid & Screen */}
              <div className="laptop-mockup__lid">
                {/* Top Bezel Camera Notch */}
                <div className="laptop-mockup__bezel-top">
                  <span className="laptop-mockup__camera-lens" />
                </div>

                {/* Sleek Browser Bar */}
                <div className="laptop-mockup__browser-bar">
                  <div className="laptop-mockup__dots">
                    <span className="laptop-mockup__dot laptop-mockup__dot--red" />
                    <span className="laptop-mockup__dot laptop-mockup__dot--yellow" />
                    <span className="laptop-mockup__dot laptop-mockup__dot--green" />
                  </div>
                  <div className="laptop-mockup__url-pill">
                    <Globe size={11} className="laptop-mockup__globe-icon" />
                    <span>www.aureonconsultancy.in</span>
                    <span className="laptop-mockup__live-tag">LIVE</span>
                  </div>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="laptop-mockup__ext-btn"
                    title="Open live website in new tab"
                    aria-label="Open Aureon Consultancy website"
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* Display Canvas with Aureon Interface */}
                <div className="laptop-mockup__screen">
                  {/* Aureon Navbar */}
                  <div className="landing-mock__nav">
                    <div className="landing-mock__logo-wrap">
                      <img
                        src="/images/logos/aureon-consultancy.png"
                        alt="Aureon Consultancy Logo"
                        className="landing-mock__logo-img"
                      />
                      <div className="landing-mock__brand-text">
                        <span className="landing-mock__brand-name">AUREON</span>
                        <span className="landing-mock__brand-sub">CONSULTANCY</span>
                      </div>
                    </div>
                    <div className="landing-mock__nav-links">
                      <span>Solutions</span>
                      <span>Group Captive</span>
                      <span>Solar &amp; Wind</span>
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="landing-mock__nav-cta"
                      >
                        Consult Now
                      </a>
                    </div>
                  </div>

                  {/* Aureon Hero Banner */}
                  <div className="landing-mock__hero">
                    <div className="landing-mock__pill">
                      <Zap size={11} /> Renewable Energy Advisory &amp; Optimization
                    </div>
                    <h3 className="landing-mock__heading">
                      Powering Industrial Growth with <span>Clean Energy</span> Solutions
                    </h3>
                    <p className="landing-mock__lead">
                      Specialized advisory helping commercial and industrial enterprises transition to solar, wind, and hybrid power systems while slashing electricity tariffs.
                    </p>
                    <div className="landing-mock__actions">
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="landing-mock__primary-btn"
                      >
                        Explore Advisory Models <ArrowRight size={12} />
                      </a>
                      <span className="landing-mock__audit-tag">Free Energy Audit</span>
                    </div>
                  </div>

                  {/* Solution Pillars */}
                  <div className="landing-mock__grid">
                    <div className="landing-mock__card">
                      <div className="landing-mock__card-icon landing-mock__card-icon--solar">
                        <Sun size={15} />
                      </div>
                      <h4>Solar &amp; Wind Assets</h4>
                      <p>Procurement, EPC coordination, and captive generation planning.</p>
                    </div>
                    <div className="landing-mock__card">
                      <div className="landing-mock__card-icon landing-mock__card-icon--hybrid">
                        <Wind size={15} />
                      </div>
                      <h4>Hybrid Power Systems</h4>
                      <p>Continuous base-load integration with high reliability and low downtime.</p>
                    </div>
                    <div className="landing-mock__card">
                      <div className="landing-mock__card-icon landing-mock__card-icon--shield">
                        <ShieldCheck size={15} />
                      </div>
                      <h4>Group Captive Models</h4>
                      <p>Regulatory compliance &amp; long-term subsidized power procurement.</p>
                    </div>
                  </div>
                </div>

                {/* Realistic Screen Glare */}
                <div className="laptop-mockup__glare" aria-hidden="true" />
              </div>

              {/* Laptop Chassis / Keyboard Deck Base */}
              <div className="laptop-mockup__base">
                <div className="laptop-mockup__base-notch" />
                <div className="laptop-mockup__base-lip" />
              </div>

              {/* Ambient Surface Shadow */}
              <div className="laptop-mockup__shadow" aria-hidden="true" />
            </div>
          </div>

          {/* RIGHT: Project Story & Technical Deliverables */}
          <div className="landing-showcase__content">
            <div className="landing-showcase__meta-top">
              <span className="landing-showcase__badge">Commercial Client Work</span>
              <span className="landing-showcase__status">
                <span className="landing-showcase__status-dot" /> Deployed &amp; Active
              </span>
            </div>

            <h3 className="landing-showcase__title">Aureon Consultancy</h3>
            <p className="landing-showcase__client-tag">
              CleanTech &amp; Renewable Energy Advisory
            </p>

            <p className="landing-showcase__desc">
              Designed and built the official responsive landing page for Aureon Consultancy. The design translates complex energy regulations, Group Captive power structures, and solar ROI into an authoritative, clean, high-conversion digital presence for industrial decision-makers.
            </p>

            <div className="landing-showcase__deliverables">
              <h4 className="landing-showcase__section-title">Design &amp; Development Highlights</h4>
              <ul className="landing-showcase__list">
                <li>
                  <CheckCircle2 size={16} className="landing-showcase__check" />
                  <span><strong>Brand-to-Web Cohesion:</strong> Seamlessly extended the Aureon logo and visual identity system into clean web tokens.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="landing-showcase__check" />
                  <span><strong>B2B Conversion Flow:</strong> High-impact solution cards, consultation funnels, and energy audit inquiry CTAs.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="landing-showcase__check" />
                  <span><strong>Mobile-First Performance:</strong> Responsive CSS layout optimized for rapid loading on all mobile and desktop screens.</span>
                </li>
              </ul>
            </div>

            <div className="landing-showcase__tech-tags">
              <span className="landing-showcase__tag">UI/UX Design</span>
              <span className="landing-showcase__tag">Responsive Web</span>
              <span className="landing-showcase__tag">Brand Identity</span>
              <span className="landing-showcase__tag">CleanTech</span>
              <span className="landing-showcase__tag">Figma</span>
            </div>

            <div className="landing-showcase__actions">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary landing-showcase__btn-live"
              >
                <span>Visit Live Website</span>
                <ExternalLink size={15} />
              </a>

              <button
                type="button"
                className="btn btn-secondary landing-showcase__btn-logo"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent('open-logo-modal', { detail: 'aureon-consultancy' })
                  )
                  const el =
                    document.querySelector('#logo-aureon-consultancy') ||
                    document.querySelector('#logo-design')
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}
              >
                <span>View Logo &amp; Identity</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
