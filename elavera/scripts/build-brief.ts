/**
 * Собирает IMAGE_GENERATION_BRIEF.md и IMAGE_MANIFEST.json (ТЗ для генерации в ChatGPT).
 * Запуск: npx tsx scripts/build-brief.ts — API не вызывается, расходов нет.
 * Данные изделий берутся из src/lib/products.ts, чтобы не расходились с каталогом.
 */
import { writeFileSync } from "node:fs";
import { defaultMetal, getFeatured, getProducts } from "../src/lib/products";
import { CATEGORY_LABEL, CUT_LABEL, METAL_LABEL, formatCarat, formatPrice } from "../src/lib/format";

// ───────────────────────── Единые блоки стиля ─────────────────────────
const STYLE = `ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.`;

const NEG = `STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.`;

const MODEL = `the ÉLAVÉRA brand model: an elegant woman in her early thirties, warm light-olive skin with real natural texture (fine pores, subtle tonal variation, tiny natural imperfections, soft natural sheen), dark chestnut hair, minimal neutral makeup with a soft matte complexion, calm confident expression`;

// ───────────────────────── Спецификации изделий ─────────────────────────
interface Spec { subject: string; stones: string; setting: string; pose: string; qc: string[] }
const specs: Record<string, Spec> = {
  "aube-pave-ring": {
    subject: "a slender women's band ring, 2.2 mm wide, polished white gold",
    stones: "a continuous single row of 38 tiny round brilliant-cut diamonds (about 0.42 ct total) running around the entire outer circumference of the band",
    setting: "classic pavé: each diamond sits in a small bead-set shaton flush with the band, with tiny gold beads between neighbouring stones; smooth polished comfort-fit inner surface",
    pose: "the ring stands upright on its band, seen from a front three-quarter angle slightly above, so the full diamond row and the inside curve are visible",
    qc: ["Один непрерывный ряд камней по всему ободку, без пропусков", "Ободок тонкий и ровный, без утолщений", "Камни одинакового размера, правильная круглая огранка"],
  },
  "lumiere-oval-halo-ring": {
    subject: "a women's ring with a central oval diamond and a delicate halo, thin plain polished white gold band",
    stones: "one central oval-cut diamond (about 7.6 × 5.4 mm) surrounded by a thin halo of tiny round brilliant diamonds (21 stones in total including the centre stone, about 1.05 ct total)",
    setting: "four-claw open (ajouré) basket under the centre stone so light passes through it; halo stones in beaded settings; the long axis of the oval is perpendicular to the band",
    pose: "the ring stands upright on its band, front three-quarter view slightly from above, the oval clearly visible with its facets and the halo",
    qc: ["Овальный центральный камень с четырьмя лапками", "Ореол из мелких камней сплошной, без разрывов", "Ободок тонкий, гладкий, без паве"],
  },
  "orbite-toi-et-moi-ring": {
    subject: "a toi-et-moi ring with two diamonds on a thin plain polished yellow gold band, 1.8 mm wide",
    stones: "two diamonds: one pear-shaped and one round brilliant, about 0.78 ct total, set side by side on top of the band so that they face each other, the pear's pointed tip angled toward the round stone",
    setting: "open claws (three small claws per stone), low and light, no halo, no side stones",
    pose: "the ring stands upright on its band, front three-quarter view slightly from above so both stones and their arrangement are clearly readable",
    qc: ["Ровно два камня: груша и круглый", "Золото жёлтое, приглушённое, не оранжевое", "Ободок тонкий и гладкий"],
  },
  "eclat-solitaire-studs": {
    subject: "a pair of classic stud earrings, polished white gold",
    stones: "two round brilliant-cut diamonds, about 0.30 ct each (0.60 ct total), identical in size and cut",
    setting: "low four-claw settings; the posts and butterfly backs are not visible; the two earrings are exact mirror-image twins",
    pose: "the pair placed side by side on the surface, about one earring-width apart, both facing the camera straight on, very slightly tilted back so the diamond tables catch the light",
    qc: ["Ровно две серьги, зеркально одинаковые", "У каждой один круглый камень в четырёх лапках", "Нет видимых замков или посторонних деталей"],
  },
  "lumiere-pear-drop-earrings": {
    subject: "a pair of elegant drop earrings, polished white gold, about 28 mm long",
    stones: "per earring: one small round brilliant on top, one tiny round brilliant on the link, and one pear-shaped diamond hanging below (6 stones per pair, about 1.20 ct total)",
    setting: "the pear diamond sits in a six-claw basket with a refined pointed tip claw; a fine polished link connects the pieces; the earrings are exact mirror-image twins",
    pose: "the pair suspended as if hanging, vertical, side by side, one hanging very slightly higher than the other for a natural look; seamless warm backdrop behind (no hooks, wires or hands visible)",
    qc: ["Две серьги-капли одинаковой формы", "Груша внизу, малый круглый камень сверху", "Нет видимых нитей, крючков или рук"],
  },
  "aube-huggie-hoops": {
    subject: "a pair of small huggie hoop earrings, 14 mm diameter, polished white gold",
    stones: "a row of tiny round brilliant diamonds (32 in total, 16 per earring, about 0.50 ct total) set along the outer edge of each hoop",
    setting: "pavé beads along the outer edge, hidden click closure; slim, rounded gold profile",
    pose: "the pair standing upright side by side, one seen from the front, the other turned about 45 degrees so the stone row and the thickness of the hoop are both visible",
    qc: ["Два небольших кольца одинакового размера", "Ряд камней равномерный по внешнему краю", "Замок аккуратный, без видимых дефектов"],
  },
  "cascade-riviere-necklace": {
    subject: "a rivière necklace, 42 cm, polished white gold",
    stones: "52 round brilliant-cut diamonds (about 4.10 ct total), graduated: largest in the centre, gradually smaller toward the clasp",
    setting: "each diamond in its own individual four-claw basket, linked by a hidden flexible gold structure so the line of stones looks continuous; fine clasp at the back",
    pose: "the necklace laid flat on the surface as a soft, natural horseshoe / U-shaped arc, the centre largest stones at the lowest point of the curve, viewed from directly above and slightly in front",
    qc: ["Камни плавно уменьшаются к застёжке", "Непрерывная линия без разрывов и перекрутов", "Каждый камень в отдельной корзине из четырёх лапок"],
  },
  "eclat-solitaire-pendant": {
    subject: "a delicate solitaire pendant necklace, polished white gold, very fine chain 42 cm",
    stones: "one round brilliant-cut diamond, about 0.45 ct (about 4.9 mm)",
    setting: "four-claw setting with a tiny bail; very thin anchor-link chain",
    pose: "the pendant lies on the surface with the chain forming a gentle V-shaped curve upward and out of the top of the frame edges evenly; the diamond is the focal point, seen from above and slightly in front",
    qc: ["Один круглый камень в четырёх лапках", "Цепочка тонкая, звенья читаемы", "Цепочка не обрезается неестественно"],
  },
  "aube-oval-pendant": {
    subject: "a pendant necklace with an oval diamond, polished yellow gold, fine chain 45 cm",
    stones: "one oval-cut diamond, about 0.70 ct (about 7 × 5 mm)",
    setting: "thin bezel (rim) setting around the stone, polished gold collar, small bail, fine chain",
    pose: "the pendant lies on the surface with the chain in a gentle V-shaped curve, oval oriented with its long axis vertical, seen from above and slightly in front",
    qc: ["Один овальный камень в тонком безеле", "Золото жёлтое, приглушённое", "Цепочка тонкая и непрерывная"],
  },
  "lumiere-riviere-bracelet": {
    subject: "a flexible rivière tennis bracelet, 17.5 cm, polished white gold",
    stones: "44 identical round brilliant-cut diamonds (about 3.20 ct total) in one continuous line",
    setting: "each stone in an individual four-claw basket, flexible links, box clasp with a safety catch visible as a slim rectangular closure",
    pose: "the bracelet laid on the surface in a soft open C-shaped / oval curve, as if just removed from the wrist, the clasp placed naturally at the back right; viewed from above and slightly in front",
    qc: ["Камни одинакового размера, непрерывная линия", "Замок-коробочка читаем, но не доминирует", "Браслет изогнут естественно, без изломов"],
  },
  "orbite-bangle": {
    subject: "a slim rigid oval bangle bracelet, polished yellow gold, about 4 mm wide, inner diameter 58 mm",
    stones: "seven round diamonds (about 0.08 ct each, 0.56 ct total) evenly spaced around the bangle, set flush into the band",
    setting: "flush bezel-style settings so the diamonds are level with the gold surface; hidden hinge and concealed clasp; smooth polished profile",
    pose: "the bangle stands on its edge, tilted slightly toward the camera, so the oval opening and the evenly spaced stones are visible",
    qc: ["Ровно семь камней, равномерно по кругу", "Браслет жёсткий, овальный, без видимого замка", "Золото жёлтое, приглушённое"],
  },
  "aube-chain-bracelet": {
    subject: "a light chain bracelet, polished white gold, 17–19 cm with a lobster clasp",
    stones: "three small round brilliant diamonds (about 0.06 ct each, 0.18 ct total) in tiny bezels that slide freely along the chain, evenly spaced",
    setting: "tiny bezel stations on a very fine polished chain; small lobster clasp and extension ring",
    pose: "the bracelet laid on the surface in a loose, natural S-curve with the three stones clearly visible and the clasp resting near one end of the frame",
    qc: ["Ровно три небольших камня на тонкой цепи", "Цепь тонкая, звенья читаемы", "Замок-карабин небольшой и аккуратный"],
  },
  "promesse-round-solitaire": {
    subject: "a classic solitaire engagement ring, thin polished white gold (platinum-look) band 1.8 mm wide, flat on top",
    stones: "one round brilliant-cut diamond of about 1.00 ct (about 6.4 mm), exceptional cut with crisp facet symmetry",
    setting: "six-claw high setting with slim claws and an open gallery; refined and light; plain band without side stones",
    pose: "the ring stands upright on its band, front three-quarter view slightly from above so the table facets, six claws and the thin band are clearly visible",
    qc: ["Ровно шесть лапок вокруг одного круглого камня", "Ободок тонкий и гладкий", "Огранка круглая бриллиантовая, симметричные грани"],
  },
  "promesse-oval-hidden-halo": {
    subject: "an engagement ring with an oval diamond and a hidden halo, thin polished white gold band",
    stones: "one oval-cut centre diamond (about 1.0 ct) with a hidden halo: a thin ring of tiny round diamonds under the centre stone, visible mainly from the side (25 stones in total, about 1.30 ct total)",
    setting: "four double claws (eight claw tips) holding the oval; the hidden halo sits below the girdle inside the basket; thin plain band",
    pose: "the ring stands upright on its band, a three-quarter side view so both the oval table and the hidden halo under the stone can be seen",
    qc: ["Скрытый ореол виден сбоку под камнем", "Четыре двойные лапки", "Ободок тонкий и гладкий"],
  },
  "promesse-emerald-trilogy": {
    subject: "a three-stone engagement ring, polished white gold (platinum-look) band",
    stones: "one emerald-cut centre diamond (about 0.8 ct, long step-cut facets) flanked by two tapered baguette diamonds (about 0.4 ct each); about 1.60 ct total",
    setting: "corner claws on the emerald-cut stone, channel or claw settings on the baguettes; clean architectural lines; band thin and plain",
    pose: "the ring stands upright on its band, front three-quarter view slightly from above so the step facets of the emerald cut and both side baguettes are clearly visible",
    qc: ["Изумрудная огранка со ступенчатыми гранями", "Два боковых багета симметричны", "Ровно три камня"],
  },
  "promesse-pear-solitaire": {
    subject: "an engagement ring, thin polished rose gold band 1.7 mm wide",
    stones: "one pear-shaped diamond of about 1.10 ct with a clean pointed tip and rounded end",
    setting: "a V-shaped claw protecting the pointed tip plus three more slim claws; open gallery; plain band without side stones",
    pose: "the ring stands upright on its band, front three-quarter view slightly from above, the pear oriented with its tip pointing away from the finger",
    qc: ["Груша с острым наконечником в V-образной лапке", "Розовое золото мягкое, не красное", "Ободок тонкий и гладкий"],
  },
};

// Английские названия для промптов (промпты — только на английском)
const CAT_EN = { rings: "ring", earrings: "earrings", necklaces: "necklace / pendant", bracelets: "bracelet", engagement: "engagement ring" } as const;
const CUT_EN = { round: "round brilliant", oval: "oval", pear: "pear", emerald: "emerald", marquise: "marquise", cushion: "cushion", princess: "princess" } as const;
const METAL_EN = { white: "white gold", yellow: "yellow gold", rose: "rose gold" } as const;

// ───────────────────────── Данные ─────────────────────────
const tileSlugs = ["aube-pave-ring", "eclat-solitaire-studs", "cascade-riviere-necklace", "lumiere-riviere-bracelet", "promesse-round-solitaire"];
const featured = new Set(getFeatured().map((p) => p.slug));
const products = getProducts();

const PRODUCT_FRAMING = `FRAMING (important): perfectly centered composition; the jewelry occupies about 50–55% of the frame height and no more than about 60% of the frame width, leaving generous, even margins on all sides, because the website crops this square image to 4:5 and 16:9 and the piece must never be cut off. Seamless warm ivory (#F5F1EA) surface and backdrop with a barely perceptible soft gradient to #E9E0D5 toward the edges, no horizon line, no props, no reflections of other objects. Very soft, subtle contact shadow under the piece.`;

interface Entry {
  n: number; id: string; kind: "hero" | "editorial" | "product";
  file: string; key: string; path: string;
  title: string; productId?: string; slug?: string;
  generateRatio: string; generateSize: string; siteRatios: string; safeZone: string; textSpace: string;
  usedOn: { page: string; route: string; block: string }[];
  refs: string[]; prompt: string; description: string; composition: string; qc: string[];
}
const entries: Entry[] = [];

// ── 01 Hero desktop
entries.push({
  n: 1, id: "hero-desktop", kind: "hero", file: "hero-desktop.png", key: "hero/hero-desktop", path: "public/images/hero/hero-desktop.webp",
  title: "Hero (десктоп): модель в колье Cascade Rivière",
  generateRatio: "3:2 (горизонтальный)", generateSize: "1536×1024 или выше",
  siteRatios: "Контейнер справа 64% ширины экрана и высотой на весь первый экран: ≈1,15:1 на 1440×900, ≈1,26:1 на 1920×1080, 16:10 на планшете (640–1023 px). Кадрируется по центру (object-cover), поэтому с боков обрезается до ~12%.",
  safeZone: "Всё украшение и подбородок — в области x 42–88%, y 28–80% кадра. Левые ~15% кадра плавно растворяются в слоновую кость градиентом сайта.",
  textSpace: "Левые ~40% кадра: пустой, мягко размытый тёплый фон слоновой кости/беж без деталей и без теней — туда на сайте накладывается заголовок «Свет, который остаётся с вами».",
  usedOn: [{ page: "Главная", route: "/", block: "Hero — первый экран (≥640 px)" }],
  refs: ["Если уже сгенерирован «Колье Cascade Rivière» (№ 13) — загрузите его в чат как референс украшения"],
  description: "Колье-ривьера Cascade Rivière (EV-N-001): белое золото 750, 52 круглых бриллианта, плавно уменьшающихся от центра к замку, у каждого своя корзина из 4 лапок, длина 42 см, лежит на основании шеи над ключицами.",
  composition: "Тесный бьюти-кадр: шея, ключицы и плечи модели; лицо обрезано по линии нижней губы/подбородка. Волосы убраны в низкий гладкий пучок, шея открыта. На модели — шёлковый топ цвета слоновой кости/шампань с открытыми плечами. Мягкий свет окна слева, естественная фактура кожи. Фон — тёплый размытый беж.",
  qc: ["Колье — ровная непрерывная линия камней, симметрично вокруг шеи, без обрыва", "Камни уменьшаются к застёжке, видны корзины", "Кожа с реальной фактурой, без пластика; ключицы анатомически верны", "Левые 40% кадра пустые и спокойные", "Нет текста, логотипов, лишних украшений"],
  prompt: "",
});
entries[0].prompt = `Create a photorealistic luxury fashion campaign photograph in wide 3:2 landscape format for the hero banner of a premium European diamond jewelry house.

SUBJECT: an elegant woman's neck, collarbones and bare shoulders, wearing a platinum-look polished white-gold rivière necklace of 52 round brilliant-cut diamonds (about 4.10 ct total) in individual four-claw baskets, graduated in size from the largest stones at the centre to smaller stones toward the clasp, forming one continuous flexible line of light that rests at the base of the neck just above the collarbones, symmetrical around the neck. The woman is ${MODEL}; her face is cropped out at the lower lip/chin line so the picture is about the neck and décolleté. Hair gathered in a sleek low chignon so the neck and shoulders are fully free. She wears an off-the-shoulder ivory-champagne silk top with soft natural folds. Natural anatomy: correct neck length, natural collarbone structure, relaxed shoulders, realistic skin with visible fine texture and soft sheen — no airbrushing, no plastic skin.

COMPOSITION: the neck and necklace are placed in the right half of the frame (necklace centre at about 66% from the left, 55% from the top); the whole jewelry lies within x 42–88% and y 28–80% of the frame. The left 40% of the frame is calm, empty, softly out-of-focus warm ivory-beige backdrop with no objects, no hard shadows and no detail — reserved for website headline text. Camera: 85 mm portrait lens at f/4, eye-level, slightly turned three-quarter view of the model, sharp focus on the necklace diamonds, gentle falloff elsewhere.

LIGHT AND COLOUR: soft diffused window light from the left, gentle gradient shadow on the neck and shoulders, bright clean specular highlights on the polished gold, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible reflections. Warm, quiet, restrained colour palette of ivory, champagne and soft beige; refined editorial mood; no heavy vignette.

${STYLE}

${NEG}`;

// ── 02 Hero mobile
entries.push({
  n: 2, id: "hero-mobile", kind: "hero", file: "hero-mobile.png", key: "hero/hero-mobile", path: "public/images/hero/hero-mobile.webp",
  title: "Hero (мобильная версия): та же модель и колье",
  generateRatio: "2:3 (вертикальный; на сайт кадрируется до 1:1 по центру)", generateSize: "1024×1536 или выше",
  siteRatios: "Телефон (<640 px): квадрат 1:1 на всю ширину экрана, кадрирование по центру: сохраняется центральная полоса y 17–83%, верх и низ (по ~17%) обрезаются. Заголовок и кнопка расположены ПОД фото и не накладываются.",
  safeZone: "Колье и шея — в области x 20–80%, y 38–68% (центральный квадрат). Всё важное внутри y 20–80%.",
  textSpace: "Текст на мобильном лежит под картинкой, но сверху и снизу оставьте по ~20% спокойного тёплого фона (без деталей), чтобы кадр не казался тесным.",
  usedOn: [{ page: "Главная", route: "/", block: "Hero — первый экран (<640 px)" }],
  refs: ["ОБЯЗАТЕЛЬНО: в том же чате загрузите готовое hero-desktop как референс модели, колье, света и стиля"],
  description: "То же колье Cascade Rivière (EV-N-001) и та же модель, что в десктопном Hero — не новое украшение: 52 круглых бриллианта, белое золото, градуировка от центра к замку, корзины из 4 лапок.",
  composition: "Вертикальная перекомпоновка десктопного кадра: шея и колье по центру, чуть крупнее; свет слева, тот же тёплый беж. Лицо обрезано по линии губ/подбородка.",
  qc: ["Та же модель, прическа, топ и колье, что в desktop-версии", "Колье строго по центру, в пределах центрального квадрата", "Анатомия и кожа реалистичны", "Нет текста и посторонних деталей"],
  prompt: "",
});
entries[1].prompt = `Using the previously generated desktop hero image as the exact reference (same woman, same hairstyle, same ivory-champagne silk top, same rivière necklace, same lighting and colour grading), recompose it as a photorealistic luxury fashion campaign photograph in tall vertical 2:3 portrait format for the mobile hero of a premium European diamond jewelry house.

SUBJECT: an elegant woman's neck, collarbones and bare shoulders, wearing a polished white-gold rivière necklace of 52 round brilliant-cut diamonds (about 4.10 ct total) in individual four-claw baskets, graduated from the largest central stones to smaller stones toward the clasp, forming one continuous line that rests at the base of the neck just above the collarbones, perfectly symmetrical. The woman is ${MODEL}; her face is cropped out at the lower lip/chin line. Hair in a sleek low chignon, neck fully free, off-the-shoulder ivory-champagne silk top. Natural anatomy, realistic skin texture with fine pores and soft sheen, no airbrushing.

COMPOSITION: the necklace and neck are centered horizontally and placed in the vertical middle of the frame (necklace centre at about 50% from the left and 52% from the top). Keep all important elements within x 20–80% and y 30–72% of the frame, because the website crops this image to a centered square. Roughly the top 20% and bottom 20% of the frame are calm, softly out-of-focus warm ivory-beige backdrop (top) and silk fabric falling softly out of focus (bottom). Camera: 85 mm portrait lens at f/4, eye-level, very slight three-quarter turn, sharp focus on the diamonds.

LIGHT AND COLOUR: soft diffused window light from the left, gentle shadow gradient on the neck, bright clean highlights on polished gold, crisp tiny white sparkles with a few subtle prismatic flashes, physically plausible reflections; warm restrained palette of ivory, champagne and soft beige; no vignette.

${STYLE}

${NEG}`;

// ── 03–06 Editorial
entries.push({
  n: 3, id: "editorial-1", kind: "editorial", file: "editorial-1.png", key: "editorial/editorial-1", path: "public/images/editorial/editorial-1.webp",
  title: "Editorial Story: портрет с подвеской Éclat Solitaire",
  generateRatio: "1:1 (квадрат)", generateSize: "1536×1536 или 1024×1024",
  siteRatios: "Телефон 4:5, планшет 16:10, десктоп ≈1,2:1 (левая колонка секции). Квадрат кадрируется по центру: сверху/снизу до ~19%, по бокам до ~10%.",
  safeZone: "Лицо и подвеска — в области x 22–78%, y 18–82%. Подвеска на ключицах: x 42–58%, y 62–74%.",
  textSpace: "Текст лежит в отдельной колонке справа, поверх изображения его нет. Лицо модели обращено вправо — к тексту.",
  usedOn: [{ page: "Главная", route: "/", block: "Editorial Story — «Совершенство в каждой грани» (левая фотография)" }],
  refs: ["Загрузите готовую «Подвеску Éclat Solitaire» (№ 14) как референс украшения"],
  description: "Подвеска Éclat Solitaire (EV-N-002): белое золото 750, один круглый бриллиант ≈0,45 ct (≈4,9 мм) в 4 лапках на очень тонкой якорной цепочке 42 см.",
  composition: "Портрет по грудь в три четверти: лицо слегка повёрнуто вправо, взгляд за кадр, подбородок чуть приподнят; плечи открыты. Фон — глубокий винный шёлк (#482E35) мягкими складками. Мягкий тёплый свет окна слева, лёгкая светотень, выразительная, но спокойная подача.",
  qc: ["Кожа и лицо без «пластика», естественные поры и свет", "Подвеска одна, камень круглый в четырёх лапках, цепочка тонкая и непрерывная", "Ключицы, шея, уши анатомически верны", "Нет второй цепочки или лишних украшений"],
  prompt: "",
});
entries[2].prompt = `Create a photorealistic fashion-editorial portrait in square 1:1 format for a premium European diamond jewelry house.

SUBJECT: ${MODEL}, photographed from the chest up in a gentle three-quarter view, face turned slightly toward the right, gaze directed softly out of frame to the right, chin slightly lifted, bare shoulders, hair in a smooth low chignon. She wears a single delicate solitaire pendant necklace: a very fine polished white-gold anchor-link chain (42 cm) with one round brilliant-cut diamond of about 0.45 ct (about 4.9 mm) in a four-claw setting that rests at the centre of the collarbones. No other jewelry. Natural anatomy: correct proportions of face, ear, neck and collarbones; skin with real fine pores, subtle freckles, soft natural sheen, no airbrushing or plastic smoothing; natural eyelashes, natural lips.

COMPOSITION: the face and pendant stay within x 22–78% and y 18–82% of the frame; the pendant sits at about 50% from the left and 68% from the top and is in crisp focus; background is deep wine-coloured (#482E35) silk drapery in soft out-of-focus folds with a subtle warm gradient. Camera: 85 mm lens at f/2.8, eye-level, focus on the pendant diamond and the eyes' plane, gentle falloff.

LIGHT AND COLOUR: soft warm window light from the left with gentle shadow transition on the right side of the face and neck, subtle rim light on the shoulder, bright clean highlights on the gold and a crisp tiny white sparkle with a faint prismatic flash on the diamond. Rich but restrained palette of wine, warm skin tones and champagne; quiet luxury editorial mood.

${STYLE}

${NEG}`;

entries.push({
  n: 4, id: "editorial-2", kind: "editorial", file: "editorial-2.png", key: "editorial/editorial-2", path: "public/images/editorial/editorial-2.webp",
  title: "Дом ÉLAVÉRA, первый экран: руки с кольцом Promesse Round",
  generateRatio: "3:2 (горизонтальный)", generateSize: "1536×1024 или выше",
  siteRatios: "Полноэкранный фон: десктоп ≈1,7:1, телефон ≈0,5:1 (очень узкий вертикальный). На телефоне при кадрировании по центру остаётся только центральная треть по ширине.",
  safeZone: "Кольцо и пальцы — в центральной трети: x 36–64%, y 14–58%. Вся композиция рук — не шире ~45% кадра.",
  textSpace: "Нижние ~38% кадра (y 62–100%) — тёмный спокойный винный фон без деталей: туда накладывается заголовок «Искусство оставаться незабываемой» (слева снизу) под градиентом.",
  usedOn: [{ page: "Дом ÉLAVÉRA", route: "/maison", block: "Первый экран — полноэкранный фон" }],
  refs: ["Загрузите готовое «Помолвочное кольцо Promesse Round» (№ 19) как референс украшения"],
  description: "Помолвочное кольцо Promesse Round (EV-P-001): белое золото (платина-вид), круглый бриллиант ≈1,00 ct в 6 лапках, ободок 1,8 мм.",
  composition: "Две женские руки в сдержанном жесте: левая рука с кольцом на безымянном пальце, правая бережно поддерживает её; пальцы расслаблены, ногти короткие овальные, без яркого лака. Руки на глубоком винном шёлке/бархате. Свет направленный тёплый сверху-слева, мягкая падающая тень.",
  qc: ["У каждой руки ровно пять пальцев, суставы и ногти естественны", "Кольцо — солитёр с шестью лапками на безымянном пальце, посадка верная", "Кожа с фактурой, без глянцевого «пластика»", "Нижняя треть кадра тёмная и пустая"],
  prompt: "",
});
entries[3].prompt = `Create a photorealistic luxury fashion-editorial close-up in wide 3:2 landscape format for the hero of a premium European diamond jewelry house.

SUBJECT: two elegant female hands of ${MODEL}, shown in a calm, restrained gesture: the left hand rests with the fingers relaxed and gently curved, wearing a classic solitaire engagement ring on the ring finger; the right hand lightly supports it from underneath. Hands are fully natural: exactly five fingers each, natural joints, knuckles and finger length, short neat oval nails with a nude sheer finish, realistic skin with fine texture, tiny natural creases and soft sheen, no airbrushing. The ring: thin polished white-gold band (1.8 mm, platinum-look), one round brilliant-cut diamond of about 1.00 ct (about 6.4 mm) in a six-claw high setting, accurate facet pattern and crisp highlights. No other jewelry. The hands rest on deep wine-coloured (#482E35) silk-velvet with soft natural folds.

COMPOSITION: the cluster of hands is compact and centered horizontally (not wider than 45% of the frame), with the ring at about 50% from the left and 34% from the top; all fingers and the ring lie within x 36–64% and y 14–58%. The bottom 38% of the frame is calm, dark, softly out-of-focus wine-coloured fabric with no detail, reserved for website headline text. Camera: 100 mm macro-portrait lens at f/4, slightly above the hands, sharp focus on the diamond and ring finger, gentle falloff.

LIGHT AND COLOUR: directional warm key light from the upper left, soft shadows, bright clean highlights on the polished gold, a crisp tiny white sparkle with subtle prismatic flashes on the diamond; rich low-key palette of wine, warm skin tones and champagne; quiet luxury editorial mood.

${STYLE}

${NEG}`;

entries.push({
  n: 5, id: "editorial-3", kind: "editorial", file: "editorial-3.png", key: "editorial/editorial-3", path: "public/images/editorial/editorial-3.webp",
  title: "Дом ÉLAVÉRA, история: портрет с серьгами Lumière",
  generateRatio: "2:3 (вертикальный; на сайте кадрируется до 4:5)", generateSize: "1024×1536 или выше",
  siteRatios: "Фиксированный 4:5 на телефоне и десктопе (колонка справа в блоке «История и философия»). Кадрируется по центру: сверху и снизу срезается по ~8%.",
  safeZone: "Лицо, ухо и серьга — в области x 25–78%, y 16–78%. Серьга: x 55–70%, y 42–62%.",
  textSpace: "Текст в левой колонке рядом, на фото его нет. Свободное пространство не требуется, но фон должен быть спокойным.",
  usedOn: [{ page: "Дом ÉLAVÉRA", route: "/maison", block: "История и философия — вертикальный портрет справа" }],
  refs: ["Загрузите готовые «Серьги-капли Lumière» (№ 11) как референс украшения"],
  description: "Серьги-капли Lumière (EV-E-002): белое золото 750, длина ≈28 мм; сверху малый круглый бриллиант, на звене крошечный круглый, внизу бриллиант-груша в 6-лапковой корзине; всего 6 камней на пару, ≈1,20 ct.",
  composition: "Тесный портрет в три четверти: лицо повёрнуто влево, ухо и серьга справа от центра в чётком фокусе; волосы убраны за ухо, шея и линия челюсти видны. Тёплый нейтральный фон (#E9E0D5), мягкий боковой свет слева.",
  qc: ["Серьга: круглый камень сверху, груша внизу, тонкое звено между ними", "Ухо и мочка анатомически правильны, серьга сидит правильно", "Кожа и волосы фотореалистичны", "Только одна серьга в кадре (на видимом ухе), без лишних украшений"],
  prompt: "",
});
entries[4].prompt = `Create a photorealistic fashion-editorial close portrait in tall 2:3 portrait format for a premium European diamond jewelry house.

SUBJECT: ${MODEL}, shown from the shoulders up in a three-quarter view, face turned toward the left, ear on the right side of the frame fully visible, hair pulled back neatly behind the ear so the ear, jawline and neck are exposed, calm gaze toward the left out of frame. She wears one drop earring (the visible ear): polished white gold, about 28 mm long — a small round brilliant diamond on top, a fine polished link with one tiny round diamond, and a pear-shaped diamond (about 0.5 ct) hanging below in a six-claw basket with a pointed tip claw; the pear drop hangs straight down by gravity. No other jewelry. Natural anatomy: correct ear shape and earlobe with the earring passing realistically through the lobe, natural neck and shoulder lines, skin with fine pores, subtle tonal variation and soft sheen, no airbrushing or plastic skin.

COMPOSITION: the earring is placed at about 62% from the left and 52% from the top and is in crisp focus; the face, ear and earring stay within x 25–78% and y 16–78%. Background: seamless soft warm beige (#E9E0D5) with a gentle gradient, no objects. Camera: 100 mm portrait lens at f/3.2, eye-level, focus on the earring diamonds with soft falloff on the face edge.

LIGHT AND COLOUR: soft side light from the left, gentle shadow transition across the cheek and neck, bright clean highlights on the polished gold, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds; warm restrained palette of beige, champagne and natural skin tones; quiet luxury editorial mood.

${STYLE}

${NEG}`;

entries.push({
  n: 6, id: "editorial-4", kind: "editorial", file: "editorial-4.png", key: "editorial/editorial-4", path: "public/images/editorial/editorial-4.webp",
  title: "Финал главной: натюрморт ансамбля Lumière на винном бархате",
  generateRatio: "3:2 (горизонтальный)", generateSize: "1536×1024 или выше",
  siteRatios: "Полноэкранный фон: десктоп ≈2,2:1 (срезается сверху/снизу по ~17%), телефон ≈0,75:1 (остаётся центральная ~50% по ширине). Поверх — градиент слева направо из графита.",
  safeZone: "Все три украшения — в области x 48–82%, y 26–76%. Центр композиции ≈ x 62%, y 50%.",
  textSpace: "Левые ~42% кадра (x 0–42%) — глубокая мягкая тень винного бархата без предметов: там заголовок «Ваш свет уже ждёт» и кнопка.",
  usedOn: [{ page: "Главная", route: "/", block: "Заключительная секция — полноэкранный фон перед переходом в каталог" }],
  refs: ["Загрузите готовые № 8 (кольцо Lumière Oval), № 11 (серьги-капли Lumière) и № 16 (браслет Lumière Rivière) как референсы"],
  description: "Ансамбль коллекции Lumière из каталога, все изделия в белом золоте 750: браслет Lumière Rivière (EV-B-001, 44 круглых бриллианта ≈3,20 ct), кольцо Lumière Oval (EV-R-002, овальный камень ≈7,6×5,4 мм и ореол), серьги-капли Lumière (EV-E-002, груша). Конструкции и пропорции — строго как на товарных фото.",
  composition: "Низкий ключ: натюрморт на глубоком винном бархате (#482E35). Браслет — мягкая дуга в центре композиции, кольцо стоит на ободке перед ним слегка левее, пара серёг лежит чуть правее и выше. Асимметричный баланс, много воздуха. Узкие мягкие пятна света, тёплые блики на золоте, контролируемые вспышки на бриллиантах.",
  qc: ["Три изделия соответствуют товарным фото: браслет-ривьера, овальное кольцо с ореолом, серьги-груши", "Конструкции не искажены, нет лишних украшений", "Левые 42% кадра тёмные и пустые", "Фактура бархата реалистична, нет шума и блёсток"],
  prompt: "",
});
entries[5].prompt = `Create a photorealistic low-key luxury still-life photograph in wide 3:2 landscape format for the closing banner of a premium European diamond jewelry house. If reference images of the jewelry are provided in this chat, reproduce those exact pieces faithfully.

SUBJECT: three white-gold diamond jewelry pieces from one collection arranged on deep wine-coloured (#482E35) velvet. (1) A flexible rivière tennis bracelet of 44 identical round brilliant diamonds in individual four-claw baskets, laid in a soft open arc as the centrepiece. (2) A ring with a central oval-cut diamond (about 7.6 × 5.4 mm) in a four-claw open basket surrounded by a thin halo of tiny round diamonds on a thin plain polished white-gold band, standing upright on its band in front of and slightly left of the bracelet. (3) A pair of drop earrings, each with a small round diamond on top, a fine link and a pear-shaped diamond below in a six-claw basket, lying side by side slightly right of and above the bracelet. No other objects, no props, no hands.

COMPOSITION: asymmetrical and balanced; all three pieces lie within x 48–82% and y 26–76% of the frame, centred at about 62% from the left and 50% from the top. The left 42% of the frame is deep, soft, empty wine-coloured velvet fading into shadow, with no objects, reserved for website headline text. Camera: 100 mm macro lens at f/8, slightly above the surface at about 35 degrees, everything sharp from the ring to the earrings.

LIGHT AND COLOUR: low-key lighting with a large soft key from the upper left plus a narrow soft accent light creating gentle warm highlights on the gold and soft sheen on the velvet pile; crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds; dark rich palette of wine, graphite and champagne; quiet luxury mood, no glitter, no bokeh sparkles.

${STYLE}

${NEG}`;

// ── 07–22 Товары
products.forEach((p, i) => {
  const s = specs[p.slug];
  const metal = defaultMetal(p);
  const usedOn: Entry["usedOn"] = [
    { page: "Каталог", route: "/collections", block: "Карточка изделия в сетке (основное фото)" },
    { page: "Карточка украшения", route: `/product/${p.slug}`, block: "Основное изображение галереи (ракурс 1) и миниатюра" },
    { page: "Корзина и оформление", route: "/checkout", block: "Миниатюра позиции в боковой корзине и в сводке заказа" },
    { page: "Поиск (панель шапки)", route: "любая страница", block: "Миниатюра результата поиска" },
    { page: "Карточка украшения", route: "/product/*", block: "Блок «Похожие украшения» (когда изделие попадает в подборку)" },
  ];
  if (featured.has(p.slug)) usedOn.unshift({ page: "Главная", route: "/", block: "Избранные украшения — карточка" });
  if (tileSlugs.includes(p.slug)) usedOn.unshift({ page: "Главная", route: "/", block: `Плитка категории «${CATEGORY_LABEL[p.category]}» (разные кадрирования: 4:3, 4:5, 1:1, 16:9)` });
  const metalLabel = METAL_LABEL[metal];
  const n = 7 + i;
  const prompt = `Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: ${s.subject}. This is catalog item ${p.id} "${p.slug.replace(/-/g, " ")}" (${CAT_EN[p.category]}, ${CUT_EN[p.stone.cut]} cut diamonds) — render exactly this design and do not invent additional elements.
STONES: ${s.stones}.
SETTING AND CONSTRUCTION: ${s.setting}.
METAL: 18k (750) ${METAL_EN[metal]}, high polish.
POSE AND ANGLE: ${s.pose}.

${PRODUCT_FRAMING}

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

${STYLE}

${NEG}`;
  entries.push({
    n, id: `product-${p.slug}`, kind: "product", file: `${p.slug}-1.png`, key: `products/${p.slug}-1`, path: `public/images/products/${p.slug}-1.webp`,
    title: `${p.name} (${p.id})`, productId: p.id, slug: p.slug,
    generateRatio: "1:1 (квадрат)", generateSize: "1536×1536 или 1024×1024",
    siteRatios: "На сайте кадрируется по центру до 4:5 (мобильный каталог, карточка), 16:9 (плитка помолвочных), 1:1 и миниатюр 96×112; в лайтбоксе показывается целиком.",
    safeZone: "Украшение по центру: ≈50–55% высоты и ≤60% ширины кадра, ровные поля со всех сторон.",
    textSpace: "Не требуется: на изображении нет текста, поверх него на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.",
    usedOn, refs: [],
    description: `${p.name} · арт. ${p.id} · ${CATEGORY_LABEL[p.category]} · коллекция ${p.collection} · ${formatPrice(p.price)} · камни: ${CUT_LABEL[p.stone.cut].toLowerCase()}, ${formatCarat(p.stone.carat)}, ${p.stone.count} шт. · металл на фото — ${metalLabel.toLowerCase()} (металл по умолчанию на сайте; доступно: ${p.metals.filter((m) => m.available).map((m) => METAL_LABEL[m.metal].toLowerCase()).join(", ")}). ${s.subject}; ${s.stones}; ${s.setting}.`,
    composition: `${s.pose}. Фон — бесшовная слоновая кость #F5F1EA с мягким переходом к #E9E0D5 по краям; мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.`,
    qc: [...s.qc, "Нет текста, клейм, логотипов и посторонних предметов", "Украшение целиком в кадре и по центру с полями"],
    prompt,
  });
});

// ───────────────────────── Markdown ─────────────────────────
const stoneCount = entries.length;
const md: string[] = [];
md.push(`# ÉLAVÉRA — ТЗ на создание ${stoneCount} изображений для ChatGPT

> Файл создан автоматически из \`src/lib/products.ts\` (\`npx tsx scripts/build-brief.ts\`). Сопровождающий машиночитаемый файл — \`IMAGE_MANIFEST.json\`. Платная генерация через API **не используется**: все изображения создаются вручную в ChatGPT.

## 0. Как работать

**Порядок генерации (важно для единого стиля):**
1. Сначала **№ 7–22 (товары)** — они задают облик украшений.
2. Затем **№ 1–2 (Hero)**, **№ 3–5 (editorial)** и **№ 6 (финал)**: при генерации **прикладывайте готовые товарные фото как референсы** (в каждом задании указано, какие).

**Правила работы в ChatGPT:**
- Одно изображение — одно сообщение. Копируйте блок «PROMPT» целиком (он самодостаточен; стилевой блок и запреты уже внутри).
- Просите самое большое доступное разрешение и формат **PNG** (или JPG высокого качества). Соотношение сторон — как в поле «Генерировать». Окончательное кадрирование под сайт (4:5, 16:9, 1:1 и т. д.) выполняется при импорте — в центральной «безопасной зоне» кадра.
- Для Hero и editorial с моделью генерируйте **в одном чате**, чтобы ChatGPT помнил внешность модели и стиль. Если результат не подходит — просите точечную правку («keep everything, fix only …»), а не новую генерацию с нуля.
- Если ChatGPT добавил текст, логотип, лишние украшения, искажённые пальцы или несимметричную пару — перегенерируйте. Не принимайте «почти нормально».
- Названия файлов — строго как в поле «Файл». Положите готовые файлы в папку \`elavera/incoming-images/\` (или пришлите их в чат): при импорте я конвертирую их в WebP, обрежу под ратио блоков и добавлю в \`public/images/manifest.json\`. До импорта на сайте остаются честные заглушки.

**Единый визуальный стиль ÉLAVÉRA** (повторён внутри каждого промпта):
- Палитра: слоновая кость #F5F1EA, молочный #FCFAF7, беж #E9E0D5, шампань #C5AC86; винный #482E35 и графит #242220 — только как акценты.
- Золото полированное 750 пробы: белое — яркое, чуть тёплое серебристо-белое (не серое и не синее); жёлтое — приглушённое шампань-жёлтое; розовое — мягкое розово-медное.
- Бриллианты: правдоподобная геометрия огранки, чёткие белые блики и лишь несколько мягких спектральных вспышек; без звёзд-фильтров, bloom и блёсток.
- Свет: большой мягкий ключ сверху-слева, мягкое заполнение справа, едва заметная контактная тень.
- Фон товарных фото: бесшовная слоновая кость без реквизита. Модели: «модель бренда» — одна и та же внешность во всех портретах.
- Запрещено на любом изображении: текст, логотипы, водяные знаки, клейма, чужие бренды.

**Критерии приёмки для моделей:** естественная фактура кожи (поры, мягкий блеск, без «пластика»), по пять пальцев на руке, корректная анатомия уха, шеи и ключиц, украшение сидит физически правдоподобно.

**Известное ограничение сайта (до импорта учтите):** товары с несколькими ракурсами (\`angles = 3\`: 9 изделий) на странице товара показывают ракурсы 2–3, а блок Signature на главной берёт ракурс 2. В это ТЗ входит только ракурс 1 (22 изображения), поэтому для этих мест пока останутся заглушки, пока не будут созданы дополнительные кадры либо пока сайт не будет настроен на показ ракурса 1.

## Сводка

| № | Файл | Путь в проекте | Ратио (генерация) | Где используется |
|---|---|---|---|---|
${entries.map((e) => `| ${String(e.n).padStart(2, "0")} | \`${e.file}\` | \`${e.path}\` | ${e.generateRatio.split(" ")[0]} | ${e.usedOn[0].page}: ${e.usedOn[0].block.split("—")[0].trim()} |`).join("\n")}
`);

for (const e of entries) {
  md.push(`---

## № ${String(e.n).padStart(2, "0")}. ${e.title}

| Поле | Значение |
|---|---|
| Файл (при загрузке) | \`${e.file}\` |
| Путь в проекте (после импорта) | \`${e.path}\` |
| Ключ в manifest.json | \`${e.key}\` |${e.productId ? `\n| Товар | \`${e.productId}\` · slug \`${e.slug}\` |` : ""}
| Генерировать в | ${e.generateRatio}, ${e.generateSize} |
| Как кадрируется на сайте | ${e.siteRatios} |

**Где используется:**
${e.usedOn.map((u) => `- ${u.page} (\`${u.route}\`): ${u.block}`).join("\n")}

**Украшение:** ${e.description}

**Композиция, ракурс, свет, фон:** ${e.composition}

**Безопасная зона:** ${e.safeZone}

**Свободное место под текст:** ${e.textSpace}
${e.refs.length ? `\n**Референсы:** ${e.refs.join("; ")}\n` : ""}
**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

\`\`\`text
${e.prompt}
\`\`\`

**Чек-лист приёмки:**
${e.qc.map((q) => `- [ ] ${q}`).join("\n")}
`);
}
writeFileSync("IMAGE_GENERATION_BRIEF.md", md.join("\n"));

// ───────────────────────── JSON ─────────────────────────
const json = {
  project: "ÉLAVÉRA",
  note: "Все изображения создаются вручную в ChatGPT. Статус pending до импорта файлов; после импорта ключ добавляется в public/images/manifest.json.",
  incomingDir: "elavera/incoming-images",
  outputFormat: "webp",
  count: entries.length,
  images: entries.map((e) => ({
    order: e.n, id: e.id, type: e.kind,
    upload_filename: e.file, target_path: e.path, manifest_key: e.key,
    product_id: e.productId ?? null, product_slug: e.slug ?? null,
    generate_ratio: e.generateRatio, generate_size: e.generateSize,
    safe_zone: e.safeZone, text_space: e.textSpace,
    used_on: e.usedOn, reference_images: e.refs, status: "pending",
  })),
};
writeFileSync("IMAGE_MANIFEST.json", JSON.stringify(json, null, 2));
console.log(`Brief: ${entries.length} entries`);
