export default function TermsPage() {
  const LAST_UPDATED = "28 Jan 2026";
  const EMAIL = "contact@medina-stay.com";

  const LEGAL_ENTITY = "Hichou Group SARL";
  const BRAND = "Medina Stay";

  return (
    <main>
      <section className="section--tight legal">
        <div className="container">
          <div className="kicker">Legal</div>
          <h1>Terms of Service</h1>
          <div className="legal-meta">Last updated: {LAST_UPDATED}</div>

          <p>
            These Terms apply to your use of <strong>medina-stay.com</strong>. The website provides information about
            {` ${BRAND} `}and ways to contact us. It does not constitute a binding offer.
          </p>

          <h2>1. Operator / contracting entity</h2>
          <p>
            {BRAND} is the customer-facing brand. Website operation and any contracting/billing are handled by{" "}
            <strong>{LEGAL_ENTITY}</strong>. Engagements are agreed separately in writing.
          </p>

          <h2>2. Informational website</h2>
          <p>
            Content on this website is provided for general information. Service scope, pricing and availability depend
            on the specific property and are confirmed during an assessment and in written agreements.
          </p>

          <h2>3. No warranties</h2>
          <p>
            We aim to keep information accurate and up to date. However, we do not guarantee completeness, accuracy,
            or uninterrupted availability of the website.
          </p>

          <h2>4. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for indirect, incidental or consequential damages
            arising from the use of this website. Liability for intent or gross negligence is not excluded.
          </p>

          <h2>5. External links</h2>
          <p>
            This website may contain links to third-party websites (e.g., social platforms). We are not responsible for
            third-party content or privacy practices.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            All content (text, images, branding, design elements) is protected by applicable laws. You may not copy,
            reproduce or reuse content without prior written permission.
          </p>

          <h2>7. Changes</h2>
          <p>
            We may update these Terms from time to time. The latest version will be published on this page.
          </p>

          <h2>8. Governing law</h2>
          <p>
            These Terms are governed by the laws applicable to the operating entity. Jurisdiction and contractual terms
            are defined in the written agreement for each engagement.
          </p>

          <h2>9. Contact</h2>
          <p>
            For questions, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
