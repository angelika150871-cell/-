"use client";
import { Suspense, useCallback, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "./ProductCard";
import FilterPanel from "./FilterPanel";
import Drawer from "./Drawer";
import { applyFilters, CARAT_BUCKETS, parseFilters, SORTS } from "@/lib/filters";
import { getProducts } from "@/lib/products";
import { CATEGORY_LABEL, CUT_LABEL, METAL_LABEL, formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";

const all = getProducts();
const prices = all.map((p) => p.price);
const bounds: [number, number] = [Math.min(...prices), Math.max(...prices)];

function plural(n: number) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return "украшение";
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "украшения";
  return "украшений";
}

function CatalogInner() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const { favorites, ready } = useStore();
  const [open, setOpen] = useState(false);
  const f = useMemo(() => parseFilters(new URLSearchParams(sp.toString())), [sp]);

  const update = useCallback((patch: Record<string, string | null>) => {
    const next = new URLSearchParams(sp.toString());
    for (const [k, v] of Object.entries(patch)) (v == null || v === "" ? next.delete(k) : next.set(k, v));
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [sp, router, pathname]);

  const items = useMemo(() => applyFilters(all, f, ready ? favorites : []), [f, favorites, ready]);

  const chips: { key: string; label: string; clear: Record<string, string | null> }[] = [];
  if (f.category) chips.push({ key: "cat", label: CATEGORY_LABEL[f.category], clear: { category: null } });
  if (f.min != null || f.max != null) chips.push({ key: "price", label: `${f.min != null ? formatPrice(f.min) : "0 €"} – ${f.max != null ? formatPrice(f.max) : "∞"}`, clear: { min: null, max: null } });
  f.metals.forEach((m) => chips.push({ key: `m${m}`, label: METAL_LABEL[m], clear: { metal: f.metals.filter((x) => x !== m).join(",") || null } }));
  f.cuts.forEach((c) => chips.push({ key: `c${c}`, label: `Огранка: ${CUT_LABEL[c]?.toLowerCase() ?? c}`, clear: { cut: f.cuts.filter((x) => x !== c).join(",") || null } }));
  f.carats.forEach((c) => chips.push({ key: `k${c}`, label: CARAT_BUCKETS.find((b) => b.id === c)!.label, clear: { carat: f.carats.filter((x) => x !== c).join(",") || null } }));
  if (f.inStock) chips.push({ key: "stock", label: "В наличии", clear: { stock: null } });
  if (f.fav) chips.push({ key: "fav", label: "Избранное", clear: { fav: null } });
  const reset = () => update({ category: null, min: null, max: null, metal: null, cut: null, carat: null, stock: null, fav: null });

  const title = f.category ? CATEGORY_LABEL[f.category] : "Все украшения";

  return (
    <div className="container-x pb-24 pt-10 lg:pt-14">
      <header className="max-w-3xl">
        <nav aria-label="Хлебные крошки" className="text-sm text-ink-soft"><Link href="/" className="link-u">Главная</Link> / <span>Каталог</span></nav>
        <h1 className="h2 mt-4 !text-[clamp(2.5rem,5.5vw,4.75rem)]">{title}</h1>
        <p className="lead mt-4">Бриллианты в золоте трёх оттенков. Цены указаны в евро — это концептуальная коллекция демонстрационной версии сайта.</p>
      </header>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-y hair py-3 lg:sticky lg:top-16 lg:z-20 lg:bg-milk/95 lg:backdrop-blur">
        <div className="contents sm:flex sm:items-center sm:gap-3">
          <button type="button" onClick={() => setOpen(true)} className="btn btn-line !min-h-11 !px-4 lg:hidden" aria-haspopup="dialog">
            <SlidersHorizontal size={16} /> Фильтры{chips.length ? ` (${chips.length})` : ""}
          </button>
          <p className="order-last w-full text-[0.9375rem] sm:order-none sm:w-auto" role="status" aria-live="polite"><span className="tabular-nums font-medium">{items.length}</span> {plural(items.length)}</p>
        </div>
        <label className="flex items-center gap-2 text-[0.9375rem]">
          <span className="hidden text-ink-soft sm:inline">Сортировка</span>
          <select value={f.sort} onChange={(e) => update({ sort: e.target.value === "new" ? null : e.target.value })} className="field !min-h-11 !w-auto max-w-[11rem] !py-1.5 pr-8">
            {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
        </label>
      </div>

      {chips.length > 0 && (
        <ul className="mt-4 flex flex-wrap items-center gap-2" aria-label="Активные фильтры">
          {chips.map((c) => (
            <li key={c.key}>
              <button type="button" onClick={() => update(c.clear)} className="inline-flex min-h-9 items-center gap-2 border border-graphite/30 bg-ivory px-3 text-[0.875rem] transition hover:border-graphite" aria-label={`Убрать фильтр: ${c.label}`}>
                {c.label} <X size={14} />
              </button>
            </li>
          ))}
          <li><button type="button" onClick={reset} className="min-h-9 px-2 text-[0.875rem] underline underline-offset-4">Сбросить всё</button></li>
        </ul>
      )}

      <div className="mt-6 grid gap-12 lg:grid-cols-[16rem_1fr] xl:grid-cols-[17rem_1fr]">
        <aside className="hidden lg:block" aria-label="Фильтры">
          <div className="sticky top-[8.5rem] max-h-[calc(100svh-10rem)] overflow-y-auto pr-3 no-scrollbar">
            <FilterPanel f={f} update={update} priceBounds={bounds} />
          </div>
        </aside>

        <section aria-label="Список украшений">
          {items.length > 0 ? (
            <ul className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-3 2xl:grid-cols-4">
              {items.map((p, i) => <li key={p.id}><ProductCard product={p} priority={i < 4} /></li>)}
            </ul>
          ) : (
            <div className="flex flex-col items-center border hair bg-ivory px-6 py-20 text-center">
              <h2 className="font-serif text-3xl">{f.fav && !favorites.length ? "В избранном пока ничего нет" : "Ничего не найдено"}</h2>
              <p className="mt-3 max-w-md text-ink-soft">{f.fav && !favorites.length ? "Нажмите на сердце на карточке украшения, чтобы сохранить его здесь." : "Попробуйте расширить диапазон цены или убрать часть фильтров."}</p>
              <button type="button" onClick={reset} className="btn btn-solid mt-7">Сбросить фильтры</button>
            </div>
          )}
        </section>
      </div>

      <Drawer open={open} onClose={() => setOpen(false)} label="Фильтры" side="left" width="max-w-[26rem]">
        <div className="border-b hair px-6 pb-4 pt-6"><h2 className="font-serif text-3xl">Фильтры</h2></div>
        <div className="flex-1 overflow-y-auto px-6"><FilterPanel f={f} update={update} priceBounds={bounds} /></div>
        <div className="flex gap-3 border-t hair bg-ivory p-4">
          <button type="button" onClick={reset} className="btn btn-line flex-1 !px-3">Сбросить</button>
          <button type="button" onClick={() => setOpen(false)} className="btn btn-solid flex-[1.4] !px-3">Показать {items.length}</button>
        </div>
      </Drawer>
    </div>
  );
}

export default function Catalog() {
  return (
    <Suspense fallback={<div className="container-x py-32 text-center text-ink-soft">Загрузка каталога…</div>}>
      <CatalogInner />
    </Suspense>
  );
}
