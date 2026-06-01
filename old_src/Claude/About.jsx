import React, { useEffect, useRef } from 'react'

const stats = [
  { num: '4+', label: 'Years Experience' },
  { num: '10+', label: 'Enterprise Features' },
  { num: '1', label: 'Full Platform Owned' },
  { num: '∞', label: 'Lines of TypeScript' },
]

export default function About() {
  const bgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const rect = bgRef.current.getBoundingClientRect()
      const offset = rect.top * 0.2
      bgRef.current.style.backgroundPositionY = `${offset}px`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(108,99,255,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div className="reveal">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">About</span>
            </div>
            <h2 className="font-display text-6xl lg:text-7xl tracking-wider mb-8">
              WHO I <span className="text-accent">AM</span>
            </h2>
            <p className="text-muted font-light leading-relaxed text-lg mb-6">
              I'm a <span className="text-white font-medium">Frontend-focused Software Engineer</span> with over 4 years of
              experience architecting and shipping complex web applications at scale within enterprise environments.
            </p>
            <p className="text-muted font-light leading-relaxed mb-6">
              At Capgemini, I've owned end-to-end frontend architecture — from state management strategy and API contract
              definition to performance optimization and production deployment. I led the migration from legacy jQuery stacks
              to modern React ecosystems, and built WorkBench — a full internal analytics and workflow platform — from scratch.
            </p>
            <p className="text-muted font-light leading-relaxed mb-10">
              I care deeply about <span className="text-teal">performance</span>, clean component boundaries, and UIs that
              genuinely make people's work easier. Outside engineering, I'm exploring{' '}
              <span className="text-accent">music production</span> and Web3 ecosystems.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/ritiknagpure"
                target="_blank" rel="noreferrer"
                className="font-mono text-xs text-teal border border-teal/30 px-4 py-2 hover:bg-teal/10 transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/ritiknagpure"
                target="_blank" rel="noreferrer"
                className="font-mono text-xs text-indigo border border-indigo/30 px-4 py-2 hover:bg-indigo/10 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="mailto:ritiknagpure@gmail.com"
                className="font-mono text-xs text-accent border border-accent/30 px-4 py-2 hover:bg-accent/10 transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>

          {/* Right — stats */}
          <div className="reveal reveal-delay-2">
            <div className="grid grid-cols-2 gap-px bg-border">
              {stats.map((s, i) => (
                <div key={i} className="bg-surface p-10 flex flex-col justify-center hover:bg-panel transition-colors group">
                  <div className="font-display text-5xl text-accent group-hover:text-white transition-colors mb-2">
                    {s.num}
                  </div>
                  <div className="font-mono text-xs text-muted tracking-wider uppercase">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="mt-px bg-panel border border-border p-8">
              <div className="font-mono text-xs text-muted tracking-wider uppercase mb-4">Education</div>
              <div className="font-sans text-white font-medium mb-1">Bachelor of Engineering</div>
              <div className="font-sans text-muted text-sm mb-3">G H Raisoni College of Engineering, Nagpur</div>
              <div className="flex items-center gap-4">
                <span className="font-display text-2xl text-accent">8.38</span>
                <span className="font-mono text-xs text-muted">CGPA · Jun 2021</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}