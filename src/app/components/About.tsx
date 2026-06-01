import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { MapPin, Briefcase, Code2, Calendar } from 'lucide-react';

const highlights = [
  { icon: Calendar, label: 'Experience', value: '5+ Years' },
  { icon: MapPin, label: 'Location', value: 'Pune, India' },
  { icon: Code2, label: 'Main Stack', value: 'React / Node.js' },
  { icon: Briefcase, label: 'Current Role', value: 'Software Engineer' },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="About Me"
          title="Building Digital Products"
          subtitle="Passionate about creating seamless user experiences and scalable systems"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative pl-6 border-l-2 border-[#6cd56c]/35">
              <p className="text-gray-300 leading-relaxed">
                I'm a full-stack developer with a passion for building beautiful, performant web applications. 
                My journey in tech started 5 years ago, and since then, I've had the privilege of working at 
                startups and enterprise companies.
              </p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-fuchsia-400/35">
              <p className="text-gray-300 leading-relaxed">
                I specialize in modern JavaScript frameworks and have a strong foundation in both frontend 
                and backend technologies. When I'm not coding, you'll find me contributing to open source, 
                writing technical articles, or exploring new technologies.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-violet-400/35">
              <p className="text-gray-300 leading-relaxed">
                Currently, I'm focused on building accessible, inclusive products and mentoring junior developers 
                to help them grow in their careers.
              </p>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#6cd56c]/40 hover:shadow-[0_0_24px_rgba(108,213,108,0.12)] transition-all"
              >
                <item.icon className="text-[#6cd56c] mb-3" size={24} />
                <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                <div className="text-white">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
