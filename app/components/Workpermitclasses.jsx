"use client";

import { Montserrat, Open_Sans } from "next/font/google";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const permits = [
  {
    code: "A",
    label: "Prospecting & Mining",
    desc: "For individuals engaging in prospecting, mining, or mineral exploration activities within Kenya.",
    featured: false,
  },
  {
    code: "B",
    label: "Agriculture & Animal Husbandry",
    desc: "Issued to investors and professionals operating in Kenya's agricultural sector or animal husbandry industry.",
    featured: false,
  },
  {
    code: "C",
    label: "Prescribed Profession",
    desc: "For qualified professionals — including doctors, engineers, lawyers, and architects — intending to practise independently in Kenya.",
    featured: false,
  },
  {
    code: "D",
    label: "Employment",
    desc: "The most common permit class. Issued to individuals with specific skills not readily available locally, tied to a specific Kenyan employer.",
    featured: true,
  },
  {
    code: "F",
    label: "Specific Manufacturing",
    desc: "For foreign nationals investing in or managing specific manufacturing ventures registered and operating in Kenya.",
    featured: false,
  },
  {
    code: "G",
    label: "Specific Trade / Consultancy",
    desc: "For investors and entrepreneurs running specific trades, business enterprises, or consultancy operations in Kenya.",
    featured: true,
  },
  {
    code: "I",
    label: "Religious / Charitable",
    desc: "Issued to missionaries and members of recognized religious or charitable organizations conducting non-commercial activities.",
    featured: false,
  },
  {
    code: "K",
    label: "Ordinary Residents",
    desc: "For individuals aged 35 and above with sufficient independent income who do not intend to seek employment in Kenya.",
    featured: false,
  },
  {
    code: "M",
    label: "Refugees",
    desc: "Issued to individuals formally recognized as refugees under Kenyan law, enabling lawful residence and limited work activity.",
    featured: false,
  },
  {
    code: "N",
    label: "Digital Nomad",
    desc: "A new category for foreign nationals employed by companies based outside Kenya who wish to live and work remotely from Kenya.",
    featured: false,
    isNew: true,
  },
  {
    code: "P",
    label: "Diplomatic / NGO",
    desc: "For staff of United Nations agencies, diplomatic missions, and accredited international non-governmental organizations.",
    featured: false,
    isNew: true,
  },
  {
    code: "Q",
    label: "Religious / Charitable Professionals",
    desc: "A new class for skilled professionals deployed by religious or charitable organizations in a professional capacity.",
    featured: false,
    isNew: true,
  },
];

export default function WorkPermitClasses() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("wpc-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .wpc-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .wpc-item.wpc-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .wpc-item:nth-child(1)  { transition-delay: 0.00s; }
        .wpc-item:nth-child(2)  { transition-delay: 0.05s; }
        .wpc-item:nth-child(3)  { transition-delay: 0.10s; }
        .wpc-item:nth-child(4)  { transition-delay: 0.15s; }
        .wpc-item:nth-child(5)  { transition-delay: 0.20s; }
        .wpc-item:nth-child(6)  { transition-delay: 0.25s; }
        .wpc-item:nth-child(7)  { transition-delay: 0.30s; }
        .wpc-item:nth-child(8)  { transition-delay: 0.35s; }
        .wpc-item:nth-child(9)  { transition-delay: 0.40s; }
        .wpc-item:nth-child(10) { transition-delay: 0.45s; }
        .wpc-item:nth-child(11) { transition-delay: 0.50s; }
        .wpc-item:nth-child(12) { transition-delay: 0.55s; }

        .wpc-card {
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }
        .wpc-card:hover {
          box-shadow: 0 12px 32px rgba(0,0,0,0.09);
          transform: translateY(-3px);
          border-color: #ea580c !important;
        }
        .wpc-badge {
          font-family: inherit;
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        .wpc-card:hover .wpc-badge-default {
          background: #ea580c;
          color: #fff;
          transform: scale(1.08);
        }

        .stripe-bg {
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 6px,
            rgba(255,255,255,0.03) 6px,
            rgba(255,255,255,0.03) 12px
          );
        }
      `}</style>

      <section className="bg-[#f8f9fb] py-20 overflow-hidden">
        {/* ── Header ── */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p
                className={`${openSans.className} text-xs font-semibold tracking-widest uppercase text-orange-500 mb-3`}
              >
                Issued by the Directorate of Immigration Services
              </p>
              <h2
                className={`${montserrat.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B132B] leading-tight max-w-xl`}
              >
                We Offer the Following
                <br />
                <span className="text-orange-500">Work Permit</span> Services
              </h2>
            </div>
            <p
              className={`${openSans.className} text-sm text-gray-500 max-w-xs leading-relaxed lg:text-right`}
            >
              Kenya work permits range from Class A to Q. Our team handles every
              class — from investor and employment permits to the newest digital
              nomad and NGO categories.
            </p>
          </div>

          {/* Decorative rule */}
          <div className="mt-8 flex items-center gap-3">
            <div className="h-[2px] w-12 bg-orange-500 rounded-full" />
            <div className="h-[2px] flex-1 bg-gray-200 rounded-full" />
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {permits.map((p, i) => (
              <div
                key={p.code}
                ref={(el) => (itemsRef.current[i] = el)}
                className="wpc-item"
              >
                {p.featured ? (
                  /* ── Featured (orange) card ── */
                  <div className="wpc-card relative bg-[#0B132B] stripe-bg border border-[#0B132B] rounded-2xl p-6 flex flex-col h-full overflow-hidden">
                    {/* Glow blob */}
                    <div className="absolute -top-6 -right-6 w-28 h-28 bg-orange-500 opacity-20 rounded-full blur-2xl pointer-events-none" />

                    <div className="flex items-center gap-3 mb-4">
                      <span className="wpc-badge inline-flex items-center justify-center w-11 h-11 rounded-xl bg-orange-500 text-white font-bold text-lg flex-shrink-0">
                        {p.code}
                      </span>
                      <div className="flex flex-col">
                        <span
                          className={`${openSans.className} text-[10px] font-semibold tracking-widest uppercase text-orange-400`}
                        >
                          Class {p.code}
                        </span>
                        <span
                          className={`${montserrat.className} text-sm font-bold text-white leading-tight`}
                        >
                          {p.label}
                        </span>
                      </div>
                    </div>

                    <p
                      className={`${openSans.className} text-sm text-gray-300 leading-relaxed mb-5 flex-1`}
                    >
                      {p.desc}
                    </p>

                    <a
                      href={`/services/work-permits#class-${p.code.toLowerCase()}`}
                      className={`${openSans.className} inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors`}
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </a>

                    {/* "Most Popular" tag */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`${openSans.className} text-[9px] font-bold tracking-widest uppercase bg-orange-500 text-white px-2 py-0.5 rounded-full`}
                      >
                        Most Common
                      </span>
                    </div>
                  </div>
                ) : (
                  /* ── Standard card ── */
                  <div className="wpc-card bg-white border border-gray-100 rounded-2xl p-6 flex flex-col h-full shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="wpc-badge wpc-badge-default inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gray-100 text-[#0B132B] font-bold text-lg flex-shrink-0">
                        {p.code}
                      </span>
                      <div className="flex flex-col">
                        <span
                          className={`${openSans.className} text-[10px] font-semibold tracking-widest uppercase text-orange-500`}
                        >
                          Class {p.code}
                          {p.isNew && (
                            <span className="ml-2 bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded-full text-[9px] font-bold">
                              NEW
                            </span>
                          )}
                        </span>
                        <span
                          className={`${montserrat.className} text-sm font-bold text-[#0B132B] leading-tight`}
                        >
                          {p.label}
                        </span>
                      </div>
                    </div>

                    <p
                      className={`${openSans.className} text-sm text-gray-500 leading-relaxed mb-5 flex-1`}
                    >
                      {p.desc}
                    </p>

                    <a
                      href={`/services/work-permits#class-${p.code.toLowerCase()}`}
                      className={`${openSans.className} inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-orange-500 transition-colors`}
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Bottom CTA banner ── */}
          <div className="mt-12 bg-[#0B132B] rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p
                className={`${montserrat.className} text-white font-bold text-lg`}
              >
                Not sure which permit class applies to you?
              </p>
              <p className={`${openSans.className} text-gray-300 text-sm mt-1`}>
                Our immigration experts will assess your profile and guide you
                to the right permit.
              </p>
            </div>
            <a
              href="/contact"
              className={`${openSans.className} flex-shrink-0 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold text-sm px-6 py-3 rounded-xl`}
            >
              Get a Free Assessment <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
