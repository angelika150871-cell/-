"use client";
import Link from "next/link";
import { useState } from "react";
import { Check, Plus } from "lucide-react";
import type { Product } from "@/lib/types";
import { CATEGORY_SHORT, CUT_LABEL, STOCK_LABEL, formatCarat, formatPrice, METAL_LABEL, METAL_SWATCH } from "@/lib/format";
import { defaultMetal, isQuickAddable } from "@/lib/products";
import { productImageKey } from "@/lib/images";
import { useStore } from "@/lib/store";
import JewelImage from "./JewelImage";
import FavoriteButton from "./FavoriteButton";

export default function ProductCard({ product: p, priority = false }: { product: Product; priority?: boolean }) {
  const { addLine } = useStore();
  const [done, setDone] = useState(false);
  const quick = isQuickAddable(p);
  const soldOut = p.stock === "sold_out";

  const add = () => {
    addLine({ productId: p.id, slug: p.slug, metal: defaultMetal(p), size: null });
    setDone(true);
    setTimeout(() => setDone(false), 1800);
  };

  // кнопка действия: на телефонах и планшетах — под карточкой (не закрывает украшение)
  const action = (extra = "") =>
    quick ? (
      <button type="button" onClick={add} className={`btn btn-solid w-full !min-h-11 !py-2 !text-xs ${extra}`} aria-live="polite">
        {done ? <><Check size={16} /> Добавлено</> : <><Plus size={16} /> В корзину</>}
      </button>
    ) : (
      <Link href={`/product/${p.slug}`} className={`btn btn-line w-full !min-h-11 !py-2 !text-xs ${extra}`}>
        {soldOut ? "Подробнее" : "Выбрать параметры"}
      </Link>
    );

  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-ivory">
        <Link href={`/product/${p.slug}`} className="absolute inset-0 z-0" aria-label={`${p.name} — ${formatPrice(p.price)}`}>
          <JewelImage
            src={productImageKey(p.slug, 1)}
            alt={`${p.name}: ${CUT_LABEL[p.stone.cut].toLowerCase()} огранка, ${formatCarat(p.stone.carat)}`}
            sizes="(min-width:1280px) 24vw, (min-width:768px) 33vw, 50vw"
            priority={priority}
            fit="contain"
            category={p.category}
            cut={p.stone.cut}
            className="transition-transform duration-[900ms] ease-[var(--ease-lux)] group-hover:scale-[1.04]"
          />
        </Link>
        <FavoriteButton id={p.id} name={p.name} className="absolute right-2.5 top-2.5 z-10" />
        {soldOut && <span className="absolute left-0 top-3 z-10 bg-graphite px-3 py-1 text-[0.6875rem] uppercase tracking-[0.14em] text-milk">Нет в наличии</span>}
        {!soldOut && isNew(p) && <span className="absolute left-0 top-3 z-10 bg-wine px-3 py-1 text-[0.6875rem] uppercase tracking-[0.14em] text-milk">Новинка</span>}
        {/* быстрое действие на десктопе: всплывает по hover/focus поверх фото */}
        <div className="absolute inset-x-0 bottom-0 z-10 hidden p-2.5 transition duration-300 lg:block lg:translate-y-full lg:opacity-0 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          {action("!bg-milk/90")}
        </div>
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-[0.75rem] uppercase tracking-[0.18em] text-ink-soft">{CATEGORY_SHORT[p.category]} · {p.collection}</p>
        <h3 className="mt-1.5 font-serif text-[1.375rem] leading-tight sm:text-2xl">
          <Link href={`/product/${p.slug}`} className="link-u">{p.name}</Link>
        </h3>
        <p className="mt-1 text-[0.9375rem] text-ink-soft">
          {CUT_LABEL[p.stone.cut]}, {formatCarat(p.stone.carat)}
        </p>
        <div className="mt-2 flex items-center gap-2" aria-label={`Доступные металлы: ${p.metals.filter(m=>m.available).map(m=>METAL_LABEL[m.metal]).join(", ")}`}>
          {p.metals.map((m) => (
            <span key={m.metal} title={METAL_LABEL[m.metal]} className={`h-3.5 w-3.5 rounded-full border border-graphite/25 ${m.available ? "" : "opacity-30"}`} style={{ background: METAL_SWATCH[m.metal] }} />
          ))}
        </div>
        <div className="mt-3 flex items-baseline justify-between gap-3">
          <span className="text-lg font-medium tabular-nums">{formatPrice(p.price)}</span>
          <span className={`text-[0.8125rem] ${p.stock === "sold_out" ? "text-ink-soft" : p.stock === "in_stock" ? "text-graphite" : "text-champagne-deep"}`}>{STOCK_LABEL[p.stock].split(" · ")[0]}</span>
        </div>
        <div className="mt-3 lg:hidden">{action()}</div>
      </div>
    </article>
  );
}

function isNew(p: Product) {
  return new Date(p.addedAt) > new Date("2026-10-01");
}
