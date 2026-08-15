import { useRef } from 'react'
import { Flame } from 'lucide-react'
import { FEATURED_DISHES } from '../../constants/dishes'
import { useReveal } from '../../hooks/useReveal'

function DishCard({ dish, index }: { dish: (typeof FEATURED_DISHES)[0]; index: number }) {
  const cardRef = useRef<HTMLElement>(null)

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = ((e.clientX - left) / width  - 0.5) * 10
    const y = ((e.clientY - top)  / height - 0.5) * -10
    el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.02,1.02,1.02)`
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
    const underline = el.querySelector<HTMLElement>('.fire-underline')
    if (underline) underline.style.transform = 'scaleX(0)'
  }

  const onMouseEnterCard = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.borderColor = 'rgba(234,88,12,0.25)'
    const underline = cardRef.current?.querySelector<HTMLElement>('.fire-underline')
    if (underline) underline.style.transform = 'scaleX(1)'
  }

  return (
    <article
      ref={cardRef}
      className={`reveal delay-${index + 1} tilt-card relative overflow-hidden rounded-2xl border cursor-default`}
      style={{ background: '#111', borderColor: 'rgba(255,255,255,0.05)' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnterCard}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '300px', background: '#1a1a1a' }}>
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover"
          style={{ transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          loading="lazy"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #111 0%, rgba(17,17,17,0.3) 50%, transparent 100%)' }} />

        {/* Price badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass-dark">
          <span className="font-sans text-xs font-semibold text-amber">{dish.tag}</span>
        </div>

        {/* Technique pill */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full"
          style={{ background: 'rgba(10,10,10,0.85)', border: '1px solid rgba(234,88,12,0.22)' }}>
          <Flame size={11} className="text-fire" aria-hidden="true" />
          <span className="font-sans text-xs text-smoke">{dish.technique}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] mb-1"
          style={{ color: 'rgba(234,88,12,0.75)' }}>
          {dish.subtitle}
        </p>
        <h3 className="font-serif text-[1.45rem] font-semibold text-chalk leading-tight mb-2">
          {dish.name}
        </h3>
        <p className="font-sans text-sm text-smoke leading-relaxed">{dish.description}</p>

        {/* Fire underline — toggled by card mouse events */}
        <div className="fire-underline mt-4 h-px origin-left"
          style={{
            background: 'linear-gradient(to right, #ea580c, #d4af37)',
            transform: 'scaleX(0)',
            transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </div>
    </article>
  )
}

export function FeaturedDishes() {
  const ref = useReveal()

  return (
    <section
      id="platos"
      className="py-28 px-6 bg-obsidian"
      aria-label="Platos estrella"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="reveal flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-fire" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-fire">Platos Estrella</span>
            </div>
            <h2 className="reveal delay-1 font-serif text-chalk leading-[1.08]"
              style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>
              Platos que<br />
              <em className="text-gradient-fire not-italic">cuentan historias</em>
            </h2>
          </div>
          <p className="reveal delay-2 font-sans text-base text-smoke max-w-xs leading-relaxed">
            Cada plato nace del fuego directo y lleva la huella de dos culturas culinarias.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_DISHES.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
