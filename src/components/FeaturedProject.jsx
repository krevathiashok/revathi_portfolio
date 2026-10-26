import { useState } from 'react'
import { ExternalLink, Github, CheckCircle2, Clock, ListFilter, PlusCircle, Database, Server, Globe, ChevronRight } from 'lucide-react'
import { featuredProject } from '../data/projects'
import './FeaturedProject.css'

export default function FeaturedProject() {
  const { title, description, imageUrl, tags, liveUrl, sourceUrl, flows, learnings } = featuredProject
  const [activeFlowIndex, setActiveFlowIndex] = useState(0)

  return (
    <section className="featured section" id="featured">
      <div className="container">
        {/* Header */}
        <div className="featured__top" data-animate>
          <span className="featured__chip">⭐ Featured Project — My First Full-Stack Web App</span>
          <h2 className="featured__title">{title}</h2>
          <div className="featured__live-badge">
            <span className="featured__live-dot" />
            Live &amp; Deployed on Vercel
          </div>
          <p className="featured__desc">{description}</p>
        </div>

        {/* 1. Real Application Showcase & Primary Details */}
        <div className="featured__showcase-grid">
          {/* LEFT: Browser Window Mockup with Real Screenshot */}
          <div className="featured__browser-window" data-animate="left">
            <div className="featured__chrome">
              <div className="featured__chrome-dots">
                <span className="featured__cdot featured__cdot--red" />
                <span className="featured__cdot featured__cdot--yellow" />
                <span className="featured__cdot featured__cdot--green" />
              </div>
              <div className="featured__url-bar">
                <span className="featured__lock">🔒</span>
                <span className="featured__url">daily-task-app-dusky.vercel.app</span>
              </div>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="featured__chrome-open"
                title="Open live app in new tab"
              >
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Real Screenshot Container */}
            <div className="featured__screenshot-wrap">
              <img
                src={imageUrl}
                alt="My Daily Tasks web application screenshot showing tasks, metrics, and actions"
                className="featured__screenshot"
                loading="lazy"
              />
              <div className="featured__screenshot-overlay">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary featured__screenshot-cta"
                >
                  <ExternalLink size={15} />
                  Open Live Deployed App
                </a>
              </div>
            </div>

            {/* In-App Live Metrics Summary Callout */}
            <div className="featured__metrics-callout">
              <div className="featured__metric-item">
                <span className="featured__metric-val">4</span>
                <span className="featured__metric-lbl">Total Tasks</span>
              </div>
              <div className="featured__metric-item featured__metric-item--pending">
                <span className="featured__metric-val">3</span>
                <span className="featured__metric-lbl">Pending Tasks</span>
              </div>
              <div className="featured__metric-item featured__metric-item--completed">
                <span className="featured__metric-val">1</span>
                <span className="featured__metric-lbl">Completed Task</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Quick Info, CTAs & Tech Stack */}
          <div className="featured__sidebar" data-animate="right">
            {/* Action buttons */}
            <div className="featured__actions-card">
              <h3 className="featured__card-title">Experience the Live App</h3>
              <p className="featured__card-desc">
                Fully functional web application connecting a React client, Express REST API, and PostgreSQL cloud database.
              </p>
              <div className="featured__actions-btns">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary featured__btn-full"
                >
                  <ExternalLink size={16} />
                  View Live App
                </a>
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline featured__btn-full"
                >
                  <Github size={16} />
                  View Source Code
                </a>
              </div>
            </div>

            {/* Technology Stack Badges */}
            <div className="featured__tech-card">
              <h4 className="featured__tech-title">Technology Stack</h4>
              <div className="featured__tags">
                {tags.map((tag) => (
                  <span key={tag} className="featured__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="featured__core-caps">
              <div className="featured__cap-item">
                <Database size={16} className="featured__cap-icon" />
                <span>Neon PostgreSQL Cloud Database</span>
              </div>
              <div className="featured__cap-item">
                <Server size={16} className="featured__cap-icon" />
                <span>Express.js RESTful API Endpoints</span>
              </div>
              <div className="featured__cap-item">
                <Globe size={16} className="featured__cap-icon" />
                <span>Continuous Deployment on Vercel</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Structured Layout: The Flows Used in Task App */}
        <div className="featured__flows-section" data-animate>
          <div className="featured__flows-header">
            <span className="section-header__chip">Application Architecture</span>
            <h3 className="featured__flows-title">The Flows Used in Daily Task App</h3>
            <p className="featured__flows-subtitle">
              Detailed step-by-step breakdown of how user interactions travel through React state, REST APIs, and database persistence.
            </p>
          </div>

          {/* Flow Tabs */}
          <div className="featured__flow-tabs">
            {flows.map((flow, index) => (
              <button
                key={flow.id}
                className={`featured__flow-tab ${activeFlowIndex === index ? 'featured__flow-tab--active' : ''}`}
                onClick={() => setActiveFlowIndex(index)}
              >
                <span className="featured__flow-tab-num">0{index + 1}</span>
                <span className="featured__flow-tab-name">{flow.name.replace(/^\d+\.\s*/, '')}</span>
              </button>
            ))}
          </div>

          {/* Active Flow Detail Panel */}
          {flows[activeFlowIndex] && (
            <div className="featured__flow-panel">
              <div className="featured__flow-panel-header">
                <div className="featured__flow-panel-info">
                  <span className="featured__flow-badge">
                    {flows[activeFlowIndex].badge}
                  </span>
                  <h4 className="featured__flow-panel-title">
                    {flows[activeFlowIndex].name}
                  </h4>
                  <p className="featured__flow-panel-summary">
                    {flows[activeFlowIndex].summary}
                  </p>
                </div>
              </div>

              {/* Step-by-Step Flow Pipeline */}
              <div className="featured__flow-steps">
                {flows[activeFlowIndex].steps.map((step, idx) => (
                  <div key={idx} className="featured__step-card">
                    <div className="featured__step-indicator">
                      <span className="featured__step-circle">{idx + 1}</span>
                      {idx < flows[activeFlowIndex].steps.length - 1 && (
                        <span className="featured__step-line" />
                      )}
                    </div>
                    <div className="featured__step-content">
                      <span className="featured__step-text">{step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 3. What I Learned Section */}
        <div className="featured__learnings-section" data-animate>
          <div className="featured__learnings-header">
            <span className="section-header__chip">Engineering Growth</span>
            <h3 className="featured__learnings-heading">What I Learned Building This Project</h3>
          </div>
          <div className="featured__learnings-grid">
            {learnings.map((item, idx) => (
              <div key={idx} className="featured__learning-card">
                <div className="featured__learning-top">
                  <span className="featured__learning-index">0{idx + 1}</span>
                  <CheckCircle2 size={18} className="featured__learning-check" />
                </div>
                <h4 className="featured__learning-title">{item.title}</h4>
                <p className="featured__learning-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
