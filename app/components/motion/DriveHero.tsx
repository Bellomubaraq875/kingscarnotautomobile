"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  transform,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Code2,
  Cpu,
  Gauge,
  Key,
  Terminal,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";
import Car from "./Car";
import Garage from "./Garage";

/* -------------------------------------------------------------------------
   The stage: one pinned, full-screen scene. Scroll drives everything.
   The world slides past a car whose wheels spin; five road signs are the
   service stops and the workshop is the destination.
-------------------------------------------------------------------------- */

const TRAVEL = 250; // how far (in vw) the near layer travels over the whole scroll
const SIGN_SCREEN_X = 56; // vw where an active sign sits on screen

/** Pure-function interpolation: keeps scroll-linked values on the main thread (no scroll-timeline acceleration). */
const map =
  <T extends number | string>(input: number[], output: T[]) =>
  (v: number): T =>
    transform(v, input, output as never[]) as T;

type Stop = {
  at: number; // scroll progress where this stop is centered
  icon: LucideIcon;
  sign: string;
  title: string;
  text: string;
  href: string;
  cta: string;
  color: string; // sign board color
  ink: string;
};

const STOPS: Stop[] = [
  {
    at: 0.2,
    icon: Cpu,
    sign: "Diagnostics",
    title: "Find the fault first",
    text: "Full-system scans with dealer-level tools, so we fix the cause and not just clear the warning light.",
    href: "/services/diagnostics",
    cta: "Diagnostic services",
    color: "#8ee02b",
    ink: "#0b2a4f",
  },
  {
    at: 0.35,
    icon: Code2,
    sign: "Coding",
    title: "Switch on what your car already has",
    text: "Module coding and hidden-feature activation for Mercedes-Benz, BMW and VAG models.",
    href: "/services/coding",
    cta: "Vehicle coding",
    color: "#ffc81f",
    ink: "#0b2a4f",
  },
  {
    at: 0.5,
    icon: Cpu,
    sign: "ECU repair",
    title: "Repair the ECU, don't replace it",
    text: "Component-level ECU, EIS/EZS and ISM repair, with data recovery and synchronisation.",
    href: "/ecu-repair",
    cta: "ECU repair",
    color: "#8fdcff",
    ink: "#0b2a4f",
  },
  {
    at: 0.65,
    icon: Key,
    sign: "Keys",
    title: "Lost every key? Start here",
    text: "Key programming, FBS-3 and FBS-4 solutions, immobilizer reset and smart key set-up.",
    href: "/key-repair",
    cta: "Key programming",
    color: "#2f9e2f",
    ink: "#ffffff",
  },
  {
    at: 0.8,
    icon: Terminal,
    sign: "Software",
    title: "OEM software for your workshop",
    text: "XENTRY, DAS, ElsaWin, Vediamo and more, installed, activated and kept up to date.",
    href: "/software",
    cta: "Software catalogue",
    color: "#0b2a4f",
    ink: "#ffffff",
  },
];

const ARRIVAL = {
  icon: CalendarCheck,
  title: "You've arrived",
  text: "Bring the car in, or send us the details and we'll tell you what it needs before you travel.",
  href: "/contact",
  cta: "Book an appointment",
};

/** which caption is showing for a given progress: -1 intro, 0..4 stops, 5 arrival */
function stepFor(p: number) {
  if (p < 0.14) return -1;
  if (p >= 0.9) return STOPS.length;
  let best = 0;
  let d = Infinity;
  STOPS.forEach((s, i) => {
    const dist = Math.abs(p - s.at);
    if (dist < d) {
      d = dist;
      best = i;
    }
  });
  return best;
}

/* ---------- scenery ---------- */

const Tree = ({ h, tone }: { h: number; tone: number }) => {
  const greens = ["#3fae2a", "#58c23a", "#2f9e2f", "#79d34a"];
  return (
    <svg viewBox="0 0 60 110" style={{ height: h }} aria-hidden>
      <rect x="27" y="62" width="6" height="48" rx="3" fill="#0b2a4f" opacity="0.55" />
      <circle cx="30" cy="38" r="28" fill={greens[tone % greens.length]} />
      <circle cx="20" cy="48" r="16" fill={greens[(tone + 1) % greens.length]} opacity="0.9" />
    </svg>
  );
};

function Scenery({ x }: { x: MotionValue<string> }) {
  // deterministic positions so server and client markup match
  const trees = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => ({
        left: i * 10 + ((i * 37) % 7),
        h: 70 + ((i * 53) % 50),
        tone: i,
      })),
    []
  );
  return (
    <motion.div className="absolute bottom-[20vh] left-0 h-[40vh] will-change-transform" style={{ width: `${TRAVEL + 120}vw`, x }}>
      {trees.map((t, i) => (
        <div key={i} className="absolute bottom-0" style={{ left: `${t.left}vw` }}>
          <Tree h={t.h} tone={t.tone} />
        </div>
      ))}

      {STOPS.map((s) => {
        const Icon = s.icon;
        const left = SIGN_SCREEN_X + s.at * TRAVEL;
        return <SignPost key={s.sign} left={left} stop={s} Icon={Icon} />;
      })}

      <div className="absolute bottom-0" style={{ left: `${SIGN_SCREEN_X + 4 + TRAVEL}vw`, width: "clamp(180px, 26vw, 400px)" }}>
        <Garage className="w-full" />
      </div>
    </motion.div>
  );
}

function SignPost({ left, stop, Icon }: { left: number; stop: Stop; Icon: LucideIcon }) {
  return (
    <div className="absolute bottom-0 -translate-x-1/2" style={{ left: `${left}vw` }}>
      <div
        className="flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-bold shadow-[0_8px_0_rgba(11,42,79,0.18)] md:px-4 md:py-3 md:text-xl"
        style={{ background: stop.color, color: stop.ink }}
      >
        <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
        <span className="font-display whitespace-nowrap">{stop.sign}</span>
      </div>
      <div className="mx-auto h-[11vh] w-2 rounded-b md:h-[17vh] bg-[#0b2a4f]/60" />
    </div>
  );
}

/* ---------- speedometer (reads scroll velocity) ---------- */

function Speedo({ speed }: { speed: MotionValue<number> }) {
  const needle = useTransform(speed, map([0, 200], [-90, 90]));
  const readout = useTransform(speed, (v) => Math.round(v).toString());
  return (
    <div className="pointer-events-none hidden rounded-3xl bg-white/80 p-3 text-[#0b2a4f] shadow-[0_8px_0_rgba(11,42,79,0.12)] backdrop-blur sm:block" aria-hidden>
      <svg viewBox="0 0 120 70" className="h-20 w-36">
        <path d="M10 62 A50 50 0 0 1 110 62" fill="none" stroke="#e0f8c3" strokeWidth="10" strokeLinecap="round" />
        <path d="M10 62 A50 50 0 0 1 110 62" fill="none" stroke="#2f9e2f" strokeWidth="10" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset="0.45" />
        <g transform="translate(60 62)">
          <motion.g style={{ rotate: needle }}>
            <line x1="0" y1="0" x2="0" y2="-42" stroke="#0b2a4f" strokeWidth="4" strokeLinecap="round" />
            {/* invisible counterweight keeps the rotation centered on the hub */}
            <line x1="0" y1="0" x2="0" y2="42" stroke="transparent" strokeWidth="4" />
          </motion.g>
        </g>
        <circle cx="60" cy="62" r="6" fill="#0b2a4f" />
      </svg>
      <div className="-mt-1 text-center leading-none">
        <motion.span className="font-display text-2xl font-extrabold tabular-nums">{readout}</motion.span>
        <span className="ml-1 text-xs font-semibold text-[#0b2a4f]/60">km/h</span>
      </div>
    </div>
  );
}

/* ---------- main component ---------- */

export default function DriveHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(-1);

  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(p, "change", (v) => {
    const s = stepFor(v);
    setStep((prev) => (prev === s ? prev : s));
  });

  // scroll velocity -> speedometer
  const velocity = useVelocity(p);
  const speedRaw = useTransform(velocity, (v) => Math.min(200, Math.abs(v) * 420));
  const speed = useSpring(speedRaw, { stiffness: 120, damping: 22 });

  // world
  const sceneryX = useTransform(p, (v) => `${-v * TRAVEL}vw`);
  const midHillsX = useTransform(p, (v) => `${-v * TRAVEL * 0.32}vw`);
  const farHillsX = useTransform(p, (v) => `${-v * TRAVEL * 0.12}vw`);
  const cloudsX = useTransform(p, (v) => `${-v * TRAVEL * 0.2}vw`);
  const roadPos = useTransform(p, (v) => `${-v * TRAVEL}vw 0`);

  // sky: bright blue morning -> golden afternoon
  const sky = useTransform(p, map([0, 0.55, 1], ["#bdeeff", "#d4f6ff", "#fff0b3"]));
  const sunX = useTransform(p, map([0, 1], ["68vw", "84vw"]));
  const sunY = useTransform(p, map([0, 0.5, 1], ["26vh", "14vh", "24vh"]));

  // car
  const carX = useTransform(p, map([0, 1], ["3vw", "16vw"]));
  const wheelRotate = useTransform(p, map([0, 1], [0, 360 * 22]));
  const carBounce = useTransform(p, (v) => Math.sin(v * 900) * 1.4);

  // intro text leaves as the drive starts
  const introOpacity = useTransform(p, map([0, 0.04, 0.1], [1, 1, 0]));
  const introY = useTransform(p, map([0, 0.1], [0, -50]));
  const cueOpacity = useTransform(p, map([0, 0.04], [1, 0]));
  const railFill = useTransform(p, map([0.12, 0.92], ["0%", "100%"]));

  const hills =
    "M0 120 C120 40 240 40 360 100 S600 150 720 80 S960 30 1080 90 S1320 140 1440 70 L1440 200 L0 200 Z";

  if (reduce) return <StaticHero />;

  const active = step >= 0 && step < STOPS.length ? STOPS[step] : null;

  return (
    <section ref={ref} className="relative h-[560vh]" aria-label="Our services, shown as a drive">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* sky */}
        <motion.div className="absolute inset-0" style={{ backgroundColor: sky }} />
        <motion.div
          className="absolute h-28 w-28 rounded-full bg-[#ffc81f] shadow-[0_0_0_22px_rgba(255,200,31,0.28),0_0_0_52px_rgba(255,200,31,0.14)] md:h-40 md:w-40"
          style={{ x: sunX, y: sunY }}
        />
        {/* clouds */}
        <motion.div className="absolute left-0 top-[20vh] h-24 will-change-transform" style={{ x: cloudsX, width: "260vw" }} aria-hidden>
          {[36, 84, 120, 165, 215].map((l, i) => (
            <div key={l} className="absolute rounded-full bg-white/90" style={{ left: `${l}vw`, top: `${(i % 3) * 7}vh`, width: `${14 + (i % 3) * 6}vw`, height: "5.5vh", filter: "blur(0.5px)" }} />
          ))}
        </motion.div>
        {/* far hills */}
        <motion.svg className="absolute bottom-[19vh] left-0 h-[30vh] will-change-transform" style={{ x: farHillsX, width: "200vw" }} viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden>
          <path d={hills} fill="#b7ec7e" />
        </motion.svg>
        {/* mid hills */}
        <motion.svg className="absolute bottom-[19vh] left-0 h-[22vh] will-change-transform" style={{ x: midHillsX, width: "260vw" }} viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden>
          <path d={hills} fill="#78d34a" transform="translate(0 20)" />
        </motion.svg>

        {/* grass strip */}
        <div className="absolute bottom-[14vh] left-0 h-[6vh] w-full bg-[#5fbf1c]" />
        {/* trees, signs, garage */}
        <Scenery x={sceneryX} />

        {/* road */}
        <div className="absolute bottom-0 left-0 h-[14vh] w-full bg-[#1c3556]">
          <div className="absolute left-0 right-0 top-0 h-1.5 bg-[#ffc81f]" />
          <motion.div
            className="road-dashes absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 opacity-90"
            style={{ backgroundPosition: roadPos }}
          />
        </div>

        {/* car */}
        <motion.div className="absolute bottom-[1.6vh] left-0 z-10" style={{ x: carX, y: carBounce, width: "clamp(210px, 32vw, 500px)" }}>
          <Car wheelRotate={wheelRotate} className="block h-auto w-full" />
        </motion.div>

        {/* ---------- foreground UI ---------- */}

        {/* intro headline */}
        <motion.div className="absolute inset-x-0 top-0 z-20 pt-[132px] md:pt-[150px]" style={{ opacity: introOpacity, y: introY }}>
          <div className="mx-auto w-[88%] max-w-[1400px]">
            <p className="mb-4 inline-block rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-[#14612b] backdrop-blur">
              ECU, key and software specialists in Asaba
            </p>
            <h1 className="font-display max-w-3xl text-[2.6rem] font-extrabold leading-[0.98] text-[#0b2a4f] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Your car&rsquo;s electronics, fixed properly.
            </h1>
            <p className="mt-5 max-w-xl text-base font-medium text-[#0b2a4f]/75 md:text-xl">
              Diagnostics, coding, ECU and key repair for Mercedes-Benz, BMW and VAG cars. Scroll to take the drive and see what we do at each stop.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0b2a4f] px-7 py-4 text-base font-bold text-white transition hover:bg-[#2f9e2f]">
                Book an appointment <ArrowRight size={18} aria-hidden />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border-2 border-[#0b2a4f] bg-white/70 px-7 py-4 text-base font-bold text-[#0b2a4f] backdrop-blur transition hover:bg-white">
                See all services
              </Link>
            </div>
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.div className="pointer-events-none absolute bottom-[17vh] left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0b2a4f] shadow-[0_6px_0_rgba(11,42,79,0.15)] md:flex" style={{ opacity: cueOpacity }}>
          Scroll to drive <ArrowDown size={16} className="animate-bounce" aria-hidden />
        </motion.div>

        {/* stop caption */}
        <div className="absolute inset-x-0 top-0 z-20 pt-[128px] md:pt-[150px]">
          <div className="mx-auto w-[88%] max-w-[1400px]">
            <AnimatePresence mode="wait">
              {step >= 0 && (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="max-w-md rounded-[28px] bg-white p-6 shadow-[0_10px_0_rgba(11,42,79,0.14)] md:max-w-lg md:p-8"
                >
                  {(() => {
                    const c = active ?? ARRIVAL;
                    const Icon = c.icon;
                    return (
                      <>
                        <div className="flex items-center gap-3">
                          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#8ee02b] text-[#0b2a4f]">
                            <Icon size={22} aria-hidden />
                          </span>
                          {active && (
                            <span className="text-sm font-semibold text-[#0b2a4f]/60">
                              Stop {step + 1} of {STOPS.length}
                            </span>
                          )}
                        </div>
                        <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight text-[#0b2a4f] md:text-4xl">{c.title}</h2>
                        <p className="mt-3 text-base font-medium text-[#0b2a4f]/70 md:text-lg">{c.text}</p>
                        <Link href={c.href} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0b2a4f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2f9e2f]">
                          {c.cta} <ArrowRight size={16} aria-hidden />
                        </Link>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* speedometer */}
        <div className="absolute right-5 top-[132px] z-20 md:right-10 md:top-[150px]">
          <Speedo speed={speed} />
        </div>

        {/* progress rail */}
        <div className="absolute bottom-[3vh] right-4 z-20 hidden w-44 items-center gap-3 md:flex lg:w-64">
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/25">
            <motion.div className="h-full rounded-full bg-[#8ee02b]" style={{ width: railFill }} />
          </div>
          <a href="#after-drive" className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#0b2a4f] hover:bg-[#8ee02b]">
            Skip the drive
          </a>
        </div>
      </div>
    </section>
  );
}

/* Reduced-motion version: same content, no scroll animation. */
function StaticHero() {
  return (
    <section className="bg-gradient-to-b from-[#bdeeff] to-[#f6fcec] pb-16 pt-[140px]">
      <div className="mx-auto w-[88%] max-w-[1200px]">
        <h1 className="font-display max-w-3xl text-5xl font-extrabold leading-[1] text-[#0b2a4f] md:text-7xl">Your car&rsquo;s electronics, fixed properly.</h1>
        <p className="mt-5 max-w-xl text-lg font-medium text-[#0b2a4f]/75">
          Diagnostics, coding, ECU and key repair for Mercedes-Benz, BMW and VAG cars in Asaba.
        </p>
        <Car beam={false} className="mt-10 h-auto w-full max-w-xl" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {STOPS.map((s) => (
            <Link key={s.sign} href={s.href} className="rounded-3xl bg-white p-6 shadow-[0_8px_0_rgba(11,42,79,0.1)]">
              <h2 className="font-display text-2xl font-extrabold text-[#0b2a4f]">{s.title}</h2>
              <p className="mt-2 text-[#0b2a4f]/70">{s.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
