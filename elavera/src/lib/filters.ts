import type { Category, Cut, Metal, Product } from "./types";
import { CATEGORIES } from "./products";

export const CARAT_BUCKETS = [
  { id: "lt05", label: "До 0,5 кт", test: (c: number) => c < 0.5 },
  { id: "05-1", label: "0,5 – 0,99 кт", test: (c: number) => c >= 0.5 && c < 1 },
  { id: "1-2", label: "1 – 1,99 кт", test: (c: number) => c >= 1 && c < 2 },
  { id: "gte2", label: "От 2 кт", test: (c: number) => c >= 2 },
] as const;

export const SORTS = [
  { id: "new", label: "Новинки" },
  { id: "price-asc", label: "Цена: по возрастанию" },
  { id: "price-desc", label: "Цена: по убыванию" },
  { id: "name", label: "Название: А–Я" },
] as const;
export type SortId = (typeof SORTS)[number]["id"];

export interface Filters {
  category: Category | null;
  min: number | null;
  max: number | null;
  metals: Metal[];
  cuts: Cut[];
  carats: string[];
  inStock: boolean;
  fav: boolean;
  sort: SortId;
}

const list = (v: string | null) => (v ? v.split(",").filter(Boolean) : []);
const num = (v: string | null) => {
  if (v == null || v.trim() === "") return null;
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 ? Math.round(n) : null;
};

export function parseFilters(sp: URLSearchParams): Filters {
  const cat = sp.get("category");
  const sort = sp.get("sort") as SortId | null;
  return {
    category: CATEGORIES.includes(cat as Category) ? (cat as Category) : null,
    min: num(sp.get("min")),
    max: num(sp.get("max")),
    metals: list(sp.get("metal")).filter((m): m is Metal => ["white", "yellow", "rose"].includes(m)),
    cuts: list(sp.get("cut")) as Cut[],
    carats: list(sp.get("carat")).filter((c) => CARAT_BUCKETS.some((b) => b.id === c)),
    inStock: sp.get("stock") === "1",
    fav: sp.get("fav") === "1",
    sort: SORTS.some((s) => s.id === sort) ? (sort as SortId) : "new",
  };
}

export function applyFilters(products: Product[], f: Filters, favorites: string[]): Product[] {
  const out = products.filter((p) => {
    if (f.category && p.category !== f.category) return false;
    if (f.min != null && p.price < f.min) return false;
    if (f.max != null && p.price > f.max) return false;
    if (f.metals.length && !p.metals.some((m) => m.available && f.metals.includes(m.metal))) return false;
    if (f.cuts.length && !f.cuts.includes(p.stone.cut)) return false;
    if (f.carats.length && !f.carats.some((id) => CARAT_BUCKETS.find((b) => b.id === id)!.test(p.stone.carat))) return false;
    if (f.inStock && p.stock !== "in_stock") return false;
    if (f.fav && !favorites.includes(p.id)) return false;
    return true;
  });
  const sorters: Record<SortId, (a: Product, b: Product) => number> = {
    new: (a, b) => b.addedAt.localeCompare(a.addedAt),
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    name: (a, b) => a.name.localeCompare(b.name, "ru"),
  };
  return out.sort(sorters[f.sort]);
}
