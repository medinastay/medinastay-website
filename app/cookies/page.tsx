export default function CookiesPage() {
  const LAST_UPDATED = "28 Jan 2026";
  const EMAIL = "contact@medina-stay.com";

  return (
    <main>
      <section className="section--tight legal">
        <div className="container">
          <div className="kicker">Legal</div>
          <h1>Cookie Policy</h1>
          <div className="legal-meta">Last updated: {LAST_UPDATED}</div>

          <p>
            This Cookie Policy explains how <strong>medina-stay.com</strong> uses cookies and similar technologies.
            Our website is designed to operate without marketing tracking.
          </p>

          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device. Some cookies are necessary for basic website
            functionality, security and performance. Similar technologies may include local storage or server logs.
          </p>

          <h2>2. Cookies we use</h2>
          <p>
            We currently do not use analytics or advertising cookies. We may use:
          </p>
          <ul>
            <li>
              <strong>Essential / technical cookies</strong> (e.g. security, load balancing, basic functionality)
              used by the website or our hosting/security infrastructure.
            </li>
            <li>
              <strong>Preference cookies</strong> (only if needed) to remember simple settings.
            </li>
          </ul>

          <h2>3. Third-party content</h2>
          <p>
            If we embed third-party content in the future (for example Google Maps or social media embeds), those
            providers may set cookies or receive technical data (such as your IP address). We will update this policy
            and, where required, provide choices before loading such content.
          </p>

          <h2>4. How to manage cookies</h2>
          <p>
            You can manage cookies through your browser settings (block, delete, or restrict cookies).
            Please note that blocking essential cookies may impact website functionality.
          </p>

          <h2>5. Updates</h2>
          <p>
            We may update this Cookie Policy from time to time. The latest version will be published on this page.
          </p>

          <h2>6. Contact</h2>
          <p>
            If you have questions about cookies, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
