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

      if (y < 80) {
        setHidden(false);
      } else {
        setHidden(!goingDown);
      }

      if (menuOpen) setMenuOpen(false);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

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
        {/* Desktop nav */}
        <nav className="header-nav-left" aria-label="Primary">
          <Link href="/services" className="nav-link">
            Services
          </Link>
          {/* <Link href="/projects" className="nav-link">Projects</Link> */}
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Desktop brand */}
        <Link href="/" className="brand brand--desktop" aria-label="Home">
          <Image
            src="/logo-mark.svg"
            alt="Medina Stay"
            width={44}
            height={44}
            className="brand-logo"
            priority
          />
          <Image
            src="/word-mark.svg"
            alt="Medina Stay Property Management"
            width={180}
            height={55}
            className="brand-wordmark"
            priority
          />
        </Link>

        {/* Desktop social */}
        <div className="header-social" aria-label="Social links">
          <a
            href="https://www.instagram.com/medina.stay/#"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://wa.me/212612472003"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="https://www.google.com/maps/place/35%C2%B047'21.1%22N+5%C2%B048'55.5%22W/@35.789202,-5.815416,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.789202!4d-5.815416?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            aria-label="Google Maps"
          >
            <MapPin size={18} />
          </a>
        </div>

        {/* Mobile brand */}
        <Link href="/" className="brand brand--mobile" aria-label="Home">
          <Image
            src="/logo-mark.svg"
            alt="Medina Stay"
            width={40}
            height={40}
            className="brand-logo"
            priority
          />
          <Image
            src="/word-mark.svg"
            alt="Medina Stay Property Management"
            width={150}
            height={46}
            className="brand-wordmark"
            priority
          />
        </Link>

        {/* Mobile menu */}
        <div className="mobile-menu-wrap" ref={menuRef}>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {menuOpen && (
            <div className="mobile-menu" role="menu">
              <Link
                href="/services"
                className="mobile-menu-link"
                onClick={() => setMenuOpen(false)}
                role="menuitem"
              >
                Services
              </Link>

              {/* <Link
                href="/projects"
                className="mobile-menu-link"
                onClick={() => setMenuOpen(false)}
                role="menuitem"
              >
                Projects
              </Link> */}

              <Link
                href="/contact"
                className="mobile-menu-link"
                onClick={() => setMenuOpen(false)}
                role="menuitem"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}