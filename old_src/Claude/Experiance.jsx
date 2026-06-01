import React from 'react'

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Capgemini',
    period: 'Feb 2022 – Present',
    type: 'Full-time',
    color: 'accent',
    highlights: [
      'Built and maintained responsive React components across multiple high-traffic features, improving overall UX quality and consistency.',
      'Led migration of legacy jQuery-based interfaces to React, resulting in cleaner component architecture and measurably improved rendering performance.',
      'Integrated RESTful APIs with AWS CloudFront (CDN) for faster asset delivery, robust error handling, and improved page load metrics.',
      'Optimized application state management with Redux and Context API, reducing state-related bugs and improving codebase maintainability.',
      'Collaborated cross-functionally with QA and backend teams during sprint cycles, helping reduce post-release defects.',
    ],
    tags: ['React', 'TypeScript', 'Redux', 'REST APIs', 'AWS CloudFront'],
  },
  {
    role: 'RPA Automation Developer',
    company: 'Capgemini',
    period: 'May 2021 – Mar 2022',
    type: 'Full-time',
    color: 'teal',
    highlights: [
      'Led a team of 3 analysts and drove automation initiatives that enhanced data reporting and system reliability at scale.',
      'Implemented monitoring systems and automated ticket tracking, reducing system downtime and ticket volume by 15%.',
      'Developed automation scripts in Python, saving 25+ hours monthly and boosting operational efficiency by 20%.',
      'Analyzed recurring system incidents to identify root causes, streamlining escalation processes and improving reliability.',
    ],
    tags: ['Python', 'RPA', 'Automation', 'System Reliability', 'Team Lead'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">Career</span>
          </div>
          <h2 className="font-display text-6xl lg:text-7xl tracking-wider">
            WORK <span className="text-accent">EXPERIENCE</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden lg:block" />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} relative lg:grid lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? '' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 lg:left-1/2 w-4 h-4 rounded-full border-2 border-accent bg-ink -translate-x-1/2 top-6 hidden lg:block" />

                {/* Left — meta (even) or right (odd) */}
                <div className={`${i % 2 === 1 ? 'lg:order-2 lg:pl-16' : 'lg:pr-16 lg:text-right'} mb-6 lg:mb-0`}>
                  <div className={`inline-flex items-center gap-2 mb-3 ${i % 2 === 1 ? '' : 'lg:flex-row-reverse'}`}>
                    <span className={`font-mono text-xs ${exp.color === 'accent' ? 'text-accent bg-accent/10 border-accent/20' : 'text-teal bg-teal/10 border-teal/20'} border px-2.5 py-1`}>
                      {exp.type}
                    </span>
                    <span className="font-mono text-xs text-muted">{exp.period}</span>
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl tracking-wider mb-1">{exp.role}</h3>
                  <div className={`font-mono text-sm ${exp.color === 'accent' ? 'text-accent' : 'text-teal'} mb-4`}>
                    @ {exp.company}
                  </div>
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 1 ? '' : 'lg:justify-end'}`}>
                    {exp.tags.map(tag => (
                      <span key={tag} className="font-mono text-xs text-dim border border-border px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — bullets */}
                <div className={`${i % 2 === 1 ? 'lg:order-1 lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                  <div className="bg-panel border border-border p-8 space-y-4">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className={`flex gap-3 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.color === 'accent' ? 'bg-accent' : 'bg-teal'}`} />
                        <p className="font-sans text-sm text-muted leading-relaxed">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}