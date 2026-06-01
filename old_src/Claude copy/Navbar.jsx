import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrollY }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const scrolled = scrollY > 60;

  useEffect(() => {
    const sections = ["about", "projects", "contact"];
    const handleScroll = () => {
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 180) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "16px 40px" : "28px 40px",
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
          background: scrolled
            ? "rgba(13,12,11,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(201,169,110,0.1)"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{ textDecoration: "none" }}
            className="animate-fadeIn"
          >
            <div
              className="font-display"
              style={{
                fontSize: "1.6rem",
                fontWeight: 600,
                color: "var(--cream)",
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}
            >
              A<span style={{ color: "var(--gold)" }}>.</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div
            className="animate-fadeIn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 48,
            }}
          >
            {/* Desktop links */}
            <div
              style={{
                display: "flex",
                gap: 40,
              }}
              className="hidden-mobile"
            >
              {NAV_LINKS.map(({ label, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={label}
                    href={href}
                    style={{
                      textDecoration: "none",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: isActive ? "var(--gold)" : "var(--cream-muted)",
                      transition: "color 0.3s ease",
                      position: "relative",
                    }}
                    className="hover-underline"
                    onMouseEnter={(e) => {
                      if (!isActive) e.target.style.color = "var(--cream-dim)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.target.style.color = "var(--cream-muted)";
                    }}
                  >
                    {label}
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <button
              className="btn-primary hidden-mobile"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Hire Me</span>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{
                background: "none",
                border: "none",
                cursor: "none",
                display: "flex",
                flexDirection: "column",
                gap: 5,
                padding: 4,
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 24,
                    height: 1,
                    background: "var(--gold)",
                    transition: "all 0.3s ease",
                    transform: menuOpen
                      ? i === 0
                        ? "rotate(45deg) translateY(6px)"
                        : i === 1
                        ? "scaleX(0)"
                        : "rotate(-45deg) translateY(-6px)"
                      : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          style={{
            maxHeight: menuOpen ? 300 : 0,
            overflow: "hidden",
            transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1)",
            marginTop: menuOpen ? 24 : 0,
          }}
        >
          <div className="gold-rule" style={{ marginBottom: 24 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingBottom: 16 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--cream-dim)",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hide/show mobile utilities */}
      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </>
  );
}