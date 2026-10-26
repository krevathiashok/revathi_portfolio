import './SectionHeader.css'

export default function SectionHeader({ title, subtitle, align = 'center', chip }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {chip && (
        <span className="section-header__chip">{chip}</span>
      )}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && (
        <p className="section-header__subtitle">{subtitle}</p>
      )}
    </div>
  )
}
