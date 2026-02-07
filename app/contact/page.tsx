"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const BANNER_SRC = "/contact-banner.jpg";

const EMAIL = "contact@medina-stay.com";
const PHONE_DISPLAY = "+212 612 472 003";
const PHONE_TEL = "+212612472003";
const WHATSAPP_URL = "https://wa.me/212612472003";
const ADDRESS = "Rue Sidi Bouknadel No. 52, Tangier, Morocco";

// Put your final Google Maps embed URL here (iframe src)
const GOOGLE_MAPS_IFRAME_SRC =
  "https://www.google.com/maps?q=Rue%20Sidi%20Bouknadel%20N0%2052%2C%20Tangier%2C%20Morocco&output=embed";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  language: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "Operations (Short-term rentals)",
    language: "English",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [mapLoaded, setMapLoaded] = useState(false);

  const isValid = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.email.trim().includes("@") &&
      form.message.trim().length >= 10
    );
  }, [form]);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    try {
      setStatus("sending");

      // Option A: if you implement the API route below, keep this fetch.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "Operations (Short-term rentals)",
        language: "English",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      {/* Banner stage */}
      <section className="stage stage--tight">
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
            <div className="kicker">Contact</div>
            <h1 className="stage-title">
              <span className="hero-line-primary">request assessment.</span>
              <span className="hero-line-secondary">get next steps.</span>
            </h1>
            <p className="hero-description">
              Tell us what you want to do with your property in Tangier.
              <br />
              We reply with a structured recommendation and the right setup for your case.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: form */}
            <div className="contact-card">
              <div className="contact-card-head">
                <h2 className="contact-card-title">Send a request</h2>
                <p className="contact-card-sub">
                  For a faster reply, include your location, current status, timeline, and a few photos if available.
                </p>
              </div>

              <form className="contact-form" onSubmit={onSubmit}>
                <div className="contact-row">
                  <label className="contact-label">
                    Full name
                    <input
                      className="contact-input"
                      value={form.name}
                      onChange={(e) => onChange("name", e.target.value)}
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="contact-label">
                    Email
                    <input
                      className="contact-input"
                      value={form.email}
                      onChange={(e) => onChange("email", e.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <div className="contact-row">
                  <label className="contact-label">
                    Phone or WhatsApp (optional)
                    <input
                      className="contact-input"
                      value={form.phone}
                      onChange={(e) => onChange("phone", e.target.value)}
                      placeholder="+212 ..."
                      autoComplete="tel"
                    />
                  </label>

                  <label className="contact-label">
                    Service interest
                    <select
                      className="contact-select"
                      value={form.service}
                      onChange={(e) => onChange("service", e.target.value)}
                    >
                      <option>Operations (Short-term rentals)</option>
                      <option>Property care (Second home)</option>
                      <option>Renovation oversight (Owner representative)</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                </div>

                <div className="contact-row">
                  <label className="contact-label">
                    Preferred language
                    <select
                      className="contact-select"
                      value={form.language}
                      onChange={(e) => onChange("language", e.target.value)}
                    >
                      <option>English</option>
                      <option>German</option>
                      <option>Moroccan Arabic (Darija)</option>
                      <option>French</option>
                      <option>Spanish</option>
                    </select>
                  </label>

                  <div className="contact-hintBox">
                    <div className="contact-hintTitle">Response time</div>
                    <div className="contact-hintText">Typically within 24 hours.</div>
                  </div>
                </div>

                <label className="contact-label">
                  Message
                  <textarea
                    className="contact-textarea"
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    placeholder="Tell us about the property and what you want to achieve."
                    required
                  />
                </label>

                <div className="contact-actions">
                  <button className="btn btn-primary" type="submit" disabled={!isValid || status === "sending"}>
                    {status === "sending" ? "Sending..." : "Send request"}
                  </button>

                  <a className="btn btn-outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>

                  {status === "sent" && <div className="contact-status ok">Message sent.</div>}
                  {status === "error" && (
                    <div className="contact-status err">
                      Something went wrong. Please email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Right: contact info */}
            <div className="contact-card contact-card--info">
              <h2 className="contact-card-title">Contact details</h2>

              <div className="contact-infoBlock">
                <div className="contact-infoLabel">Email</div>
                <a className="contact-infoValue" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>

              <div className="contact-infoBlock">
                <div className="contact-infoLabel">Phone</div>
                <a className="contact-infoValue" href={`tel:${PHONE_TEL}`}>
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div className="contact-infoBlock">
                <div className="contact-infoLabel">WhatsApp</div>
                <a className="contact-infoValue" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </div>

              <div className="contact-infoBlock">
                <div className="contact-infoLabel">Address</div>
                <div className="contact-infoValue">{ADDRESS}</div>
              </div>

              <div className="contact-divider" />

              <div className="contact-languages">
                <div className="contact-infoLabel">Languages</div>
                <div className="contact-infoValue">
                  Moroccan Arabic (Darija), English, German, French, Spanish.
                </div>
              </div>

              <div className="contact-miniNote">
                Medina Stay operates selected properties in Tangier. We cover operations, property care, and renovation
                oversight.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map">
        <div className="container">
          <div className="contact-mapCard">
            <div className="contact-mapHead">
              <h2 className="contact-card-title">Find us</h2>
              <p className="contact-card-sub">
                Use the map for directions. If you prefer, contact us by email or WhatsApp first.
              </p>
            </div>

            {!mapLoaded ? (
              <button className="contact-mapBtn" type="button" onClick={() => setMapLoaded(true)}>
                Load Google Map
              </button>
            ) : (
              <div className="contact-mapFrame">
                <iframe
                  src={GOOGLE_MAPS_IFRAME_SRC}
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Medina Stay location"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
