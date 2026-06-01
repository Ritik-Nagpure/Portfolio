import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Ritik-Nagpure', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ritik-nagpure-2677151a1/', label: 'LinkedIn' },
  // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p>© {currentYear} Ritik Nagpure. All rights reserved.</p>
            <p className="text-sm mt-1 flex items-center justify-center md:justify-start gap-1.5">
              Built with <Heart size={14} className="text-fuchsia-400 fill-fuchsia-400" /> using React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-[#6cd56c]/15 border border-white/10 hover:border-[#6cd56c]/60 rounded-lg transition-all hover:shadow-[0_0_18px_rgba(108,213,108,0.22)]"
                aria-label={social.label}
              >
                <social.icon size={18} className="text-gray-400 hover:text-[#6cd56c] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
