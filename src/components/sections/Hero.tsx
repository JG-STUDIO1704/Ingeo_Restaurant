import { useRef, useEffect } from 'react'
import { Star, ChevronDown, MessageCircle } from 'lucide-react'
import { RATINGS, WHATSAPP_URL, RESTAURANT_CONCEPT } from '../../constants/info'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1767974968707-db3d448d4ef3?w=1600&h=900&fit=crop&auto=format&q=80'

// Static — no Math.random() in render
const EMBERS = [
  { left: '10%', bottom: '4px',  dur: '3.0s', del: '0.0s' },
  { left: '22%', bottom: '18px', dur: '2.3s', del: '0.5s' },
  { left: '36%', bottom: '8px',  dur: '3.4s', del: '1.0s' },
  { left: '50%', bottom: '26px', dur: '2.7s', del: '0.3s' },
  { left: '63%', bottom: '10px', dur: '3.1s', del: '1.4s' },
  { left: '76%', bottom: '20px', dur: '2.5s', del: '0.8s' },
  { left: '88%', bottom: '6px',  dur: '2.9s', del: '0.2s' },
]

function RatingBadge({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="flex items-center gap-1">
        <Star size={12} className="text-amber fill-amber" aria-hidden="true" />
        <span className="font-sans text-sm font-semibold text-chalk">{value.toFixed(1)}</span>
      </div>
      <span className="font-sans text-xs text-smoke uppercase tracking-wider">{label}</span>
    </div>
  )
}

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)

  // RAF-throttled parallax — GPU transform only
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (imageRef.current)
            imageRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.28}px, 0)`
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative overflow-hidden flex items-center"
      style={{ height: '100svh', minHeight: '600px', maxHeight: '1000px' }}
      aria-label="Bienvenido a Igneo Restaurante"
    >
      {/* Parallax image */}
      <div
        ref={imageRef}
        className="absolute"
        style={{ inset: 0, top: '-10%', height: '120%', willChange: 'transform' }}
        aria-hidden="true"
      >
        <img
          src={HERO_IMAGE}
          alt="Yakitori Pincho Platter sobre brasas vivas en Igneo Restaurante"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.6) 55%, rgba(10,10,10,0.25) 100%)' }} />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.3) 40%, transparent 70%)' }} />
      </div>

      {/* Ember particles — CSS class with custom props */}
      <div className="absolute bottom-16 left-0 right-0 pointer-events-none" aria-hidden="true">
        {EMBERS.map((e, i) => (
          <div
            key={i}
            className="ember"
            style={{
              left: e.left,
              bottom: e.bottom,
              '--dur': e.dur,
              '--del': e.del,
              background: 'radial-gradient(circle, #f59e0b 0%, rgba(234,88,12,0.6) 60%, transparent 100%)',
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Ambient fire glow */}
      <div
        className="anim-flame-glow absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to top, rgba(234,88,12,0.12) 0%, transparent 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">

          <div className="anim-fade-in delay-200 flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-fire" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-fire">
              Fusión Asiático-Caribeña · San Francisco, Panamá
            </span>
          </div>

          <h1
            className="anim-fade-up delay-300 font-serif font-bold text-chalk leading-[1.02] tracking-tight mb-5"
            style={{ fontSize: 'clamp(3rem,8vw,5.5rem)' }}
          >
            Donde el{' '}
            <em className="text-gradient-fire not-italic">fuego</em>
            {' '}es el chef
          </h1>

          <p className="anim-fade-up delay-400 font-sans text-lg text-smoke leading-relaxed mb-8 max-w-lg">
            {RESTAURANT_CONCEPT}. Brasas vivas, técnicas asiáticas, sabores caribeños.
          </p>

          <div className="anim-fade-up delay-500 flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => scrollTo('#reservas')}
              className="btn-fire glow-fire px-7 py-3.5 bg-fire text-white font-sans font-semibold rounded-md hover:bg-fire-light transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Reservar Mesa
            </button>
            <button
              onClick={() => scrollTo('#menu')}
              className="px-7 py-3.5 font-sans font-semibold rounded-md transition-all duration-300 active:scale-95 text-chalk"
              style={{ border: '1px solid rgba(255,255,255,0.18)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(234,88,12,0.45)'
                e.currentTarget.style.background   = 'rgba(234,88,12,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
                e.currentTarget.style.background   = ''
              }}
            >
              Ver Menú
            </button>
          </div>

          {/* Rating strip */}
          <div className="anim-fade-up delay-600 glass-dark inline-flex items-center gap-6 px-6 py-4 rounded-xl">
            <RatingBadge label="Comida"   value={RATINGS.food}     />
            <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <RatingBadge label="Servicio" value={RATINGS.service}  />
            <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <RatingBadge label="Ambiente" value={RATINGS.ambiance} />
            <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-sans text-sm font-semibold text-chalk">{RATINGS.reviewCount}</span>
              <span className="font-sans text-xs text-smoke uppercase tracking-wider">Reseñas</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp FAB — mobile */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="anim-scale-in delay-800 fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl md:hidden transition-transform duration-300 hover:scale-110 active:scale-95"
        style={{ background: '#25D366' }}
      >
        <MessageCircle size={24} className="text-white" aria-hidden="true" />
      </a>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo('#platos')}
        className="anim-fade-in delay-700 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors duration-300 text-smoke/50 hover:text-fire"
        aria-label="Ir a siguiente sección"
      >
        <span className="font-sans text-xs uppercase tracking-widest">Descubrir</span>
        <ChevronDown size={18} className="anim-bounce-y" />
      </button>
    </section>
  )
}
