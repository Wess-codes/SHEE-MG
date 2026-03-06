"use client";

import { Montserrat, Open_Sans } from "next/font/google";
import { MessageSquare, FileText, Send, CheckCircle, Home } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "We assess your needs and outline the best immigration pathway for you.",
  },
  {
    icon: FileText,
    title: "Documentation",
    desc: "Our team compiles and reviews all required documents for your application.",
  },
  {
    icon: Send,
    title: "Submission",
    desc: "We submit your application to the relevant authorities on your behalf.",
  },
  {
    icon: CheckCircle,
    title: "Approval",
    desc: "We follow up and liaise with authorities to secure timely approval.",
  },
  {
    icon: Home,
    title: "Settlement",
    desc: "We support your smooth transition and settlement into Kenya.",
  },
];

export default function ProcessDiagram() {
  return (
    <>
      <style>{`
        .step-card {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .step-card:hover {
          box-shadow: 0 12px 32px rgba(234,88,12,0.12);
          transform: translateY(-4px);
        }
        .connector {
          flex: 1;
          height: 2px;
          background: linear-gradient(to right, #ea580c, #fed7aa);
          margin-top: -60px;
          min-width: 16px;
        }
      `}</style>

      <section
        className={`${openSans.className} bg-[#f4f6f9] py-20 px-4 sm:px-6 lg:px-8`}
      >
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">
              How It Works
            </p>
            <h2
              className={`${montserrat.className} text-4xl md:text-5xl font-bold text-[#0B132B]`}
            >
              Our Process
            </h2>
          </div>

          {/* Steps — desktop: horizontal row with connectors, mobile: vertical stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center">
                {/* Connector line — desktop only, between cards */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[52px] left-[calc(50%+36px)] w-[calc(100%-36px)] h-[2px] bg-gradient-to-r from-orange-500 to-orange-200 z-0" />
                )}

                {/* Card */}
                <div className="step-card relative z-10 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full text-center">
                  {/* Step number badge */}
                  <div className="absolute -top-3 right-4 w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {i + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-5 h-5 text-orange-600" />
                  </div>

                  <h3
                    className={`${montserrat.className} text-base font-bold text-[#0B132B] mb-2`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
