"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import JewelImage from "./JewelImage";
import type { Category, Cut } from "@/lib/types";

export interface GalleryItem { key: string; alt: string }

export default function Lightbox({ items, index, onIndex, onClose, category, cut }: { items: GalleryItem[]; index: number; onIndex: (i: number) => void; onClose: () => void; category: Category; cut: Cut }) {
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const n = items.length;

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") { setZoom(false); onIndex((index + 1) % n); }
      if (e.key === "ArrowLeft") { setZoom(false); onIndex((index - 1 + n) % n); }
      if (e.key === "Tab") { e.preventDefault(); closeRef.current?.focus(); }
    };
    document.addEventListener("keydown", key);
    return () => { document.removeEventListener("keydown", key); document.body.style.overflow = prevOverflow; prevFocus?.focus?.(); };
  }, [index, n, onClose, onIndex]);

  const move = (e: { clientX: number; clientY: number }) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || !zoom) return;
    setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div role="dialog" aria-modal="true" aria-label="Просмотр изображения" className="fixed inset-0 z-[80] flex flex-col bg-ivory">
      <div className="flex items-center justify-between px-4 py-3">
        <p className="text-sm text-ink-soft" aria-live="polite">{index + 1} / {n}</p>
        <div className="flex">
          <button type="button" onClick={() => setZoom((z) => !z)} className="iconbtn" aria-label={zoom ? "Уменьшить" : "Увеличить"} aria-pressed={zoom}>{zoom ? <ZoomOut size={22} strokeWidth={1.4} /> : <ZoomIn size={22} strokeWidth={1.4} />}</button>
          <button ref={closeRef} type="button" onClick={onClose} className="iconbtn" aria-label="Закрыть"><X size={24} strokeWidth={1.4} /></button>
        </div>
      </div>
      <div className="relative min-h-0 flex-1 px-2 pb-4 sm:px-16">
        <div ref={ref} className={`relative mx-auto h-full max-w-[min(100%,64rem)] overflow-hidden ${zoom ? "cursor-zoom-out" : "cursor-zoom-in"}`} onClick={(e) => { move(e); setZoom((z) => !z); }} onMouseMove={move}>
          <div className="absolute inset-0 transition-transform duration-300 ease-[var(--ease-lux)]" style={{ transform: zoom ? "scale(2.2)" : "scale(1)", transformOrigin: origin }}>
            <JewelImage src={items[index].key} alt={items[index].alt} sizes="100vw" category={category} cut={cut} variant={index} className="!object-contain" />
          </div>
        </div>
        {n > 1 && (
          <>
            <button type="button" onClick={() => { setZoom(false); onIndex((index - 1 + n) % n); }} className="iconbtn absolute left-1 top-1/2 -translate-y-1/2 bg-milk/80" aria-label="Предыдущее изображение"><ChevronLeft size={26} strokeWidth={1.3} /></button>
            <button type="button" onClick={() => { setZoom(false); onIndex((index + 1) % n); }} className="iconbtn absolute right-1 top-1/2 -translate-y-1/2 bg-milk/80" aria-label="Следующее изображение"><ChevronRight size={26} strokeWidth={1.3} /></button>
          </>
        )}
      </div>
    </div>
  );
}
