export default function CookiesPage() {
  const LAST_UPDATED = "30 Jan 2026";
  const EMAIL = "contact@medina-stay.com";

  return (
    <main>
      <section className="section--tight legal">
        <div className="container">
          <div className="kicker">Legal</div>
          <h1>Cookie Policy</h1>
          <div className="legal-meta">Last updated: {LAST_UPDATED}</div>

          <p>
            This website is designed to work without marketing tracking. We currently do not use analytics or advertising
            cookies.
          </p>

          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device. Some cookies are necessary for basic functionality,
            security and performance. Similar technologies may include local storage or server logs.
          </p>

          <h2>2. Cookies we use</h2>
          <ul>
            <li>
              <strong>Essential / technical</strong>: may be used by our hosting and security infrastructure to keep the
              website stable and safe.
            </li>
            <li>
              <strong>No marketing cookies</strong>: we do not use ad tracking cookies.
            </li>
          </ul>

          <h2>3. Third-party content</h2>
          <p>
            If we embed third-party content in the future (for example Google Maps or social embeds), those providers may
            set cookies or receive technical data (such as IP address). We will update this policy accordingly.
          </p>

          <h2>4. Managing cookies</h2>
          <p>
            You can manage cookies via your browser settings (block, delete, restrict). Blocking essential cookies may
            affect website functionality.
          </p>

          <h2>5. Contact</h2>
          <p>
            For questions about cookies, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
