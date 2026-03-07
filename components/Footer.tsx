import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        {/* Brand */}
        <div>
          <Link href="/" className="site-footer__brandLink" aria-label="Medina Stay Home">
            <Image
              src="/logo-mark.svg"
              alt="Medina Stay"
              width={42}
              height={42}
              className="site-footer__logo"
            />
            <Image
              src="/word-mark.svg"
              alt="Medina Stay Property Management"
              width={160}
              height={49}
              className="site-footer__wordmark"
            />
          </Link>

          <p className="site-footer__desc">
            Premium property management with international standards and local expertise.
          </p>

          <div className="site-footer__operator">
            Owner-operated in <strong>Tangier</strong>.
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="site-footer__colTitle">Contact</h3>
          <ul className="site-footer__contact">
            <li>
              <Phone strokeWidth={1.8} />
              <a href="tel:+212612472003">+212 612 472 003</a>
            </li>
            <li>
              <Mail strokeWidth={1.8} />
              <a href="mailto:contact@medina-stay.com">contact@medina-stay.com</a>
            </li>
            <li>
              <MapPin strokeWidth={1.8} />
              <span>Rue Sidi Bouknadel No. 52, Tangier, Morocco</span>
            </li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="site-footer__colTitle">Pages</h3>
          <div className="site-footer__links">
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="site-footer__colTitle">Legal</h3>
          <div className="site-footer__links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottomInner">
          <div className="site-footer__copyright">
            © 2026 medina stay. All rights reserved.
          </div>

          <div className="site-footer__social">
            <a
              href="https://www.instagram.com/medina.stay/#"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.8} />
            </a>

            <a
              href="https://wa.me/212612472003"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
            </a>

            <a
              href="https://www.google.com/maps/place/35%C2%B047'21.1%22N+5%C2%B048'55.5%22W/@35.789202,-5.815416,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.789202!4d-5.815416?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Maps"
            >
              <MapPin size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}