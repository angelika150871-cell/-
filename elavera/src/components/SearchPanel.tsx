"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Drawer from "./Drawer";
import JewelImage from "./JewelImage";
import { getProducts } from "@/lib/products";
import { productImageKey } from "@/lib/images";
import { CATEGORY_LABEL, CUT_LABEL, METAL_LABEL, formatPrice } from "@/lib/format";

const norm = (s: string) => s.toLowerCase().replace(/ё/g, "е").normalize("NFD").replace(/[̀-ͯ]/g, "");

export default function SearchPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const t = norm(q.trim());
    if (!t) return [];
    const words = t.split(/\s+/);
    return getProducts().filter((p) => {
      const hay = norm([p.name, p.collection, CATEGORY_LABEL[p.category], CUT_LABEL[p.stone.cut], p.slug, p.id, ...p.metals.map((m) => METAL_LABEL[m.metal])].join(" "));
      return words.every((w) => hay.includes(w));
    });
  }, [q]);
  const close = () => { onClose(); setQ(""); };
  return (
    <Drawer open={open} onClose={close} label="Поиск по украшениям" width="max-w-[32rem]">
      <div className="px-6 pb-4 pt-6">
        <h2 className="font-serif text-3xl">Поиск</h2>
        <form role="search" onSubmit={(e) => e.preventDefault()} className="relative mt-4">
          <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
          <input data-autofocus type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Название, коллекция, огранка…" aria-label="Поиск по каталогу" className="field !pl-11" />
        </form>
        <p className="mt-2 text-sm text-ink-soft" aria-live="polite">{q.trim() ? `Найдено: ${results.length}` : "Например: «груша», «Lumière», «браслет»"}</p>
      </div>
      <ul className="flex-1 divide-y hair overflow-y-auto px-6 pb-6">
        {results.map((p) => (
          <li key={p.id}>
            <Link href={`/product/${p.slug}`} onClick={close} className="flex items-center gap-4 py-3">
              <span className="relative block h-20 w-20 shrink-0 overflow-hidden bg-sand"><JewelImage src={productImageKey(p.slug, 1)} alt="" sizes="80px" category={p.category} cut={p.stone.cut} /></span>
              <span className="min-w-0">
                <span className="block font-serif text-xl leading-tight">{p.name}</span>
                <span className="block text-sm text-ink-soft">{CATEGORY_LABEL[p.category]} · {formatPrice(p.price)}</span>
              </span>
            </Link>
          </li>
        ))}
        {q.trim() && results.length === 0 && <li className="py-8 text-ink-soft">Ничего не найдено. Попробуйте другое слово или <Link href="/collections" onClick={close} className="underline underline-offset-4">откройте весь каталог</Link>.</li>}
      </ul>
    </Drawer>
  );
}
