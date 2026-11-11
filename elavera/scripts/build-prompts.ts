/**
 * Собирает image-prompts.json из спецификации ниже: `npm run prompts`.
 * Редактируйте описания здесь, затем пересоберите JSON.
 */
import { writeFileSync } from "node:fs";
import { getProducts } from "../src/lib/products";

const STYLE =
  "Luxury jewelry campaign photography, premium European jewelry house, authentic polished gold, physically plausible brilliant-cut diamonds, realistic reflections and refraction, professional macro photography, elegant editorial direction, sophisticated lighting, subtle shadows, photographic realism, restrained luxury aesthetic. Palette: warm ivory, champagne, soft beige, deep wine accents.";
const NEGATIVE =
  "No text, no letters, no watermark, no logos, no brand marks. No deformed rings, clasps or settings, no distorted fingers or hands, no plastic skin, no artificial over-glow, no cartoon or CGI look.";

const metalWord = { white: "white gold", yellow: "yellow gold", rose: "rose gold" } as const;
const cutWord = { round: "round brilliant-cut", oval: "oval-cut", pear: "pear-shaped", emerald: "emerald-cut", marquise: "marquise-cut", cushion: "cushion-cut", princess: "princess-cut" } as const;

const looks: Record<string, string> = {
  "aube-pave-ring": "a slender band ring fully pavé-set with a continuous row of tiny round brilliant diamonds, 2.2 mm wide",
  "lumiere-oval-halo-ring": "a ring with a central oval-cut diamond in four claws, surrounded by a delicate halo of tiny round diamonds, thin plain band",
  "orbite-toi-et-moi-ring": "a toi-et-moi ring: one pear-shaped and one round brilliant diamond facing each other on a thin plain band",
  "eclat-solitaire-studs": "a pair of classic stud earrings, each a round brilliant diamond in a four-claw setting",
  "lumiere-pear-drop-earrings": "a pair of drop earrings: a small round diamond on top, a pear-shaped diamond hanging below on a fine link",
  "aube-huggie-hoops": "a pair of small 14 mm huggie hoop earrings with a row of tiny round diamonds along the outer edge",
  "cascade-riviere-necklace": "a rivière necklace of graduated round brilliant diamonds in individual four-claw settings, tapering toward the clasp, shown laid in a gentle arc",
  "eclat-solitaire-pendant": "a delicate pendant necklace with one round brilliant diamond in a four-claw setting on a very fine chain",
  "aube-oval-pendant": "a pendant with an oval-cut diamond in a thin bezel setting on a fine chain",
  "lumiere-riviere-bracelet": "a flexible rivière tennis bracelet of identical round brilliant diamonds in four-claw settings, laid in a soft curve with a box clasp",
  "orbite-bangle": "a slim rigid oval bangle bracelet with seven evenly spaced round diamonds set flush into the band",
  "aube-chain-bracelet": "a fine chain bracelet with three small round diamonds set along the chain, with a lobster clasp",
  "promesse-round-solitaire": "a classic engagement ring: round brilliant diamond of about one carat in a six-claw setting on a thin band",
  "promesse-oval-hidden-halo": "an engagement ring with an oval-cut diamond in four double claws and a hidden halo of tiny diamonds beneath the stone",
  "promesse-emerald-trilogy": "a three-stone engagement ring: an emerald-cut center diamond flanked by two tapered baguette diamonds, platinum-look band",
  "promesse-pear-solitaire": "an engagement ring with a pear-shaped diamond in a V-tip claw setting on a thin band",
};

const items: unknown[] = [];
const add = (o: Record<string, unknown>) => items.push({ ...o, negative: NEGATIVE });

add({ id: "hero-desktop", key: "hero/hero-desktop", purpose: "Главная: широкий Hero (десктоп)", kind: "art", size: "1536x1024", required: true, prompt: `${STYLE} Wide hero image: a diamond pendant necklace in yellow gold with a pear-shaped diamond resting on warm ivory silk, jewelry placed in the right half of the frame, left third left as calm soft negative space for typography, natural warm window light, shallow depth of field.` });
add({ id: "hero-mobile", key: "hero/hero-mobile", purpose: "Главная: вертикальный Hero (телефон)", kind: "art", size: "1024x1536", required: true, prompt: `${STYLE} Vertical hero image: the same diamond pendant necklace with a pear-shaped diamond on warm ivory silk, jewelry in the upper two thirds, soft empty space at the bottom, natural warm window light.` });
add({ id: "editorial-1", key: "editorial/editorial-1", purpose: "Главная: Editorial Story («Совершенство в каждой грани»)", kind: "art", size: "1024x1536", required: true, prompt: `${STYLE} Editorial portrait of an elegant woman in profile wearing a delicate diamond necklace, bare shoulders, natural skin texture with pores, anatomically correct, soft window light, muted wine-colored backdrop, calm expression.` });
add({ id: "editorial-2", key: "editorial/editorial-2", purpose: "Дом ÉLAVÉRA: первый экран", kind: "art", size: "1536x1024", required: true, prompt: `${STYLE} Close editorial shot of two hands with natural skin, anatomically correct fingers, one wearing a round diamond solitaire engagement ring, warm directional light, wine-colored fabric background, ample dark negative space at the bottom.` });
add({ id: "editorial-3", key: "editorial/editorial-3", purpose: "Дом ÉLAVÉRA: история (портрет с серьгами)", kind: "art", size: "1024x1536", required: true, prompt: `${STYLE} Editorial close portrait of a woman wearing pear-shaped diamond drop earrings, hair pulled back, natural skin, soft side light, warm neutral background.` });
add({ id: "editorial-4", key: "editorial/editorial-4", purpose: "Главная: финальный визуал", kind: "art", size: "1536x1024", required: true, prompt: `${STYLE} Dark moody still life: a diamond rivière necklace laid on deep wine velvet, jewelry in the right half, left half in soft shadow for typography, dramatic but restrained light.` });
for (const [n, d] of [[1, "extreme macro of a pavé-set diamond band, tiny round diamonds in beads of polished gold"], [2, "macro of a four-claw diamond setting seen from the side, claw tips and the stone's pavilion facets visible"], [3, "macro of an emerald-cut diamond's step facets reflecting soft warm light"]] as const)
  add({ id: `macro-${n}`, key: `macro/macro-${n}`, purpose: "Дом ÉLAVÉRA: макрофотография (опционально)", kind: "art", size: "1536x1024", required: false, prompt: `${STYLE} ${d}. Neutral warm background, very shallow depth of field.` });

const products = getProducts();
for (const p of products) {
  const metal = metalWord[p.metals.find((m) => m.available)!.metal];
  add({ id: `product-${p.slug}`, key: `products/${p.slug}-1`, purpose: `Каталог/карточка/корзина: ${p.name}`, kind: "catalog", size: "1024x1024", required: true, product: p.slug,
    prompt: `${STYLE} Product photograph on a seamless warm ivory background: ${looks[p.slug]}, in ${metal}, ${cutWord[p.stone.cut]} diamonds. Single piece, centered, three-quarter angle, soft diffused studio light, subtle contact shadow, no props.` });
}
for (const p of products.filter((x) => x.angles > 1)) {
  add({ id: `angle-${p.slug}-2`, key: `products/${p.slug}-2`, purpose: `Доп. ракурс 2: ${p.name}`, kind: "edit", editFrom: `products/${p.slug}-1`, size: "1024x1024", required: false, product: p.slug, prompt: `Same exact jewelry piece, unchanged design and proportions, photographed from a side profile angle on the same warm ivory background and lighting.` });
  add({ id: `angle-${p.slug}-3`, key: `products/${p.slug}-3`, purpose: `Доп. ракурс 3 (деталь закрепки): ${p.name}`, kind: "edit", editFrom: `products/${p.slug}-1`, size: "1024x1024", required: false, product: p.slug, prompt: `Same exact jewelry piece, unchanged design, close macro detail of the diamond setting on the same warm ivory background.` });
}
writeFileSync("image-prompts.json", JSON.stringify({ style: STYLE, items }, null, 2));
console.log(`image-prompts.json: ${items.length} items`);
