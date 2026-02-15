"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, MapPin, Menu, X } from "lucide-react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;

      // show when at top, hide when scrolling up (your original logic)
      if (y < 80) {
        setHidden(false);
      } else {
        setHidden(!goingDown);
      }

      // close mobile menu on scroll (clean UX)
      if (menuOpen) setMenuOpen(false);

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // close on outside click
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!menuOpen) return;
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [menuOpen]);

  return (
    <header className={`site-header ${hidden ? "site-header--hidden" : ""}`}>
      <div className="container header-inner">
        {/* LEFT (desktop nav) */}
        <nav className="header-nav-left" aria-label="Primary">
          <Link href="/services" className="nav-link">Services</Link>
          {/* <Link href="/projects" className="nav-link">Projects</Link> */}
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* CENTER brand */}
        <Link href="/" className="brand" aria-label="Home">
          <Image
            src="/logo.svg"
            alt="Medina Stay"
            width={44}
            height={44}
            className="brand-logo"
            priority
          />
          <span className="brand-text">
            <span className="brand-name">medina stay</span>
            <span className="brand-tagline">Property Management</span>
          </span>
        </Link>

        {/* RIGHT (desktop social) */}
        <div className="header-social" aria-label="Social links">
          <a href="https://www.instagram.com/medina.stay/#" target="_blank" aria-label="Instagram" rel="noreferrer">
            <Instagram size={18} />
          </a>
          <a href="https://wa.me/212612472003" target="_blank" aria-label="WhatsApp" rel="noreferrer">
            <MessageCircle size={18} />
          </a>
          <a
            href="https://www.google.com/maps/place/35%C2%B047'21.1%22N+5%C2%B048'55.5%22W/@35.789202,-5.815416,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.789202!4d-5.815416?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            aria-label="Google Maps"
            rel="noreferrer"
          >
            <MapPin size={18} />
          </a>
        </div>

        {/* MOBILE menu (button + dropdown) */}
        <div className="mobile-menu-wrap" ref={menuRef}>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {menuOpen && (
            <div className="mobile-menu" role="menu">
              <Link href="/services" className="mobile-menu-link" onClick={() => setMenuOpen(false)} role="menuitem">
                Services
              </Link>

              {/* later */}
              {/* <Link href="/projects" className="mobile-menu-link" onClick={() => setMenuOpen(false)} role="menuitem">
                Projects
              </Link> */}

              <Link href="/contact" className="mobile-menu-link" onClick={() => setMenuOpen(false)} role="menuitem">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
