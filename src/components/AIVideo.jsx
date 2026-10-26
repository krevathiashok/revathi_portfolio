import { useState } from 'react'
import { Play, Youtube } from 'lucide-react'
import { aiVideoItems } from '../data/projects'
import SectionHeader from './ui/SectionHeader'
import CategoryFilter from './ui/CategoryFilter'
import './AIVideo.css'

const CATEGORIES = ['All', 'AI Visuals', 'YouTube Videos', 'Motivational', 'Kids Stories', 'Devotional', 'AI Production']

export default function AIVideo() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? aiVideoItems
      : aiVideoItems.filter((i) => i.category === active)

  return (
    <section className="aivideo section">
      <div className="container">
        <div data-animate>
          <SectionHeader
            chip="AI Video & YouTube"
            title="AI Video Projects"
            subtitle="AI-generated visuals, motivational content, kids stories, devotional series, and YouTube productions."
            align="center"
          />
        </div>

        <div data-animate>
          <CategoryFilter categories={CATEGORIES} active={active} onChange={setActive} />
        </div>

        <div className="aivideo__grid" data-animate>
          {filtered.map((item) => (
            <article key={item.id} className="aivideo__card">
              {/* Thumbnail / placeholder */}
              <div className="aivideo__thumbnail" style={{ background: item.gradient }}>
                {item.youtubeId ? (
                  <a
                    href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aivideo__play-link"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.title}
                      className="aivideo__yt-thumb"
                    />
                    <div className="aivideo__play-btn">
                      <Play size={24} fill="white" />
                    </div>
                  </a>
                ) : (
                  <div className="aivideo__placeholder">
                    <div className="aivideo__placeholder-icon">
                      <Youtube size={36} color="rgba(255,255,255,0.35)" />
                    </div>
                    <div className="aivideo__placeholder-play">
                      <Play size={20} fill="rgba(255,255,255,0.6)" color="transparent" />
                    </div>
                  </div>
                )}
                <span className="aivideo__category-badge">{item.category}</span>
              </div>

              <div className="aivideo__body">
                <h3 className="aivideo__title">{item.title}</h3>
                <p className="aivideo__desc">{item.description}</p>
                <div className="aivideo__tools">
                  {item.tools.map((t) => (
                    <span key={t} className="aivideo__tool">{t}</span>
                  ))}
                </div>
                {!item.youtubeId && (
                  <p className="aivideo__note">
                    📺 Add a <code>youtubeId</code> to <code>data/projects.js</code> to embed this video.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Info note */}
        <div className="aivideo__info-note" data-animate>
          <span className="aivideo__info-icon">💡</span>
          <p>
            <strong>To add YouTube videos:</strong> Open <code>src/data/projects.js</code>, find the{' '}
            <code>aiVideoItems</code> array, and add your YouTube video ID to the <code>youtubeId</code> field
            of each item (e.g., <code>"youtubeId": "dQw4w9WgXcQ"</code>). The video thumbnail and play button
            will appear automatically.
          </p>
        </div>
      </div>
    </section>
  )
}
