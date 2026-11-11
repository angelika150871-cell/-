"use client";
import Link from "next/link";
import { useId, useRef, useState } from "react";
import { Check, Info, Minus, Plus, Trash2 } from "lucide-react";
import { useStore, type CartLine } from "@/lib/store";
import { getProduct } from "@/lib/products";
import { productImageKey } from "@/lib/images";
import { METAL_LABEL, formatPrice } from "@/lib/format";
import JewelImage from "./JewelImage";

const DELIVERY = [
  { id: "standard", label: "Застрахованная доставка", note: "3–5 рабочих дней · демо", price: 0 },
  { id: "express", label: "Экспресс-доставка", note: "1–2 рабочих дня · демо", price: 45 },
  { id: "pickup", label: "Самовывоз из бутика", note: "Адрес бутика будет указан при запуске · демо", price: 0 },
] as const;
type Field = "name" | "email" | "phone" | "country" | "city" | "address" | "zip" | "consent";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface Done { number: string; total: number; lines: CartLine[]; delivery: string; email: string }

export default function CheckoutView() {
  const { lines, subtotal, setQty, removeLine, clearCart, ready } = useStore();
  const uid = useId();
  const [delivery, setDelivery] = useState<(typeof DELIVERY)[number]["id"]>("standard");
  const [v, setV] = useState<Record<Field, string>>({ name: "", email: "", phone: "", country: "", city: "", address: "", zip: "", consent: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [done, setDone] = useState<Done | null>(null);
  const form = useRef<HTMLFormElement>(null);
  const opt = DELIVERY.find((d) => d.id === delivery)!;
  const total = subtotal + opt.price;
  const pickup = delivery === "pickup";

  const validate = () => {
    const e: Partial<Record<Field, string>> = {};
    if (v.name.trim().length < 2) e.name = "Укажите имя и фамилию";
    if (!EMAIL.test(v.email.trim())) e.email = "Введите корректный e-mail, например name@example.com";
    if (v.phone.replace(/\D/g, "").length < 7) e.phone = "Введите телефон — не менее 7 цифр";
    if (!pickup) {
      if (!v.country.trim()) e.country = "Укажите страну";
      if (!v.city.trim()) e.city = "Укажите город";
      if (!v.address.trim()) e.address = "Укажите улицу и дом";
      if (!v.zip.trim()) e.zip = "Укажите индекс";
    }
    if (v.consent !== "1") e.consent = "Подтвердите, что понимаете: это демонстрационный заказ";
    return e;
  };
  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setDone({ number: `DEMO-${Math.random().toString(36).slice(2, 8).toUpperCase()}`, total, lines, delivery: opt.label, email: v.email.trim() });
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const set = (k: Field) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setV((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }));
  };
  const input = (k: Exclude<Field, "consent">, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}, cls = "") => (
    <div className={cls}>
      <label htmlFor={`${uid}-${k}`} className="mb-1.5 block text-[0.875rem]">{label}</label>
      <input id={`${uid}-${k}`} name={k} value={v[k]} onChange={set(k)} className="field" aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${uid}-${k}-e` : undefined} {...props} />
      {errors[k] && <p id={`${uid}-${k}-e`} className="mt-1.5 text-[0.875rem] text-[#8f2d2d]">{errors[k]}</p>}
    </div>
  );

  if (done) {
    return (
      <section className="container-x max-w-3xl py-16 lg:py-24" aria-labelledby="done-h">
        <div role="status" className="border hair bg-ivory p-8 sm:p-12">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-wine text-milk"><Check size={22} /></span>
          <p className="eyebrow mt-6">Демо-заказ принят</p>
          <h1 id="done-h" className="h2 mt-3">Спасибо за интерес к ÉLAVÉRA</h1>
          <p className="mt-4 text-ink-soft">Номер демонстрационного заказа: <strong className="text-graphite">{done.number}</strong>. Это пример сценария оформления: <strong className="text-graphite">оплата не проводилась, средства не списывались, заказ нигде не сохранён</strong>.</p>
          <ul className="mt-8 divide-y hair border-y hair">
            {done.lines.map((l) => { const p = getProduct(l.slug)!; return (
              <li key={`${l.productId}${l.metal}${l.size}`} className="flex justify-between gap-4 py-3 text-[0.9375rem]"><span>{p.name} × {l.qty}<span className="block text-ink-soft">{METAL_LABEL[l.metal]}{l.size ? ` · размер ${l.size}` : ""}</span></span><span className="tabular-nums">{formatPrice(p.price * l.qty)}</span></li>
            ); })}
            <li className="flex justify-between py-3 text-[0.9375rem]"><span>{done.delivery}</span><span>{opt.price ? formatPrice(opt.price) : "Бесплатно"}</span></li>
            <li className="flex justify-between py-4 font-serif text-2xl"><span>Итого</span><span className="tabular-nums">{formatPrice(done.total)}</span></li>
          </ul>
          <p className="mt-5 text-[0.875rem] text-ink-soft">В реальном магазине подтверждение было бы отправлено на {done.email}.</p>
          <Link href="/collections" className="btn btn-solid mt-8">Вернуться в каталог</Link>
        </div>
      </section>
    );
  }

  if (!ready) return <div className="container-x py-32 text-center text-ink-soft">Загрузка корзины…</div>;

  if (lines.length === 0) {
    return (
      <section className="container-x py-24 text-center lg:py-36" aria-labelledby="empty-h">
        <p className="eyebrow">Корзина</p>
        <h1 id="empty-h" className="h2 mt-3">Ваша корзина пуста</h1>
        <p className="lead mx-auto mt-4">Выберите украшение в каталоге — оно появится здесь.</p>
        <Link href="/collections" className="btn btn-solid mt-8">Открыть коллекцию</Link>
      </section>
    );
  }

  return (
    <div className="container-x pb-24 pt-10 lg:pt-14">
      <h1 className="h2 !text-[clamp(2.25rem,5vw,4rem)]">Оформление заказа</h1>
      <div role="note" className="mt-6 flex gap-3 border border-champagne bg-ivory p-4 text-[0.9375rem]">
        <Info size={20} className="mt-0.5 shrink-0 text-champagne-deep" aria-hidden />
        <p><strong>Демонстрационный режим.</strong> Платёжная система и backend не подключены: оплата не принимается, средства не списываются, данные формы никуда не отправляются.</p>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_26rem] xl:grid-cols-[1fr_30rem] lg:gap-16">
        <form ref={form} onSubmit={submit} noValidate className="space-y-12" aria-label="Данные для заказа">
          <fieldset>
            <legend className="font-serif text-3xl">1. Контакты</legend>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {input("name", "Имя и фамилия", { autoComplete: "name" }, "sm:col-span-2")}
              {input("email", "E-mail", { type: "email", autoComplete: "email", inputMode: "email" })}
              {input("phone", "Телефон", { type: "tel", autoComplete: "tel", inputMode: "tel" })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-serif text-3xl">2. Доставка</legend>
            <div role="radiogroup" aria-label="Способ доставки" className="mt-5 space-y-3">
              {DELIVERY.map((d) => (
                <label key={d.id} className={`flex min-h-14 cursor-pointer items-center gap-4 border p-4 transition ${delivery === d.id ? "border-graphite bg-ivory" : "border-graphite/25 hover:border-graphite"}`}>
                  <input type="radio" name="delivery" checked={delivery === d.id} onChange={() => setDelivery(d.id)} className="h-[1.125rem] w-[1.125rem] shrink-0 accent-[#482E35]" />
                  <span className="flex-1"><span className="block">{d.label}</span><span className="block text-[0.875rem] text-ink-soft">{d.note}</span></span>
                  <span className="tabular-nums">{d.price ? formatPrice(d.price) : "0 €"}</span>
                </label>
              ))}
            </div>
            {!pickup && (
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {input("country", "Страна", { autoComplete: "country-name" })}
                {input("city", "Город", { autoComplete: "address-level2" })}
                {input("address", "Улица, дом, квартира", { autoComplete: "street-address" }, "sm:col-span-2")}
                {input("zip", "Индекс", { autoComplete: "postal-code" })}
              </div>
            )}
          </fieldset>

          <fieldset>
            <legend className="font-serif text-3xl">3. Оплата</legend>
            <p className="mt-4 border hair bg-ivory p-4 text-[0.9375rem] text-ink-soft">Приём платежей не подключён, поэтому поля банковской карты здесь намеренно отсутствуют. В реальном магазине здесь будет защищённая форма платёжного провайдера.</p>
            <div className="mt-5">
              <label className="flex min-h-11 cursor-pointer items-start gap-3 text-[0.9375rem]">
                <input type="checkbox" name="consent" checked={v.consent === "1"} onChange={(e) => { setV((s) => ({ ...s, consent: e.target.checked ? "1" : "" })); setErrors((s) => ({ ...s, consent: undefined })); }} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? `${uid}-c-e` : undefined} className="mt-1 h-[1.125rem] w-[1.125rem] shrink-0 accent-[#482E35]" />
                Я понимаю, что это демонстрационный заказ: оплата не производится, а товары не будут отправлены.
              </label>
              {errors.consent && <p id={`${uid}-c-e`} className="mt-1.5 text-[0.875rem] text-[#8f2d2d]">{errors.consent}</p>}
            </div>
          </fieldset>

          <button type="submit" className="btn btn-solid w-full sm:w-auto sm:min-w-80">Оформить демо-заказ · {formatPrice(total)}</button>
          {Object.values(errors).some(Boolean) && <p role="alert" className="text-[0.9375rem] text-[#8f2d2d]">Проверьте выделенные поля — не все обязательные данные заполнены.</p>}
        </form>

        <aside aria-label="Ваш заказ" className="lg:sticky lg:top-28 lg:self-start">
          <div className="border hair bg-ivory p-6">
            <h2 className="font-serif text-3xl">Ваш заказ</h2>
            <ul className="mt-5 divide-y hair">
              {lines.map((l) => {
                const p = getProduct(l.slug);
                if (!p) return null;
                return (
                  <li key={`${l.productId}${l.metal}${l.size}`} className="flex gap-4 py-4">
                    <Link href={`/product/${p.slug}`} className="relative block h-24 w-24 shrink-0 overflow-hidden bg-ivory"><JewelImage src={productImageKey(p.slug, 1)} alt={p.name} sizes="96px" fit="contain" category={p.category} cut={p.stone.cut} /></Link>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex justify-between gap-2"><Link href={`/product/${p.slug}`} className="font-serif text-xl leading-tight">{p.name}</Link>
                        <button type="button" onClick={() => removeLine(l)} aria-label={`Удалить «${p.name}»`} className="-mr-2 -mt-2 flex h-10 w-10 shrink-0 items-center justify-center"><Trash2 size={17} strokeWidth={1.4} /></button></div>
                      <p className="text-[0.875rem] text-ink-soft">{METAL_LABEL[l.metal]}{l.size ? ` · размер ${l.size}` : ""}</p>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="inline-flex items-center border border-graphite/30" role="group" aria-label={`Количество: ${p.name}`}>
                          <button type="button" onClick={() => setQty(l, l.qty - 1)} disabled={l.qty <= 1} aria-label="Уменьшить количество" className="flex h-10 w-10 items-center justify-center disabled:opacity-30"><Minus size={15} /></button>
                          <span className="w-8 text-center tabular-nums" aria-live="polite">{l.qty}</span>
                          <button type="button" onClick={() => setQty(l, l.qty + 1)} disabled={l.qty >= 9} aria-label="Увеличить количество" className="flex h-10 w-10 items-center justify-center disabled:opacity-30"><Plus size={15} /></button>
                        </div>
                        <span className="tabular-nums">{formatPrice(p.price * l.qty)}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <dl className="mt-4 space-y-2 border-t hair pt-4 text-[0.9375rem]">
              <div className="flex justify-between"><dt className="text-ink-soft">Товары</dt><dd className="tabular-nums">{formatPrice(subtotal)}</dd></div>
              <div className="flex justify-between"><dt className="text-ink-soft">{opt.label}</dt><dd className="tabular-nums">{opt.price ? formatPrice(opt.price) : "Бесплатно"}</dd></div>
              <div className="flex justify-between border-t hair pt-3 font-serif text-2xl"><dt>Итого</dt><dd className="tabular-nums" aria-live="polite">{formatPrice(total)}</dd></div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
