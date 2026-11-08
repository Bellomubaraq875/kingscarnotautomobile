"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, transform, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bell, ShieldCheck, Zap } from "lucide-react";
import Car from "../motion/Car";

/** Closing section. A small car drives across the road as this section scrolls through. */
const CallToAction = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const carX = useTransform(scrollYProgress, (v) => `${transform(v, [0, 1], [-30, 62])}vw`);
  const wheels = useTransform(scrollYProgress, (v) => v * 360 * 6);
  const dashes = useTransform(scrollYProgress, (v) => `${-v * 62}vw 0`);

  return (
    <section ref={ref} className="overflow-hidden bg-[#8ee02b] pt-24">
      <div className="mx-auto grid w-[88%] max-w-[1400px] gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <h2 className="font-display text-5xl font-extrabold leading-[0.98] text-[#0b2a4f] md:text-7xl">
            Ready when your car isn&rsquo;t.
          </h2>
          <p className="mt-6 max-w-lg text-lg font-semibold text-[#0b2a4f]/80">
            Create a free profile to send us your vehicle details, track a job and get support from the workshop.
          </p>
          <ul className="mt-7 space-y-3 font-bold text-[#0b2a4f]">
            {[
              { i: ShieldCheck, t: "Free diagnostic reports" },
              { i: Bell, t: "Maintenance alerts" },
              { i: Zap, t: "Priority technical support" },
            ].map(({ i: I, t }) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0b2a4f] text-[#8ee02b]">
                  <I size={18} aria-hidden />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 pb-2 sm:flex-row lg:flex-col">
          <Link href="/register" className="group flex items-center justify-center gap-3 rounded-full bg-[#0b2a4f] px-8 py-5 text-base font-bold text-white transition hover:bg-white hover:text-[#0b2a4f]">
            Create a free profile <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
          <Link href="/contact" className="flex items-center justify-center rounded-full border-2 border-[#0b2a4f] px-8 py-5 text-base font-bold text-[#0b2a4f] transition hover:bg-[#0b2a4f]/10">
            Book an appointment
          </Link>
        </div>
      </div>

      {/* road with the little car */}
      <div className="relative mt-16 h-32 bg-[#1c3556]">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[#ffc81f]" />
        <motion.div className="road-dashes absolute inset-x-0 bottom-5 h-1.5 opacity-80" style={{ backgroundPosition: reduce ? "0 0" : dashes }} />
        <motion.div className="absolute -top-[52px] left-0 w-[clamp(170px,22vw,300px)]" style={{ x: reduce ? "30vw" : carX }}>
          <Car wheelRotate={reduce ? undefined : wheels} beam={false} className="block h-auto w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
