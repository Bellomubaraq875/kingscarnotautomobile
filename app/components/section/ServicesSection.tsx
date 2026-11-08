"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CarFront, Code2, Cpu, Gauge, Key, Zap, type LucideIcon } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  span: string; // grid column span on large screens
  bg: string;
  fg: string;
  chip: string;
};

const services: Service[] = [
  {
    title: "Advanced diagnostics",
    description: "Full-spectrum OBD-II and manufacturer-level scans with dealership-grade tools. We trace the real fault, not just the warning light.",
    icon: Cpu,
    href: "/services/diagnostics",
    span: "lg:col-span-4",
    bg: "#8ee02b",
    fg: "#0b2a4f",
    chip: "#0b2a4f",
  },
  {
    title: "Vehicle coding",
    description: "Module coding and feature activation for all major brands.",
    icon: Code2,
    href: "/services/coding",
    span: "lg:col-span-2",
    bg: "#0b2a4f",
    fg: "#ffffff",
    chip: "#8ee02b",
  },
  {
    title: "ECU programming",
    description: "Flashing, software updates and calibration for peak engine performance.",
    icon: Zap,
    href: "/services/ecu-programming",
    span: "lg:col-span-2",
    bg: "#ffc81f",
    fg: "#0b2a4f",
    chip: "#0b2a4f",
  },
  {
    title: "Odometer correction",
    description: "Legal recalibration for cluster replacements and digital dash sync.",
    icon: Gauge,
    href: "/services/odometer-correction",
    span: "lg:col-span-2",
    bg: "#8fdcff",
    fg: "#0b2a4f",
    chip: "#0b2a4f",
  },
  {
    title: "Key programming",
    description: "Transponder keys, immobilizer reset and smart key set-up.",
    icon: Key,
    href: "/services/key-programming",
    span: "lg:col-span-2",
    bg: "#ffffff",
    fg: "#0b2a4f",
    chip: "#2f9e2f",
  },
  {
    title: "Electrical diagnostics",
    description: "Wiring fault tracing, CAN bus analysis and sensor calibration. The jobs other workshops give up on, we take apart until it makes sense.",
    icon: CarFront,
    href: "/services/electrical-diagnostics",
    span: "lg:col-span-6",
    bg: "#14612b",
    fg: "#ffffff",
    chip: "#8ee02b",
  },
];

const ServicesSection = () => (
  <section className="bg-[#f6fcec] pb-28 pt-8">
    <div className="mx-auto w-[88%] max-w-[1400px]">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="font-display max-w-2xl text-4xl font-extrabold leading-[1.02] text-[#0b2a4f] md:text-6xl">
            What we repair, program and set up
          </h2>
          <p className="mt-4 max-w-xl text-lg font-medium text-[#0b2a4f]/70">
            Six core services for luxury and high-performance vehicles. Pick the one that matches your problem, or send us the symptoms.
          </p>
        </div>
        <Link href="/services" className="w-fit rounded-full border-2 border-[#0b2a4f] px-6 py-3 text-sm font-bold text-[#0b2a4f] transition hover:bg-[#0b2a4f] hover:text-white">
          All services
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`${s.span} ${i === 5 ? "md:col-span-2" : ""}`}
            >
              <Link
                href={s.href}
                className="group relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-[32px] p-8 shadow-[0_8px_0_rgba(11,42,79,0.12)] transition-transform duration-300 hover:-translate-y-1 md:p-10"
                style={{ background: s.bg, color: s.fg }}
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl" style={{ background: s.chip, color: s.chip === "#0b2a4f" || s.chip === "#2f9e2f" ? "#fff" : "#0b2a4f" }}>
                    <Icon size={26} aria-hidden />
                  </span>
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={26} aria-hidden />
                </div>
                <div className="mt-10 max-w-xl">
                  <h3 className="font-display text-2xl font-extrabold md:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-base font-medium opacity-80">{s.description}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;
