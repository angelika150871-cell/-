"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Metal } from "./types";
import { getProduct } from "./products";

export interface CartLine {
  productId: string;
  slug: string;
  metal: Metal;
  size: number | null;
  qty: number;
}
const lineKey = (l: Pick<CartLine, "productId" | "metal" | "size">) => `${l.productId}|${l.metal}|${l.size ?? "-"}`;

interface StoreValue {
  ready: boolean;
  lines: CartLine[];
  count: number;
  subtotal: number;
  addLine: (l: Omit<CartLine, "qty">, qty?: number) => void;
  setQty: (l: CartLine, qty: number) => void;
  removeLine: (l: CartLine) => void;
  clearCart: () => void;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  lastAdded: string | null;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}
const Ctx = createContext<StoreValue | null>(null);
const CART_KEY = "elavera.cart.v1";
const FAV_KEY = "elavera.fav.v1";
const MAX_QTY = 9;

function read<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [lines, setLines] = useState<CartLine[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  useEffect(() => {
    // Гидратируем из localStorage только на клиенте, отбрасывая устаревшие позиции.
    const saved = read<CartLine[]>(CART_KEY, []).filter((l) => getProduct(l.slug)?.id === l.productId);
    setLines(saved);
    setFavorites(read<string[]>(FAV_KEY, []));
    setReady(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === CART_KEY) setLines(read<CartLine[]>(CART_KEY, []));
      if (e.key === FAV_KEY) setFavorites(read<string[]>(FAV_KEY, []));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(CART_KEY, JSON.stringify(lines));
  }, [lines, ready]);
  useEffect(() => {
    if (ready) localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
  }, [favorites, ready]);

  const addLine = useCallback((l: Omit<CartLine, "qty">, qty = 1) => {
    setLines((prev) => {
      const k = lineKey(l);
      const found = prev.find((x) => lineKey(x) === k);
      if (found) return prev.map((x) => (lineKey(x) === k ? { ...x, qty: Math.min(MAX_QTY, x.qty + qty) } : x));
      return [...prev, { ...l, qty }];
    });
    setLastAdded(l.productId + Date.now());
    setCartOpen(true);
  }, []);
  const setQty = useCallback((l: CartLine, qty: number) => {
    setLines((prev) => prev.map((x) => (lineKey(x) === lineKey(l) ? { ...x, qty: Math.max(1, Math.min(MAX_QTY, qty)) } : x)));
  }, []);
  const removeLine = useCallback((l: CartLine) => setLines((prev) => prev.filter((x) => lineKey(x) !== lineKey(l))), []);
  const clearCart = useCallback(() => setLines([]), []);
  const toggleFavorite = useCallback(
    (id: string) => setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    []
  );

  const value = useMemo<StoreValue>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((s, l) => s + (getProduct(l.slug)?.price ?? 0) * l.qty, 0);
    return {
      ready, lines, count, subtotal, addLine, setQty, removeLine, clearCart, cartOpen, setCartOpen, lastAdded,
      favorites, toggleFavorite, isFavorite: (id) => favorites.includes(id),
    };
  }, [ready, lines, favorites, cartOpen, lastAdded, addLine, setQty, removeLine, clearCart, toggleFavorite]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useStore must be used inside StoreProvider");
  return v;
}
export { MAX_QTY, lineKey };
