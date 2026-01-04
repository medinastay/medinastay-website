"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, MapPin } from "lucide-react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;

      // show when scrolling down, hide when scrolling up
      if (y < 80) {
        setHidden(false);
      } else {
        setHidden(!goingDown);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${hidden ? "site-header--hidden" : ""}`}>
      <div className="container header-inner">

        {/* LEFT */}
        <nav className="header-nav-left">
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* CENTER */}
        <Link href="/" className="brand" aria-label="Home">
          <Image
            src="/logo.svg"
            alt="Medina Stay"
            width={34}
            height={34}
            className="brand-logo"
            priority
          />
          <span className="brand-text">
            <span className="brand-name">medina stay</span>
            <span className="brand-tagline">Property Management</span>
          </span>
        </Link>

        {/* RIGHT */}
        <div className="header-social">
          <a href="https://www.instagram.com/medina.stay/#" target="_blank" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://wa.me/212XXXXXXX" target="_blank" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a href="https://www.google.com/maps/place/35%C2%B047'21.1%22N+5%C2%B048'55.5%22W/@35.789202,-5.815416,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.789202!4d-5.815416?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" aria-label="Google">
            <MapPin size={18} />
          </a>
        </div>

      </div>
    </header>
  );
}
