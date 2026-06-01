import { motion } from 'motion/react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16 space-y-4"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6cd56c]/10 border border-[#6cd56c]/25 text-[#6cd56c] text-sm shadow-[0_0_20px_rgba(108,213,108,0.12)]">
        {label}
      </div>
      <h2 className="text-4xl md:text-5xl tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
