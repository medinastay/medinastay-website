import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";

const CONTACT_EMAIL = "contact@medinastay.com";
const CONTACT_PHONE = "+212 6XX XXX XXX"; // placeholder Morocco number
const CONTACT_ADDRESS = "Rue Sidi Bouknadel N0 52, Tangier, Morocco";

const INSTAGRAM_URL = "https://instagram.com/medina.stay";
const LINKEDIN_URL = "https://linkedin.com/medina.stay";
const WHATSAPP_URL = "https://wa.me/2126XXXXXXXX";
const AIRBNB_URL = "https://www.airbnb.com/users/show/XXXXXXXX"; // TODO

function AirbnbIcon({ size = 18 }: { size?: number }) {
  return (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.415-6.425 3.618l-.274.022-.26.001c-3.48 0-6.358-2.416-6.358-6.478 0-1.141.281-2.296.945-3.905l.122-.303c1.173-2.671 5.37-11.45 7.104-14.85l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.232 0-2.203.626-3.235 2.508l-.134.256c-1.503 2.946-5.83 12.16-7.014 14.86l-.1.238c-.59 1.433-.82 2.453-.84 3.31l-.01.27c0 2.846 1.912 4.478 4.358 4.478 1.45 0 3.129-1.055 5.033-2.908l.228-.225.176-.179a.998.998 0 0 1 1.43 0l.175.178.229.226c1.905 1.854 3.584 2.909 5.034 2.909 2.446 0 4.357-1.632 4.357-4.478l-.01-.27c-.02-.857-.25-1.877-.84-3.31l-.101-.238c-1.212-2.771-5.503-11.89-7.013-14.86l-.134-.256C18.203 3.626 17.232 3 16 3zm0 10.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5zm0 2c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5z"
      />
    </svg>
  );
}

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
            <a href={AIRBNB_URL} target="_blank" rel="noreferrer" aria-label="Airbnb">
              <AirbnbIcon size={18} />
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
