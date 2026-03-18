"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });

export default function Consultation() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`${montserrat.className} text-4xl sm:text-5xl font-bold text-[#0B132B] mb-4`}
        >
          Book a Consultation
        </h2>
        <div className="w-12 h-[3px] bg-orange-500 rounded-full mx-auto mb-5" />
        <p className="text-gray-600 mb-10">
          Fill out the form below and our team will get back to you promptly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 space-y-6 text-left"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your consultation needs..."
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {status === "success" && (
            <p className="text-green-600 text-sm text-center">
              ✓ Message sent! We`&rsquo;`ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-500 transition disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
