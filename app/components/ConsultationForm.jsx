"use client";

import { Montserrat, Open_Sans } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function ConsultationForm() {
  const [form, setForm] = useState({ email: "", service: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.service) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name || "Website Visitor",
          email: form.email,
          phone: form.phone || "N/A",
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ email: "", service: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <style>{`
        .cta-card {
          background: linear-gradient(135deg, #0f1f3d 0%, #1a1a2e 40%, #3b1a1a 100%);
          border-radius: 20px;
          padding: 56px 48px;
          max-width: 560px;
          margin: 0 auto;
        }
        .cta-input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 8px;
          padding: 12px 16px;
          color: #fff;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease;
          appearance: none;
          -webkit-appearance: none;
        }
        .cta-input::placeholder { color: rgba(255,255,255,0.45); }
        .cta-input:focus { border-color: rgba(255,255,255,0.7); }
        .cta-input option { background: #1a1a2e; color: #fff; }
        .cta-btn {
          width: 100%;
          background: #ea580c;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 13px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
          letter-spacing: 0.02em;
        }
        .cta-btn:hover { background: #c2410c; transform: translateY(-1px); }
        .cta-btn:active { transform: translateY(0); }
        .cta-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
      `}</style>

      <section className="bg-[#f4f6f9] py-16 px-6">
        <div className="cta-card">
          <div className="text-center mb-8">
            <h2
              className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white leading-tight mb-3`}
            >
              Ready to Streamline Your Immigration Process?
            </h2>
            <p
              className={`${openSans.className} text-sm text-gray-300 leading-relaxed`}
            >
              Book a free 15-minute consultation with our experts to discuss
              your specific needs.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              className={`${openSans.className} cta-input`}
              required
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`${openSans.className} cta-input`}
              required
            >
              <option value="" disabled>
                Select service needed
              </option>
              <option value="Work Permit">Work Permit</option>
              <option value="Investor Permit">Investor Permit</option>
              <option value="Dependent Pass">Dependent Pass</option>
              <option value="Special Pass">Special Pass</option>
            </select>

            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                ✓ Request sent! We`&rsquo;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className={`${montserrat.className} cta-btn`}
            >
              {status === "sending" ? "Sending..." : "Request Consultation"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
