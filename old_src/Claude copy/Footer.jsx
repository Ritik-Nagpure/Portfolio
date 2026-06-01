export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Dribbble", href: "#" },
  ];

  return (
    <footer
      style={{
        background: "var(--ink)",
        borderTop: "1px solid rgba(201,169,110,0.1)",
        padding: "48px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {/* Logo */}
        <div
          className="font-display"
          style={{
            fontSize: "1.4rem",
            fontWeight: 600,
            color: "var(--cream)",
            letterSpacing: "0.02em",
          }}
        >
          A<span style={{ color: "var(--gold)" }}>.</span>
        </div>

        {/* Copyright */}
        <span
          className="font-mono-custom"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--cream-muted)",
          }}
        >
          © {year} Alexandra Chen — All rights reserved
        </span>

        {/* Socials */}
        <div style={{ display: "flex", gap: 28 }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="hover-underline font-mono-custom"
              style={{
                textDecoration: "none",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--cream-muted)",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--cream-muted)")}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}