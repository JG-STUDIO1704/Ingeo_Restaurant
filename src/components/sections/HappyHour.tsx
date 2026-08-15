import { Flame, Clock } from 'lucide-react'
import { HAPPY_HOUR, WHATSAPP_URL } from '../../constants/info'
import { useReveal } from '../../hooks/useReveal'

const COCKTAIL_IMAGE =
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1400&h=700&fit=crop&auto=format&q=75'

export function HappyHour() {
  const ref = useReveal()

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      aria-label="Happy Hour 2x1"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img src={COCKTAIL_IMAGE} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.7))' }} />
      </div>

      {/* Ember glow — CSS class, no inline animation */}
      <div className="anim-flame-glow absolute bottom-0 left-0 right-0 h-32 pointer-events-none" aria-hidden="true"
        style={{ background: 'linear-gradient(to top, rgba(234,88,12,0.1), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-2xl">

          <div className="reveal flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
              style={{ background: 'rgba(234,88,12,0.2)', border: '1px solid rgba(234,88,12,0.4)' }}>
              <Flame size={12} className="text-fire" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-fire">Promoción Especial</span>
            </div>
          </div>

          <div className="reveal delay-1">
            <h2 className="font-serif font-bold text-chalk leading-[1.0] mb-2"
              style={{ fontSize: 'clamp(3rem,7vw,5rem)' }}>
              2<span className="text-fire">×</span>1
            </h2>
            <h3 className="font-serif font-semibold mb-6"
              style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: 'rgba(249,250,251,0.8)' }}>
              en cervezas y cócteles
            </h3>
          </div>

          <div className="reveal delay-2 flex items-start gap-4 mb-8">
            <div className="glass-dark p-4 rounded-xl flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={14} className="text-amber" aria-hidden="true" />
                <span className="font-sans text-xs uppercase tracking-widest text-amber font-semibold">Horario</span>
              </div>
              <p className="font-sans text-base font-semibold text-chalk">{HAPPY_HOUR.start} – {HAPPY_HOUR.end}</p>
              <p className="font-sans text-sm text-smoke">{HAPPY_HOUR.days}</p>
            </div>
            <div className="glass-dark p-4 rounded-xl flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Flame size={14} className="text-fire" aria-hidden="true" />
                <span className="font-sans text-xs uppercase tracking-widest text-fire font-semibold">Oferta</span>
              </div>
              <p className="font-sans text-base font-semibold text-chalk">Happy Hour</p>
              <p className="font-sans text-sm text-smoke">{HAPPY_HOUR.offer}</p>
            </div>
          </div>

          <div className="reveal delay-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fire glow-fire inline-flex items-center gap-2 px-7 py-3.5 bg-fire text-white font-sans font-semibold rounded-md hover:bg-fire-light transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Reservar para Happy Hour
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
