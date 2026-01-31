export default function TermsPage() {
  const LAST_UPDATED = "30 Jan 2026";
  const EMAIL = "contact@medina-stay.com";

  return (
    <main>
      <section className="section--tight legal">
        <div className="container">
          <div className="kicker">Legal</div>
          <h1>Terms of Service</h1>
          <div className="legal-meta">Last updated: {LAST_UPDATED}</div>

          <p>
            These Terms apply to your use of <strong>medina-stay.com</strong>. The website provides information about our
            services and ways to contact us. It does not constitute a binding offer.
          </p>

          <h2>1. Informational website</h2>
          <p>
            Content on this website is provided for general information. Any engagement is agreed separately in writing.
          </p>

          <h2>2. No warranties</h2>
          <p>
            We aim to keep information accurate and up to date, but we do not guarantee completeness, accuracy or
            uninterrupted availability.
          </p>

          <h2>3. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for indirect or consequential damages arising from
            the use of this website. Liability for intent or gross negligence is not excluded.
          </p>

          <h2>4. External links</h2>
          <p>
            This website may contain links to third-party sites. We are not responsible for their content or privacy
            practices.
          </p>

          <h2>5. Intellectual property</h2>
          <p>
            All content (text, graphics, branding) is protected by applicable laws. You may not copy or reuse it without
            prior permission.
          </p>

          <h2>6. Changes</h2>
          <p>We may update these Terms from time to time. The latest version will be published on this page.</p>

          <h2>7. Governing law</h2>
          <p>These Terms are governed by the laws of Morocco.</p>

          <h2>8. Contact</h2>
          <p>
            For questions, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
