import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Connect";
import Footer from "./Footer";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Inject Google Fonts + global styles
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      :root {
        --ink: #0d0c0b;
        --ink-2: #141310;
        --ink-3: #1c1a17;
        --ink-4: #252320;
        --gold: #c9a96e;
        --gold-light: #e8d5a3;
        --gold-dim: rgba(201,169,110,0.15);
        --cream: #f5f0e8;
        --cream-dim: rgba(245,240,232,0.6);
        --cream-muted: rgba(245,240,232,0.35);
        --cream-faint: rgba(245,240,232,0.08);
        --red-accent: #c0392b;
      }
      html { scroll-behavior: smooth; background: var(--ink); }
      body { 
        font-family: 'DM Sans', sans-serif; 
        background: var(--ink); 
        color: var(--cream);
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        cursor: none;
      }
      ::selection { background: var(--gold); color: var(--ink); }
      ::-webkit-scrollbar { width: 3px; }
      ::-webkit-scrollbar-track { background: var(--ink); }
      ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(32px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideRight {
        from { transform: scaleX(0); transform-origin: left; }
        to { transform: scaleX(1); transform-origin: left; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-12px) rotate(1deg); }
        66% { transform: translateY(-6px) rotate(-0.5deg); }
      }
      @keyframes grain {
        0%, 100% { transform: translate(0, 0); }
        10% { transform: translate(-2%, -3%); }
        30% { transform: translate(3%, 2%); }
        50% { transform: translate(-1%, 4%); }
        70% { transform: translate(4%, -1%); }
        90% { transform: translate(-3%, 1%); }
      }
      @keyframes rotateOrbit {
        from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
      }
      @keyframes borderPulse {
        0%, 100% { border-color: rgba(201,169,110,0.3); }
        50% { border-color: rgba(201,169,110,0.7); }
      }
      @keyframes scanline {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100vh); }
      }
      .animate-fadeUp { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
      .animate-fadeIn { animation: fadeIn 1.2s ease both; }
      .animate-float { animation: float 7s ease-in-out infinite; }
      .delay-1 { animation-delay: 0.15s; }
      .delay-2 { animation-delay: 0.3s; }
      .delay-3 { animation-delay: 0.5s; }
      .delay-4 { animation-delay: 0.7s; }
      .delay-5 { animation-delay: 0.9s; }
      .font-display { font-family: 'Cormorant Garamond', serif; }
      .font-mono-custom { font-family: 'DM Mono', monospace; }
      .text-gold { color: var(--gold); }
      .text-cream { color: var(--cream); }
      .text-cream-dim { color: var(--cream-dim); }
      .text-cream-muted { color: var(--cream-muted); }
      .bg-ink { background: var(--ink); }
      .bg-ink-2 { background: var(--ink-2); }
      .bg-ink-3 { background: var(--ink-3); }
      .border-gold { border-color: var(--gold); }
      .border-gold-dim { border-color: rgba(201,169,110,0.2); }
      
      /* Custom cursor */
      .custom-cursor {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
      }
      .cursor-dot {
        width: 8px; height: 8px;
        background: var(--cream);
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
      .cursor-ring {
        width: 36px; height: 36px;
        border: 1px solid rgba(245,240,232,0.5);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.12s ease;
      }

      /* Noise overlay */
      .noise-overlay {
        position: fixed; inset: 0; z-index: 1; pointer-events: none;
        opacity: 0.03;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        animation: grain 0.5s steps(1) infinite;
      }

      /* Section reveal */
      .reveal-section {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
      }
      .reveal-section.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .reveal-section.delay-reveal-1 { transition-delay: 0.1s; }
      .reveal-section.delay-reveal-2 { transition-delay: 0.2s; }
      .reveal-section.delay-reveal-3 { transition-delay: 0.35s; }

      /* Gold rule */
      .gold-rule {
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
      }
      .gold-rule-left {
        height: 1px;
        background: linear-gradient(90deg, var(--gold), transparent);
      }

      /* Hover underline */
      .hover-underline {
        position: relative;
      }
      .hover-underline::after {
        content: '';
        position: absolute;
        bottom: -2px; left: 0;
        width: 0; height: 1px;
        background: var(--gold);
        transition: width 0.35s cubic-bezier(0.16,1,0.3,1);
      }
      .hover-underline:hover::after { width: 100%; }

      /* Project card */
      .project-card {
        transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease;
      }
      .project-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,169,110,0.2);
      }
      .project-card:hover .card-number {
        color: var(--gold);
      }
      .project-card:hover .card-arrow {
        transform: translate(4px, -4px);
        color: var(--gold);
      }
      .card-arrow { transition: transform 0.3s ease, color 0.3s ease; }

      /* Input focus */
      .form-input {
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(201,169,110,0.25);
        color: var(--cream);
        width: 100%;
        padding: 12px 0;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.95rem;
        font-weight: 300;
        outline: none;
        transition: border-color 0.3s ease;
        caret-color: var(--gold);
      }
      .form-input::placeholder { color: var(--cream-muted); }
      .form-input:focus { border-color: var(--gold); }
      .form-input.error { border-color: #c0392b; }
      .form-textarea {
        resize: none;
        min-height: 120px;
      }

      /* Button */
      .btn-primary {
        position: relative;
        overflow: hidden;
        background: transparent;
        border: 1px solid var(--gold);
        color: var(--gold);
        font-family: 'DM Mono', monospace;
        font-size: 0.75rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        padding: 14px 36px;
        cursor: none;
        transition: color 0.4s ease;
      }
      .btn-primary::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--gold);
        transform: translateX(-101%);
        transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
      }
      .btn-primary:hover::before { transform: translateX(0); }
      .btn-primary:hover { color: var(--ink); }
      .btn-primary span { position: relative; z-index: 1; }

      .btn-ghost {
        background: transparent;
        border: none;
        color: var(--cream-dim);
        font-family: 'DM Mono', monospace;
        font-size: 0.7rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        cursor: none;
        padding: 0;
        transition: color 0.3s ease;
      }
      .btn-ghost:hover { color: var(--gold); }

      /* Tag */
      .tech-tag {
        display: inline-block;
        border: 1px solid rgba(201,169,110,0.2);
        color: var(--cream-dim);
        font-family: 'DM Mono', monospace;
        font-size: 0.65rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 4px 10px;
        transition: all 0.3s ease;
      }
      .tech-tag:hover {
        border-color: var(--gold);
        color: var(--gold);
        background: var(--gold-dim);
      }

      /* Orbit decoration */
      .orbit-item {
        animation: rotateOrbit 12s linear infinite;
      }
      .orbit-item:nth-child(2) { animation-delay: -4s; }
      .orbit-item:nth-child(3) { animation-delay: -8s; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  // Intersection Observer for scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    const elements = document.querySelectorAll(".reveal-section");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      {/* Custom cursor */}
      <div className="custom-cursor" style={{ left: mousePos.x, top: mousePos.y }}>
        <div className="cursor-dot" />
      </div>
      <div
        className="custom-cursor"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transition: "left 0.08s ease, top 0.08s ease",
        }}
      >
        <div className="cursor-ring" />
      </div>

      <Navbar scrollY={scrollY} />
      <main>
        <Hero scrollY={scrollY} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}