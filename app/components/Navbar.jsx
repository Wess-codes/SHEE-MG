"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { Menu, X } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/info" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-link {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #374151;
          transition: color 0.2s;
          position: relative;
          white-space: nowrap;
        }
        .nav-link:hover { color: #ea580c; }

        .drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #0B132B;
          border-bottom: 1px solid #f3f4f6;
          transition: color 0.2s;
          width: 100%;
          text-align: left;
        }
        .drawer-link:hover { color: #ea580c; }

        .book-btn {
          background: #0B132B;
          color: #fff;
          padding: 10px 22px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          transition: background 0.2s ease;
          white-space: nowrap;
        }
        .book-btn:hover { background: #1d2a4a; }

        .mobile-drawer {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: flex;
        }
        .drawer-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
        }
        .drawer-panel {
          position: relative;
          background: #fff;
          width: 280px;
          height: 100%;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow-y: auto;
          z-index: 1;
        }
      `}</style>

      <nav
        className={`${montserrat.className} fixed top-0 w-full bg-white border-b border-gray-100 z-50 shadow-sm`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0 group"
          >
            <Image src="/LOGO.png" alt="SHEE-MG Logo" width={44} height={44} />
            <span className="text-base font-bold tracking-wide text-[#0B132B] group-hover:text-orange-600 transition-colors duration-200">
              SHEE-MG.
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/consultation" className="book-btn">
              Book Consultation
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileOpen(true)}
              className="text-gray-700 p-1"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className={`${montserrat.className} mobile-drawer`}>
          <div
            className="drawer-overlay"
            onClick={() => setMobileOpen(false)}
          />
          <div className="drawer-panel">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/LOGO.png"
                  alt="SHEE-MG Logo"
                  width={32}
                  height={32}
                />
                <span className="font-bold text-[#0B132B]">SHEE-MG.</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-gray-500 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="drawer-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="mt-6">
              <Link
                href="/consultation"
                className="book-btn block text-center"
                onClick={() => setMobileOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
