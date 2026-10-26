import { BookOpen } from 'lucide-react'
import { skillGroups } from '../data/skills'
import SectionHeader from './ui/SectionHeader'
import SkillGroup from './ui/SkillGroup'
import './Skills.css'

export default function Skills() {
  return (
    <section className="skills section">
      <div className="container">
        <div data-animate>
          <SectionHeader
            chip="Skills & Tools"
            title="My Toolkit"
            subtitle="Design tools, development technologies, AI platforms, and creative software I use to bring ideas to life."
            align="center"
          />
        </div>

        <div className="skills__grid" data-animate>
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.id}
              title={group.title}
              icon={group.icon}
              color={group.color}
              skills={group.skills}
            />
          ))}
        </div>

        {/* Currently Learning note */}
        <div className="skills__learning" data-animate>
          <div className="skills__learning-icon">
            <BookOpen size={22} color="#2563EB" />
          </div>
          <div className="skills__learning-body">
            <h4 className="skills__learning-title">Currently on a Learning Journey 🚀</h4>
            <p className="skills__learning-text">
              Actively deepening my full-stack development skills — building real projects with React, Node.js,
              PostgreSQL, and Vercel. Bridging the gap between designer and developer to ship complete, production-ready
              products end-to-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
