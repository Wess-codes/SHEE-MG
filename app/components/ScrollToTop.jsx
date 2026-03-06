"use client";

// components/ScrollToTop.jsx
// Add <ScrollToTop /> once inside your root layout, outside any section.
// It handles both:
//   1. Smooth scroll speed (via CSS scroll-behavior override)
//   2. A scroll-to-top button that appears after scrolling 400px

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Smooth scroll speed — CSS alone can't control speed,
    // so we use a lightweight JS override for anchor links
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <style>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ea580c;
          color: #fff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(234,88,12,0.35);
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s ease;
          pointer-events: none;
        }
        .scroll-top-btn.show {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        .scroll-top-btn:hover {
          background: #c2410c;
        }
      `}</style>

      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${visible ? "show" : ""}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
