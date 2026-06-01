import React, { useRef, useEffect } from 'react'

const categories = [
  {
    label: 'Languages',
    color: 'text-accent',
    borderColor: 'border-accent/20',
    bgColor: 'bg-accent/5',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frontend',
    color: 'text-indigo',
    borderColor: 'border-indigo/20',
    bgColor: 'bg-indigo/5',
    skills: ['React.js', 'Redux Toolkit', 'Context API', 'Tailwind CSS', 'D3.js', 'React Testing Library'],
  },
  {
    label: 'Backend',
    color: 'text-teal',
    borderColor: 'border-teal/20',
    bgColor: 'bg-teal/5',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'AWS CloudFront'],
  },
  {
    label: 'Database & ORM',
    color: 'text-orange-400',
    borderColor: 'border-orange-400/20',
    bgColor: 'bg-orange-400/5',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma', 'Mongoose'],
  },
  {
    label: 'Tooling & DevOps',
    color: 'text-pink-400',
    borderColor: 'border-pink-400/20',
    bgColor: 'bg-pink-400/5',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'JIRA', 'ServiceNow', 'Kibana'],
  },
]

const proficiency = [
  { skill: 'React / TypeScript', level: 95 },
  { skill: 'Redux & State Mgmt', level: 90 },
  { skill: 'Node.js / APIs', level: 80 },
  { skill: 'PostgreSQL / Prisma', level: 75 },
  { skill: 'D3.js / Data Viz', level: 72 },
  { skill: 'Performance Optimization', level: 88 },
]

export default function TechStack() {
  const bgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const rect = bgRef.current.parentElement.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        bgRef.current.style.transform = `translateY(${rect.top * 0.1}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="stack" className="relative py-32 bg-surface overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo/8 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="reveal mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-teal" />
            <span className="font-mono text-xs text-teal tracking-[0.2em] uppercase">Tech Stack</span>
          </div>
          <h2 className="font-display text-6xl lg:text-7xl tracking-wider">
            TOOLS &amp; <span className="text-teal">CRAFT</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Categories */}
          <div className="flex flex-col gap-8">
            {categories.map((cat, i) => (
              <div key={cat.label} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <div className={`font-mono text-xs ${cat.color} tracking-[0.2em] uppercase mb-4`}>
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className={`${cat.bgColor} ${cat.borderColor} border font-mono text-xs px-3 py-1.5 text-white/80 hover:text-white transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency bars */}
          <div className="reveal reveal-delay-2">
            <div className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-8">Proficiency</div>
            <div className="flex flex-col gap-6">
              {proficiency.map((p, i) => (
                <div key={p.skill}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-sans text-sm text-white/80">{p.skill}</span>
                    <span className="font-mono text-xs text-muted">{p.level}%</span>
                  </div>
                  <div className="h-px bg-border relative">
                    <div
                      className="absolute top-0 left-0 h-px bg-gradient-to-r from-accent to-teal transition-all duration-1000"
                      style={{ width: `${p.level}%` }}
                    />
                    <div
                      className="absolute -top-1 w-2 h-2 rounded-full bg-accent"
                      style={{ left: `${p.level}%`, transform: 'translateX(-50%)' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Currently exploring */}
            <div className="mt-12 p-6 border border-border bg-panel/50">
              <div className="font-mono text-xs text-indigo tracking-wider uppercase mb-4">Currently Exploring</div>
              <div className="flex flex-wrap gap-2">
                {['Web3 / Ethers.js', 'Next.js App Router', 'Framer Motion', 'Music Production', 'Solidity Basics'].map(t => (
                  <span key={t} className="bg-indigo/10 border border-indigo/20 font-mono text-xs px-3 py-1.5 text-indigo">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}