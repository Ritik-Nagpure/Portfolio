import { useRef } from "react";

const SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Python", "PostgreSQL", "GraphQL", "AWS",
  "Docker", "Figma", "Tailwind", "Three.js",
];

const EXPERIENCE = [
  {
    period: "2022–Present",
    role: "Senior Frontend Engineer",
    company: "Vercel",
    desc: "Leading the redesign of core product UI. Built component systems used by 50k+ developers.",
  },
  {
    period: "2020–2022",
    role: "Full-Stack Developer",
    company: "Stripe",
    desc: "Developed payment dashboard features and internal tooling processing $1B+ annually.",
  },
  {
    period: "2018–2020",
    role: "UI Engineer",
    company: "Airbnb",
    desc: "Contributed to design system and rebuilt search experience, improving conversion by 18%.",
  },
];

export default function About() {
  const imgRef = useRef(null);

  return (
    <section
      id="about"
      style={{
        padding: "140px 0",
        background: "var(--ink-2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Section header */}
        <div
          className="reveal-section"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 100,
          }}
        >
          <span
            className="font-mono-custom"
            style={{
              color: "var(--gold)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            01 — About
          </span>
          <div
            className="gold-rule"
            style={{ flex: 1, maxWidth: 80 }}
          />
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 100,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: text content */}
          <div>
            <h2
              className="reveal-section font-display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                marginBottom: 40,
                color: "var(--cream)",
              }}
            >
              Obsessed with{" "}
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 600,
                  color: "var(--gold)",
                }}
              >
                craft
              </em>{" "}
              &{" "}
              <em style={{ fontStyle: "italic", fontWeight: 600 }}>clarity.</em>
            </h2>

            <p
              className="reveal-section delay-reveal-1"
              style={{
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--cream-dim)",
                marginBottom: 28,
              }}
            >
              I'm a software developer based in San Francisco with a deep passion for building
              products that are both technically excellent and beautifully designed. I believe
              that great software is invisible — it just works, and it feels right.
            </p>

            <p
              className="reveal-section delay-reveal-2"
              style={{
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--cream-dim)",
                marginBottom: 48,
              }}
            >
              When I'm not writing code, you'll find me contributing to open-source projects,
              sketching UI concepts, or exploring the latest in web performance and developer
              experience. I thrive at the intersection of design systems and backend architecture.
            </p>

            {/* Skills */}
            <div className="reveal-section delay-reveal-2">
              <div
                className="font-mono-custom"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 20,
                }}
              >
                Core Skills
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {SKILLS.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: experience timeline + portrait placeholder */}
          <div>
            {/* Portrait card */}
            <div
              className="reveal-section"
              ref={imgRef}
              style={{
                position: "relative",
                marginBottom: 60,
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "var(--ink-3)",
                  border: "1px solid rgba(201,169,110,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Decorative portrait placeholder */}
                <div style={{ textAlign: "center" }}>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "5rem",
                      fontWeight: 300,
                      color: "rgba(201,169,110,0.15)",
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    AC
                  </div>
                  <div
                    className="font-mono-custom"
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--cream-muted)",
                    }}
                  >
                    Your Photo Here
                  </div>
                </div>
                {/* Corner accents */}
                {[
                  { top: 12, left: 12, borderTop: "1px solid", borderLeft: "1px solid" },
                  { top: 12, right: 12, borderTop: "1px solid", borderRight: "1px solid" },
                  { bottom: 12, left: 12, borderBottom: "1px solid", borderLeft: "1px solid" },
                  { bottom: 12, right: 12, borderBottom: "1px solid", borderRight: "1px solid" },
                ].map((style, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: 24,
                      height: 24,
                      borderColor: "rgba(201,169,110,0.4)",
                      ...style,
                    }}
                  />
                ))}
              </div>
              {/* Offset border */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  right: -12,
                  bottom: -12,
                  border: "1px solid rgba(201,169,110,0.06)",
                  zIndex: -1,
                }}
              />
            </div>

            {/* Experience */}
            <div className="reveal-section delay-reveal-1">
              <div
                className="font-mono-custom"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 28,
                }}
              >
                Experience
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {EXPERIENCE.map((exp, i) => (
                  <div
                    key={exp.company}
                    style={{
                      padding: "24px 0",
                      borderBottom:
                        i < EXPERIENCE.length - 1
                          ? "1px solid rgba(201,169,110,0.1)"
                          : "none",
                      display: "grid",
                      gridTemplateColumns: "100px 1fr",
                      gap: 24,
                      alignItems: "start",
                    }}
                  >
                    <div
                      className="font-mono-custom"
                      style={{
                        fontSize: "0.65rem",
                        color: "var(--gold)",
                        letterSpacing: "0.05em",
                        paddingTop: 4,
                      }}
                    >
                      {exp.period}
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 500,
                          fontSize: "0.9rem",
                          color: "var(--cream)",
                          marginBottom: 4,
                        }}
                      >
                        {exp.role}{" "}
                        <span
                          style={{
                            color: "var(--cream-muted)",
                            fontWeight: 300,
                            fontStyle: "italic",
                          }}
                        >
                          @ {exp.company}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 300,
                          color: "var(--cream-muted)",
                          lineHeight: 1.65,
                        }}
                      >
                        {exp.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}