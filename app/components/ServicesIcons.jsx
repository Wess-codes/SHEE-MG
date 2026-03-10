"use client";

import { Montserrat, Open_Sans } from "next/font/google";
import {
  Briefcase,
  Building,
  Star,
  Globe,
  Users,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const services = [
  {
    icon: Briefcase,
    title: "Work Permit (Class D)",
    desc: "End-to-end processing of Class D employment permits for skilled expatriates whose expertise is not readily available in Kenya, issued for a specific employer.",
    href: "/services#work-permits",
  },
  {
    icon: Building,
    title: "Investor Permit (Class G)",
    desc: "Specialized support for international investors seeking Class G permits to establish or operate specific trades, businesses, or consultancies in Kenya.",
    href: "/services#investor-permits",
  },
  {
    icon: Star,
    title: "Special Passes",
    desc: "Expedited processing for short-term assignments and project-based engagements, ensuring your team can begin work without delay.",
    href: "/services#special-passes",
  },
  {
    icon: Globe,
    title: "ETA",
    desc: "Electronic Travel Authorization processing for visitors and short-stay applicants, enabling fast, paperless entry into Kenya.",
    href: "/services#eta",
  },
  {
    icon: Users,
    title: "Dependent Pass",
    desc: "Facilitating the relocation of families by processing dependent passes for spouses and children of permit holders efficiently.",
    href: "/services#dependent-passes",
  },
  {
    icon: Shield,
    title: "Permanent Residence",
    desc: "Comprehensive guidance for qualifying expatriates seeking permanent residency status in Kenya, including Class K and long-term resident pathways.",
    href: "/services#permanent-residence",
  },
  {
    icon: Award,
    title: "Citizenship",
    desc: "Advisory and application support for eligible individuals pursuing Kenyan citizenship through naturalization or registration.",
    href: "/services#citizenship",
  },
];

export default function ServicesIcons() {
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
        .svc-card:nth-child(2) { transition-delay: 0.08s; }
        .svc-card:nth-child(3) { transition-delay: 0.16s; }
        .svc-card:nth-child(4) { transition-delay: 0.24s; }
        .svc-card:nth-child(5) { transition-delay: 0.32s; }
        .svc-card:nth-child(6) { transition-delay: 0.40s; }
        .svc-card:nth-child(7) { transition-delay: 0.48s; }
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

      <section className="bg-white pt-40 pb-6 overflow-hidden">
        <div className="max-w-6xl mx-auto px-12 sm:px-16 lg:px-20">
          {/* Title */}
          <div className="mb-10">
            <h1
              className={`${montserrat.className} text-4xl md:text-5xl text-center font-bold text-[#0B132B] leading-tight`}
            >
              Our Services
            </h1>
            <div className="w-12 h-[3px] bg-orange-500 rounded-full mx-auto mb-5 mt-3" />
          </div>

          {/* Row 1: 4 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {services.slice(0, 4).map((svc, i) => (
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

          {/* Row 2: 3 cards — centred */}
          <div className="flex flex-wrap justify-center gap-6">
            {services.slice(4).map((svc, i) => (
              <div
                key={svc.title}
                ref={(el) => (cardsRef.current[4 + i] = el)}
                className="svc-card bg-white border border-gray-100 rounded-2xl p-6 flex flex-col shadow-sm w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
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
        </div>
      </section>
    </>
  );
}
