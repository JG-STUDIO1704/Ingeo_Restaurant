import { useState, useEffect } from 'react'
import { Menu, X, Flame } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio',    href: '#hero' },
  { label: 'Menú',     href: '#menu' },
  { label: 'Platos',   href: '#platos' },
  { label: 'Opiniones',href: '#nosotros' },
  { label: 'Reservas', href: '#reservas' },
]

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          padding: scrolled ? '10px 0' : '18px 0',
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(249,115,22,0.08)' : 'none',
          transition: 'padding 0.4s ease, background 0.4s ease, border-bottom 0.4s ease',
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2 group"
            aria-label="Ir al inicio"
          >
            <Flame
              size={20}
              className="text-fire transition-colors duration-300 group-hover:text-amber"
              aria-hidden="true"
            />
            <span className="font-serif text-xl font-semibold tracking-wide text-chalk transition-colors duration-300 group-hover:text-fire">
              Igneo Restaurante
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="nav-link font-sans text-sm font-medium text-smoke hover:text-chalk transition-colors duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => scrollTo('#reservas')}
            className="hidden md:block btn-fire glow-fire px-5 py-2 bg-fire text-white font-sans text-sm font-semibold rounded-md hover:bg-fire-light active:scale-95 transition-all duration-300"
          >
            Reservar Mesa
          </button>

          {/* Burger */}
          <button
            className="md:hidden text-chalk hover:text-fire transition-colors duration-300 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8"
        style={{
          background: 'rgba(10,10,10,0.97)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        aria-hidden={!mobileOpen}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="font-serif text-3xl text-chalk hover:text-fire transition-colors duration-300"
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo('#reservas')}
          className="btn-fire glow-fire mt-4 px-8 py-3 bg-fire text-white font-sans font-semibold rounded-md text-lg"
        >
          Reservar Mesa
        </button>
      </div>
    </>
  )
}
