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
              Premium owner-operator management in the Medina of Tangier.
              <br />
              On-site control. Clear reporting. Selective onboarding.
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
                  We focus on short-term rentals. For longer stays, 
                  we can support coordination and property oversight.
                </p>

                <ul className="editorial-service-list">
                  <li>Pricing and booking management</li>
                  <li>Guest communication for short-term rentals</li>
                  <li>Longer-stay tenant coordination</li>
                  <li>Check-in / check-out coordination</li>
                  <li>Cleaning and laundry</li>
                  <li>Coordination of local service providers</li>
                  <li>On-site quality checks</li>
                </ul>

                <div className="editorial-service-note">
                  <strong>For owners: </strong>
                  Updates and reports. No daily involvement.
                </div>
              </div>
            </article>

            <article id="care" className="editorial-service-row editorial-service-row--care">
              <div className="editorial-service-box">
                <h3 className="editorial-service-heading">Property Care &amp; Planning</h3>
                <p className="editorial-service-desc">
                  Properties in the Medina require regular care, especially for second homes and remote owners.
                  We provide structure, oversight, and control.
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
                  We act as your on-site project manager and owner representative.
                  Not a construction company. Owners contract and pay craftsmen and materials (or via mandate).
                </p>
                <ul className="editorial-service-list">
                  <li>Define scope and priorities</li>
                  <li>Design direction and planning (Medina character, modern standards)</li>
                  <li>Budget and timeline control</li>
                  <li>Coordinate local craftsmen</li>
                  <li>On-site supervision and quality checks</li>
                  <li>Project management from start to finish</li>
                </ul>
                <div className="editorial-service-note">
                  <strong>Fee model: </strong>
                  Medina Stay charges a project management fee.
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
                Pricing is discussed before onboarding.
                <br />◆<br />
                Operations are charged as a management fee.
                <br />◆<br />
                Property care is a monthly plan.
                <br />◆<br />
                Renovation oversight is a separate project fee based on scope.
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
                <Link className="btn btn-primary" href="/contact">Request assessment</Link>
                <a className="btn btn-outline" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
