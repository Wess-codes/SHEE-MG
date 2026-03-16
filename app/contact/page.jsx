"use client";

import Link from "next/link";
import { Phone, Mail, Globe, MapPin, ArrowRight } from "lucide-react";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const contactDetails = [
  {
    Icon: Phone,
    label: "Phone",
    value: "+254 725 371360",
    href: "tel:+254725371360",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "info@shee-mg.co.ke",
    href: "mailto:info@shee-mg.co.ke",
  },
  {
    Icon: Globe,
    label: "Website",
    value: "www.shee-mg.co.ke",
    href: "https://www.shee-mg.co.ke",
  },
  {
    Icon: MapPin,
    label: "Address",
    value: "2nd Floor, Hughes Building, Kenyatta Avenue, Nairobi",
    href: "https://maps.google.com/?q=Hughes+Building+Kenyatta+Avenue+Nairobi",
  },
  {
    Icon: MapPin,
    label: "Branch Office",
    value: "2nd Floor, Mountain Mall, Thika Road, Nairobi",
    href: "https://maps.google.com/?cid=17653097262655609594&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
  },
];

export default function ContactPage() {
  return (
    <main className={`${openSans.className} bg-white`}>
      {/* ── HERO ── */}
      <section className="bg-white pt-32 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-100">
        <p className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-3"></p>
        <h1
          className={`${montserrat.className} text-4xl sm:text-5xl font-bold text-[#0B132B] mb-4`}
        >
          Contact Us
        </h1>
        <div className="w-12 h-[3px] bg-orange-500 rounded-full mx-auto mb-5" />
        <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
          We&apos;re here to help with immigration and compliance solutions.
          Reach out through any of the channels below.
        </p>
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm mt-6">
          <Link
            href="/"
            className="text-gray-400 hover:text-orange-500 transition"
          >
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-orange-500 font-semibold">Contact</span>
        </nav>
      </section>

      {/* ── CONTACT CARDS + MAP ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f4f6f9]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — contact detail cards */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">
              Reach Us
            </p>
            <h2
              className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#0B132B] leading-tight mb-6`}
            >
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Whether you have a question about permits, pricing, or just want
              to explore your options — our team is ready to assist.
            </p>

            <div className="space-y-4">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-100 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition">
                    <Icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-[#0B132B] leading-snug">
                      {value}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-orange-500 transition ml-auto self-center" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.123456789!2d36.8219!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d123456789%3A0xabcdef123456789!2sHughes%20Building%2C%20Kenyatta%20Avenue%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center border-t border-gray-100">
        <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">
          Ready to Start?
        </p>
        <h2
          className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#0B132B] mb-4`}
        >
          Book a Free Consultation
        </h2>
        <p className="text-base text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
          Let us guide you through the immigration process. Book a free
          consultation with our experts today.
        </p>
        <Link
          href="/consultation"
          className="inline-flex items-center gap-2 bg-orange-600 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-orange-500 transition"
        >
          Book Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
