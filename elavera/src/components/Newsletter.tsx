"use client";
import { useId, useState } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Newsletter() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setState(EMAIL.test(email.trim()) ? "done" : "error");
      }}
    >
      <label htmlFor={id} className="text-sm text-ivory/80">Новости и новые коллекции</label>
      {state === "done" ? (
        <p role="status" className="mt-3 border border-champagne/50 p-4 text-ivory">
          Спасибо! Это демо-версия: адрес не сохранён и не отправлен — рассылка появится после подключения почтового сервиса.
        </p>
      ) : (
        <>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input id={id} type="email" inputMode="email" autoComplete="email" value={email} onChange={(e) => { setEmail(e.target.value); setState("idle"); }} placeholder="Ваш e-mail" aria-invalid={state === "error"} aria-describedby={state === "error" ? `${id}-e` : undefined}
              className="field !border-ivory/40 !bg-transparent !text-ivory placeholder:text-ivory/55" />
            <button type="submit" className="btn !border-champagne !bg-champagne !text-graphite hover:!bg-ivory sm:shrink-0">Подписаться</button>
          </div>
          {state === "error" && <p id={`${id}-e`} role="alert" className="mt-2 text-sm text-[#f0b4a8]">Введите корректный адрес электронной почты, например name@example.com.</p>}
        </>
      )}
    </form>
  );
}
