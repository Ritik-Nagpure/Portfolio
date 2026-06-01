import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  technologies: string[];
  index: number;
}

export function ExperienceCard({
  title,
  company,
  location,
  period,
  achievements,
  technologies,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-8 pb-12 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/10 group-last:bg-gradient-to-b group-last:from-white/10 group-last:to-transparent"></div>
      
      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute left-0 top-2 w-4 h-4 -ml-[7px] rounded-full bg-[#6cd56c] border-4 border-[#05050a] group-hover:shadow-[0_0_18px_rgba(108,213,108,0.7)] transition-shadow"
      >
        <div className="absolute inset-0 rounded-full bg-[#6cd56c] animate-ping opacity-25"></div>
      </motion.div>

      {/* Content card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#6cd56c]/40 hover:shadow-lg hover:shadow-[#6cd56c]/10 transition-all"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl text-white mb-1">{title}</h3>
            <div className="flex flex-wrap items-center gap-2 text-gray-400">
              <span className="text-[#6cd56c]">{company}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
            <Briefcase size={14} />
            {period}
          </div>
        </div>

        {/* Achievements */}
        <ul className="space-y-2 mb-4">
          {achievements.map((achievement, i) => (
            <li key={i} className="flex gap-3 text-gray-300">
              <span className="text-[#6cd56c] mt-1.5">▹</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#6cd56c]/10 border border-[#6cd56c]/25 text-[#6cd56c] text-sm rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
