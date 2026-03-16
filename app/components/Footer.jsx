import Link from "next/link";
import { Montserrat, Open_Sans } from "next/font/google";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          font-size: 15px;
          color: #9ca3af;
          transition: color 0.2s;
          display: block;
          margin-bottom: 10px;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-col-title {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .social-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          font-size: 14px;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }

        .social-btn:hover {
          border-color: #ea580c;
          color: #ea580c;
          transform: translateY(-2px);
        }
      `}</style>

      <footer className={`${openSans.className} bg-[#0B132B] pt-14 pb-8`}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="bg-orange-600 text-white w-8 h-8 flex items-center justify-center rounded font-bold text-sm flex-shrink-0">
                  S
                </div>

                <span
                  className={`${montserrat.className} text-white font-bold text-base tracking-wide`}
                >
                  SHEE-MG.
                </span>
              </Link>

              <p className="text-gray-400 text-base leading-relaxed mb-5">
                Your trusted partner for immigration and expatriate services in
                Kenya. Professional, compliant, and efficient solutions for
                businesses and individuals.
              </p>

              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="footer-col-title">Quick Links</p>

              <Link href="/" className="footer-link">
                Home
              </Link>
              <Link href="/about" className="footer-link">
                About Us
              </Link>
              <Link href="/services" className="footer-link">
                Services
              </Link>
              <Link href="/contact" className="footer-link">
                Contact Us
              </Link>
            </div>

            {/* Services */}
            <div>
              <p className="footer-col-title">Our Services</p>

              <Link href="/services#work-permits" className="footer-link">
                Work Permits (Class D)
              </Link>

              <Link href="/services#investor-permits" className="footer-link">
                Investor Permits (Class G)
              </Link>

              <Link href="/services#dependent-passes" className="footer-link">
                Dependent Passes
              </Link>

              <Link href="/services#special-passes" className="footer-link">
                Special Passes
              </Link>

              <Link
                href="/services#permanent-residence"
                className="footer-link"
              >
                Permanent Residence
              </Link>
            </div>

            {/* Contact */}
            <div>
              <p className="footer-col-title">Contact Us</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-400 text-base leading-snug">
                    2nd Floor, Hughes Building,
                    <br />
                    Kenyatta Avenue, Nairobi
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-400 text-base leading-snug">
                    2nd Floor, Mountain Mall,
                    <br />
                    Thika Road, Nairobi
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <a
                    href="tel:+254725371360"
                    className="text-gray-400 text-base hover:text-white transition"
                  >
                    +254 725 371360
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <a
                    href="mailto:info@shee-mg.com"
                    className="text-gray-400 text-base hover:text-white transition"
                  >
                    info@shee-mg.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-sm">
              © 2026 SHEE-MG Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="text-gray-500 text-sm hover:text-gray-300 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-gray-500 text-sm hover:text-gray-300 transition"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
