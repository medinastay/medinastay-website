export default function PrivacyPage() {
  const LAST_UPDATED = "28 Jan 2026";

  // Controller / Operator (legal entity)
  const LEGAL_ENTITY = "Hichou Group SARL";
  const BRAND = "Medina Stay";
  const EMAIL = "contact@medina-stay.com";
  const PHONE = "+212 612 472 003";
  const ADDRESS = "Rue Sidi Bouknadel N0 52, Tangier, Morocco";

  return (
    <main>
      <section className="section--tight legal">
        <div className="container">
          <div className="kicker">Legal</div>
          <h1>Privacy Policy</h1>
          <div className="legal-meta">Last updated: {LAST_UPDATED}</div>

          <p>
            This Privacy Policy explains how personal data is processed when you use{" "}
            <strong>medina-stay.com</strong> and when you contact us via email, phone or WhatsApp.
          </p>

          <h2>1. Data controller</h2>
          <p>
            <strong>{LEGAL_ENTITY}</strong> (operating entity) <br />
            Brand: {BRAND} <br />
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> <br />
            Phone/WhatsApp: <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a> <br />
            Address: {ADDRESS}
          </p>

          <h2>2. Data we process</h2>
          <ul>
            <li>Contact details you provide (name, email, phone number).</li>
            <li>Message content you send (email / WhatsApp).</li>
            <li>Technical data (e.g., IP address, device/browser info, timestamps) required to operate and secure the website.</li>
          </ul>

          <h2>3. Why we process data</h2>
          <ul>
            <li>To respond to inquiries and provide a property assessment.</li>
            <li>To manage communication and follow up on requests.</li>
            <li>To operate, secure and maintain the website.</li>
            <li>To comply with legal obligations where required.</li>
          </ul>

          <h2>4. Legal basis</h2>
          <p>
            We process personal data where necessary to respond to your request and to operate our services. Where
            applicable, processing is based on your request/consent (e.g., when you contact us), on our legitimate
            interests (e.g., security and stability of the website), and on compliance with legal obligations.
          </p>

          <h2>5. Data sharing</h2>
          <p>
            We do not sell personal data. We may use service providers necessary to operate the website and communication
            channels (e.g., hosting, email, messaging). These providers process data only to provide their services to us.
            We may disclose data if required by law.
          </p>

          <h2>6. International visitors</h2>
          <p>
            We are based in Morocco. If data protection rules apply based on your location (for example in the EEA), we
            handle personal data in line with applicable requirements.
          </p>

          <h2>7. Retention</h2>
          <p>
            We keep inquiry-related data only as long as needed to respond and manage the relationship. If no business
            relationship results, we delete or anonymize inquiry data within a reasonable period unless retention is
            required by law.
          </p>

          <h2>8. Your rights</h2>
          <p>
            You may request access, correction or deletion of your personal data. Where applicable, you may also object
            to processing or request portability. To exercise your rights, contact{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>

          <h2>9. Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect data. No method of transmission or storage
            is 100% secure.
          </p>

          <h2>10. Changes</h2>
          <p>
            We may update this policy from time to time. The latest version will be published on this page.
          </p>
        </div>
      </section>
    </main>
  );
}
