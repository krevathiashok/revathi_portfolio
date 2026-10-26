import { useState } from 'react'
import { ZoomIn, Printer, Layers, FileText, CheckCircle2 } from 'lucide-react'
import { printBrandingItems } from '../data/projects'
import SectionHeader from './ui/SectionHeader'
import Modal from './ui/Modal'
import './PrintBranding.css'

export default function PrintBranding() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="print section" id="print-branding">
      <div className="container">
        <div data-animate>
          <SectionHeader
            chip="Print & Editorial Design"
            title="Print Design & Corporate Brochures"
            subtitle="Commercial marketing collaterals, 6-panel trifold brochures, and multi-page corporate profiles designed with print-ready precision."
            align="center"
          />
        </div>

        {/* 2-Card Print Showcase Grid */}
        <div className="print__grid" data-animate>
          {printBrandingItems.map((item) => (
            <article
              key={item.id}
              className="print-card"
              onClick={() => setSelected(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelected(item)
              }}
            >
              {/* Image / Spread Preview */}
              <div className="print-card__preview">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="print-card__img"
                  loading="lazy"
                />
                <div className="print-card__overlay">
                  <span className="print-card__inspect-btn">
                    <ZoomIn size={16} /> Inspect Print Spread
                  </span>
                </div>
                <span className="print-card__badge">{item.category}</span>
              </div>

              {/* Card Body */}
              <div className="print-card__body">
                <div className="print-card__meta">
                  <span className="print-card__client">{item.client}</span>
                  <span className="print-card__format">{item.format}</span>
                </div>

                <h3 className="print-card__title">{item.title}</h3>
                <p className="print-card__desc">{item.description}</p>

                {/* Print Production Specs */}
                {item.specs && (
                  <div className="print-card__specs">
                    <Printer size={13} className="print-card__specs-icon" />
                    <div className="print-card__specs-list">
                      {item.specs.map((spec, idx) => (
                        <span key={idx} className="print-card__spec-pill">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tools & CTA */}
                <div className="print-card__footer">
                  <div className="print-card__tools">
                    {item.tools.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="print-card__tool">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="print-card__cta">View Full Spread →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* High-Resolution Inspection Modal */}
      <Modal isOpen={Boolean(selected)} onClose={() => setSelected(null)}>
        {selected && (
          <div className="print-modal">
            <div className="print-modal__preview">
              <img
                src={selected.imageUrl}
                alt={selected.title}
                className="print-modal__image"
              />
            </div>

            <div className="print-modal__info">
              <div className="print-modal__header">
                <span className="print-modal__chip">
                  <FileText size={13} /> {selected.category}
                </span>
                <span className="print-modal__client-label">
                  Client: <strong>{selected.client}</strong>
                </span>
              </div>

              <h2 className="print-modal__title">{selected.title}</h2>
              <p className="print-modal__format">{selected.format}</p>

              <div className="print-modal__section">
                <h4 className="print-modal__section-heading">Project Overview</h4>
                <p className="print-modal__text">{selected.details || selected.description}</p>
              </div>

              {/* Print Specifications */}
              {selected.specs && (
                <div className="print-modal__section">
                  <h4 className="print-modal__section-heading">
                    <Printer size={15} /> Print Production Specifications
                  </h4>
                  <ul className="print-modal__specs-grid">
                    {selected.specs.map((s, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="print-modal__check" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Highlights */}
              {selected.highlights && (
                <div className="print-modal__section">
                  <h4 className="print-modal__section-heading">Design Highlights</h4>
                  <div className="print-modal__tags-wrap">
                    {selected.highlights.map((h, idx) => (
                      <span key={idx} className="print-modal__highlight-pill">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools Used */}
              <div className="print-modal__section">
                <h4 className="print-modal__section-heading">
                  <Layers size={15} /> Tools &amp; Software
                </h4>
                <div className="print-modal__tools-list">
                  {selected.tools.map((t, idx) => (
                    <span key={idx} className="print-modal__tool-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
