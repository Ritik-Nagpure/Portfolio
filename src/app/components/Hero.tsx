import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight } from 'lucide-react';

import cv from '../../assets/Ritik_Nagpure.pdf';

const openPdfInNewTab = () => {
  console.log('dn');
  
  window.open(cv, '_blank');
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/Ritik-Nagpure', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ritik-nagpure-2677151a1/', label: 'LinkedIn' },
  // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'ritiknagpure@gmail.com', label: 'Email' },
];

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(163, 230, 53, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 70, 239, 0.12) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6cd56c]/10 border border-[#6cd56c]/30 text-[#6cd56c] shadow-[0_0_24px_rgba(108,213,108,0.15)]"
          >
            <span className="w-2 h-2 bg-[#6cd56c] rounded-full animate-pulse shadow-[0_0_12px_rgba(108,213,108,0.9)]"></span>
            <span>Hi, I'm Ritik</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Full-Stack Developer
              <span className="block text-[#6cd56c] mt-2 drop-shadow-[0_0_18px_rgba(108,213,108,0.45)]">& Product Builder</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg">
              I craft exceptional digital experiences through elegant code and thoughtful design.
              Specializing in React, TypeScript, and modern web technologies.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6cd56c] hover:bg-[#6cd56c] text-black rounded-lg transition-colors shadow-[0_0_24px_rgba(108,213,108,0.28)]"
            onClick={openPdfInNewTab} >
              <Download  size={18} />
              Download Resume
            </motion.a>

            <motion.a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-[#6cd56c]/15 border border-white/10 hover:border-[#6cd56c]/60 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(108,213,108,0.25)]"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-gray-400 hover:text-[#6cd56c] transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Illustration/Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative hidden md:flex items-center justify-center"
        >
          {/* Floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-80 h-80 lg:w-96 lg:h-96"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border border-[#6cd56c]/25 shadow-[0_0_40px_rgba(108,213,108,0.12)]"></div>
            <div className="absolute inset-4 rounded-full border border-fuchsia-400/20"></div>
            <div className="absolute inset-8 rounded-full border border-violet-400/15"></div>

            {/* Center avatar placeholder */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#6cd56c]/20 via-fuchsia-500/20 to-violet-500/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#6cd56c] via-fuchsia-600 to-violet-600 opacity-60 shadow-[0_0_45px_rgba(217,70,239,0.35)]"></div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#6cd56c] rounded-full blur-sm shadow-[0_0_18px_rgba(108,213,108,0.8)]"></div>
              <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-fuchsia-600 rounded-full blur-sm shadow-[0_0_18px_rgba(232,121,249,0.8)]"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-[#6cd56c] rounded-full shadow-[0_0_12px_rgba(108,213,108,0.8)]"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
