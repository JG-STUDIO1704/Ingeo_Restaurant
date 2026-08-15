import { useState } from 'react'
import { Flame, Nut, Milk, FlameKindling } from 'lucide-react'
import { FOOD_CATEGORIES, DRINK_CATEGORIES, type DietaryIcon } from '../../constants/menu'
import { useReveal } from '../../hooks/useReveal'

function DietaryBadge({ type }: { type: DietaryIcon }) {
  const map = {
    spicy: { icon: <FlameKindling size={11} />, label: 'Picante', color: '#dc2626' },
    nuts:  { icon: <Nut  size={11} />, label: 'Nueces',  color: '#f59e0b' },
    dairy: { icon: <Milk size={11} />, label: 'Lácteos', color: '#60a5fa' },
  }
  const { icon, label, color } = map[type]
  return (
    <span className="inline-flex items-center gap-0.5 opacity-70" style={{ color }} title={label} aria-label={label}>
      {icon}
    </span>
  )
}

function FoodTab() {
  const [activeCategory, setActiveCategory] = useState(FOOD_CATEGORIES[0].id)
  const category = FOOD_CATEGORIES.find((c) => c.id === activeCategory)!

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <nav className="lg:w-52 shrink-0" aria-label="Categorías del menú">
        <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {FOOD_CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => setActiveCategory(cat.id)}
                className="whitespace-nowrap w-full text-left px-4 py-2.5 rounded-lg font-sans text-sm font-medium transition-all duration-300"
                style={{
                  background: activeCategory === cat.id ? 'rgba(234,88,12,0.15)' : 'transparent',
                  color: activeCategory === cat.id ? '#ea580c' : '#9ca3af',
                  border: activeCategory === cat.id ? '1px solid rgba(234,88,12,0.3)' : '1px solid transparent',
                }}
                aria-current={activeCategory === cat.id ? 'true' : undefined}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-1 min-w-0">
        {category.id === 'fuertes' && (
          <div className="mb-5 px-4 py-3 rounded-xl flex items-center gap-3"
            style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.2)' }}>
            <Flame size={15} className="text-gold shrink-0" aria-hidden="true" />
            <p className="font-sans text-xs" style={{ color: 'rgba(212,175,55,0.8)' }}>
              Platos preparados a la brasa con técnicas de precisión asiática y sabores caribeños.
            </p>
          </div>
        )}
        <ul key={activeCategory}>
          {category.items.map((item, i) => (
            <li
              key={item.name}
              className="group flex items-start justify-between gap-4 py-4 transition-colors duration-300"
              style={{ borderBottom: i < category.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-sans text-sm font-semibold text-chalk group-hover:text-fire transition-colors duration-300">
                    {item.name}
                  </span>
                  {item.dietary?.map((d) => <DietaryBadge key={d} type={d} />)}
                </div>
                <p className="font-sans text-xs leading-relaxed mt-0.5" style={{ color: 'rgba(156,163,175,0.7)' }}>
                  {item.description}
                </p>
              </div>
              <span className="font-sans text-sm font-semibold text-amber whitespace-nowrap shrink-0">
                {item.price ?? <em className="font-normal text-xs text-smoke/50 not-italic">Precio mercado</em>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function DrinksTab() {
  const [activeCategory, setActiveCategory] = useState(DRINK_CATEGORIES[0].id)
  const category = DRINK_CATEGORIES.find((c) => c.id === activeCategory)!

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <nav className="lg:w-52 shrink-0" aria-label="Categorías de bebidas">
        <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {DRINK_CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => setActiveCategory(cat.id)}
                className="whitespace-nowrap w-full text-left px-4 py-2.5 rounded-lg font-sans text-sm font-medium transition-all duration-300"
                style={{
                  background: activeCategory === cat.id ? 'rgba(234,88,12,0.15)' : 'transparent',
                  color: activeCategory === cat.id ? '#ea580c' : '#9ca3af',
                  border: activeCategory === cat.id ? '1px solid rgba(234,88,12,0.3)' : '1px solid transparent',
                }}
                aria-current={activeCategory === cat.id ? 'true' : undefined}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-1 min-w-0">
        {category.priceNote && (
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
            <Flame size={13} className="text-amber" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold text-amber">{category.priceNote}</span>
          </div>
        )}
        <ul key={activeCategory}>
          {category.items.map((item, i) => (
            <li
              key={item.name}
              className="group flex items-start justify-between gap-4 py-4 transition-colors duration-300"
              style={{ borderBottom: i < category.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
            >
              <div className="flex-1 min-w-0">
                <span className="font-sans text-sm font-semibold text-chalk group-hover:text-fire transition-colors duration-300">
                  {item.name}
                </span>
                {item.description && (
                  <p className="font-sans text-xs leading-relaxed mt-0.5" style={{ color: 'rgba(156,163,175,0.7)' }}>
                    {item.description}
                  </p>
                )}
              </div>
              <span className="font-sans text-sm font-semibold text-amber whitespace-nowrap shrink-0">
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function InteractiveMenu() {
  const [activeTab, setActiveTab] = useState<'comida' | 'bebidas'>('comida')
  const ref = useReveal()

  return (
    <section
      id="menu"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#0a0a0a 0%,#0d0d0d 50%,#0a0a0a 100%)' }}
      aria-label="Menú interactivo"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Ambient ember glow — CSS class, no inline animation */}
      <div className="anim-flame-slow absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 85%, rgba(234,88,12,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="reveal flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-fire" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-fire">Menú Completo</span>
            <div className="h-px w-8 bg-fire" />
          </div>
          <h2 className="reveal delay-1 font-serif text-chalk leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>
            Una carta con <em className="text-gradient-fire not-italic">alma</em>
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="reveal delay-2 flex justify-center mb-10">
          <div className="glass-dark inline-flex rounded-xl p-1 gap-1">
            {(['comida', 'bebidas'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-8 py-2.5 rounded-lg font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300"
                style={{
                  background: activeTab === tab ? '#ea580c' : 'transparent',
                  color: activeTab === tab ? '#fff' : '#9ca3af',
                  boxShadow: activeTab === tab ? '0 4px 20px rgba(234,88,12,0.25)' : 'none',
                }}
                aria-pressed={activeTab === tab}
              >
                {tab === 'comida' ? 'Comida' : 'Bebidas'}
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="reveal delay-3 glass-dark rounded-2xl p-6 md:p-10">
          {activeTab === 'comida' ? <FoodTab /> : <DrinksTab />}

          {/* Dietary legend */}
          {activeTab === 'comida' && (
            <div className="mt-8 pt-6 flex flex-wrap gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <span className="font-sans text-xs text-smoke/50 mr-2">Iconos:</span>
              <span className="flex items-center gap-1 font-sans text-xs text-smoke/50">
                <FlameKindling size={12} className="text-ember" /> Picante
              </span>
              <span className="flex items-center gap-1 font-sans text-xs text-smoke/50">
                <Nut size={12} className="text-amber" /> Nueces
              </span>
              <span className="flex items-center gap-1 font-sans text-xs text-smoke/50">
                <Milk size={12} style={{ color: '#60a5fa' }} /> Lácteos
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
