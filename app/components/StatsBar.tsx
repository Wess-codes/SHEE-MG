"use client";

import { useEffect, useState } from "react";

interface AnimatedStatProps {
  value: string;       // e.g. "1500+" or "98%"
  label: string;       // description text
  duration?: number;   // optional animation duration in ms
}

function AnimatedStat({ value, label, duration = 2000 }: AnimatedStatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(value.replace(/\D/g, ""), 10); // numeric part
    const increment = end / (duration / 16); // approx 60fps
    let current = 0;

    function update() {
      current += increment;
      if (current < end) {
        setCount(Math.floor(current));
        requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(update);
  }, [value, duration]);

  return (
    <div>
      <h3 className="text-3xl font-bold text-primary">
        {count}
        {value.replace(/[0-9]/g, "")} {/* keep suffix like + or % */}
      </h3>
      <p className="text-gray-700">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
        <AnimatedStat value="13+" label="Years of Experience" />
        <AnimatedStat value="100+" label="Permits Processed" />
        <AnimatedStat value="100+" label="Clients Served" />
        <AnimatedStat value="98%" label="Approval Rate" />
      </div>
    </section>
  );
}
