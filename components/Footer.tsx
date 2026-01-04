import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";

const CONTACT_EMAIL = "contact@medinastay.com";
const CONTACT_PHONE = "+212 6XX XXX XXX"; // placeholder Morocco number
const CONTACT_ADDRESS = "Rue Sidi Bouknadel N0 52, Tangier, Morocco";

const INSTAGRAM_URL = "https://instagram.com/medina.stay";
const LINKEDIN_URL = "https://linkedin.com/medina.stay";
const WHATSAPP_URL = "https://wa.me/2126XXXXXXXX";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        {/* 01) Brand + summary */}
        <div className="site-footer__brand">
          <Link href="/" className="site-footer__brandLink" aria-label="Home">
            <Image
              src="/logo.svg"
              alt="Medina Stay"
              width={32}
              height={32}
              className="site-footer__logo"
            />
            <div className="site-footer__brandText">
              <div className="site-footer__brandName">medina stay</div>
              <div className="site-footer__brandTag">Property Management</div>
            </div>
          </Link>

          <p className="site-footer__desc">
            Premium property management in Tangier with international standards and local expertise.
                      </p>
        </div>

        {/* 02) Contact */}
        <div className="site-footer__col">
          <div className="site-footer__colTitle">Contact</div>
          <ul className="site-footer__contact">
            <li>
              <Phone size={16} />
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>{CONTACT_ADDRESS}</span>
            </li>
          </ul>
        </div>

        {/* 03) Pages */}
        <div className="site-footer__col">
          <div className="site-footer__colTitle">Pages</div>
          <div className="site-footer__links">
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* 04) Legal */}
        <div className="site-footer__col">
          <div className="site-footer__colTitle">Legal</div>
          <div className="site-footer__links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* 05) Bottom bar */}
      <div className="site-footer__bottom">
        <div className="container site-footer__bottomInner">
          <div className="site-footer__copyright">
            © {new Date().getFullYear()} medina stay. All rights reserved.
          </div>

          <div className="site-footer__social">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
