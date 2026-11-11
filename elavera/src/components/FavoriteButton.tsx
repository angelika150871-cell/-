"use client";
import { Heart } from "lucide-react";
import { useStore } from "@/lib/store";

export default function FavoriteButton({ id, name, className = "" }: { id: string; name: string; className?: string }) {
  const { isFavorite, toggleFavorite, ready } = useStore();
  const on = ready && isFavorite(id);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(id);
      }}
      aria-pressed={on}
      aria-label={on ? `Убрать «${name}» из избранного` : `Добавить «${name}» в избранное`}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-milk/85 text-graphite backdrop-blur transition hover:bg-milk ${className}`}
    >
      <Heart size={19} strokeWidth={1.5} className={on ? "fill-wine stroke-wine pop" : ""} key={String(on)} />
    </button>
  );
}
