import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'AI-Powered Task Manager',
    description: 'A modern productivity app with AI-powered task suggestions, real-time collaboration, and smart notifications. Built with React and Node.js.',
    image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjU1NzQyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    title: 'Fitness Tracking Mobile App',
    description: 'Cross-platform mobile application for tracking workouts, nutrition, and health metrics with beautiful data visualizations and social features.',
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1NTkyMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    title: 'Business Analytics Dashboard',
    description: 'Comprehensive analytics platform with real-time data visualization, custom reporting, and team collaboration features for enterprise clients.',
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NTY0MTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'PostgreSQL', 'Recharts', 'Prisma'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with product management, cart functionality, secure checkout, and admin dashboard. Integrated with Stripe for payments.',
    image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NTYyMzA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Express', 'MongoDB', 'Stripe', 'AWS S3'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          subtitle="A selection of projects I've built, ranging from web apps to mobile solutions"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
