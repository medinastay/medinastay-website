import Link from "next/link";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid var(--line)", background: "rgba(247,244,238,.7)", backdropFilter: "blur(10px)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <Link href="/" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
          MedinaStay
        </Link>

        <nav style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button className="btn btn-outline" type="button">EN</button>
          <Link className="btn btn-primary" href="/contact">Free Assessment</Link>
        </div>
      </div>
    </header>
  );
}