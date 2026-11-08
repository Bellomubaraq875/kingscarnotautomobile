/** Workshop building at the end of the road. */
export default function Garage({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 260" className={className} role="img" aria-label="KingsCarNot workshop">
      {/* sign */}
      <rect x="40" y="6" width="320" height="52" rx="14" fill="#0b2a4f" />
      <text x="200" y="42" textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff" fontFamily="var(--font-display), sans-serif" letterSpacing="-0.5">
        KINGSCAR<tspan fill="#8ee02b">NOT</tspan>
      </text>
      {/* roof */}
      <path d="M10 92 L40 58 L360 58 L390 92 Z" fill="#14612b" />
      {/* walls */}
      <rect x="20" y="92" width="360" height="168" fill="#fffdf2" />
      <rect x="20" y="92" width="360" height="14" fill="#ffc81f" />
      {/* roller doors */}
      {[44, 214].map((x) => (
        <g key={x}>
          <rect x={x} y="124" width="142" height="136" rx="6" fill="#d9e3ee" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line key={i} x1={x + 6} x2={x + 136} y1={140 + i * 17} y2={140 + i * 17} stroke="#b4c3d4" strokeWidth="3" />
          ))}
        </g>
      ))}
      <rect x="20" y="256" width="360" height="4" fill="#0b2a4f" opacity="0.2" />
    </svg>
  );
}
