"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ value, duration = 1.8 }: { value: string; duration?: number }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const isStatic = value.includes("/"); // e.g. "24/7" is a label, not a number to count up
  const end = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    if (!inView || isStatic) return;
    const frames = duration * 60;
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      const progress = frame / frames;
      setDisplay(Math.floor(end * (1 - Math.pow(2, -10 * progress))));
      if (frame >= frames) {
        setDisplay(end);
        clearInterval(id);
      }
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [inView, end, duration, isStatic]);

  if (isStatic) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
};

const brands = [
  "Mercedes-Benz", "BMW", "Audi", "Volkswagen", "Porsche", "Toyota", "Lexus", "Land Rover", "Ford", "Škoda", "SEAT", "Smart",
];

const stats = [
  { label: "Vehicles serviced", value: "5,000+", bar: "#8ee02b" },
  { label: "Fix rate", value: "98%", bar: "#ffc81f" },
  { label: "Brands supported", value: "50+", bar: "#8fdcff" },
  { label: "Remote support hours", value: "24/7", bar: "#2f9e2f" },
];

const BrandsAndStats = () => {
  const loop = [...brands, ...brands];
  return (
    <section aria-label="Brands we support and results">
      {/* Brand marquee on a lime band */}
      <div className="overflow-hidden bg-[#8ee02b] py-6">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {loop.map((b, i) => (
            <React.Fragment key={i}>
              <span className="font-display text-3xl font-extrabold text-[#0b2a4f] md:text-5xl">{b}</span>
              <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden className="shrink-0">
                <polygon points="15,2 5,16 12,16 9,26 23,11 15,11 19,2" fill="#0b2a4f" />
              </svg>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#f6fcec] py-20">
        <div className="mx-auto grid w-[88%] max-w-[1400px] grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="h-2 w-16 rounded-full" style={{ background: s.bar }} />
              <p className="font-display mt-5 text-5xl font-extrabold text-[#0b2a4f] md:text-7xl">
                <Counter value={s.value} />
              </p>
              <p className="mt-2 text-base font-semibold text-[#0b2a4f]/65">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsAndStats;
