"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Heart, Menu, Search, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import Drawer from "./Drawer";
import SearchPanel from "./SearchPanel";
import { useStore } from "@/lib/store";
import { CATEGORY_LABEL } from "@/lib/format";
import { CATEGORIES } from "@/lib/products";

export default function Header() {
  const pathname = usePathname();
  const { count, setCartOpen, favorites, ready } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [mega, setMega] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setMenu(false); setMega(false); }, [pathname]);
  useEffect(() => {
    if (!mega) return;
    const key = (e: KeyboardEvent) => e.key === "Escape" && setMega(false);
    const click = (e: MouseEvent) => !megaRef.current?.contains(e.target as Node) && setMega(false);
    document.addEventListener("keydown", key);
    document.addEventListener("mousedown", click);
    return () => { document.removeEventListener("keydown", key); document.removeEventListener("mousedown", click); };
  }, [mega]);

  const cur = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href)) ? "page" : undefined;
  const nav = "link-u text-[0.8125rem] uppercase tracking-[0.18em]";

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-graphite focus:px-4 focus:py-2 focus:text-milk">К содержимому</a>
      <header className={`sticky top-0 z-50 border-b bg-milk/92 backdrop-blur-md transition-[height,border-color] duration-300 ${scrolled ? "hair" : "border-transparent"}`}>
        <div className={`container-x grid grid-cols-[auto_1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr] transition-[height] duration-300 ${scrolled ? "h-16" : "h-[4.5rem] lg:h-24"}`}>
          <nav aria-label="Основная навигация" className="hidden items-center gap-8 lg:flex">
            <div ref={megaRef} className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
              <button type="button" aria-expanded={mega} aria-controls="mega" onClick={() => setMega((v) => !v)} className={`${nav} inline-flex items-center gap-1.5 py-3`}>
                Украшения <ChevronDown size={14} className={`transition-transform duration-300 ${mega ? "rotate-180" : ""}`} />
              </button>
              <div id="mega" className={`absolute left-0 top-full w-72 border hair bg-milk p-6 shadow-[0_24px_60px_-30px_rgba(36,34,32,.35)] transition-all duration-300 ease-[var(--ease-lux)] ${mega ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
                <Link href="/collections" className="block py-2 font-serif text-2xl" aria-current={cur("/collections")}>Все украшения</Link>
                <ul className="mt-2 border-t hair pt-3">
                  {CATEGORIES.map((c) => (
                    <li key={c}><Link href={`/collections?category=${c}`} className="block py-2 text-[0.9375rem] text-ink-soft transition hover:translate-x-1 hover:text-graphite">{CATEGORY_LABEL[c]}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="/collections?category=engagement" className={nav}>Помолвочные</Link>
            <Link href="/maison" aria-current={cur("/maison")} className={`${nav} ${pathname.startsWith("/maison") ? "text-wine" : ""}`}>Дом ÉLAVÉRA</Link>
          </nav>
          <div className="lg:hidden">
            <button className="iconbtn -ml-2" onClick={() => setMenu(true)} aria-label="Открыть меню" aria-haspopup="dialog"><Menu size={24} strokeWidth={1.3} /></button>
          </div>
          <div className="justify-self-center"><Logo /></div>
          <div className="flex items-center justify-end">
            <button className="iconbtn" onClick={() => setSearch(true)} aria-label="Поиск"><Search size={21} strokeWidth={1.4} /></button>
            <Link href="/collections?fav=1" className="iconbtn hidden sm:inline-flex" aria-label={`Избранное${ready && favorites.length ? `, ${favorites.length}` : ""}`}>
              <Heart size={21} strokeWidth={1.4} />
              {ready && favorites.length > 0 && <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-champagne px-1 text-[0.625rem] font-medium text-graphite">{favorites.length}</span>}
            </Link>
            <button className="iconbtn -mr-2 lg:mr-0" onClick={() => setCartOpen(true)} aria-label={`Корзина${ready && count ? `, товаров: ${count}` : ""}`} aria-haspopup="dialog">
              <ShoppingBag size={21} strokeWidth={1.4} />
              {ready && count > 0 && <span key={count} className="pop absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-wine px-1 text-[0.625rem] font-medium text-milk">{count}</span>}
            </button>
          </div>
        </div>
      </header>

      <Drawer open={menu} onClose={() => setMenu(false)} label="Меню" side="left">
        <nav aria-label="Мобильная навигация" className="flex flex-1 flex-col overflow-y-auto px-7 pb-8 pt-20">
          <ul className="space-y-1">
            {[["/", "Главная"], ["/collections", "Все украшения"]].map(([h, l]) => (
              <li key={h}><Link href={h} aria-current={cur(h)} className="block py-2.5 font-serif text-[2rem] leading-none">{l}</Link></li>
            ))}
            <li>
              <ul className="mb-2 ml-1 border-l hair pl-5">
                {CATEGORIES.map((c) => <li key={c}><Link href={`/collections?category=${c}`} className="block py-2.5 text-[1.0625rem] text-ink-soft">{CATEGORY_LABEL[c]}</Link></li>)}
              </ul>
            </li>
            <li><Link href="/maison" aria-current={cur("/maison")} className="block py-2.5 font-serif text-[2rem] leading-none">Дом ÉLAVÉRA</Link></li>
            <li><Link href="/checkout" aria-current={cur("/checkout")} className="block py-2.5 font-serif text-[2rem] leading-none">Корзина и заказ</Link></li>
          </ul>
          <Link href="/collections?fav=1" className="mt-auto flex items-center gap-2 pt-8 text-ink-soft"><Heart size={18} /> Избранное{ready && favorites.length ? ` (${favorites.length})` : ""}</Link>
        </nav>
      </Drawer>
      <SearchPanel open={search} onClose={() => setSearch(false)} />
    </>
  );
}
