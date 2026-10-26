import { useState, useEffect } from 'react'
import { ZoomIn, Sparkles, Palette, Layers, Award } from 'lucide-react'
import { logoDesignItems } from '../data/projects'
import SectionHeader from './ui/SectionHeader'
import CategoryFilter from './ui/CategoryFilter'
import Modal from './ui/Modal'
import './LogoDesign.css'

const CATEGORIES = [
  'All',
  'CleanTech & Energy',
  'Luxury & Celebrations',
  'Spiritual & Wellness',
  'Food & FMCG',
  'Textiles & Craft',
  'SaaS & Tech',
]

export default function LogoDesign() {
  const [active, setActive] = useState('All')
  const [selectedLogo, setSelectedLogo] = useState(null)

  useEffect(() => {
    const handleOpenLogo = (e) => {
      const logoId = e.detail
      const found = logoDesignItems.find((item) => item.id === logoId)
      if (found) {
        setActive('All')
        setSelectedLogo(found)
      }
    }
    window.addEventListener('open-logo-modal', handleOpenLogo)
    return () => window.removeEventListener('open-logo-modal', handleOpenLogo)
  }, [])

  const filtered =
    active === 'All'
      ? logoDesignItems
      : logoDesignItems.filter((item) => item.category === active)

  return (
    <section className="logos section" id="logo-design">
      <div className="container">
        <div data-animate>
          <SectionHeader
            chip="Brand Identity & Marks"
            title="Logo Design & Brand Marks"
            subtitle="Distinctive brand emblems, sacred geometric marks, luxury couture symbols, and tech monograms crafted for commercial and enterprise clients."
            align="center"
          />
        </div>

        <div data-animate>
          <CategoryFilter
            categories={CATEGORIES}
            active={active}
            onChange={setActive}
          />
        </div>

        {/* Logos Grid */}
        <div className="logos__grid" data-animate>
          {filtered.map((item) => (
            <article
              key={item.id}
              id={`logo-${item.id}`}
              className={`logo-card logo-card--${item.bgTheme}`}
              onClick={() => setSelectedLogo(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedLogo(item)
              }}
            >
              {/* Logo Presentation Stage */}
              <div className={`logo-card__stage logo-card__stage--${item.bgTheme}`}>
                <div className="logo-card__img-wrap">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="logo-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="logo-card__overlay">
                  <span className="logo-card__inspect-btn">
                    <ZoomIn size={16} /> Inspect Mark
                  </span>
                </div>
              </div>

              {/* Logo Details */}
              <div className="logo-card__body">
                <div className="logo-card__meta">
                  <span className="logo-card__category">{item.category}</span>
                  <span className="logo-card__client">{item.client}</span>
                </div>

                <h3 className="logo-card__title">{item.title}</h3>
                {item.subtitle && (
                  <p className="logo-card__subtitle">{item.subtitle}</p>
                )}

                <p className="logo-card__desc">{item.description}</p>

                {/* Color Palette Preview */}
                {item.palette && (
                  <div className="logo-card__palette" title="Brand color palette">
                    <Palette size={13} className="logo-card__palette-icon" />
                    <div className="logo-card__swatches">
                      {item.palette.map((color, idx) => (
                        <span
                          key={idx}
                          className="logo-card__swatch"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="logo-card__tags">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="logo-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* High-Resolution Inspection Modal */}
      <Modal
        isOpen={Boolean(selectedLogo)}
        onClose={() => setSelectedLogo(null)}
      >
        {selectedLogo && (
          <div className="logo-modal">
            <div className={`logo-modal__preview logo-modal__preview--${selectedLogo.bgTheme}`}>
              <img
                src={selectedLogo.imageUrl}
                alt={selectedLogo.title}
                className="logo-modal__image"
              />
            </div>

            <div className="logo-modal__info">
              <div className="logo-modal__header">
                <span className="logo-modal__chip">
                  <Award size={13} /> {selectedLogo.category}
                </span>
                <span className="logo-modal__client-label">
                  Client: <strong>{selectedLogo.client}</strong>
                </span>
              </div>

              <h2 className="logo-modal__title">{selectedLogo.title}</h2>
              {selectedLogo.subtitle && (
                <p className="logo-modal__subtitle">{selectedLogo.subtitle}</p>
              )}

              {/* Color Palette with Hex Codes */}
              {selectedLogo.palette && (
                <div className="logo-modal__section">
                  <h4 className="logo-modal__section-heading">
                    <Palette size={15} /> Color Palette Tokens
                  </h4>
                  <div className="logo-modal__palette-grid">
                    {selectedLogo.palette.map((hex, idx) => (
                      <div key={idx} className="logo-modal__swatch-card">
                        <span
                          className="logo-modal__swatch-circle"
                          style={{ backgroundColor: hex }}
                        />
                        <span className="logo-modal__swatch-hex">{hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Concept & Rationale */}
              <div className="logo-modal__section">
                <h4 className="logo-modal__section-heading">
                  <Sparkles size={15} /> Symbolism &amp; Design Rationale
                </h4>
                <p className="logo-modal__text">{selectedLogo.rationale}</p>
              </div>

              {/* Tools & Specifications */}
              <div className="logo-modal__section">
                <h4 className="logo-modal__section-heading">
                  <Layers size={15} /> Vector Craft &amp; Software
                </h4>
                <div className="logo-modal__tools-list">
                  {selectedLogo.tools.map((t, i) => (
                    <span key={i} className="logo-modal__tool-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="logo-modal__tags-wrap">
                {selectedLogo.tags.map((tag, i) => (
                  <span key={i} className="logo-modal__tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
