import Image from "next/image";
import Link from "next/link";

const BANNER_SRC = "/services-banner.jpg";
const WHATSAPP = "https://wa.me/212612472003"; // TODO

/**
 * Services Page — Structure
 * 1) Stage / Hero
 * 2) Our Services (editorial rows)
 * 3) Our Framework (arches)
 * 4) Closing CTA (same as Home)
 */
export default function ServicesPage() {
  return (
    <main>
      {/* 1) STAGE / HERO */}
      <section className="stage">
        <div className="stage-bg" aria-hidden="true">
          <Image src={BANNER_SRC} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
          <div className="stage-overlay" />
        </div>

        <div className="container">
          <div className="stage-inner">
            <div className="kicker">medina stay · Tangier Morocco</div>

            <h1 className="stage-title">
              <span className="hero-line-primary">local knowledge.</span>
              <span className="hero-line-secondary">international discipline.</span>
            </h1>

            <p className="stage-sub">
              Premium property management in the Medina of Tangier.
              <br />
              Structured, local, and fully managed.
            </p>
          </div>
        </div>
      </section>

      {/* 2) OUR SERVICES */}
      <section>
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="editorial-services">
            <article id="operations" className="editorial-service-row editorial-service-row--rental">
              <div className="editorial-service-media">
                <Image src="/services-rent.png" alt="Rental & Operations" fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} />
                <div className="editorial-media-caption">Rental &amp; Operations</div>
              </div>

              <div className="editorial-service-box">
                <h3 className="editorial-service-heading">Rental &amp; Operations</h3>
                <p className="editorial-service-desc">
                  We manage both short-term rentals (for example Airbnb) and long-term rentals.
                  Our level of involvement depends on the rental model.
                </p>

                <ul className="editorial-service-list">
                  <li>Pricing and booking management</li>
                  <li>Guest communication for short-term rentals</li>
                  <li>Tenant coordination for long-term rentals</li>
                  <li>Check-in / check-out coordination</li>
                  <li>Cleaning and laundry</li>
                  <li>Coordination of local service providers</li>
                  <li>On-site quality checks</li>
                </ul>

                <div className="editorial-service-note">
                  <strong>For owners: </strong>
                  Updates and reports — no daily involvement.
                </div>
              </div>
            </article>

            <article id="care" className="editorial-service-row editorial-service-row--care">
              <div className="editorial-service-box">
                <h3 className="editorial-service-heading">Property Care &amp; Planning</h3>
                <p className="editorial-service-desc">
                  Properties in the Medina require regular care and planning, especially when they are not occupied.
                  We provide structure, oversight, and control for long-term ownership.
                </p>

                <ul className="editorial-service-list">
                  <li>Regular property checks</li>
                  <li>Maintenance planning and repairs</li>
                  <li>Vendor coordination</li>
                  <li>Cost tracking and budget overview</li>
                  <li>Investment and renovation planning</li>
                </ul>

                <div className="editorial-service-note">
                  <strong>For owners: </strong>
                  No surprises. Clear information. Clear decisions.
                </div>
              </div>

              <div className="editorial-service-media">
                <Image src="/services-property-planning.jpg" alt="Property Care & Planning" fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} />
                <div className="editorial-media-caption">Property Care &amp; Planning</div>
              </div>
            </article>

            <article id="renovation" className="editorial-service-hero">
              <div className="editorial-service-heroMedia">
                <Image src="/services-renovation3.png" alt="Renovation & Setup" fill sizes="100vw" style={{ objectFit: "cover" }} />
                <div className="editorial-media-caption editorial-media-caption--hero">Renovation &amp; Setup</div>
              </div>

              <div className="editorial-service-heroBox">
                <h3 className="editorial-service-heading">Renovation &amp; Setup</h3>
                <p className="editorial-service-desc">
                  Renovation is a key part of medina stay. For new or older properties, we manage the full renovation process.
                </p>

                <ul className="editorial-service-list">
                  <li>Check what is possible and define the scope</li>
                  <li>Design and planning (Medina style with modern standards)</li>
                  <li>Budget and timeline planning</li>
                  <li>Coordination of local craftsmen</li>
                  <li>On-site supervision and quality control</li>
                  <li>Renovation project management from start to finish</li>
                  <li>Handling permits and coordination with local authorities</li>
                </ul>

                <div className="editorial-service-note">
                  <strong>For owners: </strong>
                  One point of contact. One clear plan. One finished property.
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3) OUR FRAMEWORK (ARCHES) */}
      <section className="section-framework">
        <div className="container">
          <h2 className="section-title">Our Framework</h2>

          <div className="framework-arches">
            <img src="/framework-boegen2.svg" alt="" className="framework-arches-svg" aria-hidden="true" />

            <div className="framework-arch arch-1">
              <h3>Pricing</h3>
              <p>
                There are no fixed prices.
                <br />◆<br />
                Pricing depends on the property and the rental model.
                <br />◆<br />
                Renovation projects are priced based on scope and budget.
                <br />◆<br />
                All pricing is discussed clearly before start.
              </p>
            </div>

            <div className="framework-arch arch-2">
              <h3>Reporting</h3>
              <p>
                Clear overview of what matters.
                <br />◆<br />
                Reporting on performance, costs, and property condition.
                <br />◆<br />
                Owners receive updates regularly.
                <br />◆<br />
                No daily involvement required.
              </p>
            </div>

            <div className="framework-arch arch-3">
              <h3>Operating model</h3>
              <p>
                We are not a booking platform.
                <br />◆<br />
                Each property is managed as part of one system.
                <br />◆<br />
                We work with a limited number of properties to keep control and responsibility.
                <br />◆<br />
                We are not a mass operator.
              </p>
            </div>
          </div>

          <div className="framework-cta">
            <Link className="btn btn-outline" href="/contact">Request assessment</Link>
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
