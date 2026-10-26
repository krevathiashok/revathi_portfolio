import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <img
                  src="/images/revathi-brand-r.png"
                  alt="Revathi Emblem"
                  className="footer__logo-icon"
                />
                <span>Revathi</span>
                <span className="footer__logo-dot">.</span>
              </div>
              <p className="footer__tagline">
                Designing experiences. Creating visual stories. Building for the web.
              </p>
              <div className="footer__avail">
                <span className="footer__avail-dot" />
                Open to opportunities
              </div>
            </div>

            {/* Links */}
            <div className="footer__links-col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer__link"
                      onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="footer__social-col">
              <h4 className="footer__col-title">Connect</h4>
              <div className="footer__socials">
                <a
                  href="https://github.com/krevathiashok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <div className="footer__social footer__social--disabled" title="LinkedIn coming soon">
                  <Linkedin size={18} />
                  <span>LinkedIn <em>(soon)</em></span>
                </div>
                <a
                  href="mailto:krevathi.me@gmail.com"
                  className="footer__social"
                >
                  <Mail size={18} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copy">
            © 2026 Revathi. Designed &amp; Built with <span className="footer__heart">♥</span> passion.
          </p>
        </div>
      </div>
    </footer>
  )
}
