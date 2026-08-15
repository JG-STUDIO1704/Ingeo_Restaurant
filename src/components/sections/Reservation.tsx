import { useState } from 'react'
import { Calendar, Clock, Users, MessageSquare, Send, MessageCircle, Flame } from 'lucide-react'
import { WHATSAPP_URL, ADDRESS, SCHEDULE, PHONE } from '../../constants/info'
import { useReveal } from '../../hooks/useReveal'

interface FormData {
  name: string; phone: string; date: string
  time: string; guests: string; occasion: string
}

const OCCASIONS = [
  'Ninguna en particular', 'Cumpleaños', 'Aniversario',
  'Almuerzo de trabajo', 'Cita romántica', 'Reunión de amigos', 'Celebración especial',
]

const TIME_SLOTS = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
]

const inputBase = 'w-full px-4 py-3 rounded-lg font-sans text-sm text-chalk placeholder-smoke/40 outline-none transition-all duration-300'
const inputStyle = { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }

function onFocus(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = 'rgba(234,88,12,0.5)'
  e.currentTarget.style.boxShadow = '0 0 0 2px rgba(234,88,12,0.15)'
}
function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
  e.currentTarget.style.boxShadow = 'none'
}

export function Reservation() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', date: '', time: '', guests: '', occasion: '' })
  const [submitted, setSubmitted] = useState(false)
  const ref = useReveal()

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }))

  const buildMsg = () => {
    const parts = [
      'Hola, quiero hacer una reserva en Igneo Restaurante.',
      form.name   && `Nombre: ${form.name}`,
      form.date   && `Fecha: ${form.date}`,
      form.time   && `Hora: ${form.time}`,
      form.guests && `Personas: ${form.guests}`,
      form.occasion && form.occasion !== 'Ninguna en particular' && `Ocasión: ${form.occasion}`,
      form.phone  && `Teléfono: ${form.phone}`,
    ].filter(Boolean).join('%0A')
    return `https://wa.me/5073872173?text=${parts}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(buildMsg(), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section
      id="reservas"
      className="relative py-28 px-6 overflow-hidden bg-obsidian"
      aria-label="Reservaciones"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(234,88,12,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-fire" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-fire">Reservaciones</span>
            </div>
            <h2 className="font-serif font-bold text-chalk leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
              Tu mesa<br /><em className="text-gradient-fire not-italic">te espera</em>
            </h2>
            <p className="font-sans text-base text-smoke leading-relaxed mb-8 max-w-sm">
              Vive el fuego, la fusión y el sabor en cada visita. Una experiencia diseñada para recordar.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.2)' }}>
                  <Clock size={14} className="text-fire" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-chalk">{SCHEDULE.openDays}</p>
                  <p className="font-sans text-xs text-smoke">{SCHEDULE.openHours}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.2)' }}>
                  <MessageSquare size={14} className="text-fire" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-chalk">{ADDRESS.full}</p>
                  <p className="font-sans text-xs text-smoke">{PHONE}</p>
                </div>
              </div>
            </div>
            <div className="mt-12 hidden lg:flex items-center gap-3 opacity-20">
              <Flame size={36} className="text-fire" aria-hidden="true" />
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, rgba(234,88,12,0.5), transparent)' }} />
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal delay-2">
            {submitted ? (
              <div className="glass-dark rounded-2xl p-10 text-center flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(234,88,12,0.2)', border: '1px solid rgba(234,88,12,0.4)' }}>
                  <Flame size={28} className="text-fire" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-chalk mb-2">¡Solicitud enviada!</h3>
                  <p className="font-sans text-sm text-smoke">Te redirigimos a WhatsApp para confirmar tu reserva.</p>
                </div>
                <button onClick={() => setSubmitted(false)}
                  className="font-sans text-sm text-fire hover:text-amber transition-colors duration-300 underline underline-offset-4">
                  Hacer otra reserva
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-dark rounded-2xl p-8 flex flex-col gap-5"
                aria-label="Formulario de reservación"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5" style={{ color: 'rgba(156,163,175,0.6)' }}>
                      <Users size={12} /> Nombre
                    </label>
                    <input type="text" required placeholder="Tu nombre completo"
                      value={form.name} onChange={set('name')}
                      className={inputBase} style={inputStyle}
                      onFocus={onFocus} onBlur={onBlur} autoComplete="name" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5" style={{ color: 'rgba(156,163,175,0.6)' }}>
                      <MessageCircle size={12} /> WhatsApp
                    </label>
                    <input type="tel" required placeholder="+507 ···"
                      value={form.phone} onChange={set('phone')}
                      className={inputBase} style={inputStyle}
                      onFocus={onFocus} onBlur={onBlur} autoComplete="tel" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5" style={{ color: 'rgba(156,163,175,0.6)' }}>
                      <Calendar size={12} /> Fecha
                    </label>
                    <input type="date" required
                      value={form.date} onChange={set('date')}
                      min={new Date().toISOString().split('T')[0]}
                      className={inputBase} style={inputStyle}
                      onFocus={onFocus} onBlur={onBlur} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5" style={{ color: 'rgba(156,163,175,0.6)' }}>
                      <Clock size={12} /> Hora
                    </label>
                    <select required value={form.time} onChange={set('time')}
                      className={inputBase} style={inputStyle}
                      onFocus={onFocus} onBlur={onBlur}>
                      <option value="" disabled>Seleccionar hora</option>
                      {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5" style={{ color: 'rgba(156,163,175,0.6)' }}>
                      <Users size={12} /> Personas
                    </label>
                    <select required value={form.guests} onChange={set('guests')}
                      className={inputBase} style={inputStyle}
                      onFocus={onFocus} onBlur={onBlur}>
                      <option value="" disabled>Cuántas personas</option>
                      {[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n} {n===1?'persona':'personas'}</option>)}
                      <option value="9+">9 o más</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5" style={{ color: 'rgba(156,163,175,0.6)' }}>
                      <MessageSquare size={12} /> Ocasión (opcional)
                    </label>
                    <select value={form.occasion} onChange={set('occasion')}
                      className={inputBase} style={inputStyle}
                      onFocus={onFocus} onBlur={onBlur}>
                      <option value="">Seleccionar ocasión</option>
                      {OCCASIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <button type="submit"
                  className="btn-fire glow-fire mt-2 w-full py-4 bg-fire text-white font-sans font-semibold rounded-lg hover:bg-fire-light transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-base">
                  <Send size={16} aria-hidden="true" />
                  Confirmar Reservación
                </button>

                <div className="text-center">
                  <span className="font-sans text-xs text-smoke/50">¿Prefieres reservar directamente? </span>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    aria-label="Reservar por WhatsApp"
                    className="font-sans text-xs text-fire hover:text-amber transition-colors duration-300 inline-flex items-center gap-1">
                    <MessageCircle size={12} aria-hidden="true" /> WhatsApp directo
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
