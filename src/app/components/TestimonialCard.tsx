import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  index: number;
}

export function TestimonialCard({ quote, name, role, company, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#6cd56c]/40 hover:shadow-lg hover:shadow-[#6cd56c]/10 transition-all"
    >
      <Quote className="text-[#6cd56c] mb-4" size={32} />
      
      <p className="text-gray-300 leading-relaxed mb-6 italic">
        "{quote}"
      </p>

      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6cd56c] via-fuchsia-500 to-violet-600 flex items-center justify-center">
          <span className="text-white">{name.charAt(0)}</span>
        </div>
        <div>
          <div className="text-white">{name}</div>
          <div className="text-gray-400 text-sm">
            {role} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
