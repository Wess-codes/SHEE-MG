"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Timer,
  ShieldCheck,
  Wallet,
  Briefcase,
  Eye,
  Globe,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "1,500+", label: "Permits Processed" },
  { value: "98%", label: "Approval Rate" },
  { value: "500+", label: "Global Clients" },
];

const faqs = [
  {
    q: "What types of work permits do you handle?",
    a: "We handle Class D, Class G, and special passes for expatriates and investors operating in Kenya.",
  },
  {
    q: "How long does a work permit take to process?",
    a: "Processing times vary, but our streamlined approach typically delivers results within 4–8 weeks.",
  },
  {
    q: "Do you assist with dependent passes?",
    a: "Yes. We help families relocate by processing dependent passes for spouses and children efficiently.",
  },
  {
    q: "Can you help international investors?",
    a: "Absolutely. We specialize in Class G investor permits for businesses looking to establish a presence in Kenya.",
  },
];

const values = [
  {
    title: "Integrity",
    desc: "Full transparency — no hidden fees, no shortcuts, no surprises.",
    Icon: ShieldCheck,
  },
  {
    title: "Expertise",
    desc: "15+ years of hands-on experience navigating Kenyan immigration law.",
    Icon: Briefcase,
  },
  {
    title: "Speed",
    desc: "Streamlined processes that deliver the fastest possible turnaround.",
    Icon: Timer,
  },
  {
    title: "Transparent Pricing",
    desc: "Clear upfront quotations so you can budget effectively every time.",
    Icon: Wallet,
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className={`${openSans.className} bg-white`}>
      {/* ── HERO — full image, short, ocean blue overlay ── */}
      <section className="relative w-full h-[320px] sm:h-[360px] overflow-hidden">
        <Image
          src="/ah3.jfif"
          alt="About SHEE-MG"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Ocean blue overlay */}
        <div className="absolute inset-0 bg-blue-900/55" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-400 mb-3">
            SHEE-MG Ltd
          </p>
          <h1
            className={`${montserrat.className} text-4xl sm:text-5xl font-bold text-white leading-tight mb-4`}
          >
            About Us
          </h1>
          <div className="w-12 h-[3px] bg-orange-500 rounded-full mb-4" />
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-white/50 hover:text-white transition"
            >
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-orange-400 font-semibold">About Us</span>
          </nav>
        </div>
      </section>

      {/* ── WHO WE ARE — no image, centered text + 3 cards ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-screen-xl mx-auto">
          {/* Centered intro */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">
              About SHEE-MG Ltd
            </p>
            <h2
              className={`${montserrat.className} text-4xl md:text-5xl font-bold text-[#0B132B] leading-tight mb-5`}
            >
              Your Strategic Partner for Global Mobility in Kenya
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              SHEE-MG Ltd is a premier consultancy dedicated to simplifying
              immigration and expatriate management. We serve multinationals,
              NGOs, and individual investors looking to establish or expand
              their presence in Kenya — delivering compliant, efficient, and
              personalized solutions.
            </p>
          </div>

          {/* 3 cards — Mission, Vision, Reach */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                Icon: Briefcase,
                title: "Our Mission",
                text: "To provide seamless, compliant immigration solutions that empower businesses and individuals to thrive globally.",
              },
              {
                Icon: Eye,
                title: "Our Vision",
                text: "To be the most trusted and preferred immigration consultancy partner across East Africa.",
              },
              {
                Icon: Globe,
                title: "Our Reach",
                text: "Serving clients from over 30 countries with tailored immigration solutions rooted in deep local expertise.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-[#f8f9fc] border border-[#eef0f6] rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-4">
                  <c.Icon className="w-5 h-5 text-orange-600" />
                </div>
                <h4
                  className={`${montserrat.className} text-base font-bold text-[#0B132B] mb-2`}
                >
                  {c.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0B132B] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className={`${montserrat.className} text-4xl font-bold text-orange-500 leading-none mb-2`}
              >
                {s.value}
              </p>
              <p className="text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f4f6f9]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">
              What Drives Us
            </p>
            <h2
              className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#0B132B]`}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-4">
                  <v.Icon className="w-5 h-5 text-orange-600" />
                </div>
                <h3
                  className={`${montserrat.className} text-base font-bold text-[#0B132B] mb-2`}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f4f6f9]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">
              Got Questions?
            </p>
            <h2
              className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#0B132B]`}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  openFaq === i
                    ? "shadow-md ring-1 ring-orange-100"
                    : "shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  {/* Number + question */}
                  <div className="flex items-center gap-4 pr-4">
                    <span
                      className={`text-sm font-bold flex-shrink-0 transition-colors duration-200 ${openFaq === i ? "text-orange-500" : "text-gray-300"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-base font-semibold transition-colors duration-200 ${openFaq === i ? "text-orange-600" : "text-[#0B132B]"}`}
                    >
                      {faq.q}
                    </span>
                  </div>

                  {/* Toggle icon */}
                  <div
                    className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-orange-600 rotate-180" : "bg-gray-100"}`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 ${openFaq === i ? "text-white" : "text-gray-400"}`}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 pt-0 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4 ml-10">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-gray-100">
        <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">
          Ready to Start?
        </p>
        <h2
          className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#0B132B] mb-4`}
        >
          Let&apos;s Work Together
        </h2>
        <p className="text-base text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
          Whether you&apos;re a business relocating staff or an investor
          entering Kenya, we&apos;re here to make it seamless.
        </p>
        <Link
          href="/consultation"
          className="inline-flex items-center gap-2 bg-orange-600 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-orange-500 transition"
        >
          Book a Free Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
