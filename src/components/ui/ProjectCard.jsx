import { ArrowUpRight } from 'lucide-react'
import './ProjectCard.css'

export default function ProjectCard({ project, onClick }) {
  const { title, category, description, tags, imageUrl } = project
  const isMobile = category === 'Mobile App UI'

  return (
    <article
      className="project-card"
      onClick={() => onClick && onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick && onClick(project)
      }}
    >
      {/* Clean UI Showcase Frame */}
      <div className={`project-card__frame ${isMobile ? 'project-card__frame--mobile' : ''}`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="project-card__img"
            loading="lazy"
          />
        ) : (
          <div className="project-card__placeholder">
            <span className="project-card__placeholder-dot" />
          </div>
        )}
        <span className="project-card__category-badge">{category}</span>
      </div>

      {/* Card Content */}
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        {/* Minimal Tags & Action */}
        <div className="project-card__footer">
          {tags && tags.length > 0 && (
            <div className="project-card__tags">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="project-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <span className="project-card__cta">
            View Case <ArrowUpRight size={14} className="project-card__cta-icon" />
          </span>
        </div>
      </div>
    </article>
  )
}
