"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeartPulse, ShieldCheck, Timer, Zap, type LucideIcon } from "lucide-react";

const points: { title: string; desc: string; icon: LucideIcon; bg: string }[] = [
  { title: "Quick response", desc: "Emergency diagnostics with fast turnaround.", icon: Timer, bg: "#8ee02b" },
  { title: "Efficient coding", desc: "Optimized processes that get you back on the road sooner.", icon: Zap, bg: "#ffc81f" },
  { title: "Reliable tools", desc: "Manufacturer-grade equipment for long-term stability.", icon: ShieldCheck, bg: "#8fdcff" },
  { title: "Expert care", desc: "Focused on complex Mercedes-Benz and BMW electronics.", icon: HeartPulse, bg: "#8ee02b" },
];

const WhyChooseUs = () => (
  <section className="bg-[#f6fcec] py-28">
    <div className="mx-auto flex w-[88%] max-w-[1400px] flex-col items-center gap-16 lg:flex-row">
      {/* image revealed with a wipe */}
      <div className="relative w-full lg:w-1/2">
        <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[40px] bg-[#ffc81f]" aria-hidden />
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0 round 40px)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0 round 40px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <Image src="/images/download (5).jpg" alt="Technician working on a car's electronics" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2">
        <h2 className="font-display text-4xl font-extrabold leading-[1.02] text-[#0b2a4f] md:text-6xl">
          When the electronics fail, you need an answer fast
        </h2>
        <p className="mt-5 max-w-xl text-lg font-medium text-[#0b2a4f]/70">
          A car that won&rsquo;t start or a dash full of warnings doesn&rsquo;t wait for a convenient day. We diagnose, code and repair so you aren&rsquo;t stuck for long.
        </p>

        <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                className="flex gap-4"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-[#0b2a4f]" style={{ background: p.bg }}>
                  <Icon size={22} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0b2a4f]">{p.title}</h3>
                  <p className="mt-1 text-[15px] font-medium text-[#0b2a4f]/65">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
