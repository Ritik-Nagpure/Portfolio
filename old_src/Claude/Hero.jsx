import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const bgRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.4}px)`
      if (textRef.current) textRef.current.style.transform = `translateY(${y * 0.15}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Parallax bg blobs */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo/10 blur-[100px]" />
        <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-teal/8 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[60px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Floating orb */}
      <div className="absolute top-32 right-16 w-3 h-3 rounded-full bg-accent animate-float hidden lg:block" />
      <div className="absolute bottom-40 right-40 w-2 h-2 rounded-full bg-teal animate-float hidden lg:block" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div ref={textRef} className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20 relative z-10">
        <div className="animate-slide-up">
          {/* Tag */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-xs text-accent tracking-[0.25em] uppercase">
              Frontend Engineer · 4+ Years
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display text-[clamp(5rem,14vw,13rem)] leading-none tracking-wider text-glow mb-2">
            RITIK
          </h1>
          <h1 className="font-display text-[clamp(5rem,14vw,13rem)] leading-none tracking-wider text-accent mb-8">
            NAGPURE
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-lg text-muted max-w-xl leading-relaxed mb-12 font-light">
            Building scalable enterprise UIs with{' '}
            <span className="text-white font-medium">React</span>,{' '}
            <span className="text-white font-medium">TypeScript</span>, and{' '}
            modern frontend architecture. Based in{' '}
            <span className="text-accent">India</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group px-8 py-4 bg-accent text-ink font-sans font-semibold text-sm tracking-wide hover:bg-white transition-colors duration-200 flex items-center gap-2"
            >
              View My Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#connect"
              className="px-8 py-4 border border-border text-white font-sans text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-200"
            >
              Let's Talk
            </a>
            <a
              href="https://linkedin.com/in/ritiknagpure"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-border text-muted font-sans text-sm tracking-wide hover:border-teal hover:text-teal transition-all duration-200"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-border/50 bg-surface/50 backdrop-blur-sm py-3">
        <div className="marquee-inner">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redux', 'D3.js', 'Tailwind CSS', 'REST APIs', 'AWS CloudFront', 'MongoDB', 'Prisma', 'GitHub Actions'].map(t => (
                <span key={t} className="font-mono text-xs text-dim px-6">
                  <span className="text-accent mr-3">✦</span>{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}