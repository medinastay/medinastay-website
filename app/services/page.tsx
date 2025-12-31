import Image from "next/image";
import Link from "next/link";

const BANNER_SRC = "/services-banner.jpg";

export default function ServicesPage() {
  return (
    <main>
      {/* =========================
         STAGE / HERO (UNVERÄNDERT)
      ========================= */}
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
            <div className="kicker">medina stay</div>

            <h1 className="stage-title">
              Local knowledge.
              <br />
              International discipline.
            </h1>

            <p className="stage-sub">
              Premium property management in the Medina of Tangier.
              <br />
              Structured, local, and fully managed.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
         WHAT WE MANAGE — Editorial
      ========================= */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="editorial-services">
            {/* ROW 1 — Rental */}
            <article className="editorial-service-row editorial-service-row--rental">
              <div className="editorial-service-media">
                <Image
                  src="/services-rent.png"
                  alt="Rental & Operations"
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="editorial-media-caption">
                  Rental &amp; Operations
                </div>
              </div>

              <div className="editorial-service-box">
                <h3 className="editorial-service-heading">
                  Rental &amp; Operations
                </h3>
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

            {/* ROW 2 — Care */}
            <article className="editorial-service-row editorial-service-row--care">
              <div className="editorial-service-box">
                <h3 className="editorial-service-heading">
                  Property Care &amp; Planning
                </h3>
                <p className="editorial-service-desc">
                  Properties in the Medina require regular care and planning,
                  especially when they are not occupied.
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

              <div className="editorial-service-media editorial-service-media--offset">
                <Image
                  src="/services-property-planning.jpg"
                  alt="Property Care & Planning"
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="editorial-media-caption">
                  Property Care &amp; Planning
                </div>
              </div>
            </article>

            {/* ROW 3 — Renovation */}
            <article className="editorial-service-hero">

              <div className="editorial-service-heroMedia">
                <Image
                  src="/services-renovation3.png"
                  alt="Renovation & Setup"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="editorial-media-caption editorial-media-caption--hero">
                  Renovation &amp; Setup
                </div>
              </div>

              <div className="editorial-service-heroBox">
                <h3 className="editorial-service-heading">
                  Renovation &amp; Setup
                </h3>
                <p className="editorial-service-desc">
                  Renovation is a key part of medina stay.
                  For new or older properties, we manage the full renovation process.                </p>

                <ul className="editorial-service-list">
                  <li>Check what is possible and define the scope</li>
                  <li>Design and planning (Medina style with modern standards)</li>
                  <li>Budget and timeline planning</li>
                  <li>Coordination of local craftsmen</li>
                  <li>On-site supervision and quality control</li>
                  <li>Renovation project management from start to finish</li>
                  <li>Furnishing and setup</li>
                </ul>

                <div className="editorial-service-note">
                  <strong>For owners: </strong> 
                  One point of contact.
                  One clear plan.
                  One finished property.

                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
         THE FRAMEWORK
      ========================= */}
    <section className="section-framework">
  <div className="container">
    <h2 className="framework-title">Our Framework</h2>

    <div className="framework-arches">
      {/* SVG BACKGROUND */}
      <img
        src="/framework-boegen2.svg"
        alt=""
        className="framework-arches-svg"
        aria-hidden="true"
      />

      {/* ARCH 1 */}
      <div className="framework-arch arch-1">
        <h3>Pricing</h3>
        <p>
          No fixed packages. Ongoing management is revenue-based or monthly.
          Renovation and setup are scoped and agreed before work starts.
        </p>
      </div>

      {/* ARCH 2 */}
      <div className="framework-arch arch-2">
        <h3>Reporting</h3>
        <p>
          Monthly reporting with clear updates on performance, costs, and next
          steps. Quarterly reviews available if required.
        </p>
      </div>

      {/* ARCH 3 */}
      <div className="framework-arch arch-3">
        <h3>Operating model</h3>
        <p>
          Not a booking platform. Not a mass operator. Limited portfolio to
          protect quality, control, and accountability.
        </p>
      </div>
    </div>

    <div className="framework-cta">
      <a className="btn btn-outline" href="/contact">
        Request assessment
      </a>
    </div>
  </div>
</section>

    </main>
  );
}
