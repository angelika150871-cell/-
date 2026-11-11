"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Gift, Heart, Maximize2, RotateCcw, Truck } from "lucide-react";
import type { Metal, Product } from "@/lib/types";
import { CATEGORY_LABEL, CUT_LABEL, METAL_LABEL, METAL_SWATCH, STOCK_LABEL, formatCarat, formatPrice } from "@/lib/format";
import { defaultMetal } from "@/lib/products";
import { productImageKey } from "@/lib/images";
import { useStore } from "@/lib/store";
import JewelImage from "./JewelImage";
import Lightbox from "./Lightbox";

const ringRows = (sizes: number[]) => sizes.map((s) => ({ s, circ: s, dia: (s / Math.PI).toFixed(1).replace(".", ",") }));

export default function ProductView({ product: p }: { product: Product }) {
  const { addLine, isFavorite, toggleFavorite, ready } = useStore();
  const [metal, setMetal] = useState<Metal>(defaultMetal(p));
  const [size, setSize] = useState<number | null>(null);
  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [err, setErr] = useState("");
  const [added, setAdded] = useState(false);
  const [bar, setBar] = useState(false);
  const cta = useRef<HTMLDivElement>(null);
  const touch = useRef<number | null>(null);

  const soldOut = p.stock === "sold_out";
  const items = Array.from({ length: p.angles }, (_, i) => ({
    key: productImageKey(p.slug, i + 1),
    alt: `${p.name} — ${["основной ракурс", "ракурс сбоку", "деталь закрепки"][i] ?? `ракурс ${i + 1}`}`,
  }));
  const fav = ready && isFavorite(p.id);

  useEffect(() => {
    const el = cta.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setBar(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const add = () => {
    if (p.sizes && size == null) { setErr("Выберите размер кольца"); document.getElementById("size-group")?.scrollIntoView({ block: "center", behavior: "smooth" }); return; }
    setErr("");
    addLine({ productId: p.id, slug: p.slug, metal, size });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
  const go = (d: number) => setIdx((i) => (i + d + items.length) % items.length);

  return (
    <div className="container-x pb-24 pt-8 lg:pb-28 lg:pt-12">
      <nav aria-label="Хлебные крошки" className="text-sm text-ink-soft">
        <Link href="/" className="link-u">Главная</Link> / <Link href="/collections" className="link-u">Каталог</Link> / <Link href={`/collections?category=${p.category}`} className="link-u">{CATEGORY_LABEL[p.category]}</Link>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
        {/* ГАЛЕРЕЯ */}
        <div className="flex flex-col gap-3 lg:sticky lg:top-28 lg:flex-row-reverse lg:self-start">
          <div
            className="group relative aspect-[4/5] flex-1 overflow-hidden bg-sand lg:aspect-[5/6]"
            onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
            onTouchEnd={(e) => { if (touch.current == null || items.length < 2) return; const dx = e.changedTouches[0].clientX - touch.current; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); touch.current = null; }}
          >
            <button type="button" onClick={() => setZoom(true)} className="absolute inset-0 z-[1] cursor-zoom-in" aria-label="Увеличить изображение" />
            <JewelImage key={items[idx].key} src={items[idx].key} alt={items[idx].alt} sizes="(min-width:1024px) 52vw, 100vw" priority category={p.category} cut={p.stone.cut} variant={idx} />
            <span className="pointer-events-none absolute bottom-3 right-3 z-[2] flex h-11 w-11 items-center justify-center rounded-full bg-milk/85"><Maximize2 size={18} strokeWidth={1.4} /></span>
            {items.length > 1 && (
              <>
                <button type="button" onClick={() => go(-1)} className="iconbtn absolute left-2 top-1/2 z-[2] -translate-y-1/2 bg-milk/80 lg:opacity-0 lg:transition lg:group-hover:opacity-100 lg:focus-visible:opacity-100" aria-label="Предыдущее изображение"><ChevronLeft size={22} strokeWidth={1.3} /></button>
                <button type="button" onClick={() => go(1)} className="iconbtn absolute right-2 top-1/2 z-[2] -translate-y-1/2 bg-milk/80 lg:opacity-0 lg:transition lg:group-hover:opacity-100 lg:focus-visible:opacity-100" aria-label="Следующее изображение"><ChevronRight size={22} strokeWidth={1.3} /></button>
              </>
            )}
          </div>
          {items.length > 1 && (
            <ul className="flex gap-3 lg:flex-col" aria-label="Ракурсы">
              {items.map((it, i) => (
                <li key={it.key} className="w-20 sm:w-24 lg:w-24">
                  <button type="button" onClick={() => setIdx(i)} aria-label={`Показать: ${it.alt}`} aria-current={i === idx} className={`relative block aspect-square w-full overflow-hidden bg-sand outline outline-1 outline-offset-2 transition ${i === idx ? "outline-graphite" : "outline-transparent opacity-80 hover:opacity-100"}`}>
                    <JewelImage src={it.key} alt="" sizes="96px" category={p.category} cut={p.stone.cut} variant={i} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ПОКУПКА */}
        <div>
          <p className="eyebrow">Коллекция {p.collection}</p>
          <h1 className="mt-3 font-serif text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.02]">{p.name}</h1>
          <p className="mt-3 text-ink-soft">{CATEGORY_LABEL[p.category]} · арт. {p.id}</p>
          <p className="mt-5 text-3xl tabular-nums">{formatPrice(p.price)}</p>
          <p className={`mt-1 text-[0.9375rem] ${soldOut ? "text-[#8f2d2d]" : "text-ink-soft"}`}>{STOCK_LABEL[p.stock]}</p>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">{p.description}</p>

          <div className="mt-8 border-t hair pt-6">
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em]">Металл: <span className="font-normal normal-case tracking-normal">{METAL_LABEL[metal]}</span></p>
            <div role="radiogroup" aria-label="Металл" className="mt-3 flex flex-wrap gap-3">
              {p.metals.map((m) => (
                <button key={m.metal} type="button" role="radio" aria-checked={metal === m.metal} disabled={!m.available} onClick={() => setMetal(m.metal)}
                  className={`flex min-h-12 items-center gap-3 border px-4 text-[0.9375rem] transition ${metal === m.metal ? "border-graphite bg-ivory" : "border-graphite/25 hover:border-graphite"} ${!m.available ? "cursor-not-allowed opacity-50" : ""}`}>
                  <span className="h-5 w-5 rounded-full border border-graphite/25" style={{ background: METAL_SWATCH[m.metal] }} />
                  <span className={m.available ? "" : "line-through"}>{METAL_LABEL[m.metal]}</span>
                  {!m.available && <span className="text-xs">нет в наличии</span>}
                </button>
              ))}
            </div>
          </div>

          {p.sizes && (
            <div className="mt-7" id="size-group">
              <div className="flex items-baseline justify-between">
                <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em]">Размер кольца (EU){size ? <span className="font-normal normal-case tracking-normal"> · {size}</span> : null}</p>
              </div>
              <div role="radiogroup" aria-label="Размер кольца" className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-7">
                {p.sizes.map((s) => (
                  <button key={s.size} type="button" role="radio" aria-checked={size === s.size} aria-disabled={!s.available} aria-label={`Размер ${s.size}${s.available ? "" : ", нет в наличии"}`}
                    onClick={() => { if (s.available) { setSize(s.size); setErr(""); } }}
                    className={`relative flex min-h-12 items-center justify-center border text-[0.9375rem] tabular-nums transition ${size === s.size ? "border-graphite bg-graphite text-milk" : s.available ? "border-graphite/25 hover:border-graphite" : "cursor-not-allowed border-graphite/15 text-graphite/45"}`}>
                    <span className={s.available ? "" : "line-through"}>{s.size}</span>
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[0.8125rem] text-ink-soft">Зачёркнутые размеры сейчас недоступны. Размер — внутренняя окружность кольца в мм.</p>
              <details className="mt-3 border-y hair py-3">
                <summary className="flex min-h-11 cursor-pointer items-center text-[0.9375rem] underline-offset-4 hover:underline">Таблица размеров</summary>
                <div className="mt-3 max-h-64 overflow-auto">
                  <table className="w-full text-left text-[0.9375rem] tabular-nums">
                    <caption className="sr-only">Соответствие размеров кольца</caption>
                    <thead><tr className="border-b hair text-ink-soft"><th scope="col" className="py-2 font-normal">Размер EU</th><th scope="col" className="font-normal">Окружность, мм</th><th scope="col" className="font-normal">Диаметр, мм</th></tr></thead>
                    <tbody>{ringRows(p.sizes.map((s) => s.size)).map((r) => (
                      <tr key={r.s} className="border-b hair"><th scope="row" className="py-1.5 font-medium">{r.s}</th><td>{r.circ}</td><td>{r.dia}</td></tr>
                    ))}</tbody>
                  </table>
                </div>
                <p className="mt-3 text-[0.8125rem] text-ink-soft">Чтобы определить размер, измерьте окружность нужного пальца нитью и сверьте с таблицей. Размеры ориентировочные.</p>
              </details>
            </div>
          )}

          <div ref={cta} className="mt-8 flex gap-3">
            <button type="button" onClick={add} disabled={soldOut} className="btn btn-solid flex-1" aria-live="polite">
              {soldOut ? "Нет в наличии" : added ? <><Check size={17} /> Добавлено в корзину</> : "Добавить в корзину"}
            </button>
            <button type="button" onClick={() => toggleFavorite(p.id)} aria-pressed={fav} aria-label={fav ? "Убрать из избранного" : "Добавить в избранное"} className="btn btn-line !px-4">
              <Heart size={20} strokeWidth={1.4} className={fav ? "fill-wine stroke-wine" : ""} />
            </button>
          </div>
          <p role="alert" className="mt-2 min-h-6 text-[0.9375rem] text-[#8f2d2d]">{err}</p>
          {p.stock === "made_to_order" && <p className="text-[0.875rem] text-ink-soft">Изделие изготавливается под заказ — срок указан в статусе наличия.</p>}

          {/* ХАРАКТЕРИСТИКИ */}
          <section className="mt-10" aria-labelledby="stone-h">
            <h2 id="stone-h" className="font-serif text-2xl">Бриллиант и материал</h2>
            <dl className="mt-4 divide-y hair border-y hair text-[0.9375rem]">
              {[
                ["Огранка", CUT_LABEL[p.stone.cut]],
                ["Общий вес бриллиантов", formatCarat(p.stone.carat)],
                ["Количество камней", String(p.stone.count)],
                ["Цвет", p.stone.color],
                ["Чистота", p.stone.clarity],
                ["Материал", p.material],
                ["Выбранный металл", METAL_LABEL[metal]],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3"><dt className="text-ink-soft">{k}</dt><dd className="text-right">{v}</dd></div>
              ))}
            </dl>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-[0.9375rem] text-ink-soft">{p.details.map((d) => <li key={d}>{d}</li>)}</ul>
            <p className="mt-4 border-l-2 border-champagne pl-4 text-[0.875rem] text-ink-soft">Концептуальные характеристики демонстрационного изделия. Сертификаты камней не заявляются; для реального изделия данные подтверждаются документами.</p>
          </section>

          <section className="mt-10 space-y-2" aria-label="Доставка, упаковка и возврат">
            {[
              [Gift, "Упаковка", "Украшение поставляется в фирменной коробке с футляром для хранения и мягкой салфеткой для ухода."],
              [Truck, "Доставка", "Демо-условия: застрахованная курьерская доставка, срок и стоимость рассчитываются при оформлении заказа."],
              [RotateCcw, "Возврат", "Демо-условия: возврат нерасписанных изделий в течение 14 дней. Индивидуальные заказы возврату не подлежат."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Gift;
              return (
                <details key={t as string} className="group border-b hair py-3.5">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3"><I size={19} strokeWidth={1.3} /> <span className="flex-1">{t as string}</span><ChevronRight size={16} className="transition group-open:rotate-90" /></summary>
                  <p className="pb-2 pl-8 pt-1 text-[0.9375rem] text-ink-soft">{d as string}</p>
                </details>
              );
            })}
          </section>
        </div>
      </div>

      {zoom && <Lightbox items={items} index={idx} onIndex={setIdx} onClose={() => setZoom(false)} category={p.category} cut={p.stone.cut} />}

      {/* мобильная панель покупки: появляется только когда основная кнопка ушла из вида */}
      <div className={`fixed inset-x-0 bottom-0 z-40 border-t hair bg-milk/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${bar && !zoom ? "translate-y-0" : "translate-y-full"}`} aria-hidden={!bar}>
        <div className="flex items-center gap-4">
          <div className="min-w-0 flex-1"><p className="truncate font-serif text-lg leading-tight">{p.name}</p><p className="text-sm tabular-nums text-ink-soft">{formatPrice(p.price)}</p></div>
          <button type="button" onClick={add} disabled={soldOut} tabIndex={bar ? 0 : -1} className="btn btn-solid !px-6">{added ? "Добавлено" : soldOut ? "Нет в наличии" : "В корзину"}</button>
        </div>
      </div>
    </div>
  );
}
