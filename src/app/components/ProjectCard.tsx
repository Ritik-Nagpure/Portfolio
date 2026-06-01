import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  sourceUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-[#6cd56c]/40 hover:shadow-xl hover:shadow-[#6cd56c]/10 transition-all"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#6cd56c]/10 via-fuchsia-500/10 to-violet-500/10">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-[#05050a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 flex items-center justify-center bg-[#6cd56c] hover:bg-[#6cd56c] text-black rounded-full transition-colors shadow-[0_0_22px_rgba(108,213,108,0.32)]"
            aria-label="View live project"
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="View source code"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl text-white group-hover:text-[#6cd56c] transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-sm rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#6cd56c] hover:text-[#6cd56c] transition-colors text-sm"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm"
          >
            <Github size={16} />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}
