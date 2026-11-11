"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

/** Доступная панель: Esc, фокус-ловушка, возврат фокуса, блокировка прокрутки фона. */
export default function Drawer({
  open,
  onClose,
  label,
  side = "right",
  children,
  width = "max-w-[26rem]",
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  side?: "right" | "left";
  children: React.ReactNode;
  width?: string;
}) {
  const panel = useRef<HTMLDivElement>(null);
  const opener = useRef<Element | null>(null);

  useEffect(() => {
    if (!open) return;
    opener.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => (panel.current?.querySelector<HTMLElement>("[data-autofocus]") ?? panel.current?.querySelector<HTMLElement>("a, button"))?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !panel.current) return;
      const f = panel.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      (opener.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div className={`fixed inset-0 z-[70] overflow-hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div onClick={onClose} className={`absolute inset-0 bg-graphite/45 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        inert={!open}
        className={`absolute top-0 flex h-full w-full ${width} flex-col bg-milk ${open ? "shadow-[0_0_60px_rgba(36,34,32,.15)]" : ""} transition-transform duration-[420ms] ease-[var(--ease-lux)] ${
          side === "right" ? "right-0" : "left-0"
        } ${open ? "translate-x-0" : side === "right" ? "translate-x-full" : "-translate-x-full"}`}
      >
        <button onClick={onClose} aria-label="Закрыть" className="iconbtn absolute right-3 top-3 z-10"><X size={22} strokeWidth={1.4} /></button>
        {children}
      </div>
    </div>
  );
}
