import Link from "next/link";

export default function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/" aria-label="ÉLAVÉRA — Fine Diamond Jewelry, на главную" className={`group inline-flex flex-col items-center leading-none ${className}`}>
      <span className={`font-serif text-[1.3rem] tracking-[0.26em] pl-[0.26em] sm:text-[1.6rem] sm:tracking-[0.32em] sm:pl-[0.32em] ${tone === "light" ? "text-ivory" : "text-graphite"}`}>ÉLAVÉRA</span>
      <span className={`mt-1.5 text-[0.5rem] tracking-[0.5em] pl-[0.5em] uppercase ${tone === "light" ? "text-champagne" : "text-champagne-deep"}`}>Fine Diamond Jewelry</span>
    </Link>
  );
}
