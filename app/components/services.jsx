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
    href: "/services/work-permits",
  },
  {
    icon: Building,
    title: "Investor Permit (Class G)",
    desc: "Specialized support for international investors seeking Class G permits to establish or operate specific trades, businesses, or consultancies in Kenya.",
    href: "/services/investor-permits",
  },
  {
    icon: Star,
    title: "Special Passes",
    desc: "Expedited processing for short-term assignments and project-based engagements, ensuring your team can begin work without delay.",
    href: "/services/special-passes",
  },
  {
    icon: Globe,
    title: "ETA",
    desc: "Electronic Travel Authorization processing for visitors and short-stay applicants, enabling fast, paperless entry into Kenya.",
    href: "/services/eta",
  },
  {
    icon: Users,
    title: "Dependent Pass",
    desc: "Facilitating the relocation of families by processing dependent passes for spouses and children of permit holders efficiently.",
    href: "/services/dependent-passes",
  },
  {
    icon: Shield,
    title: "Permanent Residence",
    desc: "Comprehensive guidance for qualifying expatriates seeking permanent residency status in Kenya, including Class K and long-term resident pathways.",
    href: "/services/permanent-residence",
  },
  {
    icon: Award,
    title: "Citizenship",
    desc: "Advisory and application support for eligible individuals pursuing Kenyan citizenship through naturalization or registration.",
    href: "/services/citizenship",
  },
];

// Additional permit classes for the expandable info panel
const allPermitClasses = [
  {
    code: "A",
    label: "Prospecting & Mining",
    desc: "For individuals engaging in mining or mineral exploration.",
  },
  {
    code: "B",
    label: "Agriculture & Animal Husbandry",
    desc: "For investors in agriculture or animal husbandry.",
  },
  {
    code: "C",
    label: "Prescribed Profession",
    desc: "For professionals (e.g., doctors, engineers, lawyers, architects) intending to work independently.",
  },
  {
    code: "D",
    label: "Employment",
    desc: "The most common permit, for individuals with specific skills not readily available in Kenya, employed by a specific employer.",
  },
  {
    code: "F",
    label: "Specific Manufacturing",
    desc: "For investors in specific manufacturing ventures.",
  },
  {
    code: "G",
    label: "Specific Trade / Consultancy",
    desc: "For investors in specific trades, businesses, or consultancies.",
  },
  {
    code: "I",
    label: "Religious / Charitable",
    desc: "For missionaries or members of religious or charitable organizations.",
  },
  {
    code: "K",
    label: "Ordinary Residents",
    desc: "For individuals with adequate income, usually over 35, not seeking employment.",
  },
  {
    code: "M",
    label: "Refugees",
    desc: "For recognized refugees living in Kenya.",
  },
  {
    code: "N",
    label: "Digital Nomad",
    desc: "For foreign nationals employed by companies outside Kenya. (New)",
  },
  {
    code: "P",
    label: "Diplomatic / NGO",
    desc: "For staff of UN, diplomatic missions, and international NGOs. (New)",
  },
  {
    code: "Q",
    label: "Religious / Charitable Professionals",
    desc: "For professionals working for religious or charitable organizations. (New)",
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
      { threshold: 0.1 },
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

        /* Permit classes table */
        .permit-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 8px;
          background: #0B132B; color: #fff;
          font-weight: 700; font-size: 13px;
          flex-shrink: 0;
        }
        .permit-row:hover { background: #f9fafb; }
      `}</style>

      <section className="bg-white pb-16 overflow-hidden">
        {/* Header banner */}
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

        {/* Cards — 4 cols on lg, 2 on md, 1 on sm */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className={`${openSans.className} text-sm text-gray-500 leading-relaxed mb-4`}
                >
                  {svc.desc}
                </p>
                <a
                  href={svc.href}
                  className={`${openSans.className} learn-link text-sm`}
                >
                  Learn more <ArrowRight />
                </a>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 mb-16">
            <a
              href="/services"
              className={`${openSans.className} inline-flex items-center gap-1.5 text-base font-semibold text-[#0B132B] hover:text-orange-600 transition-colors`}
            >
              View all services <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* All Permit Classes Reference Table */}
          <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#0B132B] px-6 py-4">
              <h3
                className={`${montserrat.className} text-white font-bold text-lg`}
              >
                Kenya Work Permit Classes — Full Reference
              </h3>
              <p className={`${openSans.className} text-gray-300 text-sm mt-1`}>
                Issued by the Directorate of Immigration Services
              </p>
            </div>
            <div className="divide-y divide-gray-50">
              {allPermitClasses.map((p) => (
                <div
                  key={p.code}
                  className="permit-row flex items-start gap-4 px-6 py-4 transition-colors"
                >
                  <span className="permit-badge">{p.code}</span>
                  <div>
                    <p
                      className={`${montserrat.className} text-sm font-bold text-[#0B132B]`}
                    >
                      Class {p.code} — {p.label}
                    </p>
                    <p
                      className={`${openSans.className} text-sm text-gray-500 mt-0.5`}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
