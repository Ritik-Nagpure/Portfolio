import React, { useState } from 'react'

const socials = [
  {
    name: 'LinkedIn',
    handle: '@ritiknagpure',
    href: 'https://linkedin.com/in/ritiknagpure',
    color: 'text-blue-400 border-blue-400/20 hover:border-blue-400/60 hover:bg-blue-400/5',
    icon: 'in',
  },
  {
    name: 'GitHub',
    handle: '@ritiknagpure',
    href: 'https://github.com/ritiknagpure',
    color: 'text-white border-white/10 hover:border-white/40 hover:bg-white/5',
    icon: 'gh',
  },
  {
    name: 'Email',
    handle: 'ritiknagpure@gmail.com',
    href: 'mailto:ritiknagpure@gmail.com',
    color: 'text-accent border-accent/20 hover:border-accent/60 hover:bg-accent/5',
    icon: '✉',
  },
  {
    name: 'Phone',
    handle: '+91 8432943980',
    href: 'tel:+918432943980',
    color: 'text-teal border-teal/20 hover:border-teal/60 hover:bg-teal/5',
    icon: '↗',
  },
]

export default function Connect() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens mail client — swap with your preferred form service (Formspree, EmailJS, etc.)
    window.location.href = `mailto:ritiknagpure@gmail.com?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' <' + form.email + '>')}`
    setSent(true)
  }

  return (
    <section id="connect" className="py-32 bg-surface relative overflow-hidden">
      {/* Parallax bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-accent/6 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">Connect</span>
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-display text-6xl lg:text-8xl tracking-wider mb-6">
            LET'S <span className="text-accent">TALK</span>
          </h2>
          <p className="font-sans text-lg text-muted max-w-md mx-auto font-light leading-relaxed">
            Open to senior frontend roles, freelance projects, and interesting conversations
            about React, Web3, or anything creative.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Form */}
          <div className="reveal">
            <div className="font-mono text-xs text-accent tracking-wider uppercase mb-6">Send a Message</div>

            {sent ? (
              <div className="border border-teal/30 bg-teal/5 p-10 text-center">
                <div className="font-display text-4xl text-teal mb-3">✓ Sent</div>
                <p className="font-sans text-muted text-sm">Your mail client should have opened. Looking forward to connecting!</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-mono text-xs text-muted border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-mono text-xs text-muted block mb-2">Your Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Recruiter"
                    className="w-full bg-panel border border-border px-4 py-3 font-sans text-sm text-white placeholder:text-dim focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted block mb-2">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className="w-full bg-panel border border-border px-4 py-3 font-sans text-sm text-white placeholder:text-dim focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    className="w-full bg-panel border border-border px-4 py-3 font-sans text-sm text-white placeholder:text-dim focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-ink font-sans font-semibold text-sm py-4 hover:bg-white transition-colors tracking-wide"
                >
                  Send Message →
                </button>
                <p className="font-mono text-xs text-dim text-center">
                  Opens your email client · No data stored
                </p>
              </form>
            )}
          </div>

          {/* Right — Socials & info */}
          <div className="reveal reveal-delay-2">
            <div className="font-mono text-xs text-teal tracking-wider uppercase mb-6">Find Me On</div>
            <div className="flex flex-col gap-3 mb-12">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`flex items-center justify-between border p-5 transition-all group ${s.color}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs w-6 text-center">{s.icon}</span>
                    <div>
                      <div className="font-sans font-medium text-sm">{s.name}</div>
                      <div className="font-mono text-xs opacity-60">{s.handle}</div>
                    </div>
                  </div>
                  <span className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">↗</span>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="border border-teal/30 bg-teal/5 p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-teal animate-glow-pulse" />
                <span className="font-mono text-xs text-teal tracking-wider uppercase">Available for Work</span>
              </div>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Open to <span className="text-white">Senior Frontend Engineer</span> roles and
                interesting <span className="text-white">freelance projects</span>. Typically responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}