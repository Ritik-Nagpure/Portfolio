import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'ritiknagpure@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Pune, India' },
  { icon: Clock, label: 'Availability', value: 'Open to opportunities' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Ritik-Nagpure', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ritik-nagpure-2677151a1/', label: 'LinkedIn' },
  // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's create something amazing together"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#6cd56c]/10 border border-[#6cd56c]/25 rounded-lg flex-shrink-0 shadow-[0_0_20px_rgba(108,213,108,0.08)]">
                    <item.icon className="text-[#6cd56c]" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">{item.label}</div>
                    <div className="text-white">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun Fact */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-[#6cd56c] mb-2">Fun Fact</h4>
              <p className="text-gray-300">
                When I'm not coding, you'll find me hiking in the mountains, experimenting with
                photography, or contributing to open-source projects!
              </p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-[#6cd56c]/15 border border-white/10 hover:border-[#6cd56c]/60 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(108,213,108,0.25)]"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-gray-400 hover:text-[#6cd56c] transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-[#6cd56c]/50 focus:outline-none focus:ring-2 focus:ring-[#6cd56c]/20 text-white placeholder-gray-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-[#6cd56c]/50 focus:outline-none focus:ring-2 focus:ring-[#6cd56c]/20 text-white placeholder-gray-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-[#6cd56c]/50 focus:outline-none focus:ring-2 focus:ring-[#6cd56c]/20 text-white placeholder-gray-500 resize-none transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-[#6cd56c] hover:bg-[#6cd56c] text-black rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(108,213,108,0.25)]"
                disabled={status === 'success'}
              >
                {status === 'success' ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
