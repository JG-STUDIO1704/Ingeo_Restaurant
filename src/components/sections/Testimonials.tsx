import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../constants/testimonials'
import { useReveal } from '../../hooks/useReveal'

const AMBIENT_IMAGE =
  'https://images.unsplash.com/photo-1531973968078-9bb02785f13d?w=1600&h=800&fit=crop&auto=format&q=75'

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13}
          className={i < count ? 'text-amber fill-amber' : 'text-smoke/30 fill-smoke/10'}
          aria-hidden="true" />
      ))}
    </div>
  )
}

export function Testimonials() {
  const ref = useReveal()

  return (
    <section
      id="nosotros"
      className="relative py-28 px-6 overflow-hidden"
      aria-label="Opiniones de clientes"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img src={AMBIENT_IMAGE} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #0a0a0a, rgba(10,10,10,0.9) 30%, rgba(10,10,10,0.9) 70%, #0a0a0a)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-fire" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-fire">Lo que dicen nuestros comensales</span>
            <div className="h-px w-8 bg-fire" />
          </div>
          <h2 className="reveal delay-1 font-serif text-chalk leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>
            Experiencias que <em className="text-gradient-fire not-italic">perduran</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.id}
              className={`reveal delay-${i + 1} glass-dark ember-glow rounded-2xl p-8 flex flex-col gap-5 transition-all duration-500`}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(234,88,12,0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
            >
              <Quote size={28} className="text-fire/30" aria-hidden="true" />
              <blockquote className="font-serif text-lg leading-relaxed italic flex-1" style={{ color: 'rgba(249,250,251,0.9)' }}>
                "{t.text}"
              </blockquote>
              <div className="pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(234,88,12,0.7)' }}>
                  {t.highlight}
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-sans text-sm text-smoke">{t.author}</p>
                  <StarRow count={t.rating} />
                </div>
                {t.dishes.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {t.dishes.map((d) => (
                      <span key={d} className="px-2 py-0.5 rounded-full font-sans text-xs text-smoke/60"
                        style={{ background: 'rgba(255,255,255,0.05)' }}>
                        {d}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
