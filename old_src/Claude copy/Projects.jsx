import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    number: "001",
    title: "Meridian Design System",
    category: "Design System",
    tags: ["React", "TypeScript", "Storybook", "CSS"],
    year: "2024",
    description:
      "A comprehensive, accessible component library built for scale. 80+ components, dark/light theming, and full ARIA compliance used by 4 product teams.",
    featured: true,
    link: "#",
    accent: "#c9a96e",
  },
  {
    id: 2,
    number: "002",
    title: "Atlas — Analytics Platform",
    category: "Full-Stack",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "D3.js"],
    year: "2024",
    description:
      "Real-time analytics dashboard processing 2M+ events daily. Features custom data visualization engine and ML-powered insights.",
    featured: true,
    link: "#",
    accent: "#c9a96e",
  },
  {
    id: 3,
    number: "003",
    title: "Sonder — Travel App",
    category: "Mobile Web",
    tags: ["React Native", "Node.js", "MongoDB", "Maps API"],
    year: "2023",
    description:
      "Social travel planning app with collaborative itinerary building. 15k+ active users, App Store featured.",
    featured: false,
    link: "#",
    accent: "#c9a96e",
  },
  {
    id: 4,
    number: "004",
    title: "Cipher — Auth Library",
    category: "Open Source",
    tags: ["TypeScript", "JWT", "OAuth", "Node.js"],
    year: "2023",
    description:
      "Zero-dependency authentication library with 2400+ GitHub stars. Supports OAuth2, PKCE, and WebAuthn.",
    featured: false,
    link: "#",
    accent: "#c9a96e",
  },
  {
    id: 5,
    number: "005",
    title: "Pulse — Health Dashboard",
    category: "Full-Stack",
    tags: ["Vue.js", "Python", "FastAPI", "Chart.js"],
    year: "2022",
    description:
      "Personal health tracking platform with wearable integrations. HIPAA-compliant data storage and physician portal.",
    featured: false,
    link: "#",
    accent: "#c9a96e",
  },
];

const CATEGORIES = ["All", "Full-Stack", "Design System", "Mobile Web", "Open Source"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      style={{
        padding: "140px 0",
        background: "var(--ink)",
        position: "relative",
      }}
    >
      {/* Top rule */}
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

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div
          className="reveal-section"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 80,
            flexWrap: "wrap",
            gap: 40,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                marginBottom: 24,
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
                02 — Projects
              </span>
              <div className="gold-rule" style={{ width: 80 }} />
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--cream)",
              }}
            >
              Selected{" "}
              <em style={{ fontStyle: "italic", fontWeight: 600, color: "var(--gold)" }}>
                Work.
              </em>
            </h2>
          </div>

          {/* Filter tabs */}
          <div
            className="reveal-section"
            style={{ display: "flex", gap: 4, flexWrap: "wrap" }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "8px 18px",
                  background: active === cat ? "var(--gold)" : "transparent",
                  border: "1px solid",
                  borderColor: active === cat ? "var(--gold)" : "rgba(201,169,110,0.2)",
                  color: active === cat ? "var(--ink)" : "var(--cream-muted)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (active !== cat) {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--gold)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== cat) {
                    e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)";
                    e.currentTarget.style.color = "var(--cream-muted)";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 2,
          }}
        >
          {filtered.map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              className={`reveal-section project-card delay-reveal-${Math.min(i + 1, 3)}`}
              style={{
                textDecoration: "none",
                display: "block",
                background:
                  hovered === project.id ? "var(--ink-3)" : "var(--ink-2)",
                border: "1px solid",
                borderColor:
                  hovered === project.id
                    ? "rgba(201,169,110,0.25)"
                    : "rgba(201,169,110,0.08)",
                padding: "44px 40px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 40,
                }}
              >
                <span
                  className="card-number font-mono-custom"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    color:
                      hovered === project.id ? "var(--gold)" : "var(--cream-muted)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {project.number}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    className="font-mono-custom"
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--cream-muted)",
                      border: "1px solid rgba(201,169,110,0.15)",
                      padding: "3px 10px",
                    }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="card-arrow"
                    style={{
                      fontSize: "1.1rem",
                      // color: "var(--cream-muted)",
                      lineHeight: 1,
                      display: "inline-block",
                      transform:
                        hovered === project.id
                          ? "translate(4px, -4px)"
                          : "translate(0,0)",
                      color:
                        hovered === project.id ? "var(--gold)" : "var(--cream-muted)",
                      transition: "transform 0.3s ease, color 0.3s ease",
                    }}
                  >
                    ↗
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-display"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  color: "var(--cream)",
                  marginBottom: 16,
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "var(--cream-muted)",
                  marginBottom: 32,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag" style={{ fontSize: "0.6rem" }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover accent line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: 2,
                  width: hovered === project.id ? "100%" : "0%",
                  background: "linear-gradient(90deg, var(--gold), transparent)",
                  transition: "width 0.5s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            </a>
          ))}
        </div>

        {/* View all CTA */}
        <div
          className="reveal-section"
          style={{ textAlign: "center", marginTop: 64 }}
        >
          <button className="btn-primary">
            <span>View All Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
}