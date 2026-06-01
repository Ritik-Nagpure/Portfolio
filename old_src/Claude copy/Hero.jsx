import { useRef } from "react";

export default function Hero({ scrollY }) {
  const heroRef = useRef(null);

  const parallax = (factor) => ({
    transform: `translateY(${scrollY * factor}px)`,
    willChange: "transform",
  });

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--ink)",
      }}
    >
      {/* Background layers */}
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          ...parallax(0.1),
        }}
      />

      {/* Large ambient orb */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "65vw",
          height: "65vw",
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(201,169,110,0.06) 0%, transparent 70%)",
          ...parallax(-0.15),
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-15%",
          width: "50vw",
          height: "50vw",
          maxWidth: 500,
          maxHeight: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(201,169,110,0.04) 0%, transparent 70%)",
          ...parallax(0.08),
        }}
      />

      {/* Floating geometric ring */}
      <div
        className="animate-float"
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: 200,
          height: 200,
          border: "1px solid rgba(201,169,110,0.12)",
          borderRadius: "50%",
          ...parallax(-0.2),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            border: "1px solid rgba(201,169,110,0.08)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 70,
              height: 70,
              border: "1px solid rgba(201,169,110,0.06)",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      {/* Vertical gold accent line */}
      <div
        style={{
          position: "absolute",
          left: 40,
          top: "20%",
          bottom: "20%",
          width: 1,
          background:
            "linear-gradient(to bottom, transparent, var(--gold), transparent)",
          opacity: 0.25,
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
          width: "100%",
          position: "relative",
          zIndex: 2,
          paddingTop: 80,
        }}
      >
        <div style={{ maxWidth: 820 }}>
          {/* Label */}
          <div
            className="animate-fadeUp font-mono-custom"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 40,
              color: "var(--gold)",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 40, height: 1, background: "var(--gold)" }} />
            Available for Work — 2025
          </div>

          {/* Main headline */}
          <h1
            className="animate-fadeUp font-display delay-1"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              marginBottom: 16,
            }}
          >
            Alexandra
          </h1>
          <h1
            className="animate-fadeUp font-display delay-2"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              fontWeight: 600,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              marginBottom: 8,
              fontStyle: "italic",
            }}
          >
            <span style={{ color: "var(--gold)" }}>Chen</span>
          </h1>

          {/* Role line */}
          <div
            className="animate-fadeUp delay-3"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              margin: "32px 0 40px",
              flexWrap: "wrap",
            }}
          >
            <span
              className="font-mono-custom"
              style={{
                color: "var(--cream-dim)",
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
              }}
            >
              Full-Stack Developer
            </span>
            <div className="gold-rule" style={{ flex: 1, minWidth: 40, maxWidth: 120 }} />
            <span
              className="font-mono-custom"
              style={{
                color: "var(--cream-muted)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
              }}
            >
              UI/UX Enthusiast
            </span>
            <div className="gold-rule" style={{ flex: 1, minWidth: 40, maxWidth: 120 }} />
            <span
              className="font-mono-custom"
              style={{
                color: "var(--cream-muted)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
              }}
            >
              Open Source Contributor
            </span>
          </div>

          {/* Tagline */}
          <p
            className="animate-fadeUp delay-3"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontWeight: 300,
              color: "var(--cream-dim)",
              lineHeight: 1.75,
              maxWidth: 520,
              marginBottom: 56,
            }}
          >
            I craft performant, beautiful digital experiences that live at the intersection of{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              engineering precision
            </em>{" "}
            and thoughtful design.
          </p>

          {/* CTAs */}
          <div
            className="animate-fadeUp delay-4"
            style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}
          >
            <button
              className="btn-primary"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>View Projects</span>
            </button>
            <button
              className="btn-ghost"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cream-muted)" }}>
                Learn More
              </span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ color: "var(--gold)" }}>
                <path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="animate-fadeUp delay-5"
          style={{
            display: "flex",
            gap: 0,
            marginTop: 96,
            borderTop: "1px solid rgba(201,169,110,0.12)",
            paddingTop: 40,
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "5+", label: "Years Experience" },
            { num: "40+", label: "Projects Shipped" },
            { num: "12+", label: "Happy Clients" },
            { num: "3x", label: "Award Winner" },
          ].map((stat, i, arr) => (
            <div
              key={stat.label}
              style={{
                flex: "1 0 140px",
                padding: "0 40px 0 0",
                borderRight:
                  i < arr.length - 1 ? "1px solid rgba(201,169,110,0.12)" : "none",
                marginRight: i < arr.length - 1 ? 40 : 0,
                marginBottom: 24,
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: "2.8rem",
                  fontWeight: 500,
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {stat.num}
              </div>
              <div
                className="font-mono-custom"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--cream-muted)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fadeIn delay-5"
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          opacity: Math.max(0, 1 - scrollY / 200),
          transition: "opacity 0.3s",
        }}
      >
        <div
          className="font-mono-custom"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--cream-muted)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </div>
        <div
          style={{
            width: 1,
            height: 60,
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }}
        />
      </div>
    </section>
  );
}