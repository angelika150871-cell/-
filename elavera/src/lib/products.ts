import type { Category, Metal, Product, SizeOption } from "./types";

/**
 * Демонстрационный каталог. Все характеристики камней — концептуальные:
 * сертификаты (GIA и др.) не заявляются. Для подключения CMS / PIM достаточно
 * заменить источник в getProducts() — остальной код работает с типом Product.
 */

const metals = (list: Metal[], unavailable: Metal[] = []) =>
  list.map((metal) => ({ metal, available: !unavailable.includes(metal) }));

const sizes = (from: number, to: number, unavailable: number[] = []): SizeOption[] =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i).map((size) => ({
    size,
    available: !unavailable.includes(size),
  }));

const ALL: Metal[] = ["white", "yellow", "rose"];

const raw: Product[] = [
  // ───────── КОЛЬЦА
  {
    id: "EV-R-001",
    slug: "aube-pave-ring",
    name: "Кольцо Aube Pavé",
    collection: "Aube",
    category: "rings",
    price: 3850,
    metals: metals(ALL),
    sizes: sizes(48, 60, [48, 59, 60]),
    stone: { cut: "round", carat: 0.42, count: 38, color: "F–G", clarity: "VS" },
    material: "Золото 750 пробы",
    stock: "in_stock",
    addedAt: "2026-10-02",
    angles: 3,
    featured: true,
    short: "Дорожка из мелких бриллиантов вдоль тонкого ободка.",
    description:
      "Ободок толщиной в два миллиметра, по которому бриллианты уложены в ряд так плотно, что металл почти не виден. Кольцо носится отдельно или в сочетании с другими — оно спокойно, но всегда ловит свет.",
    details: ["Закрепка: паве, шатон", "Ширина ободка: 2,2 мм", "Посадка: комфортная, с плавным внутренним краем"],
  },
  {
    id: "EV-R-002",
    slug: "lumiere-oval-halo-ring",
    name: "Кольцо Lumière Oval",
    collection: "Lumière",
    category: "rings",
    price: 7400,
    metals: metals(["white", "yellow"]),
    sizes: sizes(48, 60, [50, 51, 58]),
    stone: { cut: "oval", carat: 1.05, count: 21, color: "G", clarity: "VS" },
    material: "Золото 750 пробы",
    stock: "made_to_order",
    addedAt: "2026-09-18",
    angles: 3,
    featured: true,
    signature: true,
    short: "Овальный бриллиант в мягком ореоле из мелких камней.",
    description:
      "Центральный камень овальной огранки вытягивает линию пальца, а тонкий ореол добавляет ему глубины. Корзина закрепки сделана ажурной, чтобы свет проходил сквозь камень со всех сторон.",
    details: ["Закрепка: четыре лапки, скрытый ореол", "Размер центрального камня: ок. 7,6 × 5,4 мм", "Изготавливается под заказ"],
  },
  {
    id: "EV-R-003",
    slug: "orbite-toi-et-moi-ring",
    name: "Кольцо Orbite Duo",
    collection: "Orbite",
    category: "rings",
    price: 5900,
    metals: metals(["yellow", "rose"], ["rose"]),
    sizes: sizes(49, 59, [49]),
    stone: { cut: "pear", carat: 0.78, count: 2, color: "F–G", clarity: "VS–SI" },
    material: "Золото 750 пробы",
    stock: "in_stock",
    addedAt: "2026-08-21",
    angles: 1,
    short: "Два бриллианта — груша и круглый — на одном ободке.",
    description:
      "Круглый бриллиант и бриллиант-груша смотрят друг на друга по обе стороны ободка. Композиция «ты и я» в современной, лёгкой трактовке.",
    details: ["Закрепка: открытые лапки", "Ширина ободка: 1,8 мм"],
  },
  // ───────── СЕРЬГИ
  {
    id: "EV-E-001",
    slug: "eclat-solitaire-studs",
    name: "Серьги-пусеты Éclat",
    collection: "Éclat",
    category: "earrings",
    price: 2650,
    metals: metals(["white"]),
    sizes: null,
    stone: { cut: "round", carat: 0.60, count: 2, color: "F", clarity: "VVS–VS" },
    material: "Золото 750 пробы",
    stock: "in_stock",
    addedAt: "2026-10-12",
    angles: 3,
    featured: true,
    short: "Классические пусеты с круглыми бриллиантами.",
    description:
      "Два круглых бриллианта в низкой закрепке из четырёх лапок. Ничего лишнего: только свет у лица. Замок — пусеты с бабочкой, надёжная посадка в течение дня.",
    details: ["Закрепка: четыре лапки", "Замок: пусеты с бабочкой", "Вес пары: ок. 1,3 г"],
  },
  {
    id: "EV-E-002",
    slug: "lumiere-pear-drop-earrings",
    name: "Серьги-капли Lumière",
    collection: "Lumière",
    category: "earrings",
    price: 6800,
    metals: metals(["white", "yellow", "rose"], ["rose"]),
    sizes: null,
    stone: { cut: "pear", carat: 1.20, count: 6, color: "G", clarity: "VS" },
    material: "Золото 750 пробы",
    stock: "in_stock",
    addedAt: "2026-09-30",
    angles: 3,
    featured: true,
    signature: true,
    short: "Подвески в форме капли на тонком звене.",
    description:
      "Бриллиант-груша подвешен на лёгком звене под небольшим круглым камнем. При движении головы серьги слегка качаются и отражают свет мягкими вспышками.",
    details: ["Длина: ок. 28 мм", "Замок: английский", "Закрепка: корзина из шести лапок"],
  },
  {
    id: "EV-E-003",
    slug: "aube-huggie-hoops",
    name: "Серьги-кольца Aube Hoop",
    collection: "Aube",
    category: "earrings",
    price: 3200,
    metals: metals(ALL),
    sizes: null,
    stone: { cut: "round", carat: 0.50, count: 32, color: "F–G", clarity: "VS" },
    material: "Золото 750 пробы",
    stock: "in_stock",
    addedAt: "2026-07-14",
    angles: 1,
    short: "Небольшие кольца с дорожкой из бриллиантов.",
    description:
      "Компактные серьги-кольца диаметром 14 мм. Бриллианты уложены по внешнему краю, поэтому украшение сияет в любом положении.",
    details: ["Диаметр: 14 мм", "Замок: потайной клик"],
  },
  // ───────── КОЛЬЕ И ПОДВЕСКИ
  {
    id: "EV-N-001",
    slug: "cascade-riviere-necklace",
    name: "Колье Cascade Rivière",
    collection: "Cascade",
    category: "necklaces",
    price: 18900,
    metals: metals(["white", "yellow"]),
    sizes: null,
    stone: { cut: "round", carat: 4.10, count: 52, color: "F–G", clarity: "VS" },
    material: "Золото 750 пробы",
    stock: "made_to_order",
    addedAt: "2026-10-20",
    angles: 3,
    featured: true,
    signature: true,
    short: "Рив’ера из круглых бриллиантов, плавно сужающаяся к замку.",
    description:
      "Камни постепенно уменьшаются от центра к замку, поэтому колье ложится вдоль ключицы как единая линия света. Звенья гибкие, колье не жёсткое и свободно движется.",
    details: ["Длина: 42 см", "Закрепка: четыре лапки, индивидуальные корзины", "Изготавливается под заказ"],
  },
  {
    id: "EV-N-002",
    slug: "eclat-solitaire-pendant",
    name: "Подвеска Éclat Solitaire",
    collection: "Éclat",
    category: "necklaces",
    price: 2900,
    metals: metals(ALL),
    sizes: null,
    stone: { cut: "round", carat: 0.45, count: 1, color: "F", clarity: "VVS–VS" },
    material: "Золото 750 пробы",
    stock: "in_stock",
    addedAt: "2026-10-05",
    angles: 3,
    featured: true,
    short: "Один бриллиант на тонкой цепочке — на каждый день.",
    description:
      "Бриллиант в закрепке из четырёх лапок словно парит на цепочке. Подвеска-солитёр, которую хочется не снимать.",
    details: ["Цепочка: 42 см с кольцом на 40 см", "Тип плетения: якорное, тонкое"],
  },
  {
    id: "EV-N-003",
    slug: "aube-oval-pendant",
    name: "Подвеска Aube Oval",
    collection: "Aube",
    category: "necklaces",
    price: 4350,
    metals: metals(["yellow", "rose"]),
    sizes: null,
    stone: { cut: "oval", carat: 0.70, count: 1, color: "G", clarity: "VS" },
    material: "Золото 750 пробы",
    stock: "sold_out",
    addedAt: "2026-06-28",
    angles: 1,
    short: "Овальный бриллиант в тонком ободе.",
    description:
      "Бриллиант овальной огранки, обрамлённый узким ободом: подвеска выглядит как маленькое зеркальце света. Сейчас изделия нет в наличии — можно оставить запрос на изготовление.",
    details: ["Цепочка: 45 см", "Закрепка: безель"],
  },
  // ───────── БРАСЛЕТЫ
  {
    id: "EV-B-001",
    slug: "lumiere-riviere-bracelet",
    name: "Браслет Lumière Rivière",
    collection: "Lumière",
    category: "bracelets",
    price: 12400,
    metals: metals(["white", "yellow"]),
    sizes: null,
    stone: { cut: "round", carat: 3.20, count: 44, color: "F–G", clarity: "VS" },
    material: "Золото 750 пробы",
    stock: "in_stock",
    addedAt: "2026-10-26",
    angles: 3,
    featured: true,
    signature: true,
    short: "Гибкий браслет-рив’ера из круглых бриллиантов.",
    description:
      "Сорок четыре бриллианта в одинаковых корзинах образуют непрерывную линию. Браслет гибкий и мягко ложится на запястье, поэтому подходит и для вечера, и для дня.",
    details: ["Длина: 17,5 см", "Замок: коробочка с предохранителем"],
  },
  {
    id: "EV-B-002",
    slug: "orbite-bangle",
    name: "Браслет-жёсткий Orbite",
    collection: "Orbite",
    category: "bracelets",
    price: 5400,
    metals: metals(["yellow", "rose", "white"], ["white"]),
    sizes: null,
    stone: { cut: "round", carat: 0.56, count: 7, color: "G", clarity: "VS" },
    material: "Золото 750 пробы",
    stock: "made_to_order",
    addedAt: "2026-08-09",
    angles: 1,
    short: "Тонкий жёсткий браслет с семью бриллиантами.",
    description:
      "Гладкий овальный обруч, на котором бриллианты рассыпаны на равных интервалах. Носится в одиночку или стопкой.",
    details: ["Внутренний диаметр: 58 мм", "Застёжка: скрытая шарнирная"],
  },
  {
    id: "EV-B-003",
    slug: "aube-chain-bracelet",
    name: "Браслет-цепь Aube",
    collection: "Aube",
    category: "bracelets",
    price: 2100,
    metals: metals(ALL),
    sizes: null,
    stone: { cut: "round", carat: 0.18, count: 3, color: "G–H", clarity: "VS–SI" },
    material: "Золото 750 пробы",
    stock: "in_stock",
    addedAt: "2026-07-30",
    angles: 1,
    short: "Лёгкая цепь с тремя бриллиантами.",
    description:
      "Тонкая цепь с тремя бриллиантами, подвижно закреплёнными на звене. Наиболее лёгкий способ добавить свет в повседневный образ.",
    details: ["Длина: 17–19 см, регулируемая", "Замок: карабин"],
  },
  // ───────── ПОМОЛВОЧНЫЕ КОЛЬЦА
  {
    id: "EV-P-001",
    slug: "promesse-round-solitaire",
    name: "Помолвочное кольцо Promesse Round",
    collection: "Promesse",
    category: "engagement",
    price: 9800,
    // жёлтое золото первым: на основном фото изделие показано в жёлтом золоте (металл по умолчанию)
    metals: metals(["yellow", "white", "rose"]),
    sizes: sizes(47, 60, [47, 48, 55]),
    stone: { cut: "round", carat: 1.00, count: 1, color: "F", clarity: "VVS–VS" },
    material: "Платина или золото 750 пробы",
    stock: "made_to_order",
    addedAt: "2026-10-15",
    angles: 3,
    featured: true,
    signature: true,
    short: "Классический солитёр: круглый бриллиант в шести лапках.",
    description:
      "Круглый бриллиант в высокой закрепке на тонком ободке. Конструкция раскрывает камень со всех сторон — решение, которое не стареет.",
    details: ["Закрепка: шесть лапок", "Ободок: 1,8 мм, плоский сверху", "Изготавливается под заказ с примеркой размера"],
  },
  {
    id: "EV-P-002",
    slug: "promesse-oval-hidden-halo",
    name: "Помолвочное кольцо Promesse Oval",
    collection: "Promesse",
    category: "engagement",
    price: 11600,
    metals: metals(["white", "yellow"]),
    sizes: sizes(47, 60, [52, 53]),
    stone: { cut: "oval", carat: 1.30, count: 25, color: "G", clarity: "VS" },
    material: "Золото 750 пробы",
    stock: "made_to_order",
    addedAt: "2026-09-04",
    angles: 1,
    short: "Овальный бриллиант и скрытое кольцо мелких камней под ним.",
    description:
      "Под центральным камнем — тонкая линия из мелких бриллиантов, которая видна только сбоку. Кольцо выглядит спокойно, а при движении руки раскрывается.",
    details: ["Закрепка: четыре двойных лапки", "Скрытый ореол"],
  },
  {
    id: "EV-P-003",
    slug: "promesse-emerald-trilogy",
    name: "Помолвочное кольцо Promesse Trilogy",
    collection: "Promesse",
    category: "engagement",
    price: 14200,
    metals: metals(["white", "yellow"]),
    sizes: sizes(47, 60),
    stone: { cut: "emerald", carat: 1.60, count: 3, color: "F–G", clarity: "VS" },
    material: "Платина или золото 750 пробы",
    stock: "in_stock",
    addedAt: "2026-08-17",
    angles: 3,
    featured: true,
    short: "Изумрудная огранка и два боковых бриллианта-багета.",
    description:
      "Длинные прямые грани изумрудной огранки работают как зеркала: свет здесь не искрится, а течёт. С боков — два небольших багета.",
    details: ["Закрепка: угловые лапки", "Боковые камни: багет, ок. 0,40 кт каждый"],
  },
  {
    id: "EV-P-004",
    slug: "promesse-pear-solitaire",
    name: "Помолвочное кольцо Promesse Pear",
    collection: "Promesse",
    category: "engagement",
    price: 10400,
    metals: metals(["rose", "yellow", "white"], ["white"]),
    sizes: sizes(47, 60, [60]),
    stone: { cut: "pear", carat: 1.10, count: 1, color: "G", clarity: "VS" },
    material: "Золото 750 пробы",
    stock: "in_stock",
    addedAt: "2026-10-08",
    angles: 1,
    short: "Бриллиант-груша на тонком ободке.",
    description:
      "Форма груши удлиняет палец и придаёт кольцу живой, немного романтичный характер. Остриё камня защищено V-образной лапкой.",
    details: ["Закрепка: V-образная лапка и три лапки", "Ширина ободка: 1,7 мм"],
  },
];

export function getProducts(): Product[] {
  return raw;
}
export function getProduct(slug: string): Product | undefined {
  return raw.find((p) => p.slug === slug);
}
export function getFeatured(): Product[] {
  return raw.filter((p) => p.featured).slice(0, 6);
}
export function getSignature(): Product[] {
  return raw.filter((p) => p.signature);
}
export function getRelated(p: Product, limit = 4): Product[] {
  const score = (o: Product) =>
    (o.category === p.category ? 3 : 0) + (o.collection === p.collection ? 2 : 0) + (o.stone.cut === p.stone.cut ? 1 : 0);
  return raw
    .filter((o) => o.id !== p.id)
    .sort((a, b) => score(b) - score(a) || a.price - b.price)
    .slice(0, limit);
}
export const CATEGORIES: Category[] = ["rings", "earrings", "necklaces", "bracelets", "engagement"];
export const RING_CATEGORIES: Category[] = ["rings", "engagement"];

/** Можно ли добавить в корзину без выбора параметров */
export function isQuickAddable(p: Product): boolean {
  if (p.stock === "sold_out") return false;
  const avail = p.metals.filter((m) => m.available);
  return avail.length === 1 && !p.sizes;
}
export function defaultMetal(p: Product): Metal {
  return (p.metals.find((m) => m.available) ?? p.metals[0]).metal;
}
