import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JewelImage from "@/components/JewelImage";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Ювелирный дом ÉLAVÉRA",
  description: "Философия ÉLAVÉRA: бриллианты как воплощение света, индивидуальности и неподвластной времени красоты. Работа со светом, макродетали и процесс создания украшения.",
  alternates: { canonical: "/maison" },
};

const steps = [
  ["Эскиз", "Идея начинается с линии и пропорции. Мы рисуем украшение на руке, а не на бумаге: важно, как оно будет двигаться."],
  ["Отбор камней", "Бриллианты подбираются по игре света и пропорциям огранки, а затем сопоставляются между собой по оттенку."],
  ["Модель и литьё", "Форма проходит через восковую или цифровую модель, затем отливается в золоте нужного оттенка."],
  ["Закрепка", "Мастер вручную устанавливает каждый камень: лапки, ободок и корзина должны держать бриллиант надёжно и почти незаметно."],
  ["Полировка и контроль", "Поверхность доводится до мягкого блеска, проверяются замок, посадка и симметрия, и только затем изделие упаковывается."],
];

export default function MaisonPage() {
  return (
    <>
      {/* 1. HERO */}
      <section data-dark className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-end overflow-hidden bg-wine text-ivory" aria-labelledby="m-title">
        <div className="absolute inset-0 -z-10">
          <JewelImage src="editorial/editorial-2" alt="Руки в тёплом свете с бриллиантовым кольцом" sizes="100vw" priority position="50% 30%" category="engagement" cut="round" tone="dark" artSide="right" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/25 to-transparent" />
        </div>
        <div className="container-x pb-14 pt-40 lg:pb-20">
          <p className="eyebrow">Ювелирный дом</p>
          <h1 id="m-title" className="display mt-5 max-w-5xl">Искусство оставаться <em className="italic text-champagne">незабываемой</em></h1>
          <p className="lead mt-6">ÉLAVÉRA — дом о свете, который остаётся с человеком.</p>
        </div>
      </section>

      {/* 2. ИСТОРИЯ */}
      <section className="container-x py-20 lg:py-32" aria-labelledby="hist-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">История и философия</p>
            <h2 id="hist-title" className="h2 mt-3 !text-[clamp(2.25rem,5vw,4.5rem)]">Мы не создаём блеск. Мы <em className="italic text-wine">собираем свет.</em></h2>
            <div className="mt-8 max-w-xl space-y-5 text-[1.0625rem] text-ink-soft">
              <p>ÉLAVÉRA задуман как современный европейский дом, в котором бриллиант — не знак статуса, а способ говорить о себе без слов. Это художественная концепция бренда: у неё нет легенд об основателях и выдуманных дат, есть только идея и методика.</p>
              <p>Идея проста: украшение должно быть тихим, пока вы с ним не встретитесь взглядом. Поэтому мы выбираем сдержанные формы, мягкие оттенки золота и пропорции, в которых каждый камень получает достаточно воздуха.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:mt-24">
            <div className="relative aspect-[4/5] bg-sand">
              <JewelImage src="editorial/editorial-3" alt="Портрет: серьги-капли с бриллиантами в мягком свете" sizes="(min-width:1024px) 40vw, 100vw" position="60% 45%" category="earrings" cut="pear" />
            </div>
            <p className="mt-3 text-[0.875rem] text-ink-soft">Бриллианты живут рядом с лицом: свет должен возвращаться к тому, кто их носит.</p>
          </Reveal>
        </div>
      </section>

      {/* 3. СВЕТ */}
      <section data-dark className="bg-graphite py-20 text-ivory lg:py-28" aria-labelledby="light-title">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Искусство света</p>
            <h2 id="light-title" className="h2 mt-3">Как бриллиант работает со светом</h2>
            <p className="lead mt-6">Три явления определяют красоту камня. Мы оцениваем их глазами, а не только таблицами.</p>
          </Reveal>
          <ol className="divide-y hair border-y hair lg:col-span-7">
            {[
              ["Блеск", "Белый свет, отражённый от граней обратно к наблюдателю. Определяется точностью углов огранки."],
              ["Дисперсия", "Разложение света на цветные вспышки. Лучше всего заметна при точечном освещении, например при свечах."],
              ["Сверкание", "Игра бликов при движении камня или руки. Именно она делает бриллиант живым."],
            ].map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.08} className="grid grid-cols-[3rem_1fr] gap-x-4 py-7 sm:grid-cols-[4rem_12rem_1fr]">
                <span className="font-serif text-3xl italic text-champagne">0{i + 1}</span>
                <h3 className="font-serif text-3xl">{t}</h3>
                <p className="col-span-2 mt-2 text-ivory/75 sm:col-span-1 sm:mt-1.5">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. МАКРО */}
      <section className="container-x py-20 lg:py-32" aria-labelledby="macro-title">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Макро</p>
          <h2 id="macro-title" className="h2 mt-3">Детали, которые видны вблизи</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-6">
          {[
            ["macro/macro-1", "Паве: бриллианты в ряд на тонком ободке", "col-span-2 lg:col-span-7", "aspect-[16/10]", "rings", "round"],
            ["macro/macro-2", "Лапки: четыре точки опоры", "lg:col-span-5 lg:mt-20", "aspect-[4/5]", "engagement", "oval"],
            ["macro/macro-3", "Грани и баланс света", "col-span-2 lg:col-span-6", "aspect-[16/10] lg:aspect-[5/4]", "earrings", "emerald"],
          ].map(([key, cap, cls, ar, cat, cut], i) => (
            <Reveal key={key} delay={i * 0.07} className={cls}>
              <figure>
                <div className={`relative overflow-hidden bg-sand ${ar}`}>
                  <JewelImage src={key} alt={cap} sizes="(min-width:1024px) 55vw, 100vw" category={cat as "rings"} cut={cut as "round"} variant={i} />
                </div>
                <figcaption className="mt-2.5 text-[0.9375rem] text-ink-soft">{cap}</figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal className="col-span-2 flex items-center lg:col-span-4 lg:col-start-9">
            <p className="font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] italic leading-snug text-wine">Мы смотрим на украшение так близко, как смотрит тот, кто его носит.</p>
          </Reveal>
        </div>
      </section>

      {/* ПОЛНОШИРИННЫЙ КАДР */}
      <section data-dark className="relative isolate flex min-h-[26rem] items-end overflow-hidden bg-graphite text-ivory lg:min-h-[36rem]" aria-label="Игра света на закрепке">
        <div className="absolute inset-0 -z-10">
          <JewelImage src="macro/macro-1" alt="Макрокадр: бриллианты паве на золотом ободке" sizes="100vw" category="rings" cut="round" tone="dark" artSide="right" />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite/85 via-graphite/40 to-transparent" />
        </div>
        <div className="container-x pb-12 lg:pb-16">
          <p className="max-w-xl font-serif text-[clamp(1.75rem,3.4vw,3rem)] leading-tight">Свет не лежит на камне — он проходит сквозь него и возвращается иначе.</p>
        </div>
      </section>

      {/* 5. ПРОЦЕСС */}
      <section className="border-y hair bg-ivory py-20 lg:py-28" aria-labelledby="proc-title">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Процесс</p>
            <h2 id="proc-title" className="h2 mt-3">От линии до блеска в пять шагов</h2>
          </Reveal>
          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.06} className="border-t border-graphite pt-5">
                <span className="text-[0.75rem] tracking-[0.25em] text-champagne-deep">ШАГ {i + 1}</span>
                <h3 className="mt-3 font-serif text-[1.75rem]">{t}</h3>
                <p className="mt-3 text-[0.9375rem] text-ink-soft">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. ФИНАЛ */}
      <section data-dark className="relative isolate overflow-hidden bg-wine py-24 text-ivory lg:py-36" aria-labelledby="mfinal-title">
        <div className="container-x text-center">
          <Reveal>
            <p className="eyebrow">Коллекция</p>
            <h2 id="mfinal-title" className="display mx-auto mt-5 max-w-4xl">Найдите свой свет</h2>
            <p className="lead mx-auto mt-6">Откройте украшения, в которых воплощена эта философия.</p>
            <Link href="/collections" className="btn btn-solid mt-10">Перейти в каталог <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
