"use client";

import Image from "next/image";
import { Montserrat, Open_Sans } from "next/font/google";
import { Briefcase, Eye, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function AboutSection() {
  const rightRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const els = [rightRef.current, card1Ref.current, card2Ref.current].filter(
      Boolean,
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .reveal-left {
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-up.delay-1 { transition-delay: 0.15s; }
        .reveal-up.delay-2 { transition-delay: 0.3s; }
        .is-visible {
          opacity: 1 !important;
          transform: none !important;
        }
        .about-img-wrap { position: relative; }
        .about-img-wrap img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .stat-badge {
          position: absolute;
          bottom: 0; left: 0;
          background: #0B132B;
          color: #fff;
          padding: 14px 22px;
          border-radius: 0 12px 0 0;
        }
        .mission-card {
          background: #f8f9fc;
          border: 1px solid #eef0f6;
          border-radius: 12px;
          padding: 20px;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .mission-card:hover {
          box-shadow: 0 8px 24px rgba(234,88,12,0.10);
          transform: translateY(-3px);
        }
      `}</style>

      <section className="bg-white py-16 px-12 sm:px-16 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* ── LEFT: Image ── */}
          <div className="about-img-wrap rounded-2xl overflow-hidden shadow-lg h-[420px]">
            <Image
              src="/about.jpeg"
              alt="Business meeting at SHEE-MG"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
            />
            {/* Stat badge */}
            <div className="stat-badge">
              <p
                className={`${montserrat.className} text-3xl font-bold leading-none`}
              >
                15<span className="text-orange-500">+</span>
              </p>
              <p
                className={`${openSans.className} text-sm text-gray-300 mt-1 max-w-[140px] leading-snug`}
              >
                Years of Excellence in Immigration Services
              </p>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div ref={rightRef} className="reveal-right space-y-3">
            {/* Eyebrow */}
            <p
              className={`${openSans.className} text-xs font-semibold tracking-widest uppercase text-orange-600`}
            >
              About SHEE-MG Ltd
            </p>

            {/* Heading — matches image: large, tight, bold */}
            <h2
              className={`${montserrat.className} text-3xl md:text-3xl font-bold text-[#0B132B] leading-tight`}
            >
              Your Strategic Partner for Global Mobility in Kenya
            </h2>

            {/* Body — comfortable reading size */}
            <p
              className={`${openSans.className} text-base text-gray-500 leading-relaxed`}
            >
              SHEE-MG Ltd is a premier consultancy firm dedicated to simplifying
              the complexities of immigration and expatriate management. We
              serve multinational corporations, NGOs, and individual investors
              looking to establish or expand their presence in Kenya.
            </p>
            <p
              className={`${openSans.className} text-base text-gray-500 leading-relaxed`}
            >
              Our deep understanding of Kenyan immigration laws combined with
              our strong network allows us to deliver efficient, compliant, and
              personalized solutions.
            </p>

            {/* Mission & Vision cards */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div ref={card1Ref} className="mission-card reveal-up delay-1">
                <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center mb-2">
                  <Briefcase className="w-4 h-4 text-orange-600" />
                </div>
                <h4
                  className={`${montserrat.className} text-sm font-bold text-[#0B132B] mb-1`}
                >
                  Our Mission
                </h4>
                <p
                  className={`${openSans.className} text-sm text-gray-500 leading-relaxed`}
                >
                  To provide seamless, compliant, and efficient immigration
                  solutions that empower businesses to thrive globally.
                </p>
              </div>

              <div ref={card2Ref} className="mission-card reveal-up delay-2">
                <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center mb-2">
                  <Eye className="w-4 h-4 text-orange-600" />
                </div>
                <h4
                  className={`${montserrat.className} text-sm font-bold text-[#0B132B] mb-1`}
                >
                  Our Vision
                </h4>
                <p
                  className={`${openSans.className} text-sm text-gray-500 leading-relaxed`}
                >
                  To be the most trusted and preferred immigration consultancy
                  partner in East Africa.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/about"
              className={`${openSans.className} inline-flex items-center gap-1.5 text-base font-semibold text-orange-600 hover:text-orange-500 transition-colors pt-1`}
            >
              Read Full Profile
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
