"use client";

import { motion, type MotionValue } from "framer-motion";

type CarProps = {
  /** Wheel rotation in degrees. Pass a motion value to tie it to scroll. */
  wheelRotate?: MotionValue<number>;
  /** Show the headlight beam. */
  beam?: boolean;
  className?: string;
};

const Wheel = ({ cx, rotate }: { cx: number; rotate?: MotionValue<number> }) => (
  <g transform={`translate(${cx} 150)`}>
    <circle r="37" fill="#0e1f38" />
    <circle r="27" fill="#d9e3ee" />
    <motion.g style={{ rotate: rotate ?? 0 }}>
      {[0, 60, 120].map((a) => (
        <line
          key={a}
          x1="-24"
          y1="0"
          x2="24"
          y2="0"
          stroke="#8fa3b8"
          strokeWidth="5"
          strokeLinecap="round"
          transform={`rotate(${a})`}
        />
      ))}
      {/* one lime lug so the spin is easy to read */}
      <circle cx="17" cy="0" r="3.2" fill="#2f9e2f" />
    </motion.g>
    <circle r="7" fill="#0b2a4f" />
  </g>
);

/**
 * Side-view car in the KingCarNot brand colors (lime body, navy trim,
 * lightning bolt). Faces right, so it "drives" left-to-right.
 */
export default function Car({ wheelRotate, beam = true, className }: CarProps) {
  return (
    <svg
      viewBox="0 0 560 200"
      className={className}
      role="img"
      aria-label="Illustration of a green car"
    >
      <defs>
        <linearGradient id="kc-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a6ee45" />
          <stop offset="0.55" stopColor="#5fbf1c" />
          <stop offset="1" stopColor="#2f9e2f" />
        </linearGradient>
        <linearGradient id="kc-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e9f9ff" />
          <stop offset="1" stopColor="#8fdcff" />
        </linearGradient>
        <linearGradient id="kc-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffe06b" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ffe06b" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="280" cy="188" rx="250" ry="7" fill="#0b2a4f" opacity="0.22" />

      {beam && <polygon points="520,112 700,78 700,160 520,128" fill="url(#kc-beam)" />}

      {/* body */}
      <path
        d="M16 144 L16 120 Q16 104 38 100 L108 92 Q142 56 204 48 L328 48 Q374 50 400 88 L470 98 Q512 104 520 128 L522 146 L16 146 Z"
        fill="url(#kc-body)"
      />
      {/* roof highlight */}
      <path d="M150 74 Q176 56 214 54 L326 54" fill="none" stroke="#d6ff9c" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      {/* windows */}
      <path d="M128 90 Q154 62 204 57 L252 57 L252 90 Z" fill="url(#kc-glass)" />
      <path d="M264 57 L326 57 Q358 60 380 90 L264 90 Z" fill="url(#kc-glass)" />
      {/* door seam + handle */}
      <path d="M258 57 L258 140" stroke="#1f7d31" strokeWidth="2.5" />
      <rect x="272" y="100" width="26" height="5" rx="2.5" fill="#1f7d31" />
      {/* navy sill */}
      <path d="M16 138 L522 138 L522 148 Q522 150 520 150 L18 150 Q16 150 16 148 Z" fill="#0b2a4f" />
      {/* lightning bolt (from the logo) */}
      <polygon points="214,108 192,134 206,134 198,150 226,120 212,120 222,108" fill="#ffc81f" stroke="#0b2a4f" strokeWidth="2" strokeLinejoin="round" />

      {/* wheel arches */}
      <circle cx="118" cy="150" r="46" fill="#0b2a4f" />
      <circle cx="418" cy="150" r="46" fill="#0b2a4f" />

      {/* lights */}
      <path d="M498 106 Q516 108 522 118 L522 124 L496 122 Z" fill="#ffd84a" stroke="#0b2a4f" strokeWidth="1.5" />
      <rect x="16" y="108" width="10" height="14" rx="3" fill="#ff5a36" />

      <Wheel cx={118} rotate={wheelRotate} />
      <Wheel cx={418} rotate={wheelRotate} />
    </svg>
  );
}
