import type { Category, Cut } from "@/lib/types";

/**
 * Иллюстрация-заглушка: линейный силуэт украшения на тёплом фоне.
 * Показывается, пока фотография не сгенерирована. Не претендует на фото.
 */
function Gem({ cut, x, y, s }: { cut: Cut; x: number; y: number; s: number }) {
  const stroke = "var(--color-champagne)";
  const common = { fill: "rgba(252,250,247,.7)", stroke, strokeWidth: 1.2 } as const;
  switch (cut) {
    case "oval":
      return (
        <g>
          <ellipse cx={x} cy={y} rx={s * 0.75} ry={s} {...common} />
          <ellipse cx={x} cy={y} rx={s * 0.4} ry={s * 0.55} fill="none" stroke={stroke} strokeWidth=".8" />
          <path d={`M${x} ${y - s}V${y + s}M${x - s * 0.75} ${y}H${x + s * 0.75}`} stroke={stroke} strokeWidth=".5" opacity=".6" />
        </g>
      );
    case "pear":
      return (
        <g>
          <path
            d={`M${x} ${y - s * 1.2}C${x + s * 0.2} ${y - s * 0.5} ${x + s * 0.85} ${y - s * 0.1} ${x + s * 0.85} ${y + s * 0.4}A${s * 0.85} ${s * 0.85} 0 0 1 ${x - s * 0.85} ${y + s * 0.4}C${x - s * 0.85} ${y - s * 0.1} ${x - s * 0.2} ${y - s * 0.5} ${x} ${y - s * 1.2}Z`}
            {...common}
          />
          <path d={`M${x} ${y - s * 1.2}V${y + s * 1.2}`} stroke={stroke} strokeWidth=".5" opacity=".6" />
        </g>
      );
    case "emerald":
    case "princess":
    case "cushion": {
      const w = s * (cut === "emerald" ? 0.8 : 0.95);
      const h = s * (cut === "emerald" ? 1.05 : 0.95);
      const c = s * 0.28;
      return (
        <g>
          <path
            d={`M${x - w + c} ${y - h}H${x + w - c}L${x + w} ${y - h + c}V${y + h - c}L${x + w - c} ${y + h}H${x - w + c}L${x - w} ${y + h - c}V${y - h + c}Z`}
            {...common}
          />
          <rect x={x - w * 0.55} y={y - h * 0.55} width={w * 1.1} height={h * 1.1} fill="none" stroke={stroke} strokeWidth=".8" />
        </g>
      );
    }
    case "marquise":
      return (
        <g>
          <path d={`M${x} ${y - s * 1.1}Q${x + s * 0.8} ${y} ${x} ${y + s * 1.1}Q${x - s * 0.8} ${y} ${x} ${y - s * 1.1}Z`} {...common} />
        </g>
      );
    default:
      return (
        <g>
          <circle cx={x} cy={y} r={s} {...common} />
          <circle cx={x} cy={y} r={s * 0.55} fill="none" stroke={stroke} strokeWidth=".8" />
          <path
            d={`M${x - s} ${y}H${x + s}M${x} ${y - s}V${y + s}M${x - s * 0.7} ${y - s * 0.7}L${x + s * 0.7} ${y + s * 0.7}M${x + s * 0.7} ${y - s * 0.7}L${x - s * 0.7} ${y + s * 0.7}`}
            stroke={stroke}
            strokeWidth=".5"
            opacity=".55"
          />
        </g>
      );
  }
}

export default function JewelArt({
  category,
  cut = "round",
  variant = 0,
  bare = false,
}: {
  category: Category;
  cut?: Cut;
  variant?: number;
  bare?: boolean;
}) {
  const stroke = "var(--color-champagne)";
  const band = { fill: "none", stroke, strokeWidth: 3 } as const;
  const rot = [0, -14, 10][variant % 3];
  let body: React.ReactNode;
  switch (category) {
    case "earrings":
      body = (
        <>
          {[-58, 58].map((dx) => (
            <g key={dx}>
              <path d={`M${200 + dx} 90V150`} stroke={stroke} strokeWidth="1.6" />
              <Gem cut={cut} x={200 + dx} y={185} s={22} />
              <circle cx={200 + dx} cy={90} r={4} fill={stroke} />
            </g>
          ))}
        </>
      );
      break;
    case "necklaces":
      body = (
        <>
          <path d="M60 90C90 250 310 250 340 90" fill="none" stroke={stroke} strokeWidth="1.6" strokeDasharray="1 5" strokeLinecap="round" />
          <Gem cut={cut} x={200} y={212} s={24} />
        </>
      );
      break;
    case "bracelets":
      body = (
        <>
          <ellipse cx="200" cy="200" rx="118" ry="74" {...band} />
          <ellipse cx="200" cy="200" rx="104" ry="62" fill="none" stroke={stroke} strokeWidth=".8" />
          {Array.from({ length: 9 }, (_, i) => {
            const a = Math.PI + (i / 8) * Math.PI;
            return <circle key={i} cx={200 + Math.cos(a) * 118} cy={200 - Math.sin(a) * -74} r={5.5} fill="rgba(252,250,247,.8)" stroke={stroke} strokeWidth="1" />;
          })}
        </>
      );
      break;
    default:
      body = (
        <>
          <ellipse cx="200" cy="238" rx="78" ry="82" {...band} />
          <ellipse cx="200" cy="238" rx="68" ry="72" fill="none" stroke={stroke} strokeWidth=".8" />
          <Gem cut={cut} x={200} y={142} s={category === "engagement" ? 34 : 24} />
        </>
      );
  }
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={`g-${variant}`} cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor="#FCFAF7" />
          <stop offset="100%" stopColor="#E9E0D5" />
        </radialGradient>
      </defs>
      {!bare && <rect width="400" height="400" fill={`url(#g-${variant})`} />}
      {!bare && <ellipse cx="200" cy="330" rx="110" ry="9" fill="#242220" opacity=".05" />}
      <g transform={`rotate(${rot} 200 200)`}>{body}</g>
    </svg>
  );
}
