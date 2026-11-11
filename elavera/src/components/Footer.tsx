import Link from "next/link";
import Logo from "./Logo";
import Newsletter from "./Newsletter";
import { CATEGORIES } from "@/lib/products";
import { CATEGORY_LABEL } from "@/lib/format";

export default function Footer() {
  return (
    <footer data-dark className="bg-graphite text-ivory">
      <div className="container-x grid gap-14 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] lg:py-20">
        <div>
          <Logo tone="light" className="!items-start [&>span]:!pl-0" />
          <p className="mt-6 max-w-sm text-[0.9375rem] text-ivory/75">
            Современный ювелирный дом бриллиантов: украшения, созданные вокруг света, индивидуальности и неподвластной времени красоты.
          </p>
        </div>
        <nav aria-label="Страницы сайта">
          <p className="eyebrow">Навигация</p>
          <ul className="mt-5 space-y-2.5">
            {[["/", "Главная"], ["/collections", "Каталог украшений"], ["/maison", "Дом ÉLAVÉRA"], ["/checkout", "Корзина и оформление"]].map(([h, l]) => (
              <li key={h}><Link href={h} className="link-u text-[0.9375rem]">{l}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Категории">
          <p className="eyebrow">Категории</p>
          <ul className="mt-5 space-y-2.5">
            {CATEGORIES.map((c) => <li key={c}><Link href={`/collections?category=${c}`} className="link-u text-[0.9375rem]">{CATEGORY_LABEL[c]}</Link></li>)}
          </ul>
        </nav>
        <div>
          <Newsletter />
          <address className="mt-8 text-[0.9375rem] not-italic text-ivory/75">
            <p className="eyebrow mb-3">Контакты (демо)</p>
            <p>hello@elavera.example</p>
            <p>+00 000 000 00 00</p>
            <p className="mt-1">Адрес бутика будет указан при запуске.</p>
          </address>
        </div>
      </div>
      <div className="border-t hair">
        <div className="container-x flex flex-col gap-2 py-6 text-[0.8125rem] text-ivory/65 sm:flex-row sm:justify-between">
          <p>© 2026 ÉLAVÉRA. Концептуальный демонстрационный проект.</p>
          <p>Демо-режим: оплата не подключена, изделия и цены вымышлены.</p>
        </div>
      </div>
    </footer>
  );
}
