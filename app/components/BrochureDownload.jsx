import { Montserrat, Open_Sans } from "next/font/google";
import { FileDown } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function BrochureDownload() {
  return (
    <section
      className={`${openSans.className} bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative border-t border-gray-100`}
    >
      {/* Subtle background accent circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-orange-100/60 pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-orange-50 pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col items-center text-center gap-10">
        {/* Text */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">
            Free Resource
          </p>
          <h2
            className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#0B132B] leading-tight mb-4`}
          >
            Download Our Brochure
          </h2>
          <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
            Get a detailed overview of our immigration services, pricing, and
            solutions — all in one easy-to-share document.
          </p>
        </div>

        {/* Download card */}
        <div className="bg-[#f8f9fc] border border-[#eef0f6] rounded-2xl px-8 py-8 flex flex-col items-center gap-5 min-w-[260px] text-center shadow-sm">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
            <FileDown className="w-7 h-7 text-orange-600" />
          </div>

          <div>
            <p className="text-[#0B132B] font-semibold text-base mb-1">
              SHEE-MG Brochure
            </p>
            <p className="text-gray-400 text-sm">
              PDF · Full Services Overview
            </p>
          </div>

          <a
            href="/SHEE-MG BROCHURE.pdf"
            download
            className={`${montserrat.className} inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-md shadow-orange-200`}
          >
            <FileDown className="w-4 h-4" />
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
}
