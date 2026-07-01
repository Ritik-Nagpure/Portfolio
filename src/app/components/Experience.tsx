import { SectionHeader } from './SectionHeader';
import { ExperienceCard } from './ExperienceCard';

const experiences = [
  {
    title: 'Full Stack Engineer',
    company: 'Capgemini',
    location: 'Mumbai, India',
    period: 'Aug 2022 - Jun 2026',

    description:
      'Developed a greenfield Enterprise Risk Intelligence & Compliance Platform for a global energy and industrial manufacturing client, transforming fragmented compliance reporting into a centralized solution that aggregates enterprise data to identify Key Risk Indicators (KRIs) across 160+ enterprise applications.',

    achievements: [
      'Designed and developed secure role-based dashboards, compliance reporting, exception management, approval workflows, notifications, and user administration modules, enabling business stakeholders to efficiently monitor compliance and operational risk.',
      'Built scalable REST APIs and backend services using Node.js and Express.js, integrating data from Oracle, SQL Server, PostgreSQL, and SQL Views to support enterprise reporting, workflow automation, advanced search, audit tracking, and Excel exports.',
      'Optimized application performance by implementing server-side pagination, indexed filtering, debounced search, lazy loading, memoization, and API response caching, ensuring responsive user experience while processing large compliance datasets.',
      'Implemented CI/CD pipelines with GitHub Actions and deployed frontend applications to Amazon S3 and CloudFront while hosting backend services on AWS App Runner and AWS Lambda for automated deployments, scheduled data processing, report generation, data retention, and auto-reprocessing workflows.',
      'Collaborated with global stakeholders throughout the Agile Scrum lifecycle, participating in requirement analysis, solution design, sprint planning, sprint reviews, UAT, production deployments, and post-production support to deliver secure, scalable, and business-critical enterprise applications.'
    ],

    technologies: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Redux Toolkit', 'RTK Query', 'AWS', 'GitHub Actions']
  },
  {
    title: 'RPA Automation Developer',
    company: 'Capgemini',
    location: 'Mumbai, India',
    period: 'May 2021 - Aug 2022',

    description:
      'Designed and implemented enterprise automation solutions to improve reporting, application monitoring, and operational efficiency for global business teams. Leveraged Python, UiPath, and SQL Server to eliminate repetitive manual processes, enhance system reliability, and support business-critical operations.',

    achievements: [
      'Led a team of three analysts, providing technical guidance, task planning, solution design, and mentoring while driving automation initiatives that improved enterprise support operations and service reliability.',
      'Designed and developed Python- and UiPath-based solutions for SAP inventory reporting, business reporting, application monitoring, and automated email notifications, reducing report generation time from over 3 hours to approximately 15 minutes and saving more than 25 hours of manual effort every month.',
      'Built automated reporting and monitoring pipelines using Python, Pandas, SQLAlchemy, SQL Server, and OpenPyXL to generate daily, weekly, and monthly business reports while improving reporting accuracy, consistency, and operational visibility.',
      'Developed proactive monitoring and ticket management solutions integrated with BMC Remedy, enabling automated incident tracking, faster issue detection, and contributing to a 15% reduction in operational downtime and ticket volume.',
      'Performed root cause analysis on recurring production incidents and delivered scalable process improvements that increased application reliability, reduced repetitive operational tasks, and enabled support teams to focus on high-priority business activities.'
    ],

    technologies: ['Python', 'UiPath', 'SQL Server', 'Pandas', 'OpenPyXL', 'SQLAlchemy', 'BMC Remedy']
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
