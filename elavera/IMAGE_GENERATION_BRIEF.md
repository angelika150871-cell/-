# ÉLAVÉRA — ТЗ на создание 22 изображений для ChatGPT

> Файл создан автоматически из `src/lib/products.ts` (`npx tsx scripts/build-brief.ts`). Сопровождающий машиночитаемый файл — `IMAGE_MANIFEST.json`. Платная генерация через API **не используется**: все изображения создаются вручную в ChatGPT.

## 0. Как работать

**Порядок генерации (важно для единого стиля):**
1. Сначала **№ 7–22 (товары)** — они задают облик украшений.
2. Затем **№ 1–2 (Hero)**, **№ 3–5 (editorial)** и **№ 6 (финал)**: при генерации **прикладывайте готовые товарные фото как референсы** (в каждом задании указано, какие).

**Правила работы в ChatGPT:**
- Одно изображение — одно сообщение. Копируйте блок «PROMPT» целиком (он самодостаточен; стилевой блок и запреты уже внутри).
- Просите самое большое доступное разрешение и формат **PNG** (или JPG высокого качества). Соотношение сторон — как в поле «Генерировать». Обрезки при импорте нет: товары показываются целиком, баннеры кадрируются в коде — поэтому соблюдайте «безопасную зону».
- Для Hero и editorial с моделью генерируйте **в одном чате**, чтобы ChatGPT помнил внешность модели и стиль. Если результат не подходит — просите точечную правку («keep everything, fix only …»), а не новую генерацию с нуля.
- Если ChatGPT добавил текст, логотип, лишние украшения, искажённые пальцы или несимметричную пару — перегенерируйте. Не принимайте «почти нормально».
- Названия файлов — строго как в поле «Файл». Положите готовые файлы в папку `elavera/incoming-images/` (или пришлите их в чат) и выполните `npm run import-images` — скрипт конвертирует их в WebP, вычислит цвет краёв товарного фото и добавит ключи в `public/images/manifest.json`. До импорта на сайте остаются честные заглушки. Обрезки при импорте нет.

**Единый визуальный стиль ÉLAVÉRA** (повторён внутри каждого промпта):
- Палитра: слоновая кость #F5F1EA, молочный #FCFAF7, беж #E9E0D5, шампань #C5AC86; винный #482E35 и графит #242220 — только как акценты.
- Золото полированное 750 пробы: белое — яркое, чуть тёплое серебристо-белое (не серое и не синее); жёлтое — приглушённое шампань-жёлтое; розовое — мягкое розово-медное.
- Бриллианты: правдоподобная геометрия огранки, чёткие белые блики и лишь несколько мягких спектральных вспышек; без звёзд-фильтров, bloom и блёсток.
- Свет: большой мягкий ключ сверху-слева, мягкое заполнение справа, едва заметная контактная тень.
- Фон товарных фото: ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки), без реквизита. Модели: «модель бренда» — одна и та же внешность во всех портретах.
- Запрещено на любом изображении: текст, логотипы, водяные знаки, клейма, чужие бренды.

**Критерии приёмки для моделей:** естественная фактура кожи (поры, мягкий блеск, без «пластика»), по пять пальцев на руке, корректная анатомия уха, шеи и ключиц, украшение сидит физически правдоподобно.

**Как сайт показывает изображения:**
- Товарные фото (№ 7–22) показываются **целиком** (object-contain) в квадратных рамках; фон под фото берётся из цвета краёв снимка, поэтому **края кадра должны быть ровного цвета #F5F1EA** и ничто не должно касаться краёв.
- Масштаб изделий единый по весу в кадре, но зависит от типа: кольца ≈ 60% кадра, пара серёг ≈ 65% ширины, колье и браслеты ≈ 75% ширины (см. поле «Безопасная зона» в каждом задании).
- Hero и editorial (№ 1–6) показываются через object-cover с индивидуальным object-position; соблюдайте «безопасную зону» и «свободное место под текст».
- **Дополнительные ракурсы** сейчас не создаются: галерея показывает только существующие кадры, без дублей миниатюр и без заглушек. Если позже добавить `<slug>-2.png` и `<slug>-3.png` и импортировать их, они появятся в галерее автоматически.

## Сводка

| № | Файл | Путь в проекте | Ратио (генерация) | Где используется |
|---|---|---|---|---|
| 01 | `hero-desktop.png` | `public/images/hero/hero-desktop.webp` | 3:2 | Главная: Hero |
| 02 | `hero-mobile.png` | `public/images/hero/hero-mobile.webp` | 2:3 | Главная: Hero |
| 03 | `editorial-1.png` | `public/images/editorial/editorial-1.webp` | 1:1 | Главная: Editorial Story |
| 04 | `editorial-2.png` | `public/images/editorial/editorial-2.webp` | 3:2 | Дом ÉLAVÉRA: Первый экран |
| 05 | `editorial-3.png` | `public/images/editorial/editorial-3.webp` | 2:3 | Дом ÉLAVÉRA: История и философия |
| 06 | `editorial-4.png` | `public/images/editorial/editorial-4.webp` | 3:2 | Главная: Заключительная секция |
| 07 | `aube-pave-ring-1.png` | `public/images/products/aube-pave-ring-1.webp` | 1:1 | Главная: Плитка категории «Кольца» (разные кадрирования: 4:3, 4:5, 1:1, 16:9) |
| 08 | `lumiere-oval-halo-ring-1.png` | `public/images/products/lumiere-oval-halo-ring-1.webp` | 1:1 | Главная: Избранные украшения |
| 09 | `orbite-toi-et-moi-ring-1.png` | `public/images/products/orbite-toi-et-moi-ring-1.webp` | 1:1 | Каталог: Карточка изделия в сетке (основное фото) |
| 10 | `eclat-solitaire-studs-1.png` | `public/images/products/eclat-solitaire-studs-1.webp` | 1:1 | Главная: Плитка категории «Серьги» (разные кадрирования: 4:3, 4:5, 1:1, 16:9) |
| 11 | `lumiere-pear-drop-earrings-1.png` | `public/images/products/lumiere-pear-drop-earrings-1.webp` | 1:1 | Главная: Избранные украшения |
| 12 | `aube-huggie-hoops-1.png` | `public/images/products/aube-huggie-hoops-1.webp` | 1:1 | Каталог: Карточка изделия в сетке (основное фото) |
| 13 | `cascade-riviere-necklace-1.png` | `public/images/products/cascade-riviere-necklace-1.webp` | 1:1 | Главная: Плитка категории «Колье и подвески» (разные кадрирования: 4:3, 4:5, 1:1, 16:9) |
| 14 | `eclat-solitaire-pendant-1.png` | `public/images/products/eclat-solitaire-pendant-1.webp` | 1:1 | Главная: Избранные украшения |
| 15 | `aube-oval-pendant-1.png` | `public/images/products/aube-oval-pendant-1.webp` | 1:1 | Каталог: Карточка изделия в сетке (основное фото) |
| 16 | `lumiere-riviere-bracelet-1.png` | `public/images/products/lumiere-riviere-bracelet-1.webp` | 1:1 | Главная: Плитка категории «Браслеты» (разные кадрирования: 4:3, 4:5, 1:1, 16:9) |
| 17 | `orbite-bangle-1.png` | `public/images/products/orbite-bangle-1.webp` | 1:1 | Каталог: Карточка изделия в сетке (основное фото) |
| 18 | `aube-chain-bracelet-1.png` | `public/images/products/aube-chain-bracelet-1.webp` | 1:1 | Каталог: Карточка изделия в сетке (основное фото) |
| 19 | `promesse-round-solitaire-1.png` | `public/images/products/promesse-round-solitaire-1.webp` | 1:1 | Главная: Плитка категории «Помолвочные кольца» (разные кадрирования: 4:3, 4:5, 1:1, 16:9) |
| 20 | `promesse-oval-hidden-halo-1.png` | `public/images/products/promesse-oval-hidden-halo-1.webp` | 1:1 | Каталог: Карточка изделия в сетке (основное фото) |
| 21 | `promesse-emerald-trilogy-1.png` | `public/images/products/promesse-emerald-trilogy-1.webp` | 1:1 | Каталог: Карточка изделия в сетке (основное фото) |
| 22 | `promesse-pear-solitaire-1.png` | `public/images/products/promesse-pear-solitaire-1.webp` | 1:1 | Каталог: Карточка изделия в сетке (основное фото) |

---

## № 01. Hero (десктоп): модель в колье Cascade Rivière

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `hero-desktop.png` |
| Путь в проекте (после импорта) | `public/images/hero/hero-desktop.webp` |
| Ключ в manifest.json | `hero/hero-desktop` |
| Генерировать в | 3:2 (горизонтальный), 1536×1024 или выше |
| Как кадрируется на сайте | Контейнер справа 64% ширины экрана и высотой на весь первый экран: ≈1,15:1 на 1440×900, ≈1,26:1 на 1920×1080, 16:10 на планшете (640–1023 px). Кадрируется по центру (object-cover), поэтому с боков обрезается до ~12%. |

**Где используется:**
- Главная (`/`): Hero — первый экран (≥640 px)

**Украшение:** Колье-ривьера Cascade Rivière (EV-N-001): белое золото 750, 52 круглых бриллианта, плавно уменьшающихся от центра к замку, у каждого своя корзина из 4 лапок, длина 42 см, лежит на основании шеи над ключицами.

**Композиция, ракурс, свет, фон:** Тесный бьюти-кадр: шея, ключицы и плечи модели; лицо обрезано по линии нижней губы/подбородка. Волосы убраны в низкий гладкий пучок, шея открыта. На модели — шёлковый топ цвета слоновой кости/шампань с открытыми плечами. Мягкий свет окна слева, естественная фактура кожи. Фон — тёплый размытый беж.

**Безопасная зона:** Всё украшение и подбородок — в области x 42–88%, y 28–80% кадра. Левые ~15% кадра плавно растворяются в слоновую кость градиентом сайта.

**Свободное место под текст:** Левые ~40% кадра: пустой, мягко размытый тёплый фон слоновой кости/беж без деталей и без теней — туда на сайте накладывается заголовок «Свет, который остаётся с вами».

**Референсы:** Если уже сгенерирован «Колье Cascade Rivière» (№ 13) — загрузите его в чат как референс украшения

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury fashion campaign photograph in wide 3:2 landscape format for the hero banner of a premium European diamond jewelry house.

SUBJECT: an elegant woman's neck, collarbones and bare shoulders, wearing a platinum-look polished white-gold rivière necklace of 52 round brilliant-cut diamonds (about 4.10 ct total) in individual four-claw baskets, graduated in size from the largest stones at the centre to smaller stones toward the clasp, forming one continuous flexible line of light that rests at the base of the neck just above the collarbones, symmetrical around the neck. The woman is the ÉLAVÉRA brand model: an elegant woman in her early thirties, warm light-olive skin with real natural texture (fine pores, subtle tonal variation, tiny natural imperfections, soft natural sheen), dark chestnut hair, minimal neutral makeup with a soft matte complexion, calm confident expression; her face is cropped out at the lower lip/chin line so the picture is about the neck and décolleté. Hair gathered in a sleek low chignon so the neck and shoulders are fully free. She wears an off-the-shoulder ivory-champagne silk top with soft natural folds. Natural anatomy: correct neck length, natural collarbone structure, relaxed shoulders, realistic skin with visible fine texture and soft sheen — no airbrushing, no plastic skin.

COMPOSITION: the neck and necklace are placed in the right half of the frame (necklace centre at about 66% from the left, 55% from the top); the whole jewelry lies within x 42–88% and y 28–80% of the frame. The left 40% of the frame is calm, empty, softly out-of-focus warm ivory-beige backdrop with no objects, no hard shadows and no detail — reserved for website headline text. Camera: 85 mm portrait lens at f/4, eye-level, slightly turned three-quarter view of the model, sharp focus on the necklace diamonds, gentle falloff elsewhere.

LIGHT AND COLOUR: soft diffused window light from the left, gentle gradient shadow on the neck and shoulders, bright clean specular highlights on the polished gold, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible reflections. Warm, quiet, restrained colour palette of ivory, champagne and soft beige; refined editorial mood; no heavy vignette.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Колье — ровная непрерывная линия камней, симметрично вокруг шеи, без обрыва
- [ ] Камни уменьшаются к застёжке, видны корзины
- [ ] Кожа с реальной фактурой, без пластика; ключицы анатомически верны
- [ ] Левые 40% кадра пустые и спокойные
- [ ] Нет текста, логотипов, лишних украшений

---

## № 02. Hero (мобильная версия): та же модель и колье

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `hero-mobile.png` |
| Путь в проекте (после импорта) | `public/images/hero/hero-mobile.webp` |
| Ключ в manifest.json | `hero/hero-mobile` |
| Генерировать в | 2:3 (вертикальный; на сайт кадрируется до 1:1 по центру), 1024×1536 или выше |
| Как кадрируется на сайте | Телефон (<640 px): квадрат 1:1 на всю ширину экрана, кадрирование по центру: сохраняется центральная полоса y 17–83%, верх и низ (по ~17%) обрезаются. Заголовок и кнопка расположены ПОД фото и не накладываются. |

**Где используется:**
- Главная (`/`): Hero — первый экран (<640 px)

**Украшение:** То же колье Cascade Rivière (EV-N-001) и та же модель, что в десктопном Hero — не новое украшение: 52 круглых бриллианта, белое золото, градуировка от центра к замку, корзины из 4 лапок.

**Композиция, ракурс, свет, фон:** Вертикальная перекомпоновка десктопного кадра: шея и колье по центру, чуть крупнее; свет слева, тот же тёплый беж. Лицо обрезано по линии губ/подбородка.

**Безопасная зона:** Колье и шея — в области x 20–80%, y 38–68% (центральный квадрат). Всё важное внутри y 20–80%.

**Свободное место под текст:** Текст на мобильном лежит под картинкой, но сверху и снизу оставьте по ~20% спокойного тёплого фона (без деталей), чтобы кадр не казался тесным.

**Референсы:** ОБЯЗАТЕЛЬНО: в том же чате загрузите готовое hero-desktop как референс модели, колье, света и стиля

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Using the previously generated desktop hero image as the exact reference (same woman, same hairstyle, same ivory-champagne silk top, same rivière necklace, same lighting and colour grading), recompose it as a photorealistic luxury fashion campaign photograph in tall vertical 2:3 portrait format for the mobile hero of a premium European diamond jewelry house.

SUBJECT: an elegant woman's neck, collarbones and bare shoulders, wearing a polished white-gold rivière necklace of 52 round brilliant-cut diamonds (about 4.10 ct total) in individual four-claw baskets, graduated from the largest central stones to smaller stones toward the clasp, forming one continuous line that rests at the base of the neck just above the collarbones, perfectly symmetrical. The woman is the ÉLAVÉRA brand model: an elegant woman in her early thirties, warm light-olive skin with real natural texture (fine pores, subtle tonal variation, tiny natural imperfections, soft natural sheen), dark chestnut hair, minimal neutral makeup with a soft matte complexion, calm confident expression; her face is cropped out at the lower lip/chin line. Hair in a sleek low chignon, neck fully free, off-the-shoulder ivory-champagne silk top. Natural anatomy, realistic skin texture with fine pores and soft sheen, no airbrushing.

COMPOSITION: the necklace and neck are centered horizontally and placed in the vertical middle of the frame (necklace centre at about 50% from the left and 52% from the top). Keep all important elements within x 20–80% and y 30–72% of the frame, because the website crops this image to a centered square. Roughly the top 20% and bottom 20% of the frame are calm, softly out-of-focus warm ivory-beige backdrop (top) and silk fabric falling softly out of focus (bottom). Camera: 85 mm portrait lens at f/4, eye-level, very slight three-quarter turn, sharp focus on the diamonds.

LIGHT AND COLOUR: soft diffused window light from the left, gentle shadow gradient on the neck, bright clean highlights on polished gold, crisp tiny white sparkles with a few subtle prismatic flashes, physically plausible reflections; warm restrained palette of ivory, champagne and soft beige; no vignette.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Та же модель, прическа, топ и колье, что в desktop-версии
- [ ] Колье строго по центру, в пределах центрального квадрата
- [ ] Анатомия и кожа реалистичны
- [ ] Нет текста и посторонних деталей

---

## № 03. Editorial Story: портрет с подвеской Éclat Solitaire

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `editorial-1.png` |
| Путь в проекте (после импорта) | `public/images/editorial/editorial-1.webp` |
| Ключ в manifest.json | `editorial/editorial-1` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Телефон 4:5, планшет 16:10, десктоп ≈1,2:1 (левая колонка секции). Квадрат кадрируется по центру: сверху/снизу до ~19%, по бокам до ~10%. |

**Где используется:**
- Главная (`/`): Editorial Story — «Совершенство в каждой грани» (левая фотография)

**Украшение:** Подвеска Éclat Solitaire (EV-N-002): белое золото 750, один круглый бриллиант ≈0,45 ct (≈4,9 мм) в 4 лапках на очень тонкой якорной цепочке 42 см.

**Композиция, ракурс, свет, фон:** Портрет по грудь в три четверти: лицо слегка повёрнуто вправо, взгляд за кадр, подбородок чуть приподнят; плечи открыты. Фон — глубокий винный шёлк (#482E35) мягкими складками. Мягкий тёплый свет окна слева, лёгкая светотень, выразительная, но спокойная подача.

**Безопасная зона:** Лицо и подвеска — в области x 22–78%, y 18–82%. Подвеска на ключицах: x 42–58%, y 62–74%.

**Свободное место под текст:** Текст лежит в отдельной колонке справа, поверх изображения его нет. Лицо модели обращено вправо — к тексту.

**Референсы:** Загрузите готовую «Подвеску Éclat Solitaire» (№ 14) как референс украшения

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic fashion-editorial portrait in square 1:1 format for a premium European diamond jewelry house.

SUBJECT: the ÉLAVÉRA brand model: an elegant woman in her early thirties, warm light-olive skin with real natural texture (fine pores, subtle tonal variation, tiny natural imperfections, soft natural sheen), dark chestnut hair, minimal neutral makeup with a soft matte complexion, calm confident expression, photographed from the chest up in a gentle three-quarter view, face turned slightly toward the right, gaze directed softly out of frame to the right, chin slightly lifted, bare shoulders, hair in a smooth low chignon. She wears a single delicate solitaire pendant necklace: a very fine polished white-gold anchor-link chain (42 cm) with one round brilliant-cut diamond of about 0.45 ct (about 4.9 mm) in a four-claw setting that rests at the centre of the collarbones. No other jewelry. Natural anatomy: correct proportions of face, ear, neck and collarbones; skin with real fine pores, subtle freckles, soft natural sheen, no airbrushing or plastic smoothing; natural eyelashes, natural lips.

COMPOSITION: the face and pendant stay within x 22–78% and y 18–82% of the frame; the pendant sits at about 50% from the left and 68% from the top and is in crisp focus; background is deep wine-coloured (#482E35) silk drapery in soft out-of-focus folds with a subtle warm gradient. Camera: 85 mm lens at f/2.8, eye-level, focus on the pendant diamond and the eyes' plane, gentle falloff.

LIGHT AND COLOUR: soft warm window light from the left with gentle shadow transition on the right side of the face and neck, subtle rim light on the shoulder, bright clean highlights on the gold and a crisp tiny white sparkle with a faint prismatic flash on the diamond. Rich but restrained palette of wine, warm skin tones and champagne; quiet luxury editorial mood.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Кожа и лицо без «пластика», естественные поры и свет
- [ ] Подвеска одна, камень круглый в четырёх лапках, цепочка тонкая и непрерывная
- [ ] Ключицы, шея, уши анатомически верны
- [ ] Нет второй цепочки или лишних украшений

---

## № 04. Дом ÉLAVÉRA, первый экран: руки с кольцом Promesse Round

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `editorial-2.png` |
| Путь в проекте (после импорта) | `public/images/editorial/editorial-2.webp` |
| Ключ в manifest.json | `editorial/editorial-2` |
| Генерировать в | 3:2 (горизонтальный), 1536×1024 или выше |
| Как кадрируется на сайте | Полноэкранный фон: десктоп ≈1,7:1, телефон ≈0,5:1 (очень узкий вертикальный). На телефоне при кадрировании по центру остаётся только центральная треть по ширине. |

**Где используется:**
- Дом ÉLAVÉRA (`/maison`): Первый экран — полноэкранный фон

**Украшение:** Помолвочное кольцо Promesse Round (EV-P-001): белое золото (платина-вид), круглый бриллиант ≈1,00 ct в 6 лапках, ободок 1,8 мм.

**Композиция, ракурс, свет, фон:** Две женские руки в сдержанном жесте: левая рука с кольцом на безымянном пальце, правая бережно поддерживает её; пальцы расслаблены, ногти короткие овальные, без яркого лака. Руки на глубоком винном шёлке/бархате. Свет направленный тёплый сверху-слева, мягкая падающая тень.

**Безопасная зона:** Кольцо и пальцы — в центральной трети: x 36–64%, y 14–58%. Вся композиция рук — не шире ~45% кадра.

**Свободное место под текст:** Нижние ~38% кадра (y 62–100%) — тёмный спокойный винный фон без деталей: туда накладывается заголовок «Искусство оставаться незабываемой» (слева снизу) под градиентом.

**Референсы:** Загрузите готовое «Помолвочное кольцо Promesse Round» (№ 19) как референс украшения

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury fashion-editorial close-up in wide 3:2 landscape format for the hero of a premium European diamond jewelry house.

SUBJECT: two elegant female hands of the ÉLAVÉRA brand model: an elegant woman in her early thirties, warm light-olive skin with real natural texture (fine pores, subtle tonal variation, tiny natural imperfections, soft natural sheen), dark chestnut hair, minimal neutral makeup with a soft matte complexion, calm confident expression, shown in a calm, restrained gesture: the left hand rests with the fingers relaxed and gently curved, wearing a classic solitaire engagement ring on the ring finger; the right hand lightly supports it from underneath. Hands are fully natural: exactly five fingers each, natural joints, knuckles and finger length, short neat oval nails with a nude sheer finish, realistic skin with fine texture, tiny natural creases and soft sheen, no airbrushing. The ring: thin polished white-gold band (1.8 mm, platinum-look), one round brilliant-cut diamond of about 1.00 ct (about 6.4 mm) in a six-claw high setting, accurate facet pattern and crisp highlights. No other jewelry. The hands rest on deep wine-coloured (#482E35) silk-velvet with soft natural folds.

COMPOSITION: the cluster of hands is compact and centered horizontally (not wider than 45% of the frame), with the ring at about 50% from the left and 34% from the top; all fingers and the ring lie within x 36–64% and y 14–58%. The bottom 38% of the frame is calm, dark, softly out-of-focus wine-coloured fabric with no detail, reserved for website headline text. Camera: 100 mm macro-portrait lens at f/4, slightly above the hands, sharp focus on the diamond and ring finger, gentle falloff.

LIGHT AND COLOUR: directional warm key light from the upper left, soft shadows, bright clean highlights on the polished gold, a crisp tiny white sparkle with subtle prismatic flashes on the diamond; rich low-key palette of wine, warm skin tones and champagne; quiet luxury editorial mood.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] У каждой руки ровно пять пальцев, суставы и ногти естественны
- [ ] Кольцо — солитёр с шестью лапками на безымянном пальце, посадка верная
- [ ] Кожа с фактурой, без глянцевого «пластика»
- [ ] Нижняя треть кадра тёмная и пустая

---

## № 05. Дом ÉLAVÉRA, история: портрет с серьгами Lumière

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `editorial-3.png` |
| Путь в проекте (после импорта) | `public/images/editorial/editorial-3.webp` |
| Ключ в manifest.json | `editorial/editorial-3` |
| Генерировать в | 2:3 (вертикальный; на сайте кадрируется до 4:5), 1024×1536 или выше |
| Как кадрируется на сайте | Фиксированный 4:5 на телефоне и десктопе (колонка справа в блоке «История и философия»). Кадрируется по центру: сверху и снизу срезается по ~8%. |

**Где используется:**
- Дом ÉLAVÉRA (`/maison`): История и философия — вертикальный портрет справа

**Украшение:** Серьги-капли Lumière (EV-E-002): белое золото 750, длина ≈28 мм; сверху малый круглый бриллиант, на звене крошечный круглый, внизу бриллиант-груша в 6-лапковой корзине; всего 6 камней на пару, ≈1,20 ct.

**Композиция, ракурс, свет, фон:** Тесный портрет в три четверти: лицо повёрнуто влево, ухо и серьга справа от центра в чётком фокусе; волосы убраны за ухо, шея и линия челюсти видны. Тёплый нейтральный фон (#E9E0D5), мягкий боковой свет слева.

**Безопасная зона:** Лицо, ухо и серьга — в области x 25–78%, y 16–78%. Серьга: x 55–70%, y 42–62%.

**Свободное место под текст:** Текст в левой колонке рядом, на фото его нет. Свободное пространство не требуется, но фон должен быть спокойным.

**Референсы:** Загрузите готовые «Серьги-капли Lumière» (№ 11) как референс украшения

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic fashion-editorial close portrait in tall 2:3 portrait format for a premium European diamond jewelry house.

SUBJECT: the ÉLAVÉRA brand model: an elegant woman in her early thirties, warm light-olive skin with real natural texture (fine pores, subtle tonal variation, tiny natural imperfections, soft natural sheen), dark chestnut hair, minimal neutral makeup with a soft matte complexion, calm confident expression, shown from the shoulders up in a three-quarter view, face turned toward the left, ear on the right side of the frame fully visible, hair pulled back neatly behind the ear so the ear, jawline and neck are exposed, calm gaze toward the left out of frame. She wears one drop earring (the visible ear): polished white gold, about 28 mm long — a small round brilliant diamond on top, a fine polished link with one tiny round diamond, and a pear-shaped diamond (about 0.5 ct) hanging below in a six-claw basket with a pointed tip claw; the pear drop hangs straight down by gravity. No other jewelry. Natural anatomy: correct ear shape and earlobe with the earring passing realistically through the lobe, natural neck and shoulder lines, skin with fine pores, subtle tonal variation and soft sheen, no airbrushing or plastic skin.

COMPOSITION: the earring is placed at about 62% from the left and 52% from the top and is in crisp focus; the face, ear and earring stay within x 25–78% and y 16–78%. Background: seamless soft warm beige (#E9E0D5) with a gentle gradient, no objects. Camera: 100 mm portrait lens at f/3.2, eye-level, focus on the earring diamonds with soft falloff on the face edge.

LIGHT AND COLOUR: soft side light from the left, gentle shadow transition across the cheek and neck, bright clean highlights on the polished gold, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds; warm restrained palette of beige, champagne and natural skin tones; quiet luxury editorial mood.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Серьга: круглый камень сверху, груша внизу, тонкое звено между ними
- [ ] Ухо и мочка анатомически правильны, серьга сидит правильно
- [ ] Кожа и волосы фотореалистичны
- [ ] Только одна серьга в кадре (на видимом ухе), без лишних украшений

---

## № 06. Финал главной: натюрморт ансамбля Lumière на винном бархате

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `editorial-4.png` |
| Путь в проекте (после импорта) | `public/images/editorial/editorial-4.webp` |
| Ключ в manifest.json | `editorial/editorial-4` |
| Генерировать в | 3:2 (горизонтальный), 1536×1024 или выше |
| Как кадрируется на сайте | Полноэкранный фон: десктоп ≈2,2:1 (срезается сверху/снизу по ~17%), телефон ≈0,75:1 (остаётся центральная ~50% по ширине). Поверх — градиент слева направо из графита. |

**Где используется:**
- Главная (`/`): Заключительная секция — полноэкранный фон перед переходом в каталог

**Украшение:** Ансамбль коллекции Lumière из каталога, все изделия в белом золоте 750: браслет Lumière Rivière (EV-B-001, 44 круглых бриллианта ≈3,20 ct), кольцо Lumière Oval (EV-R-002, овальный камень ≈7,6×5,4 мм и ореол), серьги-капли Lumière (EV-E-002, груша). Конструкции и пропорции — строго как на товарных фото.

**Композиция, ракурс, свет, фон:** Низкий ключ: натюрморт на глубоком винном бархате (#482E35). Браслет — мягкая дуга в центре композиции, кольцо стоит на ободке перед ним слегка левее, пара серёг лежит чуть правее и выше. Асимметричный баланс, много воздуха. Узкие мягкие пятна света, тёплые блики на золоте, контролируемые вспышки на бриллиантах.

**Безопасная зона:** Все три украшения — в области x 48–82%, y 26–76%. Центр композиции ≈ x 62%, y 50%.

**Свободное место под текст:** Левые ~42% кадра (x 0–42%) — глубокая мягкая тень винного бархата без предметов: там заголовок «Ваш свет уже ждёт» и кнопка.

**Референсы:** Загрузите готовые № 8 (кольцо Lumière Oval), № 11 (серьги-капли Lumière) и № 16 (браслет Lumière Rivière) как референсы

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic low-key luxury still-life photograph in wide 3:2 landscape format for the closing banner of a premium European diamond jewelry house. If reference images of the jewelry are provided in this chat, reproduce those exact pieces faithfully.

SUBJECT: three white-gold diamond jewelry pieces from one collection arranged on deep wine-coloured (#482E35) velvet. (1) A flexible rivière tennis bracelet of 44 identical round brilliant diamonds in individual four-claw baskets, laid in a soft open arc as the centrepiece. (2) A ring with a central oval-cut diamond (about 7.6 × 5.4 mm) in a four-claw open basket surrounded by a thin halo of tiny round diamonds on a thin plain polished white-gold band, standing upright on its band in front of and slightly left of the bracelet. (3) A pair of drop earrings, each with a small round diamond on top, a fine link and a pear-shaped diamond below in a six-claw basket, lying side by side slightly right of and above the bracelet. No other objects, no props, no hands.

COMPOSITION: asymmetrical and balanced; all three pieces lie within x 48–82% and y 26–76% of the frame, centred at about 62% from the left and 50% from the top. The left 42% of the frame is deep, soft, empty wine-coloured velvet fading into shadow, with no objects, reserved for website headline text. Camera: 100 mm macro lens at f/8, slightly above the surface at about 35 degrees, everything sharp from the ring to the earrings.

LIGHT AND COLOUR: low-key lighting with a large soft key from the upper left plus a narrow soft accent light creating gentle warm highlights on the gold and soft sheen on the velvet pile; crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds; dark rich palette of wine, graphite and champagne; quiet luxury mood, no glitter, no bokeh sparkles.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Три изделия соответствуют товарным фото: браслет-ривьера, овальное кольцо с ореолом, серьги-груши
- [ ] Конструкции не искажены, нет лишних украшений
- [ ] Левые 42% кадра тёмные и пустые
- [ ] Фактура бархата реалистична, нет шума и блёсток

---

## № 07. Кольцо Aube Pavé (EV-R-001)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `aube-pave-ring-1.png` |
| Путь в проекте (после импорта) | `public/images/products/aube-pave-ring-1.webp` |
| Ключ в manifest.json | `products/aube-pave-ring-1` |
| Товар | `EV-R-001` · slug `aube-pave-ring` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Главная (`/`): Плитка категории «Кольца» (разные кадрирования: 4:3, 4:5, 1:1, 16:9)
- Главная (`/`): Избранные украшения — карточка
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/aube-pave-ring`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Кольцо Aube Pavé · арт. EV-R-001 · Кольца · коллекция Aube · 3 850 € · камни: круглая, 0,42 кт, 38 шт. · металл на фото — белое золото (металл по умолчанию на сайте; доступно: белое золото, жёлтое золото, розовое золото). a slender women's band ring, 2.2 mm wide, polished white gold; a continuous single row of 38 tiny round brilliant-cut diamonds (about 0.42 ct total) running around the entire outer circumference of the band; classic pavé: each diamond sits in a small bead-set shaton flush with the band, with tiny gold beads between neighbouring stones; smooth polished comfort-fit inner surface.

**Композиция, ракурс, свет, фон:** the ring stands upright on its band, seen from a front three-quarter angle slightly above, so the full diamond row and the inside curve are visible. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, кольцо ≈58–62% ширины и высоты кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a slender women's band ring, 2.2 mm wide, polished white gold. This is catalog item EV-R-001 "aube pave ring" (ring, round brilliant cut diamonds) — render exactly this design and do not invent additional elements.
STONES: a continuous single row of 38 tiny round brilliant-cut diamonds (about 0.42 ct total) running around the entire outer circumference of the band.
SETTING AND CONSTRUCTION: classic pavé: each diamond sits in a small bead-set shaton flush with the band, with tiny gold beads between neighbouring stones; smooth polished comfort-fit inner surface.
METAL: 18k (750) white gold, high polish.
POSE AND ANGLE: the ring stands upright on its band, seen from a front three-quarter angle slightly above, so the full diamond row and the inside curve are visible.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the ring occupies about 58–62% of the frame width and about 58–62% of the frame height; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Один непрерывный ряд камней по всему ободку, без пропусков
- [ ] Ободок тонкий и ровный, без утолщений
- [ ] Камни одинакового размера, правильная круглая огранка
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 08. Кольцо Lumière Oval (EV-R-002)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `lumiere-oval-halo-ring-1.png` |
| Путь в проекте (после импорта) | `public/images/products/lumiere-oval-halo-ring-1.webp` |
| Ключ в manifest.json | `products/lumiere-oval-halo-ring-1` |
| Товар | `EV-R-002` · slug `lumiere-oval-halo-ring` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Главная (`/`): Избранные украшения — карточка
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/lumiere-oval-halo-ring`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Кольцо Lumière Oval · арт. EV-R-002 · Кольца · коллекция Lumière · 7 400 € · камни: овальная, 1,05 кт, 21 шт. · металл на фото — белое золото (металл по умолчанию на сайте; доступно: белое золото, жёлтое золото). a women's ring with a central oval diamond and a delicate halo, thin plain polished white gold band; one central oval-cut diamond (about 7.6 × 5.4 mm) surrounded by a thin halo of tiny round brilliant diamonds (21 stones in total including the centre stone, about 1.05 ct total); four-claw open (ajouré) basket under the centre stone so light passes through it; halo stones in beaded settings; the long axis of the oval is perpendicular to the band.

**Композиция, ракурс, свет, фон:** the ring stands upright on its band, front three-quarter view slightly from above, the oval clearly visible with its facets and the halo. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, кольцо ≈58–62% ширины и высоты кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a women's ring with a central oval diamond and a delicate halo, thin plain polished white gold band. This is catalog item EV-R-002 "lumiere oval halo ring" (ring, oval cut diamonds) — render exactly this design and do not invent additional elements.
STONES: one central oval-cut diamond (about 7.6 × 5.4 mm) surrounded by a thin halo of tiny round brilliant diamonds (21 stones in total including the centre stone, about 1.05 ct total).
SETTING AND CONSTRUCTION: four-claw open (ajouré) basket under the centre stone so light passes through it; halo stones in beaded settings; the long axis of the oval is perpendicular to the band.
METAL: 18k (750) white gold, high polish.
POSE AND ANGLE: the ring stands upright on its band, front three-quarter view slightly from above, the oval clearly visible with its facets and the halo.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the ring occupies about 58–62% of the frame width and about 58–62% of the frame height; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Овальный центральный камень с четырьмя лапками
- [ ] Ореол из мелких камней сплошной, без разрывов
- [ ] Ободок тонкий, гладкий, без паве
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 09. Кольцо Orbite Duo (EV-R-003)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `orbite-toi-et-moi-ring-1.png` |
| Путь в проекте (после импорта) | `public/images/products/orbite-toi-et-moi-ring-1.webp` |
| Ключ в manifest.json | `products/orbite-toi-et-moi-ring-1` |
| Товар | `EV-R-003` · slug `orbite-toi-et-moi-ring` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/orbite-toi-et-moi-ring`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Кольцо Orbite Duo · арт. EV-R-003 · Кольца · коллекция Orbite · 5 900 € · камни: груша, 0,78 кт, 2 шт. · металл на фото — жёлтое золото (металл по умолчанию на сайте; доступно: жёлтое золото). a toi-et-moi ring with two diamonds on a thin plain polished yellow gold band, 1.8 mm wide; two diamonds: one pear-shaped and one round brilliant, about 0.78 ct total, set side by side on top of the band so that they face each other, the pear's pointed tip angled toward the round stone; open claws (three small claws per stone), low and light, no halo, no side stones.

**Композиция, ракурс, свет, фон:** the ring stands upright on its band, front three-quarter view slightly from above so both stones and their arrangement are clearly readable. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, кольцо ≈58–62% ширины и высоты кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a toi-et-moi ring with two diamonds on a thin plain polished yellow gold band, 1.8 mm wide. This is catalog item EV-R-003 "orbite toi et moi ring" (ring, pear cut diamonds) — render exactly this design and do not invent additional elements.
STONES: two diamonds: one pear-shaped and one round brilliant, about 0.78 ct total, set side by side on top of the band so that they face each other, the pear's pointed tip angled toward the round stone.
SETTING AND CONSTRUCTION: open claws (three small claws per stone), low and light, no halo, no side stones.
METAL: 18k (750) yellow gold, high polish.
POSE AND ANGLE: the ring stands upright on its band, front three-quarter view slightly from above so both stones and their arrangement are clearly readable.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the ring occupies about 58–62% of the frame width and about 58–62% of the frame height; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Ровно два камня: груша и круглый
- [ ] Золото жёлтое, приглушённое, не оранжевое
- [ ] Ободок тонкий и гладкий
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 10. Серьги-пусеты Éclat (EV-E-001)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `eclat-solitaire-studs-1.png` |
| Путь в проекте (после импорта) | `public/images/products/eclat-solitaire-studs-1.webp` |
| Ключ в manifest.json | `products/eclat-solitaire-studs-1` |
| Товар | `EV-E-001` · slug `eclat-solitaire-studs` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Главная (`/`): Плитка категории «Серьги» (разные кадрирования: 4:3, 4:5, 1:1, 16:9)
- Главная (`/`): Избранные украшения — карточка
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/eclat-solitaire-studs`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Серьги-пусеты Éclat · арт. EV-E-001 · Серьги · коллекция Éclat · 2 650 € · камни: круглая, 0,60 кт, 2 шт. · металл на фото — белое золото (металл по умолчанию на сайте; доступно: белое золото). a pair of classic stud earrings, polished white gold; two round brilliant-cut diamonds, about 0.30 ct each (0.60 ct total), identical in size and cut; low four-claw settings; the posts and butterfly backs are not visible; the two earrings are exact mirror-image twins.

**Композиция, ракурс, свет, фон:** the pair placed side by side on the surface, about one earring-width apart, both facing the camera straight on, very slightly tilted back so the diamond tables catch the light. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, пара целиком ≈62–68% ширины и ≈40–55% высоты кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a pair of classic stud earrings, polished white gold. This is catalog item EV-E-001 "eclat solitaire studs" (earrings, round brilliant cut diamonds) — render exactly this design and do not invent additional elements.
STONES: two round brilliant-cut diamonds, about 0.30 ct each (0.60 ct total), identical in size and cut.
SETTING AND CONSTRUCTION: low four-claw settings; the posts and butterfly backs are not visible; the two earrings are exact mirror-image twins.
METAL: 18k (750) white gold, high polish.
POSE AND ANGLE: the pair placed side by side on the surface, about one earring-width apart, both facing the camera straight on, very slightly tilted back so the diamond tables catch the light.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the pair as a whole occupies about 62–68% of the frame width and about 40–55% of the frame height; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Ровно две серьги, зеркально одинаковые
- [ ] У каждой один круглый камень в четырёх лапках
- [ ] Нет видимых замков или посторонних деталей
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 11. Серьги-капли Lumière (EV-E-002)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `lumiere-pear-drop-earrings-1.png` |
| Путь в проекте (после импорта) | `public/images/products/lumiere-pear-drop-earrings-1.webp` |
| Ключ в manifest.json | `products/lumiere-pear-drop-earrings-1` |
| Товар | `EV-E-002` · slug `lumiere-pear-drop-earrings` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Главная (`/`): Избранные украшения — карточка
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/lumiere-pear-drop-earrings`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Серьги-капли Lumière · арт. EV-E-002 · Серьги · коллекция Lumière · 6 800 € · камни: груша, 1,20 кт, 6 шт. · металл на фото — белое золото (металл по умолчанию на сайте; доступно: белое золото, жёлтое золото). a pair of elegant drop earrings, polished white gold, about 28 mm long; per earring: one small round brilliant on top, one tiny round brilliant on the link, and one pear-shaped diamond hanging below (6 stones per pair, about 1.20 ct total); the pear diamond sits in a six-claw basket with a refined pointed tip claw; a fine polished link connects the pieces; the earrings are exact mirror-image twins.

**Композиция, ракурс, свет, фон:** the pair suspended as if hanging, vertical, side by side, one hanging very slightly higher than the other for a natural look; seamless warm backdrop behind (no hooks, wires or hands visible). Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, пара целиком ≈62–68% ширины и ≈40–55% высоты кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a pair of elegant drop earrings, polished white gold, about 28 mm long. This is catalog item EV-E-002 "lumiere pear drop earrings" (earrings, pear cut diamonds) — render exactly this design and do not invent additional elements.
STONES: per earring: one small round brilliant on top, one tiny round brilliant on the link, and one pear-shaped diamond hanging below (6 stones per pair, about 1.20 ct total).
SETTING AND CONSTRUCTION: the pear diamond sits in a six-claw basket with a refined pointed tip claw; a fine polished link connects the pieces; the earrings are exact mirror-image twins.
METAL: 18k (750) white gold, high polish.
POSE AND ANGLE: the pair suspended as if hanging, vertical, side by side, one hanging very slightly higher than the other for a natural look; seamless warm backdrop behind (no hooks, wires or hands visible).

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the pair as a whole occupies about 62–68% of the frame width and about 40–55% of the frame height; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Две серьги-капли одинаковой формы
- [ ] Груша внизу, малый круглый камень сверху
- [ ] Нет видимых нитей, крючков или рук
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 12. Серьги-кольца Aube Hoop (EV-E-003)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `aube-huggie-hoops-1.png` |
| Путь в проекте (после импорта) | `public/images/products/aube-huggie-hoops-1.webp` |
| Ключ в manifest.json | `products/aube-huggie-hoops-1` |
| Товар | `EV-E-003` · slug `aube-huggie-hoops` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/aube-huggie-hoops`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Серьги-кольца Aube Hoop · арт. EV-E-003 · Серьги · коллекция Aube · 3 200 € · камни: круглая, 0,50 кт, 32 шт. · металл на фото — белое золото (металл по умолчанию на сайте; доступно: белое золото, жёлтое золото, розовое золото). a pair of small huggie hoop earrings, 14 mm diameter, polished white gold; a row of tiny round brilliant diamonds (32 in total, 16 per earring, about 0.50 ct total) set along the outer edge of each hoop; pavé beads along the outer edge, hidden click closure; slim, rounded gold profile.

**Композиция, ракурс, свет, фон:** the pair standing upright side by side, one seen from the front, the other turned about 45 degrees so the stone row and the thickness of the hoop are both visible. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, пара целиком ≈62–68% ширины и ≈40–55% высоты кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a pair of small huggie hoop earrings, 14 mm diameter, polished white gold. This is catalog item EV-E-003 "aube huggie hoops" (earrings, round brilliant cut diamonds) — render exactly this design and do not invent additional elements.
STONES: a row of tiny round brilliant diamonds (32 in total, 16 per earring, about 0.50 ct total) set along the outer edge of each hoop.
SETTING AND CONSTRUCTION: pavé beads along the outer edge, hidden click closure; slim, rounded gold profile.
METAL: 18k (750) white gold, high polish.
POSE AND ANGLE: the pair standing upright side by side, one seen from the front, the other turned about 45 degrees so the stone row and the thickness of the hoop are both visible.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the pair as a whole occupies about 62–68% of the frame width and about 40–55% of the frame height; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Два небольших кольца одинакового размера
- [ ] Ряд камней равномерный по внешнему краю
- [ ] Замок аккуратный, без видимых дефектов
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 13. Колье Cascade Rivière (EV-N-001)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `cascade-riviere-necklace-1.png` |
| Путь в проекте (после импорта) | `public/images/products/cascade-riviere-necklace-1.webp` |
| Ключ в manifest.json | `products/cascade-riviere-necklace-1` |
| Товар | `EV-N-001` · slug `cascade-riviere-necklace` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Главная (`/`): Плитка категории «Колье и подвески» (разные кадрирования: 4:3, 4:5, 1:1, 16:9)
- Главная (`/`): Избранные украшения — карточка
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/cascade-riviere-necklace`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Колье Cascade Rivière · арт. EV-N-001 · Колье и подвески · коллекция Cascade · 18 900 € · камни: круглая, 4,10 кт, 52 шт. · металл на фото — белое золото (металл по умолчанию на сайте; доступно: белое золото, жёлтое золото). a rivière necklace, 42 cm, polished white gold; 52 round brilliant-cut diamonds (about 4.10 ct total), graduated: largest in the centre, gradually smaller toward the clasp; each diamond in its own individual four-claw basket, linked by a hidden flexible gold structure so the line of stones looks continuous; fine clasp at the back.

**Композиция, ракурс, свет, фон:** the necklace laid flat on the surface as a soft, natural horseshoe / U-shaped arc, the centre largest stones at the lowest point of the curve, viewed from directly above and slightly in front. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, изделие (цепочка/дуга колье) ≈72–80% ширины кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a rivière necklace, 42 cm, polished white gold. This is catalog item EV-N-001 "cascade riviere necklace" (necklace / pendant, round brilliant cut diamonds) — render exactly this design and do not invent additional elements.
STONES: 52 round brilliant-cut diamonds (about 4.10 ct total), graduated: largest in the centre, gradually smaller toward the clasp.
SETTING AND CONSTRUCTION: each diamond in its own individual four-claw basket, linked by a hidden flexible gold structure so the line of stones looks continuous; fine clasp at the back.
METAL: 18k (750) white gold, high polish.
POSE AND ANGLE: the necklace laid flat on the surface as a soft, natural horseshoe / U-shaped arc, the centre largest stones at the lowest point of the curve, viewed from directly above and slightly in front.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the piece (chain and pendant or the full arc of the necklace) spans about 72–80% of the frame width; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Камни плавно уменьшаются к застёжке
- [ ] Непрерывная линия без разрывов и перекрутов
- [ ] Каждый камень в отдельной корзине из четырёх лапок
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 14. Подвеска Éclat Solitaire (EV-N-002)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `eclat-solitaire-pendant-1.png` |
| Путь в проекте (после импорта) | `public/images/products/eclat-solitaire-pendant-1.webp` |
| Ключ в manifest.json | `products/eclat-solitaire-pendant-1` |
| Товар | `EV-N-002` · slug `eclat-solitaire-pendant` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Главная (`/`): Избранные украшения — карточка
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/eclat-solitaire-pendant`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Подвеска Éclat Solitaire · арт. EV-N-002 · Колье и подвески · коллекция Éclat · 2 900 € · камни: круглая, 0,45 кт, 1 шт. · металл на фото — белое золото (металл по умолчанию на сайте; доступно: белое золото, жёлтое золото, розовое золото). a delicate solitaire pendant necklace, polished white gold, very fine chain 42 cm; one round brilliant-cut diamond, about 0.45 ct (about 4.9 mm); four-claw setting with a tiny bail; very thin anchor-link chain.

**Композиция, ракурс, свет, фон:** the pendant lies on the surface with the chain forming a gentle V-shaped curve upward and out of the top of the frame edges evenly; the diamond is the focal point, seen from above and slightly in front. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, изделие (цепочка/дуга колье) ≈72–80% ширины кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a delicate solitaire pendant necklace, polished white gold, very fine chain 42 cm. This is catalog item EV-N-002 "eclat solitaire pendant" (necklace / pendant, round brilliant cut diamonds) — render exactly this design and do not invent additional elements.
STONES: one round brilliant-cut diamond, about 0.45 ct (about 4.9 mm).
SETTING AND CONSTRUCTION: four-claw setting with a tiny bail; very thin anchor-link chain.
METAL: 18k (750) white gold, high polish.
POSE AND ANGLE: the pendant lies on the surface with the chain forming a gentle V-shaped curve upward and out of the top of the frame edges evenly; the diamond is the focal point, seen from above and slightly in front.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the piece (chain and pendant or the full arc of the necklace) spans about 72–80% of the frame width; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Один круглый камень в четырёх лапках
- [ ] Цепочка тонкая, звенья читаемы
- [ ] Цепочка не обрезается неестественно
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 15. Подвеска Aube Oval (EV-N-003)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `aube-oval-pendant-1.png` |
| Путь в проекте (после импорта) | `public/images/products/aube-oval-pendant-1.webp` |
| Ключ в manifest.json | `products/aube-oval-pendant-1` |
| Товар | `EV-N-003` · slug `aube-oval-pendant` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/aube-oval-pendant`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Подвеска Aube Oval · арт. EV-N-003 · Колье и подвески · коллекция Aube · 4 350 € · камни: овальная, 0,70 кт, 1 шт. · металл на фото — жёлтое золото (металл по умолчанию на сайте; доступно: жёлтое золото, розовое золото). a pendant necklace with an oval diamond, polished yellow gold, fine chain 45 cm; one oval-cut diamond, about 0.70 ct (about 7 × 5 mm); thin bezel (rim) setting around the stone, polished gold collar, small bail, fine chain.

**Композиция, ракурс, свет, фон:** the pendant lies on the surface with the chain in a gentle V-shaped curve, oval oriented with its long axis vertical, seen from above and slightly in front. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, изделие (цепочка/дуга колье) ≈72–80% ширины кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a pendant necklace with an oval diamond, polished yellow gold, fine chain 45 cm. This is catalog item EV-N-003 "aube oval pendant" (necklace / pendant, oval cut diamonds) — render exactly this design and do not invent additional elements.
STONES: one oval-cut diamond, about 0.70 ct (about 7 × 5 mm).
SETTING AND CONSTRUCTION: thin bezel (rim) setting around the stone, polished gold collar, small bail, fine chain.
METAL: 18k (750) yellow gold, high polish.
POSE AND ANGLE: the pendant lies on the surface with the chain in a gentle V-shaped curve, oval oriented with its long axis vertical, seen from above and slightly in front.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the piece (chain and pendant or the full arc of the necklace) spans about 72–80% of the frame width; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Один овальный камень в тонком безеле
- [ ] Золото жёлтое, приглушённое
- [ ] Цепочка тонкая и непрерывная
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 16. Браслет Lumière Rivière (EV-B-001)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `lumiere-riviere-bracelet-1.png` |
| Путь в проекте (после импорта) | `public/images/products/lumiere-riviere-bracelet-1.webp` |
| Ключ в manifest.json | `products/lumiere-riviere-bracelet-1` |
| Товар | `EV-B-001` · slug `lumiere-riviere-bracelet` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Главная (`/`): Плитка категории «Браслеты» (разные кадрирования: 4:3, 4:5, 1:1, 16:9)
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/lumiere-riviere-bracelet`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Браслет Lumière Rivière · арт. EV-B-001 · Браслеты · коллекция Lumière · 12 400 € · камни: круглая, 3,20 кт, 44 шт. · металл на фото — белое золото (металл по умолчанию на сайте; доступно: белое золото, жёлтое золото). a flexible rivière tennis bracelet, 17.5 cm, polished white gold; 44 identical round brilliant-cut diamonds (about 3.20 ct total) in one continuous line; each stone in an individual four-claw basket, flexible links, box clasp with a safety catch visible as a slim rectangular closure.

**Композиция, ракурс, свет, фон:** the bracelet laid on the surface in a soft open C-shaped / oval curve, as if just removed from the wrist, the clasp placed naturally at the back right; viewed from above and slightly in front. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, изделие ≈72–78% ширины кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a flexible rivière tennis bracelet, 17.5 cm, polished white gold. This is catalog item EV-B-001 "lumiere riviere bracelet" (bracelet, round brilliant cut diamonds) — render exactly this design and do not invent additional elements.
STONES: 44 identical round brilliant-cut diamonds (about 3.20 ct total) in one continuous line.
SETTING AND CONSTRUCTION: each stone in an individual four-claw basket, flexible links, box clasp with a safety catch visible as a slim rectangular closure.
METAL: 18k (750) white gold, high polish.
POSE AND ANGLE: the bracelet laid on the surface in a soft open C-shaped / oval curve, as if just removed from the wrist, the clasp placed naturally at the back right; viewed from above and slightly in front.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the piece spans about 72–78% of the frame width; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Камни одинакового размера, непрерывная линия
- [ ] Замок-коробочка читаем, но не доминирует
- [ ] Браслет изогнут естественно, без изломов
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 17. Браслет-жёсткий Orbite (EV-B-002)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `orbite-bangle-1.png` |
| Путь в проекте (после импорта) | `public/images/products/orbite-bangle-1.webp` |
| Ключ в manifest.json | `products/orbite-bangle-1` |
| Товар | `EV-B-002` · slug `orbite-bangle` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/orbite-bangle`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Браслет-жёсткий Orbite · арт. EV-B-002 · Браслеты · коллекция Orbite · 5 400 € · камни: круглая, 0,56 кт, 7 шт. · металл на фото — жёлтое золото (металл по умолчанию на сайте; доступно: жёлтое золото, розовое золото). a slim rigid oval bangle bracelet, polished yellow gold, about 4 mm wide, inner diameter 58 mm; seven round diamonds (about 0.08 ct each, 0.56 ct total) evenly spaced around the bangle, set flush into the band; flush bezel-style settings so the diamonds are level with the gold surface; hidden hinge and concealed clasp; smooth polished profile.

**Композиция, ракурс, свет, фон:** the bangle stands on its edge, tilted slightly toward the camera, so the oval opening and the evenly spaced stones are visible. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, изделие ≈72–78% ширины кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a slim rigid oval bangle bracelet, polished yellow gold, about 4 mm wide, inner diameter 58 mm. This is catalog item EV-B-002 "orbite bangle" (bracelet, round brilliant cut diamonds) — render exactly this design and do not invent additional elements.
STONES: seven round diamonds (about 0.08 ct each, 0.56 ct total) evenly spaced around the bangle, set flush into the band.
SETTING AND CONSTRUCTION: flush bezel-style settings so the diamonds are level with the gold surface; hidden hinge and concealed clasp; smooth polished profile.
METAL: 18k (750) yellow gold, high polish.
POSE AND ANGLE: the bangle stands on its edge, tilted slightly toward the camera, so the oval opening and the evenly spaced stones are visible.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the piece spans about 72–78% of the frame width; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Ровно семь камней, равномерно по кругу
- [ ] Браслет жёсткий, овальный, без видимого замка
- [ ] Золото жёлтое, приглушённое
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 18. Браслет-цепь Aube (EV-B-003)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `aube-chain-bracelet-1.png` |
| Путь в проекте (после импорта) | `public/images/products/aube-chain-bracelet-1.webp` |
| Ключ в manifest.json | `products/aube-chain-bracelet-1` |
| Товар | `EV-B-003` · slug `aube-chain-bracelet` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/aube-chain-bracelet`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Браслет-цепь Aube · арт. EV-B-003 · Браслеты · коллекция Aube · 2 100 € · камни: круглая, 0,18 кт, 3 шт. · металл на фото — белое золото (металл по умолчанию на сайте; доступно: белое золото, жёлтое золото, розовое золото). a light chain bracelet, polished white gold, 17–19 cm with a lobster clasp; three small round brilliant diamonds (about 0.06 ct each, 0.18 ct total) in tiny bezels that slide freely along the chain, evenly spaced; tiny bezel stations on a very fine polished chain; small lobster clasp and extension ring.

**Композиция, ракурс, свет, фон:** the bracelet laid on the surface in a loose, natural S-curve with the three stones clearly visible and the clasp resting near one end of the frame. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, изделие ≈72–78% ширины кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a light chain bracelet, polished white gold, 17–19 cm with a lobster clasp. This is catalog item EV-B-003 "aube chain bracelet" (bracelet, round brilliant cut diamonds) — render exactly this design and do not invent additional elements.
STONES: three small round brilliant diamonds (about 0.06 ct each, 0.18 ct total) in tiny bezels that slide freely along the chain, evenly spaced.
SETTING AND CONSTRUCTION: tiny bezel stations on a very fine polished chain; small lobster clasp and extension ring.
METAL: 18k (750) white gold, high polish.
POSE AND ANGLE: the bracelet laid on the surface in a loose, natural S-curve with the three stones clearly visible and the clasp resting near one end of the frame.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the piece spans about 72–78% of the frame width; even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Ровно три небольших камня на тонкой цепи
- [ ] Цепь тонкая, звенья читаемы
- [ ] Замок-карабин небольшой и аккуратный
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 19. Помолвочное кольцо Promesse Round (EV-P-001)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `promesse-round-solitaire-1.png` |
| Путь в проекте (после импорта) | `public/images/products/promesse-round-solitaire-1.webp` |
| Ключ в manifest.json | `products/promesse-round-solitaire-1` |
| Товар | `EV-P-001` · slug `promesse-round-solitaire` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Главная (`/`): Плитка категории «Помолвочные кольца» (разные кадрирования: 4:3, 4:5, 1:1, 16:9)
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/promesse-round-solitaire`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Помолвочное кольцо Promesse Round · арт. EV-P-001 · Помолвочные кольца · коллекция Promesse · 9 800 € · камни: круглая, 1,00 кт, 1 шт. · металл на фото — жёлтое золото (металл по умолчанию на сайте; доступно: жёлтое золото, белое золото, розовое золото). a classic solitaire engagement ring, thin polished white gold (platinum-look) band 1.8 mm wide, flat on top; one round brilliant-cut diamond of about 1.00 ct (about 6.4 mm), exceptional cut with crisp facet symmetry; six-claw high setting with slim claws and an open gallery; refined and light; plain band without side stones.

**Композиция, ракурс, свет, фон:** the ring stands upright on its band, front three-quarter view slightly from above so the table facets, six claws and the thin band are clearly visible. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, кольцо ≈58–62% ширины и ≈62–66% высоты кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a classic solitaire engagement ring, thin polished white gold (platinum-look) band 1.8 mm wide, flat on top. This is catalog item EV-P-001 "promesse round solitaire" (engagement ring, round brilliant cut diamonds) — render exactly this design and do not invent additional elements.
STONES: one round brilliant-cut diamond of about 1.00 ct (about 6.4 mm), exceptional cut with crisp facet symmetry.
SETTING AND CONSTRUCTION: six-claw high setting with slim claws and an open gallery; refined and light; plain band without side stones.
METAL: 18k (750) yellow gold, high polish.
POSE AND ANGLE: the ring stands upright on its band, front three-quarter view slightly from above so the table facets, six claws and the thin band are clearly visible.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the ring occupies about 58–62% of the frame width and about 62–66% of the frame height (the stone is the visual focus); even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Ровно шесть лапок вокруг одного круглого камня
- [ ] Ободок тонкий и гладкий
- [ ] Огранка круглая бриллиантовая, симметричные грани
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 20. Помолвочное кольцо Promesse Oval (EV-P-002)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `promesse-oval-hidden-halo-1.png` |
| Путь в проекте (после импорта) | `public/images/products/promesse-oval-hidden-halo-1.webp` |
| Ключ в manifest.json | `products/promesse-oval-hidden-halo-1` |
| Товар | `EV-P-002` · slug `promesse-oval-hidden-halo` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/promesse-oval-hidden-halo`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Помолвочное кольцо Promesse Oval · арт. EV-P-002 · Помолвочные кольца · коллекция Promesse · 11 600 € · камни: овальная, 1,30 кт, 25 шт. · металл на фото — белое золото (металл по умолчанию на сайте; доступно: белое золото, жёлтое золото). an engagement ring with an oval diamond and a hidden halo, thin polished white gold band; one oval-cut centre diamond (about 1.0 ct) with a hidden halo: a thin ring of tiny round diamonds under the centre stone, visible mainly from the side (25 stones in total, about 1.30 ct total); four double claws (eight claw tips) holding the oval; the hidden halo sits below the girdle inside the basket; thin plain band.

**Композиция, ракурс, свет, фон:** the ring stands upright on its band, a three-quarter side view so both the oval table and the hidden halo under the stone can be seen. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, кольцо ≈58–62% ширины и ≈62–66% высоты кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: an engagement ring with an oval diamond and a hidden halo, thin polished white gold band. This is catalog item EV-P-002 "promesse oval hidden halo" (engagement ring, oval cut diamonds) — render exactly this design and do not invent additional elements.
STONES: one oval-cut centre diamond (about 1.0 ct) with a hidden halo: a thin ring of tiny round diamonds under the centre stone, visible mainly from the side (25 stones in total, about 1.30 ct total).
SETTING AND CONSTRUCTION: four double claws (eight claw tips) holding the oval; the hidden halo sits below the girdle inside the basket; thin plain band.
METAL: 18k (750) white gold, high polish.
POSE AND ANGLE: the ring stands upright on its band, a three-quarter side view so both the oval table and the hidden halo under the stone can be seen.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the ring occupies about 58–62% of the frame width and about 62–66% of the frame height (the stone is the visual focus); even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Скрытый ореол виден сбоку под камнем
- [ ] Четыре двойные лапки
- [ ] Ободок тонкий и гладкий
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 21. Помолвочное кольцо Promesse Trilogy (EV-P-003)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `promesse-emerald-trilogy-1.png` |
| Путь в проекте (после импорта) | `public/images/products/promesse-emerald-trilogy-1.webp` |
| Ключ в manifest.json | `products/promesse-emerald-trilogy-1` |
| Товар | `EV-P-003` · slug `promesse-emerald-trilogy` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/promesse-emerald-trilogy`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Помолвочное кольцо Promesse Trilogy · арт. EV-P-003 · Помолвочные кольца · коллекция Promesse · 14 200 € · камни: изумрудная, 1,60 кт, 3 шт. · металл на фото — белое золото (металл по умолчанию на сайте; доступно: белое золото, жёлтое золото). a three-stone engagement ring, polished white gold (platinum-look) band; one emerald-cut centre diamond (about 0.8 ct, long step-cut facets) flanked by two tapered baguette diamonds (about 0.4 ct each); about 1.60 ct total; corner claws on the emerald-cut stone, channel or claw settings on the baguettes; clean architectural lines; band thin and plain.

**Композиция, ракурс, свет, фон:** the ring stands upright on its band, front three-quarter view slightly from above so the step facets of the emerald cut and both side baguettes are clearly visible. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, кольцо ≈58–62% ширины и ≈62–66% высоты кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: a three-stone engagement ring, polished white gold (platinum-look) band. This is catalog item EV-P-003 "promesse emerald trilogy" (engagement ring, emerald cut diamonds) — render exactly this design and do not invent additional elements.
STONES: one emerald-cut centre diamond (about 0.8 ct, long step-cut facets) flanked by two tapered baguette diamonds (about 0.4 ct each); about 1.60 ct total.
SETTING AND CONSTRUCTION: corner claws on the emerald-cut stone, channel or claw settings on the baguettes; clean architectural lines; band thin and plain.
METAL: 18k (750) white gold, high polish.
POSE AND ANGLE: the ring stands upright on its band, front three-quarter view slightly from above so the step facets of the emerald cut and both side baguettes are clearly visible.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the ring occupies about 58–62% of the frame width and about 62–66% of the frame height (the stone is the visual focus); even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Изумрудная огранка со ступенчатыми гранями
- [ ] Два боковых багета симметричны
- [ ] Ровно три камня
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями

---

## № 22. Помолвочное кольцо Promesse Pear (EV-P-004)

| Поле | Значение |
|---|---|
| Файл (при загрузке) | `promesse-pear-solitaire-1.png` |
| Путь в проекте (после импорта) | `public/images/products/promesse-pear-solitaire-1.webp` |
| Ключ в manifest.json | `products/promesse-pear-solitaire-1` |
| Товар | `EV-P-004` · slug `promesse-pear-solitaire` |
| Генерировать в | 1:1 (квадрат), 1536×1536 или 1024×1024 |
| Как кадрируется на сайте | Показывается ЦЕЛИКОМ (object-contain), без обрезки: квадратные карточки каталога, главная страница изделия, миниатюры корзины и поиска, плитки категорий, блок Signature. Фон под фото берётся из цвета краёв снимка. |

**Где используется:**
- Каталог (`/collections`): Карточка изделия в сетке (основное фото)
- Карточка украшения (`/product/promesse-pear-solitaire`): Основное изображение галереи (ракурс 1) и миниатюра
- Корзина и оформление (`/checkout`): Миниатюра позиции в боковой корзине и в сводке заказа
- Поиск (панель шапки) (`любая страница`): Миниатюра результата поиска
- Карточка украшения (`/product/*`): Блок «Похожие украшения» (когда изделие попадает в подборку)

**Украшение:** Помолвочное кольцо Promesse Pear · арт. EV-P-004 · Помолвочные кольца · коллекция Promesse · 10 400 € · камни: груша, 1,10 кт, 1 шт. · металл на фото — розовое золото (металл по умолчанию на сайте; доступно: розовое золото, жёлтое золото). an engagement ring, thin polished rose gold band 1.7 mm wide; one pear-shaped diamond of about 1.10 ct with a clean pointed tip and rounded end; a V-shaped claw protecting the pointed tip plus three more slim claws; open gallery; plain band without side stones.

**Композиция, ракурс, свет, фон:** the ring stands upright on its band, front three-quarter view slightly from above, the pear oriented with its tip pointing away from the finger. Фон — ровная бесшовная слоновая кость #F5F1EA по краям кадра (без виньетки); мягкий ключевой свет сверху-слева, заполняющий справа, едва заметная контактная тень; без реквизита.

**Безопасная зона:** Украшение по центру, кольцо ≈58–62% ширины и ≈62–66% высоты кадра; ровные поля со всех сторон, ничто не касается краёв. Фон по всем четырём краям — ровный #F5F1EA.

**Свободное место под текст:** Не требуется: на изображении нет текста; поверх фото на сайте лежат только бейджи в углах и кнопка внизу карточки при наведении.

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury jewelry product photograph in square 1:1 format for the catalog of a premium European fine-jewelry house.

SUBJECT: an engagement ring, thin polished rose gold band 1.7 mm wide. This is catalog item EV-P-004 "promesse pear solitaire" (engagement ring, pear cut diamonds) — render exactly this design and do not invent additional elements.
STONES: one pear-shaped diamond of about 1.10 ct with a clean pointed tip and rounded end.
SETTING AND CONSTRUCTION: a V-shaped claw protecting the pointed tip plus three more slim claws; open gallery; plain band without side stones.
METAL: 18k (750) rose gold, high polish.
POSE AND ANGLE: the ring stands upright on its band, front three-quarter view slightly from above, the pear oriented with its tip pointing away from the finger.

FRAMING (important): perfectly centered composition, one single piece (or one pair) only; the ring occupies about 58–62% of the frame width and about 62–66% of the frame height (the stone is the visual focus); even margins around it. The website shows this square image in full without cropping, so nothing may touch or cross the frame edges. BACKGROUND: a uniform seamless warm ivory exactly #F5F1EA along all four edges of the frame (a very soft, barely perceptible light falloff is allowed only in the middle behind the piece); no vignette, no darker corners, no horizon line, no visible table edge, no props, no reflections of other objects. The picture is placed on a #F5F1EA page without a border, so the edges must be the flat ivory colour. Very soft, subtle contact shadow directly under the piece only.

LIGHT: large soft key light from the upper left, soft fill from the right, bright clean specular highlights on the polished metal, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible refraction and facet geometry, natural soft shadow. Camera: 100 mm macro lens, f/9 for full sharpness across the piece, shot from slightly above.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Груша с острым наконечником в V-образной лапке
- [ ] Розовое золото мягкое, не красное
- [ ] Ободок тонкий и гладкий
- [ ] Нет текста, клейм, логотипов и посторонних предметов
- [ ] Украшение целиком в кадре и по центру с полями
