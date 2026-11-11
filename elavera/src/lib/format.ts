import type { Category, Cut, Metal, Stock } from "./types";

const eur = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});
export const formatPrice = (n: number) => eur.format(n).replace(/ /g, " ");

export const CATEGORY_LABEL: Record<Category, string> = {
  rings: "Кольца",
  earrings: "Серьги",
  necklaces: "Колье и подвески",
  bracelets: "Браслеты",
  engagement: "Помолвочные кольца",
};
export const CATEGORY_SHORT: Record<Category, string> = {
  rings: "Кольцо",
  earrings: "Серьги",
  necklaces: "Колье",
  bracelets: "Браслет",
  engagement: "Помолвочное кольцо",
};
export const METAL_LABEL: Record<Metal, string> = {
  white: "Белое золото",
  yellow: "Жёлтое золото",
  rose: "Розовое золото",
};
export const METAL_SWATCH: Record<Metal, string> = {
  white: "#E4E2DE",
  yellow: "#D4B87A",
  rose: "#D9A99A",
};
export const CUT_LABEL: Record<Cut, string> = {
  round: "Круглая",
  oval: "Овальная",
  pear: "Груша",
  emerald: "Изумрудная",
  marquise: "Маркиз",
  cushion: "Кушон",
  princess: "Принцесса",
};
export const STOCK_LABEL: Record<Stock, string> = {
  in_stock: "В наличии",
  made_to_order: "Под заказ · 4–6 недель",
  sold_out: "Нет в наличии",
};
export const formatCarat = (n: number) => `${n.toFixed(2).replace(".", ",")} кт`;
