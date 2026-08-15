import { Flame, Share2, MessageCircle } from 'lucide-react'
import { INSTAGRAM_URL, WHATSAPP_URL, ADDRESS, SCHEDULE } from '../constants/info'

export function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Flame size={20} className="text-fire" aria-hidden="true" />
              <span className="font-serif text-2xl font-semibold text-chalk">Igneo Restaurante</span>
            </div>
            <p className="font-sans text-sm text-smoke leading-relaxed max-w-xs">
              Fusión asiático-caribeña a la brasa. El fuego transforma los ingredientes en experiencias.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
                className="p-2 rounded-full border border-white/10 text-smoke hover:text-chalk hover:border-fire/50 hover:bg-fire/10 transition-all duration-300"
              >
                <Share2 size={18} aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="p-2 rounded-full border border-white/10 text-smoke hover:text-chalk hover:border-fire/50 hover:bg-fire/10 transition-all duration-300"
              >
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-fire/80">Horarios</h3>
            <p className="font-sans text-sm text-smoke">{SCHEDULE.openDays}</p>
            <p className="font-sans text-sm text-chalk">{SCHEDULE.openHours}</p>
            <p className="font-sans text-xs text-smoke/70 mt-1">Menú de almuerzo: {SCHEDULE.lunchDays}</p>
            <p className="font-sans text-xs text-smoke/70">{SCHEDULE.lunchHours}</p>
            <p className="font-sans text-xs text-smoke/50 mt-2">Cerrado los lunes</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-fire/80">Ubicación</h3>
            <p className="font-sans text-sm text-chalk">{ADDRESS.street}</p>
            <p className="font-sans text-sm text-smoke">{ADDRESS.district}, {ADDRESS.city}</p>
            <a
              href={ADDRESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-fire hover:text-amber transition-colors duration-300 mt-1 inline-flex items-center gap-1"
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-smoke/50">
            © {new Date().getFullYear()} Igneo Restaurante. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-smoke/30">
            San Francisco, Panamá
          </p>
        </div>
      </div>
    </footer>
  )
}
