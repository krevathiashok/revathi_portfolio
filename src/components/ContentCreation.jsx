import { useState } from 'react'
import { PenLine, Megaphone, FileVideo, MessageSquare } from 'lucide-react'
import { contentItems } from '../data/projects'
import SectionHeader from './ui/SectionHeader'
import CategoryFilter from './ui/CategoryFilter'
import './ContentCreation.css'

const CATEGORIES = ['All', 'Social Media Copy', 'Promotional Copy', 'Video Scripts', 'Brand Communication']

const iconMap = {
  PenLine,
  Megaphone,
  FileVideo,
  MessageSquare,
}

const categoryColors = {
  'Social Media Copy': '#2563EB',
  'Promotional Copy': '#7C3AED',
  'Video Scripts': '#DB2777',
  'Brand Communication': '#059669',
}

export default function ContentCreation() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? contentItems
      : contentItems.filter((i) => i.category === active)

  return (
    <section className="content section">
      <div className="container">
        <div data-animate>
          <SectionHeader
            chip="Content Creation"
            title="Words That Work"
            subtitle="Compelling copy for social media, promotional campaigns, video scripts, and brand communication."
            align="center"
          />
        </div>

        <div data-animate>
          <CategoryFilter categories={CATEGORIES} active={active} onChange={setActive} />
        </div>

        <div className="content__grid" data-animate>
          {filtered.map((item) => {
            const Icon = iconMap[item.icon] || PenLine
            const color = categoryColors[item.category] || '#2563EB'
            return (
              <article key={item.id} className="content__card">
                <div
                  className="content__card-icon-wrap"
                  style={{
                    background: `${color}1a`,
                    border: `1px solid ${color}33`,
                  }}
                >
                  <Icon size={28} color={color} />
                </div>
                <div className="content__card-body">
                  <span
                    className="content__card-type"
                    style={{ color, background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    {item.category}
                  </span>
                  <h3 className="content__card-title">{item.title}</h3>
                  <p className="content__card-desc">{item.description}</p>
                  <p className="content__card-note">
                    ✏️ Add your content examples to <code>src/data/projects.js</code>
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
