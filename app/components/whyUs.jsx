"use client";

import { Montserrat, Open_Sans } from "next/font/google";
import { Timer, ShieldCheck, Wallet } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const features = [
  {
    icon: Timer,
    title: "Timely Processing",
    desc: "We understand that time is money. Our streamlined processes ensure the fastest possible turnaround times for all applications.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Guaranteed",
    desc: "Avoid legal pitfalls with our meticulous attention to detail and up-to-date knowledge of Kenyan immigration policies.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    desc: "No hidden costs. We provide clear, upfront quotations for all our services so you can budget effectively.",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .icon-circle {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: #ea580c;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .icon-circle svg { width: 16px; height: 16px; color: #fff; }

        .quote-mark {
          font-size: 52px;
          line-height: 1;
          color: #ea580c;
          font-family: Georgia, serif;
          margin-bottom: 6px;
        }
      `}</style>

      <section className="bg-white py-16 px-12 sm:px-16 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* ── LEFT ── */}
            <div>
              {/* Eyebrow */}
              <p
                className={`${openSans.className} text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3`}
              >
                Why Choose SHEE-MG
              </p>

              {/* Heading */}
              <h2
                className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#0B132B] leading-tight mb-8`}
              >
                Experience the Difference of Professional Care
              </h2>

              {/* Feature rows */}
              <div className="space-y-7">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="icon-circle mt-0.5">
                      <f.icon />
                    </div>
                    <div>
                      <h3
                        className={`${montserrat.className} text-base font-bold text-[#0B132B] mb-1`}
                      >
                        {f.title}
                      </h3>
                      <p
                        className={`${openSans.className} text-sm md:text-base text-gray-500 leading-relaxed`}
                      >
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: 2-col layout ── */}
            <div className="grid grid-cols-2 gap-3 items-start">
              {/* Left column: short image + quote card snug below */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden h-[180px]">
                  <img
                    src="/whyUs1.jpg"
                    alt="Document signing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl bg-[#fdf6ec] flex flex-col justify-center px-5 py-4 h-[170px]">
                  <div className="quote-mark">&quot;</div>
                  <p
                    className={`${openSans.className} text-sm text-gray-600 italic leading-relaxed`}
                  >
                    Efficient, reliable, and professional. The best in Nairobi.
                  </p>
                </div>
              </div>

              {/* Right column: tall building image + satisfaction card */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden h-[240px]">
                  <img
                    src="/whyUs2.jfif"
                    alt="Modern skyscrapers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl bg-[#0B132B] flex flex-col items-center justify-center text-center px-4 py-6">
                  <p
                    className={`${montserrat.className} text-4xl font-bold text-orange-500 leading-none`}
                  >
                    100%
                  </p>
                  <p
                    className={`${openSans.className} text-sm text-gray-300 mt-2 leading-snug`}
                  >
                    Client Satisfaction Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
