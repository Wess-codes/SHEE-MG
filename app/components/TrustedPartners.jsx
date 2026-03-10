"use client";

import { Montserrat } from "next/font/google";
import { useEffect, useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const partners = [
  { src: "/img1.jpg", alt: "AWS" },
  { src: "/img2.jpeg", alt: "Google" },
  { src: "/img3.png", alt: "Microsoft" },
  { src: "/img4.png", alt: "ISO Certified" },
  { src: "/img5.jfif", alt: "Kenya Government" },
  { src: "/img6.png", alt: "Partner 1" },
  { src: "/img7.png", alt: "Partner 2" },
  { src: "/img8.png", alt: "Partner 3" },
  { src: "/img9.jfif", alt: "Partner 4" },
];

// Duplicate for seamless infinite scroll
const marqueeItems = [...partners, ...partners];

export default function TrustedPartners() {
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const trackRef = useRef(null);

  /* ---------- Scroll-reveal for heading + divider ---------- */
  useEffect(() => {
    const els = [headingRef.current, dividerRef.current].filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ---------- Pause marquee on hover ---------- */
  const pauseMarquee = () =>
    trackRef.current?.style.setProperty("animation-play-state", "paused");
  const resumeMarquee = () =>
    trackRef.current?.style.setProperty("animation-play-state", "running");

  return (
    <>
      {/* ── Inline styles (no extra CSS file needed) ── */}
      <style>{`
        /* Reveal animation */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay { transition-delay: 0.15s; }

        /* Marquee track */
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 48s linear infinite;
          will-change: transform;
        }

        /* Logo card */
        .logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 160px;
          height: 80px;
          margin: 0 32px;
          flex-shrink: 0;
        }
        .logo-card img {
          max-height: 58px;
          width: auto;
          object-fit: contain;
          filter: grayscale(0) opacity(1);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .logo-card:hover img {
          transform: scale(1.2);
          opacity: 0.75;
        }

        /* Fade edges */
        .marquee-fade {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }

        /* Divider dot pulse */
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.5); opacity: 0.6; }
        }
        .dot-pulse { animation: pulse-dot 2s ease-in-out infinite; }
      `}</style>

      <section className="bg-[#fafafa] py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center mb-10">
          {/* Label */}
          <div
            ref={dividerRef}
            className="reveal reveal-delay flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-orange-500 opacity-40" />
            <span className="dot-pulse inline-block w-2 h-2 rounded-full bg-orange-500" />
            <div className="h-px w-12 bg-orange-500 opacity-40" />
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            className={`${montserrat.className} reveal text-2xl md:text-3xl font-bold text-[#0B132B]`}
          >
            Trusted Partners &amp; Clients
          </h2>

          <p className="reveal reveal-delay mt-2 text-sm text-gray-400 font-normal">
            Working alongside globally recognised institutions
          </p>
        </div>

        {/* ── Marquee ── */}
        <div
          className="marquee-fade overflow-hidden"
          onMouseEnter={pauseMarquee}
          onMouseLeave={resumeMarquee}
        >
          <div ref={trackRef} className="marquee-track">
            {marqueeItems.map((p, i) => (
              <div key={i} className="logo-card">
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
