import React from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Connect', href: '#connect' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ritiknagpure' },
  { label: 'GitHub', href: 'https://github.com/ritiknagpure' },
  { label: 'Email', href: 'mailto:ritiknagpure@gmail.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-ink overflow-hidden">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-4xl tracking-widest text-accent mb-3">RN.</div>
            <p className="font-sans text-sm text-muted leading-relaxed max-w-xs">
              Frontend Engineer crafting scalable, performant web experiences with React & TypeScript.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <span className="w-2 h-2 rounded-full bg-teal animate-glow-pulse" />
              <span className="font-mono text-xs text-teal">Available for opportunities</span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div className="font-mono text-xs text-muted tracking-wider uppercase mb-5">Navigation</div>
            <nav className="flex flex-col gap-3">
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-sans text-sm text-muted hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-xs text-muted tracking-wider uppercase mb-5">Contact</div>
            <div className="flex flex-col gap-3 mb-6">
              {socialLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="font-sans text-sm text-muted hover:text-white transition-colors group flex items-center gap-2"
                >
                  {l.label}
                  <span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">↗</span>
                </a>
              ))}
            </div>
            <a
              href="mailto:ritiknagpure@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 border border-accent text-accent font-mono text-xs hover:bg-accent hover:text-ink transition-all"
            >
              ritiknagpure@gmail.com
            </a>
          </div>
        </div>

        {/* Big name watermark */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted">
            © {year} Ritik Nagpure · Built with React + Tailwind CSS
          </span>
          <span className="font-mono text-xs text-dim">
            +91 8432943980
          </span>
        </div>
      </div>

      {/* Watermark text */}
      <div className="overflow-hidden pointer-events-none select-none">
        <div className="font-display text-[clamp(4rem,12vw,10rem)] text-white/[0.02] tracking-widest text-center leading-none pb-4">
          RITIK NAGPURE
        </div>
      </div>
    </footer>
  )
}