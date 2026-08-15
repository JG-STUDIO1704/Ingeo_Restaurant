import { MapPin, Wifi, CreditCard, Clock, PawPrint, Car } from 'lucide-react'
import { ADDRESS, PAYMENT_METHODS, SCHEDULE, PHONE } from '../../constants/info'
import { useReveal } from '../../hooks/useReveal'

function InfoCard({ icon, title, children, delay = 0 }: {
  icon: React.ReactNode; title: string; children: React.ReactNode; delay?: number
}) {
  return (
    <div
      className={`reveal delay-${delay} glass-dark ember-glow rounded-2xl p-6 transition-all duration-300`}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(234,88,12,0.25)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-fire"
          style={{ background: 'rgba(234,88,12,0.15)', border: '1px solid rgba(234,88,12,0.2)' }}>
          {icon}
        </div>
        <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-smoke">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export function PracticalInfo() {
  const ref = useReveal()

  return (
    <section
      className="py-28 px-6"
      style={{ background: '#121212' }}
      aria-label="Información práctica"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <div className="reveal flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-fire" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-fire">Planifica tu Visita</span>
            <div className="h-px w-8 bg-fire" />
          </div>
          <h2 className="reveal delay-1 font-serif text-chalk leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>
            Todo lo que necesitas<br /><em className="text-gradient-fire not-italic">saber</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <InfoCard icon={<MapPin size={18} />} title="Ubicación" delay={1}>
            <p className="font-sans text-sm font-medium text-chalk">{ADDRESS.street}</p>
            <p className="font-sans text-sm text-smoke">{ADDRESS.district}</p>
            <p className="font-sans text-sm text-smoke">{ADDRESS.city}</p>
            <a href={ADDRESS.mapsUrl} target="_blank" rel="noopener noreferrer"
              className="font-sans text-xs text-fire hover:text-amber transition-colors duration-300 mt-3 inline-flex items-center gap-1">
              Ver en el mapa →
            </a>
          </InfoCard>

          <InfoCard icon={<Clock size={18} />} title="Horarios" delay={2}>
            <p className="font-sans text-sm font-medium text-chalk">{SCHEDULE.openDays}</p>
            <p className="font-sans text-sm text-smoke">{SCHEDULE.openHours}</p>
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <p className="font-sans text-xs text-smoke/70">Almuerzo ejecutivo</p>
              <p className="font-sans text-xs text-chalk/80">{SCHEDULE.lunchDays}</p>
              <p className="font-sans text-xs text-smoke">{SCHEDULE.lunchHours}</p>
            </div>
            <p className="font-sans text-xs mt-2" style={{ color: 'rgba(156,163,175,0.4)' }}>Cerrado los lunes</p>
          </InfoCard>

          <InfoCard icon={<CreditCard size={18} />} title="Métodos de Pago" delay={3}>
            <div className="flex flex-col gap-2">
              {PAYMENT_METHODS.map((m) => (
                <div key={m} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(234,88,12,0.6)' }} />
                  <span className="font-sans text-sm text-chalk">{m}</span>
                </div>
              ))}
            </div>
            <p className="font-sans text-xs text-smoke/60 mt-4">{PHONE}</p>
          </InfoCard>

          <InfoCard icon={<Wifi size={18} />} title="Servicios" delay={4}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Wifi size={14} className="text-fire/70" aria-hidden="true" />
                <span className="font-sans text-sm text-chalk">Wi-Fi Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <PawPrint size={14} className="text-fire/70" aria-hidden="true" />
                <span className="font-sans text-sm text-chalk">Dog Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Car size={14} className="text-fire/70" aria-hidden="true" />
                <span className="font-sans text-sm text-chalk">Estacionamiento</span>
              </div>
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
