export type Category = "rings" | "earrings" | "necklaces" | "bracelets" | "engagement";
export type Metal = "white" | "yellow" | "rose";
export type Cut = "round" | "oval" | "pear" | "emerald" | "marquise" | "cushion" | "princess";
export type Stock = "in_stock" | "made_to_order" | "sold_out";

export interface MetalOption {
  metal: Metal;
  available: boolean;
}
export interface SizeOption {
  size: number; // европейский размер = внутренняя длина окружности, мм
  available: boolean;
}
export interface Stone {
  cut: Cut;
  /** суммарный вес бриллиантов, кт (концептуальные данные) */
  carat: number;
  count: number;
  color: string;
  clarity: string;
}
export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: string;
  category: Category;
  /** цена в EUR (демо) */
  price: number;
  metals: MetalOption[];
  /** null — изделие без выбора размера */
  sizes: SizeOption[] | null;
  stone: Stone;
  material: string;
  stock: Stock;
  /** ISO-дата для сортировки «Новинки» */
  addedAt: string;
  /** число ракурсов в галерее (1 — основной; больше — доп. ракурсы) */
  angles: number;
  featured?: boolean;
  signature?: boolean;
  short: string;
  description: string;
  details: string[];
}
