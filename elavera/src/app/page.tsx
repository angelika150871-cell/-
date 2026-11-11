import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JewelImage from "@/components/JewelImage";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { getFeatured, getProduct, getSignature } from "@/lib/products";
import { firstAvailableKey, productImageKey } from "@/lib/images";
import { CATEGORY_LABEL, formatPrice } from "@/lib/format";
import type { Category } from "@/lib/types";

const tiles: { cat: Category; slug: string; span: string; text: string }[] = [
  { cat: "rings", slug: "aube-pave-ring", span: "lg:col-span-5 lg:row-span-2", text: "Тонкие ободки и дорожки света" },
  { cat: "earrings", slug: "eclat-solitaire-studs", span: "lg:col-span-4", text: "Свет у лица" },
  { cat: "necklaces", slug: "cascade-riviere-necklace", span: "lg:col-span-3", text: "Линия ключицы" },
  { cat: "bracelets", slug: "lumiere-riviere-bracelet", span: "lg:col-span-3", text: "На запястье" },
  { cat: "engagement", slug: "promesse-round-solitaire", span: "lg:col-span-4", text: "Для самого важного «да»" },
];

export default function HomePage() {
  const featured = getFeatured();
  const signature = getSignature();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ivory" aria-labelledby="hero-title">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[64%]">
          <div className="relative aspect-square w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full">
            <JewelImage src="hero/hero-desktop" alt="Колье с бриллиантами на тёплом фоне — кампейн ÉLAVÉRA" sizes="(min-width:1024px) 64vw, 100vw" priority position="70% 50%" category="necklaces" cut="pear" className="hidden sm:block" />
            <JewelImage src="hero/hero-mobile" alt="Колье с бриллиантами на тёплом фоне — кампейн ÉLAVÉRA" sizes="100vw" priority position="50% 50%" category="necklaces" cut="pear" className="sm:hidden" />
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-ivory to-transparent lg:block" />
          </div>
        </div>
        <div className="container-x relative z-10 flex flex-col justify-center py-12 sm:py-16 lg:min-h-[calc(100svh-6rem)] lg:py-20">
          <div className="max-w-[34rem]">
            <p className="eyebrow">Fine Diamond Jewelry</p>
            <h1 id="hero-title" className="display mt-5">Свет, который остаётся с&nbsp;вами</h1>
            <p className="lead mt-6">Украшения, в которых мгновения становятся вечностью.</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/collections" className="btn btn-solid">Открыть коллекцию <ArrowRight size={16} /></Link>
              <Link href="/maison" className="link-u text-[0.8125rem] uppercase tracking-[0.18em]">Дом ÉLAVÉRA</Link>
            </div>
          </div>
        </div>
      </section>

      {/* КОЛЛЕКЦИИ */}
      <section className="container-x py-20 lg:py-28" aria-labelledby="coll-title">
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Коллекции</p>
            <h2 id="coll-title" className="h2 mt-3">Пять способов носить свет</h2>
          </div>
          <Link href="/collections" className="link-u self-start text-[0.8125rem] uppercase tracking-[0.18em] sm:self-auto">Все украшения</Link>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12 lg:auto-rows-[19rem]">
          {tiles.map((t, i) => {
            const p = getProduct(t.slug)!;
            return (
              <Reveal key={t.cat} delay={i * 0.06} className={`${t.span} ${i === 0 ? "col-span-2 lg:col-span-5" : i === 4 ? "col-span-2" : ""}`}>
                <Link href={`/collections?category=${t.cat}`} className="group flex h-full flex-col">
                  <div className={`relative overflow-hidden bg-ivory ${i === 0 ? "aspect-[4/3] lg:aspect-auto" : "aspect-square"} ${i === 4 ? "!aspect-[4/3] lg:!aspect-auto" : ""} lg:min-h-0 lg:flex-1`}>
                    <JewelImage src={productImageKey(p.slug, 1)} alt={`${CATEGORY_LABEL[t.cat]} ÉLAVÉRA`} sizes="(min-width:1024px) 40vw, 50vw" fit="contain" category={t.cat} cut={p.stone.cut} className="transition-transform duration-[900ms] ease-[var(--ease-lux)] group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex items-baseline justify-between gap-3 pt-3.5">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-[1.75rem]">{CATEGORY_LABEL[t.cat]}</h3>
                      <p className="hidden text-[0.9375rem] text-ink-soft sm:block">{t.text}</p>
                    </div>
                    <ArrowRight size={18} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ИЗБРАННЫЕ УКРАШЕНИЯ */}
      <section className="bg-ivory py-20 lg:py-28" aria-labelledby="feat-title">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Избранные украшения</p>
            <h2 id="feat-title" className="h2 mt-3">Те, с которых хочется начать</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.07}><ProductCard product={p} /></Reveal>
            ))}
          </div>
          <div className="mt-14 text-center"><Link href="/collections" className="btn btn-line">Весь каталог</Link></div>
        </div>
      </section>

      {/* EDITORIAL STORY */}
      <section data-dark className="relative overflow-hidden bg-wine text-ivory" aria-labelledby="story-title">
        <div className="grid lg:grid-cols-12">
          <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[44rem]">
            <JewelImage src="editorial/editorial-1" alt="Портрет в колье с бриллиантами, мягкий естественный свет" sizes="(min-width:1024px) 58vw, 100vw" position="50% 40%" category="necklaces" cut="oval" tone="dark" />
          </div>
          <div className="flex flex-col justify-center px-[clamp(1.25rem,4vw,4rem)] py-16 lg:col-span-5 lg:py-24 lg:pr-[clamp(2rem,6vw,7rem)]">
            <Reveal>
              <p className="eyebrow">История света</p>
              <h2 id="story-title" className="display mt-5 !text-[clamp(2.5rem,5vw,4.75rem)]">Совершенство <em className="font-serif italic text-champagne">в каждой</em> грани</h2>
              <p className="lead mt-7">Бриллиант не светится сам — он собирает свет вокруг и возвращает его иначе. Мы выбираем огранку и закрепку так, чтобы украшение жило вместе с тем, кто его носит, — от утреннего кофе до вечернего выхода.</p>
              <Link href="/maison" className="link-u mt-9 inline-flex items-center gap-3 text-[0.8125rem] uppercase tracking-[0.18em]">Узнать о доме ÉLAVÉRA <ArrowRight size={16} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="container-x py-20 lg:py-32" aria-labelledby="sig-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4 lg:pt-10">
            <p className="eyebrow">Signature Collection</p>
            <h2 id="sig-title" className="h2 mt-3">Lumière</h2>
            <p className="lead mt-5">Главная линия дома: от кольца до рив’еры — одна идея, один ритм бриллиантов. Украшения можно носить по отдельности или как единый ансамбль.</p>
            <Link href="/collections" className="btn btn-solid mt-8">Смотреть Lumière</Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-8 lg:grid-cols-2 lg:gap-8">
            {signature.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08} className={i === 0 ? "col-span-2 lg:col-span-1" : i === 1 ? "lg:mt-16" : i === 3 ? "col-span-2 lg:col-span-1 lg:mt-16" : ""}>
                <Link href={`/product/${p.slug}`} className="group block">
                  <div className="relative aspect-square overflow-hidden bg-ivory">
                    <JewelImage src={firstAvailableKey(p.slug, p.angles)} alt={`${p.name} — коллекция Lumière`} sizes="(min-width:1024px) 30vw, 50vw" fit="contain" category={p.category} cut={p.stone.cut} className="transition-transform duration-[900ms] ease-[var(--ease-lux)] group-hover:scale-[1.04]" />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-xl sm:text-2xl">{p.name}</h3>
                    <span className="tabular-nums text-ink-soft">{formatPrice(p.price)}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ФИЛОСОФИЯ */}
      <section className="border-y hair bg-ivory py-20 lg:py-28" aria-labelledby="phil-title">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Философия</p>
            <h2 id="phil-title" className="h2 mt-3">Тишина, в которой слышен свет</h2>
          </Reveal>
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
            {[
              ["I", "Мастерство", "Каждое украшение проходит путь от эскиза до ручной полировки. Закрепка, баланс и посадка проверяются так, чтобы вещь служила годами."],
              ["II", "Свет", "Мы выбираем пропорции огранки ради живой игры света, а не ради цифр в таблице. Бриллиант должен быть красив при дневном свете и при свечах."],
              ["III", "Красота", "Сдержанная форма, мягкий благородный металл и отсутствие лишнего. Украшение должно подчёркивать вас, а не заменять."],
            ].map(([n, t, d], i) => (
              <Reveal as="li" key={n} delay={i * 0.1} className="md:border-l hair md:px-8 first:md:border-l-0 first:md:pl-0">
                <span className="font-serif text-5xl italic text-champagne-deep">{n}</span>
                <h3 className="mt-4 font-serif text-3xl">{t}</h3>
                <p className="mt-3 text-ink-soft">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ФИНАЛ */}
      <section data-dark className="relative isolate overflow-hidden bg-graphite text-ivory" aria-labelledby="final-title">
        <div className="absolute inset-0 -z-10">
          <JewelImage src="editorial/editorial-4" alt="Бриллиантовое колье на тёмном бархате — финальный кадр" sizes="100vw" position="70% 50%" category="engagement" cut="round" tone="dark" artSide="right" />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite/55 to-transparent" />
        </div>
        <div className="container-x flex min-h-[32rem] flex-col justify-center py-20 lg:min-h-[40rem]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Искусство оставаться незабываемой</p>
            <h2 id="final-title" className="display mt-5 !text-[clamp(2.5rem,5.5vw,5rem)]">Ваш свет уже ждёт</h2>
            <p className="lead mt-6">Найдите украшение, которое будет вашим на годы.</p>
            <Link href="/collections" className="btn btn-solid mt-9">Перейти в каталог <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
