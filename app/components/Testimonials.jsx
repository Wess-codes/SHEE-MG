"use client";

import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const testimonials = [
  {
    name: "James Wilson",
    role: "Director, TechSolutions Kenya",
    quote:
      "SHEE-MG Ltd handled our entire team's relocation to Nairobi. The process was seamless, and their communication was excellent throughout.",
    image: "/img1m.jfif",
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, EcoVentures",
    quote:
      "Securing my investor permit seemed daunting until I met the team at SHEE-MG. They guided me through every step with professionalism.",
    image: "/img1f.jfif",
  },
  {
    name: "David Ochieng",
    role: "Regional Manager, Global Aid",
    quote:
      "Highly recommended for dependent passes. They made sure my family could join me in Kenya quickly and without any hassle.",
    image: "/img2m.jfif",
  },
];

export default function TestimonialsSection() {
  return (
    <>
      <style>{`
        .testi-card {
          background: #fff;
          border: 1px solid #eef0f4;
          border-radius: 16px;
          padding: 28px 24px 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .testi-card:hover {
          box-shadow: 0 10px 32px rgba(0,0,0,0.10);
          transform: translateY(-4px);
        }
        .stars { color: #f59e0b; font-size: 18px; letter-spacing: 2px; }
      `}</style>

      <section className="bg-[#f4f6f9] py-16">
        <div className="max-w-6xl mx-auto px-12 sm:px-16 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2
              className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#0B132B] mb-3`}
            >
              What Our Clients Say
            </h2>
            <p
              className={`${openSans.className} text-sm text-gray-500 max-w-lg mx-auto leading-relaxed`}
            >
              We are proud to have assisted hundreds of businesses and
              individuals. Here is what they have to say about our services.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testi-card"
                style={{ marginTop: i === 1 ? "0px" : "24px" }}
              >
                {/* Stars */}
                <div className="stars">★★★★★</div>

                {/* Quote */}
                <p
                  className={`${openSans.className} text-sm text-gray-600 italic leading-relaxed`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Avatar + name */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover shadow-sm flex-shrink-0"
                  />
                  <div>
                    <p
                      className={`${montserrat.className} text-sm font-600 text-[#0B132B] leading-tight`}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`${openSans.className} text-xs text-gray-400 leading-tight mt-0.5`}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
