import Link from "next/link";

const WHATSAPP = "https://wa.me/212XXXXXXXXX"; // TODO: replace with your number

/**
 * Home Page (Medina Stay)
 * - Hero (Positioning + CTA)
 * - Trust box (standards / reporting / CapEx)
 * - Three core areas
 * - How it works
 * - About
 * - FAQ
 * - Closing CTA
 */
export default function HomePage() {
  // Shared layout styles (keeps JSX clean)
  const gridHero: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1.25fr .75fr",
    gap: 20,
    alignItems: "start",
  };

  const grid3: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 14,
    marginTop: 14,
  };

  const grid2: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
    marginTop: 14,
  };

  return (
    <div className="container" style={{ padding: "16px 0 72px" }}>
      {/* =========================
          HERO
          Left: statement + CTA
          Right: trust signals
         ========================= */}
      <section style={gridHero}>
        {/* HERO LEFT */}
        <div className="card" style={{ padding: 30 }}>
          <div className="kicker">Tangier Medina · Owner first</div>

          {/* Main statement */}
          <h1
            style={{
              fontSize: 40,
              lineHeight: 1.03,
              letterSpacing: "-0.03em",
              marginTop: 10,
            }}
          >
            <span className="hero-line-primary">property management.</span>
            <span className="hero-line-secondary">built on trust.</span>
          </h1>

          {/* Subline + explanation (hierarchy handled via CSS classes) */}
          <p className="hero-subline">Peace of mind in a complex market.</p>
          <p className="hero-description">
            We take full responsibility for managing your property day to day,
            with structure, transparency, and long-term thinking.
          </p>

          {/* Primary actions */}
          <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/contact">
              Request Assessment
            </Link>
            <Link className="btn btn-outline" href="/projects">
              View projects
            </Link>
          </div>

          {/* Audience qualifier (quiet, small) */}
          <div className="hero-note">For owners with 1-5 units who want value control without daily involvement.</div>
        </div>

        {/* HERO RIGHT: TRUST BOX */}
        <div className="card" style={{ padding: 22 }}>
          <div className="kicker">What you can expect</div>

          <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
            {[
              ["Owner reporting", "Clear reporting on performance, costs, and next steps."],
              ["Structured operations", "Clear processes across operations, projects, and maintenance."],
              ["Planned investments", "Maintenance and investment decisions focused on long-term value."],
            ].map(([title, desc]) => (
              <div key={title}>
                <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>{title}</div>
                <div style={{ color: "var(--muted)", marginTop: 4, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          THREE CORE AREAS
          The 3 ways we create value
         ========================= */}
      <section style={{ marginTop: 72 }}>
        <h2 style={{ fontSize: 26, letterSpacing: "-0.02em" }}>How we create value</h2>

        <div style={grid3}>
          {[
            [
              "Operations",
              "We manage daily work so your property runs smoothly without your involvement.",
              ["Pricing and bookings", "Guest and vendor coordination", "Quality checks"],
              "/services",
            ],
            [
              "Property care & planning",
              "We take care of maintenance and planning to protect your property over time.",
              ["Maintenance planning", "Cost planning", "Property reports"],
              "/services",
            ],
            [
              "Renovation & setup",
              "We manage renovations and improvements with a clear purpose",
              ["Scope & vendor coordination", "Smart investment decisions", "Styling and photos"],
              "/services",
            ],
          ].map(([title, desc, bullets, href]) => (
            <div key={title as string} className="card" style={{ padding: 20 }}>
              <div style={{ fontWeight: 900, letterSpacing: "-0.02em", fontSize: 16 }}>{title}</div>
              <div style={{ color: "var(--muted)", marginTop: 8, fontSize: 14, lineHeight: 1.7 }}>{desc}</div>

              <ul style={{ marginTop: 12, color: "var(--muted)", lineHeight: 1.8, paddingLeft: 18, fontSize: 13 }}>
                {(bullets as string[]).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div style={{ marginTop: 12 }}>
                <Link className="btn btn-outline" href={href as string}>
                  See details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          HOW IT WORKS
         ========================= */}
      <section style={{ marginTop: 72 }}>
        <h2 style={{ fontSize: 26, letterSpacing: "-0.02em" }}>How it works</h2>

        <div style={grid3}>
          {[
            ["1. Review", "We look at your property and your goals. You get a clear picture of what makes sense next."],
            ["2. Setup", "We set up standards, vendors, and workflows. If needed, we handle renovation, styling, and preparation."],
            ["3. Operate & report", "We take care of daily operations. You receive clear updates and regular reports."],
          ].map(([title, desc]) => (
            <div key={title} className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>{title}</div>
              <div style={{ color: "var(--muted)", marginTop: 8, fontSize: 14, lineHeight: 1.7 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          ABOUT
         ========================= */}
      <section className="card" style={{ marginTop: 72, padding: 24 }}>
        <div className="kicker">About</div>
        <h2 style={{ fontSize: 26, letterSpacing: "-0.02em", marginTop: 10 }}>Local knowledge. International discipline.</h2>
        <p style={{ color: "var(--muted)", marginTop: 10, lineHeight: 1.75, maxWidth: "76ch" }}>
          Medina Stay manages premium properties with trusted local partners and clear standards.
          Owners always know what is happening and what comes next.
        </p>
      </section>

      {/* =========================
          FAQ
         ========================= */}
      <section style={{ marginTop: 72 }}>
        <h2 style={{ fontSize: 26, letterSpacing: "-0.02em" }}>FAQ</h2>

        <div style={grid2}>
          {[
            ["How do you charge?", "We charge a management fee based on revenue. Renovation and setup are priced separately."],
            ["What is included in operations?", "Daily pricing, guest and cleaning coordination, quality checks, and light maintenance."],
            ["Who pays cleaning and laundry?", "These costs are paid at cost and shown clearly in monthly reports."],
            ["Do I need to be involved day to day?", "No. We handle daily operations and keep you informed with clear updates."],
          ].map(([q, a]) => (
            <div key={q} className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>{q}</div>
              <div style={{ color: "var(--muted)", marginTop: 8, fontSize: 14, lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          CTA BAND (final conversion)
         ========================= */}
      <section className="card" style={{ marginTop: 72, padding: 24, borderColor: "rgba(176,138,87,.25)" }}>
        <div className="kicker">Next step</div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            marginTop: 10,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em" }}>Request a property assessment.</div>
            <div style={{ color: "var(--muted)", marginTop: 6, lineHeight: 1.6 }}>
              We review your property and design the best way forward.
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/contact">
              Request Assessment
            </Link>
            {/* WhatsApp belongs here (not in hero) */}
            <a className="btn btn-outline" href={WHATSAPP} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
