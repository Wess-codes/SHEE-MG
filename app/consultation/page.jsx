"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Consultation() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <p
          className={`${montserrat.className} text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3`}
        ></p>
        <h2
          className={`${montserrat.className} text-4xl sm:text-5xl font-bold text-[#0B132B] mb-4`}
        >
          Book a Consultation
        </h2>
        <div className="w-12 h-[3px] bg-orange-500 rounded-full mx-auto mb-5" />

        <p className="text-gray-600 mb-10">
          Fill out the form below and our team will get back to you promptly.
        </p>

        <form className="bg-white shadow-md rounded-lg p-8 space-y-6 text-left">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              placeholder="Tell us about your consultation needs..."
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md font-semibold shadow-md transform transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
