"use client";

import { Montserrat, Open_Sans } from "next/font/google";
import { Briefcase, Users, Building, Clock, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const services = [
  {
    icon: Briefcase,
    title: "Work Permits",
    desc: "End-to-end processing of Class D, G, and other work permits for expatriate employees ensuring full legal compliance.",
    href: "/services/work-permits",
  },
  {
    icon: Users,
    title: "Dependent Passes",
    desc: "Facilitating the relocation of families by processing dependent passes for spouses and children efficiently.",
    href: "/services/dependent-passes",
  },
  {
    icon: Building,
    title: "Investor Permits",
    desc: "Specialized support for international investors seeking Class G permits to establish businesses in Kenya.",
    href: "/services/investor-permits",
  },
  {
    icon: Clock,
    title: "Special Passes",
    desc: "Expedited processing for short-term assignments, ensuring your team can start working without delay.",
    href: "/services/special-passes",
  },
];

export default function ServicesGrid() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .svc-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s ease;
        }
        .svc-card.is-visible { opacity: 1; transform: translateY(0); }
        .svc-card:nth-child(1) { transition-delay: 0s; }
        .svc-card:nth-child(2) { transition-delay: 0.1s; }
        .svc-card:nth-child(3) { transition-delay: 0.2s; }
        .svc-card:nth-child(4) { transition-delay: 0.3s; }
        .svc-card:hover {
          box-shadow: 0 16px 40px rgba(0,0,0,0.10);
          transform: translateY(-6px) !important;
        }
        .icon-wrap {
          width: 48px; height: 48px;
          border-radius: 10px;
          background: #f3f4f6;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.3s ease, transform 0.3s ease;
          margin-bottom: 20px;
        }
        .svc-card:hover .icon-wrap {
          background: #ea580c;
          transform: scale(1.1) rotate(-4deg);
        }
        .icon-wrap svg { width: 22px; height: 22px; color: #ea580c; transition: color 0.3s ease; }
        .svc-card:hover .icon-wrap svg { color: #fff; }
        .learn-link {
          display: inline-flex; align-items: center; gap: 4px;
          font-weight: 600;
          color: #374151;
          transition: color 0.2s ease, gap 0.2s ease;
          margin-top: auto;
        }
        .learn-link svg { width: 14px; height: 14px; transition: transform 0.2s ease; }
        .svc-card:hover .learn-link { color: #ea580c; gap: 8px; }
        .svc-card:hover .learn-link svg { transform: translateX(3px); }
      `}</style>

      <section className="bg-white pb-16 overflow-hidden">
        {/* ── Header banner — full bleed, no side padding clamp ── */}
        <div className="bg-[#0B132B] py-14 px-12 sm:px-16 lg:px-20 text-center mb-12">
          <p
            className={`${openSans.className} text-xs font-semibold tracking-widest uppercase text-orange-500 mb-3`}
          >
            Our Expertise
          </p>
          <h2
            className={`${montserrat.className} text-4xl md:text-5xl font-bold text-white mb-4`}
          >
            Comprehensive Immigration Services
          </h2>
          <p
            className={`${openSans.className} text-base text-gray-200 max-w-xl mx-auto leading-relaxed`}
          >
            Tailored solutions designed to meet the unique needs of expatriates
            and businesses operating in Kenya.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="max-w-6xl mx-auto px-12 sm:px-16 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                ref={(el) => (cardsRef.current[i] = el)}
                className="svc-card bg-white border border-gray-100 rounded-2xl p-6 flex flex-col shadow-sm"
              >
                <div className="icon-wrap">
                  <svc.icon />
                </div>
                <h3
                  className={`${montserrat.className} text-base font-bold text-[#0B132B] mb-2`}
                >
                  {svc.title}
                </h3>
                <p
                  className={`${openSans.className} text-sm md:text-base text-gray-500 leading-relaxed mb-4`}
                >
                  {svc.desc}
                </p>
                <a
                  href={svc.href}
                  className={`${openSans.className} learn-link text-sm md:text-base`}
                >
                  Learn more <ArrowRight />
                </a>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="/services"
              className={`${openSans.className} inline-flex items-center gap-1.5 text-base font-semibold text-[#0B132B] hover:text-orange-600 transition-colors`}
            >
              View all services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
