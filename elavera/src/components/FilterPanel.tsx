"use client";
import { useEffect, useState } from "react";
import type { Cut, Metal } from "@/lib/types";
import { CATEGORY_LABEL, CUT_LABEL, METAL_LABEL, METAL_SWATCH } from "@/lib/format";
import { CATEGORIES } from "@/lib/products";
import { CARAT_BUCKETS, type Filters } from "@/lib/filters";

type Patch = Record<string, string | null>;

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-b hair py-5">
      <legend className="float-left mb-3 w-full text-[0.75rem] font-medium uppercase tracking-[0.2em]">{title}</legend>
      <div className="clear-both space-y-0.5">{children}</div>
    </fieldset>
  );
}
function Check({ checked, onChange, children }: { checked: boolean; onChange: (v: boolean) => void; children: React.ReactNode }) {
  return (
    <label className="flex min-h-11 cursor-pointer items-center gap-3 text-[0.9375rem]">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="h-[1.125rem] w-[1.125rem] shrink-0 accent-[#482E35]" />
      {children}
    </label>
  );
}
const toggle = <T extends string>(arr: T[], v: T, on: boolean) => (on ? [...arr, v] : arr.filter((x) => x !== v));

export default function FilterPanel({ f, update, priceBounds }: { f: Filters; update: (p: Patch) => void; priceBounds: [number, number] }) {
  const [min, setMin] = useState(f.min?.toString() ?? "");
  const [max, setMax] = useState(f.max?.toString() ?? "");
  useEffect(() => { setMin(f.min?.toString() ?? ""); setMax(f.max?.toString() ?? ""); }, [f.min, f.max]);
  const commitPrice = () => update({ min: min.trim() ? String(Math.max(0, Number(min) || 0)) : null, max: max.trim() ? String(Math.max(0, Number(max) || 0)) : null });
  const csv = (a: string[]) => (a.length ? a.join(",") : null);

  return (
    <div>
      <Group title="Категория">
        <Check checked={!f.category} onChange={() => update({ category: null })}>Все украшения</Check>
        {CATEGORIES.map((c) => (
          <Check key={c} checked={f.category === c} onChange={(v) => update({ category: v ? c : null })}>{CATEGORY_LABEL[c]}</Check>
        ))}
      </Group>
      <Group title="Стоимость, €">
        <div className="flex items-center gap-2 pt-1">
          <label className="flex-1"><span className="sr-only">Цена от</span>
            <input inputMode="numeric" pattern="[0-9]*" className="field" placeholder={`от ${priceBounds[0]}`} value={min} onChange={(e) => setMin(e.target.value.replace(/\D/g, ""))} onBlur={commitPrice} onKeyDown={(e) => e.key === "Enter" && commitPrice()} />
          </label>
          <span aria-hidden>–</span>
          <label className="flex-1"><span className="sr-only">Цена до</span>
            <input inputMode="numeric" pattern="[0-9]*" className="field" placeholder={`до ${priceBounds[1]}`} value={max} onChange={(e) => setMax(e.target.value.replace(/\D/g, ""))} onBlur={commitPrice} onKeyDown={(e) => e.key === "Enter" && commitPrice()} />
          </label>
        </div>
        <div className="flex flex-wrap gap-2 pt-3">
          {[[null, 5000, "до 5 000"], [5000, 10000, "5–10 тыс."], [10000, null, "от 10 000"]].map(([a, b, l]) => (
            <button key={String(l)} type="button" onClick={() => update({ min: a ? String(a) : null, max: b ? String(b) : null })} className="min-h-9 border border-graphite/25 px-3 text-[0.8125rem] transition hover:border-graphite">{l as string}</button>
          ))}
        </div>
      </Group>
      <Group title="Металл">
        {(Object.keys(METAL_LABEL) as Metal[]).map((m) => (
          <Check key={m} checked={f.metals.includes(m)} onChange={(v) => update({ metal: csv(toggle(f.metals, m, v)) })}>
            <span className="h-4 w-4 rounded-full border border-graphite/25" style={{ background: METAL_SWATCH[m] }} aria-hidden /> {METAL_LABEL[m]}
          </Check>
        ))}
      </Group>
      <Group title="Огранка">
        {(["round", "oval", "pear", "emerald"] as Cut[]).map((c) => (
          <Check key={c} checked={f.cuts.includes(c)} onChange={(v) => update({ cut: csv(toggle(f.cuts, c, v)) })}>{CUT_LABEL[c]}</Check>
        ))}
      </Group>
      <Group title="Вес бриллианта">
        {CARAT_BUCKETS.map((b) => (
          <Check key={b.id} checked={f.carats.includes(b.id)} onChange={(v) => update({ carat: csv(toggle(f.carats, b.id, v)) })}>{b.label}</Check>
        ))}
      </Group>
      <Group title="Наличие">
        <Check checked={f.inStock} onChange={(v) => update({ stock: v ? "1" : null })}>Только в наличии</Check>
        <Check checked={f.fav} onChange={(v) => update({ fav: v ? "1" : null })}>Только избранное</Check>
      </Group>
    </div>
  );
}
