import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* LEFT: Brand (logo + name + tagline) */}
        <Link href="/" className="brand" aria-label="Medina Stay Home">
          <Image
            src="/logo.svg"
            alt="Medina Stay"
            width={96}
            height={96}
            className="brand-logo"
            priority
          />

          <span className="brand-text">
            <span className="brand-name">medina stay</span>
            <span className="brand-tagline">Property Management</span>
          </span>
        </Link>

        {/* CENTER: Navigation */}
        <nav className="header-nav" aria-label="Main navigation">
          <Link className="nav-link" href="/services">
            Services
          </Link>
          <Link className="nav-link" href="/projects">
            Projects
          </Link>
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </nav>

        {/* RIGHT: CTA */}
        <div className="header-cta-wrap">
          <Link className="btn btn-primary header-cta" href="/contact">
            Request assessment
          </Link>
        </div>
      </div>
    </header>
  );
}
