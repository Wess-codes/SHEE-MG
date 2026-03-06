import Image from "next/image";
import { Montserrat, Open_Sans } from "next/font/google";
import {
  CheckBadgeIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function HeroSection() {
  return (
    <section className="bg-white pt-28 sm:pt-24 pb-12 px-12 sm:px-16 lg:px-20">
      {/* pt-24 offsets a fixed navbar (~64px tall) + a little breathing room */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left space-y-3">
          {/* Label */}
          <p className="text-orange-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-1 justify-center lg:justify-start">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-600" />
            Premium Corporate Services Kenya
          </p>

          {/* Heading */}
          <h1
            className={`${montserrat.className} text-4xl md:text-5xl font-bold text-[#0B132B] leading-tight`}
          >
            Immigration &amp; <br />
            Expatriate Solutions
          </h1>

          {/* Description */}
          <p
            className={`${openSans.className} text-sm md:text-base text-gray-500 max-w-md mx-auto lg:mx-0 leading-relaxed`}
          >
            Navigating Kenyan immigration laws with precision and expertise. We
            provide seamless work permit processing, investor guidance, and
            comprehensive expatriate support for global businesses.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-1">
            <a
              href="/consultation"
              className="flex items-center justify-center gap-2 bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-500 transition"
            >
              Book Free Consultation
              <ArrowRightIcon className="w-4 h-4 text-white" />
            </a>

            <a
              href="/services"
              className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-50 transition"
            >
              Explore Services
            </a>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-1 text-gray-600">
            <div className="flex items-center gap-1.5">
              <CheckBadgeIcon className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ChartBarIcon className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-medium">98% Approval Rate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ClockIcon className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-medium">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/HeroImage.png"
            alt="Professional team reviewing documents"
            width={500}
            height={400}
            className="rounded-2xl shadow-xl object-cover"
          />

          {/* Top Card */}
          <div className="absolute top-4 right-3 bg-white shadow-md rounded-lg px-3 py-2 text-xs flex items-center gap-2">
            {/* Avatar stack placeholder */}
            <div className="flex -space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-orange-300 border-2 border-white" />
              <div className="w-5 h-5 rounded-full bg-blue-300 border-2 border-white" />
              <div className="w-5 h-5 rounded-full bg-green-300 border-2 border-white" />
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-none">+500</p>
              <p className="text-gray-400 leading-tight">
                Trusted by global firms
              </p>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-4 left-3 bg-white shadow-md rounded-lg px-3 py-2 text-xs">
            <p className="text-gray-400 text-[10px] uppercase tracking-wide">
              Permits Processed
            </p>
            <p className="font-bold text-gray-900 text-base leading-tight">
              1,500+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
