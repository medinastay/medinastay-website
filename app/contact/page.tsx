import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const BANNER_SRC = "/contact-banner.jpg"; 
const CONTACT_EMAIL = "contact@medina-stay.com";
const CONTACT_PHONE = "+212 612 472 003";
const CONTACT_ADDRESS = "Rue Sidi Bouknadel N0 52, Tangier, Morocco";
const WHATSAPP_URL = "https://wa.me/212612472003"; 

/**
 * Contact Page — Structure
 * 1) Stage / Hero
 * 2) Contact grid (Request + Direct contact)
 * 3) Operating entity (Brand vs Operator)
 * 4) Closing CTA
 */
export default function ContactPage() {
  return (
    <main>
      {/* 1) STAGE / HERO */}
      <section className="stage">
        <div className="stage-bg" aria-hidden="true">
          <Image
            src={BANNER_SRC}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="stage-overlay" />
        </div>

        <div className="container">
          <div className="stage-inner">
            <div className="kicker">medina stay · Tangier Morocco</div>

            <h1 className="stage-title">
              <span className="hero-line-primary">contact.</span>
              <span className="hero-line-secondary">request an assessment.</span>
            </h1>

            <p className="stage-sub">
              Tell us what you own (or plan to buy).
              <br />
              We will reply with clear next steps.
            </p>
          </div>
        </div>
      </section>

      {/* 2) CONTACT GRID */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Get in touch</h2>

          <div className="contact-grid">
            {/* Left: Request */}
            <div className="contact-card">
              <div className="kicker">Request</div>
              <h3 className="contact-title">Property assessment</h3>
              <p className="contact-text">
                Share the property basics (location, size, current condition, rental goal).
                We respond with a clear plan and the right operating model.
              </p>

              <ul className="contact-list">
                <li>
                  <span className="contact-bullet">◆</span>
                  Short-term rental operations (pricing, bookings, guest/vendor coordination)
                </li>
                <li>
                  <span className="contact-bullet">◆</span>
                  Property care &amp; planning (maintenance, condition checks, planning)
                </li>
                <li>
                  <span className="contact-bullet">◆</span>
                  Renovation &amp; setup (scope, design, budget control, execution)
                </li>
              </ul>

              <div className="contact-actions">
                <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className="btn btn-outline" href={`mailto:${CONTACT_EMAIL}`}>
                  Email us
                </a>
              </div>
            </div>

            {/* Right: Direct contact */}
            <div className="contact-card">
              <div className="kicker">Direct</div>
              <h3 className="contact-title">Contact details</h3>

              <ul className="contact-details">
                <li>
                  <Phone size={16} />
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a>
                </li>
                <li>
                  <Mail size={16} />
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>{CONTACT_ADDRESS}</span>
                </li>
                <li>
                  <MessageCircle size={16} />
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    WhatsApp chat
                  </a>
                </li>
              </ul>

              <div className="contact-note">
                <strong>Response time:</strong> usually within 24–48 hours.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) OPERATING ENTITY / LEGAL */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Operating entity</h2>

          <div className="operator-card">
            <p className="operator-text">
              <strong>Medina Stay</strong> is the customer-facing brand for property operations,
              care &amp; planning, and renovation setup.
            </p>
            <p className="operator-text">
              Contracts, billing, and operational execution are handled by{" "}
              <strong>Hichou Group</strong> as the operating entity.
            </p>

            <div className="operator-mini">
              If you need the contracting details for your case, we share them during the assessment.
            </div>
          </div>
        </div>
      </section>

      {/* 4) CLOSING CTA */}
      <section>
        <div className="container">
          <div className="cta-band">
            <div className="kicker">Next step</div>

            <div className="cta-band-inner">
              <div>
                <h3 className="cta-band-title">Request a property assessment.</h3>
                <div className="cta-band-desc">
                  We review your property and design the best way forward.
                </div>
              </div>

              <div className="cta-band-actions">
                <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <Link className="btn btn-outline" href="/services">
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
