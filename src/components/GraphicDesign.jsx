import { useState } from 'react'
import { ZoomIn, Sparkles, Layers } from 'lucide-react'
import { graphicDesignItems } from '../data/projects'
import SectionHeader from './ui/SectionHeader'
import CategoryFilter from './ui/CategoryFilter'
import Modal from './ui/Modal'
import './GraphicDesign.css'

const CATEGORIES = ['All', 'Product Promo', 'Brand Marketing', 'Festival', 'Campaigns', 'Social Media']

const categoryIcons = {
  'Social Media': '📱',
  Festival: '🎉',
  'Brand Marketing': '📣',
  'Product Promo': '🛒',
  Campaigns: '🚀',
}

export default function GraphicDesign() {
  const [active, setActive] = useState('All')
  const [selectedPoster, setSelectedPoster] = useState(null)

  const filtered =
    active === 'All'
      ? graphicDesignItems
      : graphicDesignItems.filter((i) => i.category === active)

  return (
    <section className="graphic section" id="graphic-design">
      <div className="container">
        <div data-animate>
          <SectionHeader
            chip="Visual Design &amp; Advertising"
            title="Visual Creatives &amp; Posters"
            subtitle="Commercial campaign creatives, product advertisements, brand posters, and traditional festival graphics."
            align="center"
          />
        </div>

        <div data-animate>
          <CategoryFilter categories={CATEGORIES} active={active} onChange={setActive} />
        </div>

        {/* Poster Gallery Grid */}
        <div className="graphic__grid" data-animate>
          {filtered.map((item) => (
            <article
              key={item.id}
              className="graphic__item"
              onClick={() => setSelectedPoster(item)}
            >
              <div className="graphic__img-container">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="graphic__item-img"
                  loading="lazy"
                />
                <div className="graphic__item-badge">
                  <span>{categoryIcons[item.category] || '🎨'}</span>
                  <span>{item.category}</span>
                </div>
              </div>

              {/* Hover overlay with campaign details */}
              <div className="graphic__item-overlay">
                <div className="graphic__item-inner">
                  <span className="graphic__item-client">{item.client}</span>
                  <h3 className="graphic__item-title">{item.title}</h3>
                  <div className="graphic__item-tools">
                    {item.tools.map((t) => (
                      <span key={t} className="graphic__item-tool">{t}</span>
                    ))}
                  </div>
                  <div className="graphic__item-view-btn">
                    <ZoomIn size={14} />
                    <span>View Full Poster</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="graphic__empty">No creatives in this category yet.</div>
        )}
      </div>

      {/* High-Resolution Poster Detail Modal */}
      <Modal isOpen={!!selectedPoster} onClose={() => setSelectedPoster(null)}>
        {selectedPoster && (
          <div className="graphic__modal">
            <div className="graphic__modal-preview">
              <img
                src={selectedPoster.imageUrl}
                alt={selectedPoster.title}
                className="graphic__modal-img"
              />
            </div>
            <div className="graphic__modal-body">
              <div className="graphic__modal-meta">
                <span className="graphic__modal-cat">
                  {categoryIcons[selectedPoster.category] || '🎨'} {selectedPoster.category}
                </span>
                <span className="graphic__modal-client">Client: <strong>{selectedPoster.client}</strong></span>
              </div>
              <h3 className="graphic__modal-title">{selectedPoster.title}</h3>
              <p className="graphic__modal-desc">{selectedPoster.description}</p>

              {selectedPoster.highlights && (
                <div className="graphic__modal-section">
                  <span className="graphic__modal-label">Key Highlights &amp; Concept:</span>
                  <div className="graphic__modal-tags">
                    {selectedPoster.highlights.map((h) => (
                      <span key={h} className="graphic__modal-tag">{h}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="graphic__modal-section">
                <span className="graphic__modal-label">Design &amp; Creative Tools:</span>
                <div className="graphic__modal-tools-list">
                  {selectedPoster.tools.map((t) => (
                    <span key={t} className="graphic__modal-tool">{t}</span>
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
