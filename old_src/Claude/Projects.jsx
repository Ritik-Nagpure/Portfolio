import React, { useState } from 'react'

// ── ADD YOUR PROJECTS HERE ──────────────────────────────────────────────────
// Each project you add will automatically appear as a card in this section.
// Just copy a block and fill in your details.
const projects = [
  {
    id: 1,
    title: 'WorkBench',
    subtitle: 'Internal Workflow & Analytics Platform',
    description:
      'Enterprise-grade internal platform with role-based access control, configurable approval workflows, validation rules, and complete audit trails. Architected as a modular, frontend-first React application optimized for large datasets.',
    longDesc:
      'Owned the solution end-to-end — frontend architecture, state management strategy, API contract definition, performance optimization, testing, and production deployment. Backend services implemented as supporting components using Node.js and PostgreSQL.',
    stack: ['React', 'TypeScript', 'D3.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'PostgreSQL'],
    highlights: [
      'Role-based access control with configurable approval workflows',
      'Scalable dashboards with memoization, caching & list virtualization',
      'Complete audit trails and validation rule engine',
      'Full-stack ownership from architecture to production',
    ],
    status: 'Production',
    statusColor: 'text-teal border-teal/30 bg-teal/5',
    accentColor: 'accent',
    year: '2023',
    link: null,
    github: null,
    featured: true,
  },
  // ── Add more projects below ─────────────────────────────────────────────
  // {
  //   id: 2,
  //   title: 'Project Name',
  //   subtitle: 'Short tagline',
  //   description: '...',
  //   longDesc: '...',
  //   stack: ['React', 'TypeScript'],
  //   highlights: ['Key feature 1', 'Key feature 2'],
  //   status: 'Live',
  //   statusColor: 'text-accent border-accent/30 bg-accent/5',
  //   accentColor: 'indigo',
  //   year: '2025',
  //   link: 'https://...',
  //   github: 'https://...',
  //   featured: false,
  // },
]
// ───────────────────────────────────────────────────────────────────────────

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="reveal mb-6">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-indigo" />
            <span className="font-mono text-xs text-indigo tracking-[0.2em] uppercase">Projects</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
            <h2 className="font-display text-6xl lg:text-7xl tracking-wider">
              WHAT I'VE <span className="text-indigo">BUILT</span>
            </h2>
            <span className="font-mono text-xs text-muted border border-border px-3 py-1.5">
              {projects.length} project{projects.length !== 1 ? 's' : ''}
            </span>
          </div>
          <p className="text-muted font-light max-w-lg">
            Production-grade work built with ownership and intentional architecture.
            This section grows as new projects ship.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="border border-dashed border-border p-20 text-center">
            <span className="font-mono text-xs text-muted">No projects added yet. Open Projects.jsx to add yours.</span>
          </div>
        ) : (
          <div className="mt-12 space-y-6">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} border bg-panel card-hover ${
                  p.featured ? 'border-indigo/30' : 'border-border'
                } ${expanded === p.id ? 'border-indigo/50' : ''}`}
              >
                {/* Card header */}
                <div
                  className="p-8 cursor-pointer"
                  onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {p.featured && (
                          <span className="font-mono text-xs text-indigo border border-indigo/30 bg-indigo/5 px-2.5 py-1">
                            ★ Featured
                          </span>
                        )}
                        <span className={`font-mono text-xs border px-2.5 py-1 ${p.statusColor}`}>
                          {p.status}
                        </span>
                        <span className="font-mono text-xs text-muted">{p.year}</span>
                      </div>
                      <h3 className="font-display text-3xl lg:text-4xl tracking-wider mb-1">{p.title}</h3>
                      <p className="font-mono text-xs text-muted mb-4">{p.subtitle}</p>
                      <p className="font-sans text-sm text-muted/80 leading-relaxed max-w-2xl">{p.description}</p>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-3">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank" rel="noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="font-mono text-xs text-muted border border-border px-3 py-2 hover:border-white hover:text-white transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank" rel="noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="font-mono text-xs text-accent border border-accent/30 px-3 py-2 hover:bg-accent hover:text-ink transition-colors"
                        >
                          Live ↗
                        </a>
                      )}
                      <button className="w-8 h-8 border border-border flex items-center justify-center text-muted hover:border-indigo hover:text-indigo transition-colors">
                        <span className={`transition-transform ${expanded === p.id ? 'rotate-45' : ''}`}>+</span>
                      </button>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.stack.map(t => (
                      <span key={t} className="font-mono text-xs text-dim border border-border px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded details */}
                {expanded === p.id && (
                  <div className="border-t border-border px-8 py-8 bg-ink/30">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="font-mono text-xs text-indigo tracking-wider uppercase mb-4">Overview</div>
                        <p className="font-sans text-sm text-muted leading-relaxed">{p.longDesc}</p>
                      </div>
                      <div>
                        <div className="font-mono text-xs text-teal tracking-wider uppercase mb-4">Key Highlights</div>
                        <div className="space-y-3">
                          {p.highlights.map((h, j) => (
                            <div key={j} className="flex gap-3">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo flex-shrink-0" />
                              <p className="font-sans text-sm text-muted leading-relaxed">{h}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}