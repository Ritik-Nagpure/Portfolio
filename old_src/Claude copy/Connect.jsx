import { useState } from "react";
import { useForm } from "react-hook-form";

// ─── Form submission handler ──────────────────────────────────────────────────
// Replace the body of this function with your preferred submission strategy:
//   - Fetch to your API route
//   - EmailJS / Resend / Formspree
//   - Supabase insert
//   Receives validated { name, email, subject, message }
//   Must return a Promise (or be async).
async function handleForm(data) {
  // Simulate network request — swap with real logic:
  // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } });
  return new Promise((resolve) => setTimeout(resolve, 1200));
}
// ─────────────────────────────────────────────────────────────────────────────

const CONTACT_LINKS = [
  { label: "Email", value: "alex@chen.dev", href: "mailto:alex@chen.dev" },
  { label: "GitHub", value: "github.com/alexchen", href: "#" },
  { label: "LinkedIn", value: "in/alexandra-chen", href: "#" },
  { label: "Twitter / X", value: "@alex_builds", href: "#" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    setStatus("loading");
    try {
      await handleForm(data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "140px 0",
        background: "var(--ink-2)",
        position: "relative",
        overflow: "hidden",
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

      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          bottom: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(201,169,110,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div className="reveal-section" style={{ marginBottom: 100 }}>
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
              03 — Contact
            </span>
            <div className="gold-rule" style={{ width: 80 }} />
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              maxWidth: 700,
            }}
          >
            Let's build something{" "}
            <em style={{ fontStyle: "italic", fontWeight: 600, color: "var(--gold)" }}>
              remarkable.
            </em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 100,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: info */}
          <div>
            <p
              className="reveal-section"
              style={{
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--cream-dim)",
                marginBottom: 56,
              }}
            >
              I'm currently open to new opportunities — whether it's a full-time role,
              freelance project, or an interesting collaboration. My response time is
              typically within 24 hours.
            </p>

            <div className="reveal-section delay-reveal-1">
              {CONTACT_LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 0",
                    borderBottom:
                      i < CONTACT_LINKS.length - 1
                        ? "1px solid rgba(201,169,110,0.1)"
                        : "none",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = "12px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  <span
                    className="font-mono-custom"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 300,
                      color: "var(--cream-dim)",
                    }}
                  >
                    {link.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Availability indicator */}
            <div
              className="reveal-section delay-reveal-2"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 48,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 12px #4ade80",
                  animation: "borderPulse 2s infinite",
                }}
              />
              <span
                className="font-mono-custom"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--cream-dim)",
                }}
              >
                Available for new projects
              </span>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal-section delay-reveal-1">
            {status === "success" ? (
              <div
                style={{
                  padding: "60px 40px",
                  border: "1px solid rgba(74,222,128,0.3)",
                  background: "rgba(74,222,128,0.04)",
                  textAlign: "center",
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: "#4ade80",
                    marginBottom: 16,
                    lineHeight: 1,
                  }}
                >
                  ✓
                </div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 300,
                    color: "var(--cream)",
                    marginBottom: 12,
                  }}
                >
                  Message Received
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    color: "var(--cream-muted)",
                    marginBottom: 36,
                    lineHeight: 1.7,
                  }}
                >
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  className="btn-ghost"
                  onClick={() => setStatus("idle")}
                  style={{
                    color: "var(--cream-dim)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Send Another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0 32px",
                  }}
                  className="form-row"
                >
                  {/* Name */}
                  <div style={{ marginBottom: 40 }}>
                    <label
                      className="font-mono-custom"
                      style={{
                        display: "block",
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: 8,
                      }}
                    >
                      Name
                    </label>
                    <input
                      className={`form-input ${errors.name ? "error" : ""}`}
                      placeholder="Your full name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "At least 2 characters" },
                      })}
                    />
                    {errors.name && (
                      <span
                        className="font-mono-custom"
                        style={{
                          fontSize: "0.6rem",
                          color: "#c0392b",
                          marginTop: 6,
                          display: "block",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: 40 }}>
                    <label
                      className="font-mono-custom"
                      style={{
                        display: "block",
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: 8,
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-input ${errors.email ? "error" : ""}`}
                      placeholder="your@email.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <span
                        className="font-mono-custom"
                        style={{
                          fontSize: "0.6rem",
                          color: "#c0392b",
                          marginTop: 6,
                          display: "block",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: 40 }}>
                  <label
                    className="font-mono-custom"
                    style={{
                      display: "block",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 8,
                    }}
                  >
                    Subject
                  </label>
                  <input
                    className={`form-input ${errors.subject ? "error" : ""}`}
                    placeholder="What's this about?"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && (
                    <span
                      className="font-mono-custom"
                      style={{
                        fontSize: "0.6rem",
                        color: "#c0392b",
                        marginTop: 6,
                        display: "block",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div style={{ marginBottom: 48 }}>
                  <label
                    className="font-mono-custom"
                    style={{
                      display: "block",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 8,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    className={`form-input form-textarea ${errors.message ? "error" : ""}`}
                    placeholder="Tell me about your project, timeline, and goals..."
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 20,
                        message: "Please write at least 20 characters",
                      },
                    })}
                  />
                  {errors.message && (
                    <span
                      className="font-mono-custom"
                      style={{
                        fontSize: "0.6rem",
                        color: "#c0392b",
                        marginTop: 6,
                        display: "block",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 16,
                  }}
                >
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === "loading"}
                    style={{
                      opacity: status === "loading" ? 0.7 : 1,
                      cursor: status === "loading" ? "default" : "none",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      {status === "loading" ? (
                        <>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            style={{
                              animation: "spin 1s linear infinite",
                            }}
                            fill="none"
                          >
                            <circle
                              cx="7"
                              cy="7"
                              r="5.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeDasharray="20"
                              strokeDashoffset="10"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M2 7h10M7 2l5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                  {status === "error" && (
                    <span
                      className="font-mono-custom"
                      style={{
                        fontSize: "0.65rem",
                        color: "#c0392b",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Something went wrong. Please try again.
                    </span>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}