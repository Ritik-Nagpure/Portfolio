import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon;
  level?: 'Entrant' | 'Intermediate' | 'Advanced';
  index: number;
}

export function SkillBadge({ name, icon: Icon, level, index }: SkillBadgeProps) {
  const levelColors = {
    Entrant: 'text-yellow-400',
    Intermediate: 'text-fuchsia-400',
    Advanced: 'text-green-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 hover:border-[#6cd56c]/40 hover:shadow-lg hover:shadow-[#6cd56c]/10 transition-all"
    >
      <Icon size={20} className="text-[#6cd56c] flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="text-white truncate">{name}</div>
        {level && (
          <div className={`text-xs ${levelColors[level]}`}>
            {level}
          </div>
        )}
      </div>
    </motion.div>
  );
}
