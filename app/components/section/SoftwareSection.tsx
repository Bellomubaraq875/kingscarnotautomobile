"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight, BookOpen, Cpu, Database, Laptop, Package, RefreshCcw,
  Search, Terminal, Unlock, Wrench, Zap, Key, type LucideIcon,
} from "lucide-react";

const tools: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Cpu, title: "XENTRY Diagnostics", desc: "Latest Mercedes-Benz diagnostics with full system access for cars and commercial vehicles." },
  { icon: Database, title: "DAS Standalone", desc: "Offline mode, special functions and developer capabilities." },
  { icon: Search, title: "Alldata", desc: "Repair manuals, wiring diagrams and TSBs for all manufacturers." },
  { icon: BookOpen, title: "Haynes", desc: "Service procedures for all makes and models." },
  { icon: Wrench, title: "Mitchell & Techstream", desc: "Mitchell repair data plus Techstream for Toyota and Lexus." },
  { icon: Key, title: "ElsaWin", desc: "VAG workshop software: VW, Audi, Skoda, SEAT, Porsche." },
  { icon: Laptop, title: "BMW Full Diagnostics PC", desc: "PC toolkits with hardware and software set up for full BMW coverage." },
  { icon: Unlock, title: "Offline key programming", desc: "Transponder teach-in, SAM assignment and immobilizer solutions." },
  { icon: Package, title: "Vediamo, DTS & Monaco", desc: "Deep ECU coding and programming tools." },
  { icon: Zap, title: "ECU flash & calibration", desc: "Flash data, FDOK corrections, SCR/AdBlue and emissions files." },
  { icon: RefreshCcw, title: "Software updates", desc: "Patchers, activation tools and quarterly updates." },
  { icon: Terminal, title: "Developer mode", desc: "Control unit adaptations, VMAX settings and transmission routines." },
];

const SoftwareSection = () => (
  <section className="bg-[#0b2a4f] py-28 text-white">
    <div className="mx-auto grid w-[88%] max-w-[1400px] gap-14 lg:grid-cols-[minmax(0,380px)_1fr]">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <h2 className="font-display text-4xl font-extrabold leading-[1.02] md:text-6xl">
          OEM-level diagnostic software
        </h2>
        <p className="mt-5 text-lg font-medium text-white/70">
          Original manufacturer software, custom patchers and developer tools, installed on your laptop or workshop PC and kept current.
        </p>
        <Link href="/software" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#8ee02b] px-7 py-4 text-sm font-bold text-[#0b2a4f] transition hover:bg-white">
          Browse the catalogue <ArrowUpRight size={18} aria-hidden />
        </Link>
        <p className="mt-8 flex items-center gap-3 text-sm font-semibold text-white/60">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#8ee02b]" /> Remote installation servers online
        </p>
      </div>

      <ul className="grid gap-x-8 sm:grid-cols-2">
        {tools.map((t, i) => {
          const Icon = t.icon;
          return (
            <motion.li
              key={t.title}
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="group flex gap-4 border-t border-white/15 py-6 transition-colors hover:border-[#8ee02b]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-[#8ee02b] transition-colors group-hover:bg-[#8ee02b] group-hover:text-[#0b2a4f]">
                <Icon size={21} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">{t.title}</h3>
                <p className="mt-1 text-sm font-medium text-white/65">{t.desc}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default SoftwareSection;
