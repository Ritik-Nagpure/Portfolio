import React, { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Connect', href: '#connect' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-border' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl tracking-widest text-accent">
          RN<span className="text-white">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-wider uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:ritiknagpure@gmail.com"
            className="ml-4 px-4 py-2 border border-accent text-accent font-mono text-xs tracking-wider hover:bg-accent hover:text-ink transition-all duration-200"
          >
            Hire Me →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px bg-accent transition-all ${mobileOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`h-px bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`h-px bg-accent transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:ritiknagpure@gmail.com"
            className="mt-2 px-4 py-2 border border-accent text-accent font-mono text-xs text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}