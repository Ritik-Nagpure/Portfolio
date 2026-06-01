import React from 'react'

// ── ADD YOUR OPEN SOURCE CONTRIBUTIONS & SAAS PRODUCTS HERE ────────────────
// This section is separate from Projects — it's for:
//   • Open source contributions (PRs, packages, libraries)
//   • SaaS products you're building or have shipped
//   • Public tools, npm packages, extensions, etc.
//
// Add items to the arrays below. They render automatically.
// ───────────────────────────────────────────────────────────────────────────

const saasProducts = [
  // ── Add your SaaS products here ─────────────────────────────────────────
  // {
  //   name: 'Product Name',
  //   tagline: 'One-line pitch',
  //   description: 'What it does and who uses it.',
  //   stack: ['Next.js', 'Stripe', 'Supabase'],
  //   status: 'Beta', // Live | Beta | Building | Idea
  //   statusColor: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  //   link: 'https://...',
  //   mrr: null, // optional: '$200 MRR'
  // },
]

const openSourceContributions = [
  // ── Add your open source work here ───────────────────────────────────────
  // {
  //   repo: 'facebook/react',
  //   description: 'Fixed hydration mismatch bug in StrictMode.',
  //   type: 'Bug Fix', // Feature | Bug Fix | Docs | Package
  //   stars: '228k',
  //   link: 'https://github.com/...',
  // },
]

const StatusBadge = ({ status, color }) => (
  <span className={`font-mono text-xs border px-2.5 py-1 ${color}`}>{status}</span>
)

export default function OpenSource() {
  const hasContent = saasProducts.length > 0 || openSourceContributions.length > 0

  return (
    <section id="opensource" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-teal/6 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-teal" />
            <span className="font-mono text-xs text-teal tracking-[0.2em] uppercase">Open Source & SaaS</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-6xl lg:text-7xl tracking-wider">
              BUILDING IN <span className="text-teal">PUBLIC</span>
            </h2>
          </div>
          <p className="text-muted font-light max-w-xl mt-4">
            Products I'm shipping, OSS contributions I'm making, and tools I'm putting out into the world.
            This section evolves continuously.
          </p>
        </div>

        {!hasContent ? (
          /* Empty state — placeholder until content is added */
          <div className="grid md:grid-cols-2 gap-6">
            {/* SaaS placeholder */}
            <div className="reveal border border-dashed border-border bg-panel/40 p-10">
              <div className="font-mono text-xs text-teal tracking-wider uppercase mb-4">SaaS Products</div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 border border-dashed border-teal/30 flex items-center justify-center text-teal/40 text-2xl">
                  ⚡
                </div>
                <p className="font-sans text-sm text-muted/60 leading-relaxed">
                  SaaS products, indie projects, and tools ship here.
                  Open <code className="text-teal/70 font-mono text-xs">OpenSource.jsx</code> and add yours.
                </p>
                <span className="font-mono text-xs text-teal/40 border border-teal/20 px-3 py-1">Coming Soon</span>
              </div>
            </div>

            {/* OSS placeholder */}
            <div className="reveal reveal-delay-2 border border-dashed border-border bg-panel/40 p-10">
              <div className="font-mono text-xs text-indigo tracking-wider uppercase mb-4">Open Source</div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 border border-dashed border-indigo/30 flex items-center justify-center text-indigo/40 text-2xl">
                  ⬡
                </div>
                <p className="font-sans text-sm text-muted/60 leading-relaxed">
                  Contributions to OSS repos, npm packages, and community tools.
                  Open <code className="text-indigo/70 font-mono text-xs">OpenSource.jsx</code> and add yours.
                </p>
                <span className="font-mono text-xs text-indigo/40 border border-indigo/20 px-3 py-1">Building Now</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* SaaS Products */}
            {saasProducts.length > 0 && (
              <div>
                <div className="font-mono text-xs text-teal tracking-wider uppercase mb-6 flex items-center gap-3">
                  <span>SaaS Products</span>
                  <span className="border border-teal/20 px-2 py-0.5">{saasProducts.length}</span>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {saasProducts.map((p, i) => (
                    <div key={i} className="reveal border border-border bg-panel p-7 card-hover flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <StatusBadge status={p.status} color={p.statusColor} />
                        {p.mrr && (
                          <span className="font-mono text-xs text-accent border border-accent/20 px-2 py-0.5">{p.mrr}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-display text-2xl tracking-wider mb-1">{p.name}</h3>
                        <p className="font-mono text-xs text-teal mb-3">{p.tagline}</p>
                        <p className="font-sans text-sm text-muted leading-relaxed">{p.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {p.stack.map(t => (
                          <span key={t} className="font-mono text-xs text-dim border border-border px-2 py-0.5">{t}</span>
                        ))}
                      </div>
                      {p.link && (
                        <a
                          href={p.link} target="_blank" rel="noreferrer"
                          className="font-mono text-xs text-teal hover:text-white transition-colors mt-auto"
                        >
                          Visit ↗
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* OSS Contributions */}
            {openSourceContributions.length > 0 && (
              <div>
                <div className="font-mono text-xs text-indigo tracking-wider uppercase mb-6 flex items-center gap-3">
                  <span>Open Source Contributions</span>
                  <span className="border border-indigo/20 px-2 py-0.5">{openSourceContributions.length}</span>
                </div>
                <div className="space-y-3">
                  {openSourceContributions.map((c, i) => (
                    <a
                      key={i}
                      href={c.link}
                      target="_blank" rel="noreferrer"
                      className="reveal flex items-center justify-between gap-4 border border-border bg-panel p-6 hover:border-indigo/40 hover:bg-panel/80 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-indigo border border-indigo/20 bg-indigo/5 px-2 py-0.5">{c.type}</span>
                        <div>
                          <div className="font-mono text-sm text-white/80 group-hover:text-white">{c.repo}</div>
                          <div className="font-sans text-sm text-muted mt-0.5">{c.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 flex-shrink-0">
                        {c.stars && <span className="font-mono text-xs text-muted">★ {c.stars}</span>}
                        <span className="text-muted group-hover:text-indigo transition-colors">↗</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}