import { SectionHeader } from './SectionHeader';
import { SkillBadge } from './SkillBadge';
import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  Smartphone,
  Layout,
  Server,
  Terminal,
  Palette,
  Box,
  Wrench,
  Zap,
} from 'lucide-react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: Code2, level: 'Advanced' as const },
      { name: 'JavaScript', icon: Code2, level: 'Advanced' as const },
      { name: 'TypeScript', icon: Code2, level: 'Advanced' as const },
      { name: 'Next.js', icon: Layout, level: 'Advanced' as const },
      { name: 'Tailwind CSS', icon: Palette, level: 'Advanced' as const },
      // { name: 'React Native', icon: Smartphone, level: 'Intermediate' as const },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: Server, level: 'Advanced' as const },
      { name: 'Express', icon: Server, level: 'Advanced' as const },
      { name: 'PostgreSQL', icon: Database, level: 'Intermediate' as const },
      { name: 'MongoDB', icon: Database, level: 'Entrant' as const },
      { name: 'GraphQL', icon: Zap, level: 'Entrant' as const },
      { name: 'REST APIs', icon: Server, level: 'Advanced' as const },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: GitBranch, level: 'Advanced' as const },
      { name: 'Docker', icon: Box, level: 'Entrant' as const },
      { name: 'AWS', icon: Cloud, level: 'Entrant' as const },
      { name: 'CI/CD', icon: Wrench, level: 'Intermediate' as const },
      { name: 'Linux', icon: Terminal, level: 'Entrant' as const },
      { name: 'Vercel', icon: Cloud, level: 'Entrant' as const },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Tech Stack"
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with to bring ideas to life"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-[#6cd56c]/60 to-transparent"></div>
                <h3 className="text-xl text-[#6cd56c]">{category.category}</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-fuchsia-400/60 to-transparent"></div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <SkillBadge
                    key={skill.name}
                    {...skill}
                    index={categoryIndex * 6 + index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
