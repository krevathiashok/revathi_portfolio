import * as LucideIcons from 'lucide-react'
import './SkillGroup.css'

export default function SkillGroup({ title, icon, color, skills }) {
  const IconComponent = LucideIcons[icon] || LucideIcons.Star

  return (
    <div className="skill-group" style={{ '--group-color': color }}>
      <div className="skill-group__accent" />
      <div className="skill-group__header">
        <div className="skill-group__icon-wrap" style={{ background: `${color}1a`, border: `1px solid ${color}33` }}>
          <IconComponent size={20} color={color} />
        </div>
        <h3 className="skill-group__title">{title}</h3>
      </div>
      <div className="skill-group__pills">
        {skills.map((skill) => (
          <span key={skill} className="skill-group__pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
