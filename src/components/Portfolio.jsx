import { useState } from 'react'
import { uiuxProjects } from '../data/projects'
import SectionHeader from './ui/SectionHeader'
import CategoryFilter from './ui/CategoryFilter'
import ProjectCard from './ui/ProjectCard'
import Modal from './ui/Modal'
import './Portfolio.css'

const CATEGORIES = ['All', 'SaaS Dashboard', 'Web App UI', 'Mobile App UI']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = active === 'All'
    ? uiuxProjects
    : uiuxProjects.filter((p) => p.category === active)

  const featured = uiuxProjects.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured || active !== 'All')

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div data-animate>
          <SectionHeader
            chip="UI/UX Design"
            title="Design Portfolio"
            subtitle="SaaS dashboards, mobile interfaces, design systems, and digital experiences crafted in Figma."
            align="center"
          />
        </div>

        {/* Featured Admini card with Main Dashboard as primary screen */}
        {active === 'All' && featured && (
          <div className="portfolio__featured" data-animate onClick={() => setSelectedProject(featured)}>
            <div className="portfolio__featured-image-wrap">
              <div className="portfolio__browser-chrome">
                <div className="portfolio__chrome-dots">
                  <span className="portfolio__chrome-dot portfolio__chrome-dot--red" />
                  <span className="portfolio__chrome-dot portfolio__chrome-dot--yellow" />
                  <span className="portfolio__chrome-dot portfolio__chrome-dot--green" />
                </div>
                <div className="portfolio__chrome-bar">
                  <span className="portfolio__chrome-url">admini.ai/dashboard</span>
                </div>
              </div>
              <div className="portfolio__featured-image">
                <img
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="portfolio__featured-real-img"
                />
                <div className="portfolio__featured-badge">Featured Case Study</div>
                <div className="portfolio__featured-hover-hint">Click to Inspect Full Case Study</div>
              </div>
            </div>

            <div className="portfolio__featured-info">
              <div className="portfolio__featured-header-row">
                <span className="portfolio__featured-cat">{featured.category}</span>
                <span className="portfolio__featured-client">Dexa IT Solutions</span>
              </div>
              <h3 className="portfolio__featured-title">{featured.title}</h3>
              <p className="portfolio__featured-desc">{featured.description}</p>

              <div className="portfolio__featured-tags">
                {featured.tags.slice(0, 4).map((t) => (
                  <span key={t} className="portfolio__tag">{t}</span>
                ))}
              </div>
              <div className="portfolio__featured-meta">
                <span>Role: <strong>{featured.role}</strong></span>
                <button className="portfolio__view-btn">View Case Study →</button>
              </div>
            </div>
          </div>
        )}

        <div data-animate style={{ marginTop: active === 'All' ? '24px' : '0' }}>
          <CategoryFilter categories={CATEGORIES} active={active} onChange={setActive} />
        </div>

        <div className="portfolio__grid" data-animate>
          {rest.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="portfolio__empty">No projects in this category yet.</div>
        )}
      </div>

      {/* Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="portfolio__modal">
            <div className="portfolio__modal-header">
              {selectedProject.imageUrl ? (
                <div
                  className={`portfolio__modal-img-wrap ${
                    selectedProject.category === 'Mobile App UI'
                      ? 'portfolio__modal-img-wrap--mobile'
                      : ''
                  }`}
                >
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="portfolio__modal-real-img"
                  />
                </div>
              ) : (
                <div className="portfolio__modal-placeholder" style={{ background: selectedProject.gradient }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
              )}
            </div>
            <div className="portfolio__modal-body">
              <div className="portfolio__modal-meta-top">
                <span className="portfolio__modal-cat">{selectedProject.category}</span>
                {selectedProject.featured && (
                  <span className="portfolio__modal-badge-featured">Enterprise SaaS Case Study</span>
                )}
              </div>
              <h3 className="portfolio__modal-title">{selectedProject.title}</h3>
              <p className="portfolio__modal-desc">{selectedProject.description}</p>
              {selectedProject.problem && (
                <div className="portfolio__modal-section">
                  <h5>Problem Statement &amp; Design Challenge</h5>
                  <p>{selectedProject.problem}</p>
                </div>
              )}
              {selectedProject.role && (
                <div className="portfolio__modal-section">
                  <h5>My Role &amp; Contribution</h5>
                  <p>{selectedProject.role} — Led end-to-end design systems, high-fidelity Figma dashboards, user flow architecture, component tokens, and developer handoff.</p>
                </div>
              )}
              {selectedProject.tools && (
                <div className="portfolio__modal-section">
                  <h5>Tools &amp; Methods Used</h5>
                  <div className="portfolio__modal-tags">
                    {selectedProject.tools.map((t) => (
                      <span key={t} className="portfolio__tag">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
