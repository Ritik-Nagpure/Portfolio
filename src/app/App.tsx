import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#05050a] text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6cd56c]/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-[120px]"></div>
      </div>

      <Navigation />
      
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
