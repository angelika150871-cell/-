"use client";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import Drawer from "./Drawer";
import JewelImage from "./JewelImage";
import { useStore } from "@/lib/store";
import { getProduct } from "@/lib/products";
import { productImageKey } from "@/lib/images";
import { METAL_LABEL, formatPrice } from "@/lib/format";

export default function CartDrawer() {
  const { cartOpen, setCartOpen, lines, count, subtotal, setQty, removeLine } = useStore();
  const close = () => setCartOpen(false);
  return (
    <Drawer open={cartOpen} onClose={close} label="Корзина">
      <div className="border-b hair px-6 pb-4 pt-6">
        <h2 className="font-serif text-3xl">Корзина</h2>
        <p className="mt-1 text-sm text-ink-soft" aria-live="polite">{count ? `Товаров: ${count}` : "Пока пусто"}</p>
      </div>
      {lines.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
          <p className="font-serif text-2xl">Ваша корзина пуста</p>
          <p className="mt-2 max-w-xs text-ink-soft">Откройте коллекцию и выберите украшение, которое станет вашим.</p>
          <Link href="/collections" onClick={close} className="btn btn-solid mt-6">Открыть коллекцию</Link>
        </div>
      ) : (
        <>
          <ul className="flex-1 divide-y hair overflow-y-auto px-6">
            {lines.map((l) => {
              const p = getProduct(l.slug);
              if (!p) return null;
              return (
                <li key={`${l.productId}${l.metal}${l.size}`} className="flex gap-4 py-5">
                  <Link href={`/product/${p.slug}`} onClick={close} className="relative block h-28 w-24 shrink-0 overflow-hidden bg-sand">
                    <JewelImage src={productImageKey(p.slug, 1)} alt={p.name} sizes="96px" category={p.category} cut={p.stone.cut} />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <Link href={`/product/${p.slug}`} onClick={close} className="font-serif text-xl leading-tight">{p.name}</Link>
                    <p className="mt-1 text-sm text-ink-soft">{METAL_LABEL[l.metal]}{l.size ? ` · размер ${l.size}` : ""}</p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-graphite/30" role="group" aria-label={`Количество: ${p.name}`}>
                        <button onClick={() => setQty(l, l.qty - 1)} disabled={l.qty <= 1} aria-label="Уменьшить количество" className="flex h-10 w-10 items-center justify-center disabled:opacity-30"><Minus size={15} /></button>
                        <span className="w-8 text-center tabular-nums" aria-live="polite">{l.qty}</span>
                        <button onClick={() => setQty(l, l.qty + 1)} disabled={l.qty >= 9} aria-label="Увеличить количество" className="flex h-10 w-10 items-center justify-center disabled:opacity-30"><Plus size={15} /></button>
                      </div>
                      <span className="tabular-nums">{formatPrice(p.price * l.qty)}</span>
                    </div>
                  </div>
                  <button onClick={() => removeLine(l)} aria-label={`Удалить «${p.name}» из корзины`} className="iconbtn -mr-2 -mt-1 h-10 w-10 self-start"><Trash2 size={17} strokeWidth={1.4} /></button>
                </li>
              );
            })}
          </ul>
          <div className="border-t hair bg-ivory px-6 py-5">
            <div className="flex items-baseline justify-between"><span>Итого</span><span className="font-serif text-2xl tabular-nums">{formatPrice(subtotal)}</span></div>
            <p className="mt-1 text-[0.8125rem] text-ink-soft">Демо-режим: доставка и итоговая сумма уточняются при оформлении. Оплата не подключена.</p>
            <Link href="/checkout" onClick={close} className="btn btn-solid mt-4 w-full">Оформить заказ</Link>
            <button onClick={close} className="mt-3 w-full py-2 text-sm underline underline-offset-4">Продолжить выбор</button>
          </div>
        </>
      )}
    </Drawer>
  );
}
