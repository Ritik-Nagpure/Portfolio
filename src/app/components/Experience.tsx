import { SectionHeader } from './SectionHeader';
import { ExperienceCard } from './ExperienceCard';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Capgemini',
    location: 'Pune, India', 
    period: 'Feb 2022 - Present',
    achievements: [
      'Engineered scalable analytics dashboards using React.js, Chart.js, Tanstack Query, React Hook Form, and TanStack Table with Node.js APIs and SQL databases, enabling efficient handling of large datasets and complex business workflows',
      'Built reusable and high-performance React component architecture while migrating legacy interfaces to modern React applications, improving maintainability, UI consistency, and rendering performance',
      'Developed advanced data-driven features including dynamic tables, filtering, pagination, form workflows, and API integrations with robust caching, error handling, and optimized state management using Redux and Context API',
      'Collaborated closely with backend and QA teams in Agile sprints to deliver production-ready features with improved application stability, reduced regressions, and faster release cycles'
    ],
    technologies: ['React.js', 'Node.js', 'SQL', 'Redux', 'Tanstack Query', 'React Hook Form', 'Chart.js']
  },
  {
    title: 'RPA Automation Developer',
    company: 'Capgemini',
    location: 'Mumbai, India', 
    period: 'May 2021 - Mar 2022',
    achievements: [
      'Led a team of 3 analysts and drove automation initiatives that enhanced data reporting and system reliability',
      'Implemented monitoring systems and automated ticket tracking, reducing system downtime and ticket volume by 15%',
      'Developed automation scripts in Python, saving 25+ hours monthly and boosting operational efficiency by 20%',
      'Analyzed recurring system incidents to identify root causes, streamlining escalation processes and improving overall reliability'
    ],
    technologies: ['Python', 'RPA', 'Scripting', 'Automation']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Career Journey"
          title="Professional Experience"
          subtitle="A timeline of my professional growth and key contributions"
        />

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
