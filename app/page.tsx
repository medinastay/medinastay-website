import Image from "next/image";
import Link from "next/link";

const HERO_SRC = "/home-kasbah.jpg";
const EXPECT_SRC = "/home-logo.jpg";
const WHATSAPP = "https://wa.me/212XXXXXXXXX"; // TODO

/**
 * Home Page — Structure
 * 1) Stage / Hero
 * 2) What you can expect
 * 3) How we create value (arches)
 * 4) How it works
 * 5) FAQ
 * 6) Closing CTA
 */
export default function HomePage() {
  return (
    <main>
      {/* 1) STAGE / HERO */}
      <section className="stage">
        <div className="stage-bg" aria-hidden="true">
          <Image src={HERO_SRC} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
          <div className="stage-overlay stage-overlay--home" />
        </div>

        <div className="container">
          <div className="stage-inner">
            <div className="kicker">medina stay · Tangier Morocco</div>

            <h1 className="stage-title">
              <span className="hero-line-primary">property management.</span>
              <span className="hero-line-secondary">built on trust.</span>
            </h1>

            <p className="hero-description">
              Peace of mind in a complex market.
              <br />
              Structured, transparent, and long-term property management.
            </p>

            <div className="home-hero-actions">
              <Link className="btn btn-primary" href="/contact">Request Assessment</Link>
              <Link className="btn btn-outline" href="/projects">View projects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2) WHAT YOU CAN EXPECT */}
      <section className="section-expect">
        <div className="container">
          <div className="expect-wrap">
            <div className="expect-box">
              <div className="kicker">What you can expect</div>

              <div className="expect-items">
                <div>
                  <div className="expect-title">Owner reporting</div>
                  <div className="expect-desc">Clear reporting on performance, costs, and next steps.</div>
                </div>

                <div>
                  <div className="expect-title">Structured operations</div>
                  <div className="expect-desc">Clear processes across operations, projects, and maintenance.</div>
                </div>

                <div>
                  <div className="expect-title">Planned investments</div>
                  <div className="expect-desc">Maintenance and investment decisions focused on long-term value.</div>
                </div>
              </div>
            </div>

            <div className="expect-media">
              <Image src={EXPECT_SRC} alt="What you can expect" fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* 3) HOW WE CREATE VALUE (ARCHES) */}
      <section className="section-framework section-framework--home">
        <div className="container">
          <h2 className="section-title">How we create value</h2>

          <div className="framework-arches framework-arches--home">
            <img src="/framework-boegen2.svg" alt="" className="framework-arches-svg" aria-hidden="true" />

            <div className="framework-arch arch-1">
              <h3>Operations</h3>
              <p>
                We manage daily work so your property runs smoothly without your involvement.
                <br />◇<br />
                Pricing and bookings
                <br />◆<br />
                Guest and vendor coordination
                <br />◇<br />
                Quality checks
              </p>
              <div className="framework-cta">
                <Link className="btn btn-outline" href="/services#operations">View services</Link>
              </div>
            </div>

            <div className="framework-arch arch-2">
              <h3>Property care &amp; planning</h3>
              <p>
                We take care of maintenance and planning to protect your property over time.
                <br />◇<br />
                Property care
                <br />◆<br />
                Maintenance planning
                <br />◇<br />
                Condition reports
              </p>
              <div className="framework-cta">
                <Link className="btn btn-outline" href="/services#care">View services</Link>
              </div>
            </div>

            <div className="framework-arch arch-3">
              <h3>Renovation &amp; setup</h3>
              <p>
                We manage renovation projects and improvements with a clear purpose.
                <br />◇<br />
                Design and planning
                <br />◆<br />
                Budget control
                <br />◇<br />
                Smart investment decisions
              </p>
              <div className="framework-cta">
                <Link className="btn btn-outline" href="/services#renovation">View services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) HOW IT WORKS */}
      <section className="section-steps">
        <div className="container">
          <h2 className="section-title">How it works</h2>

          <div className="steps-media">
            <Image src={HERO_SRC} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
            <div className="steps-box">
              <div className="steps-grid">
                {[
                  ["I. Review", "We look at your property and your goals. You get a clear picture of what makes sense next."],
                  ["II. Setup", "We set up standards, vendors, and workflows. If needed, we handle renovation, styling, and preparation."],
                  ["III. Operate & report", "We take care of daily operations. You receive clear updates and regular reports."],
                ].map(([title, desc]) => (
                  <div key={title} className="steps-card">
                    <div className="steps-title">{title}</div>
                    <div className="steps-desc">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) FAQ */}
      <section className="section-faq">
        <div className="container">
          <h2 className="section-title">FAQ</h2>

          <div className="faq-grid">
            {[
              ["How do you charge?", "We charge a management fee based on revenue. Renovation and setup are priced separately."],
              ["What is included in operations?", "Daily pricing, guest and cleaning coordination, quality checks, and light maintenance."],
              ["Who pays cleaning and laundry?", "These costs are paid at cost and shown clearly in monthly reports."],
              ["Do I need to be involved day to day?", "No. We handle daily operations and keep you informed with clear updates."],
            ].map(([q, a]) => (
              <div key={q} className="card faq-card">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6) CLOSING CTA */}
      <section>
        <div className="container">
          <div className="cta-band">
            <div className="kicker">Next step</div>

            <div className="cta-band-inner">
              <div>
                <h3 className="cta-band-title">Request a property assessment.</h3>
                <div className="cta-band-desc">We review your property and design the best way forward.</div>
              </div>

              <div className="cta-band-actions">
                <Link className="btn btn-primary" href="/contact">Request Assessment</Link>
                <a className="btn btn-outline" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
