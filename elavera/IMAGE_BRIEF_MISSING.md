# ÉLAVÉRA — ТЗ на недостающие изображения (11 шт.)

> Сгенерировано автоматически (`npx tsx scripts/build-brief.ts`) из полного ТЗ `IMAGE_GENERATION_BRIEF.md`: здесь только кадры, которых ещё нет на сайте. Номера сохранены из полного ТЗ.

## 0. Что принято и что осталось

Принято и работает на сайте: **11 из 22** (все — товарные фото). Осталось: **6 имиджевых кадров** (Hero и editorial) и **5 товарных**.

| № | Файл | Что это | Ратио |
|---|---|---|---|
| 01 | `hero-desktop.png` | Hero (десктоп): модель в колье Cascade Rivière | 3:2 |
| 02 | `hero-mobile.png` | Hero (мобильная версия): та же модель и колье | 2:3 |
| 03 | `editorial-1.png` | Editorial Story: портрет с подвеской Éclat Solitaire | 1:1 |
| 04 | `editorial-2.png` | Дом ÉLAVÉRA, первый экран: руки с кольцом Promesse Round | 3:2 |
| 05 | `editorial-3.png` | Дом ÉLAVÉRA, история: портрет с серьгами Lumière | 2:3 |
| 06 | `editorial-4.png` | Финал главной: натюрморт ансамбля Lumière на винном бархате | 3:2 |
| 17 | `orbite-bangle-1.png` | Браслет-жёсткий Orbite (EV-B-002) | 1:1 |
| 18 | `aube-chain-bracelet-1.png` | Браслет-цепь Aube (EV-B-003) | 1:1 |
| 20 | `promesse-oval-hidden-halo-1.png` | Помолвочное кольцо Promesse Oval (EV-P-002) | 1:1 |
| 21 | `promesse-emerald-trilogy-1.png` | Помолвочное кольцо Promesse Trilogy (EV-P-003) | 1:1 |
| 22 | `promesse-pear-solitaire-1.png` | Помолвочное кольцо Promesse Pear (EV-P-004) | 1:1 |

## 1. Порядок работы (важно)

1. **Сначала товарные кадры** (№ 17, 18, 20, 21, 22), потом имиджевые (№ 1, 2, 3, 4, 5, 6).
2. **Принятые фото — ваш главный референс стиля.** В каждом новом чате прикрепите 2 из них и напишите: *«Match the exact photographic style of these two reference photos: same warm ivory background, same soft light from the upper left, same scale, same level of realism, same polished metal and diamond rendering»*. Рекомендуемая пара: `aube-huggie-hoops-1.png` и `lumiere-riviere-bracelet-1.png`.
3. **Для Hero и editorial прикрепляйте фото украшения** — какое именно, указано в поле «Референсы» каждого задания. Hero-desktop и Hero-mobile и все портреты с моделью делайте **в одном чате**, чтобы внешность модели совпадала.
4. Одно изображение — одно сообщение; копируйте блок PROMPT целиком. Просите максимальное разрешение и PNG.
5. Края товарных кадров — ровный фон цвета слоновой кости (как в принятых: ≈ #F3EDE7), без виньетки; изделие целиком, не касается краёв.
6. Присылайте файлами или архивом (имена могут быть любыми: я определяю содержимое по виду), затем я импортирую их и проверю на сайте.

**Принятые фото (референсы стиля и украшений):** `aube-pave-ring-1.png`, `lumiere-oval-halo-ring-1.png`, `orbite-toi-et-moi-ring-1.png`, `eclat-solitaire-studs-1.png`, `lumiere-pear-drop-earrings-1.png`, `aube-huggie-hoops-1.png`, `cascade-riviere-necklace-1.png`, `eclat-solitaire-pendant-1.png`, `aube-oval-pendant-1.png`, `lumiere-riviere-bracelet-1.png`, `promesse-round-solitaire-1.png`.

**Критерии приёмки для людей и рук:** естественная фактура кожи (поры, мягкий блеск, без «пластика»), по пять пальцев, корректная анатомия, украшение сидит физически правдоподобно; **без текста, логотипов и водяных знаков**.

## 2. Открытый вопрос по Promesse Oval
По каталогу это кольцо со **скрытым** ореолом (мелкие камни под центральным, видны сбоку). Присланный ранее кадр #16 показывал **видимый** ореол и паве на ободке. Если вы хотите принять тот вариант, пропустите это задание — я поправлю описание в каталоге. Если нет, генерируйте по заданию ниже.

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

**Референсы:** Прикрепите принятое фото cascade-riviere-necklace-1.png как референс колье

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury fashion campaign photograph in wide 3:2 landscape format for the hero banner of a premium European diamond jewelry house.

SUBJECT: an elegant woman's neck, collarbones and bare shoulders, wearing a platinum-look polished white-gold rivière necklace of 52 round brilliant-cut diamonds (about 4.10 ct total) in individual four-claw baskets, graduated in size from the largest stones at the centre to smaller stones toward the clasp, forming one continuous flexible line of light that rests at the base of the neck just above the collarbones, symmetrical around the neck. The woman is the ÉLAVÉRA brand model: an elegant woman in her early thirties, warm light-olive skin with real natural texture (fine pores, subtle tonal variation, tiny natural imperfections, soft natural sheen), dark chestnut hair, minimal neutral makeup with a soft matte complexion, calm confident expression; her face is cropped out at the lower lip/chin line so the picture is about the neck and décolleté. Hair gathered in a sleek low chignon so the neck and shoulders are fully free. She wears an off-the-shoulder ivory-champagne silk top with soft natural folds. Natural anatomy: correct neck length, natural collarbone structure, relaxed shoulders, realistic skin with visible fine texture and soft sheen — no airbrushing, no plastic skin.

COMPOSITION: the neck and necklace are placed in the right half of the frame (necklace centre at about 66% from the left, 55% from the top); the whole jewelry lies within x 42–88% and y 28–80% of the frame. The left 40% of the frame is calm, empty, softly out-of-focus warm ivory-beige backdrop with no objects, no hard shadows and no detail — reserved for website headline text. Camera: 85 mm portrait lens at f/4, eye-level, slightly turned three-quarter view of the model, sharp focus on the necklace diamonds, gentle falloff elsewhere.

LIGHT AND COLOUR: soft diffused window light from the left, gentle gradient shadow on the neck and shoulders, bright clean specular highlights on the polished gold, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds, physically plausible reflections. Warm, quiet, restrained colour palette of ivory, champagne and soft beige; refined editorial mood; no heavy vignette.

REFERENCE: the attached photo shows the exact necklace (graduated round brilliant rivière, white gold, four-claw baskets); reproduce this piece faithfully on the model.

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

**Референсы:** ОБЯЗАТЕЛЬНО: в том же чате прикрепите готовое hero-desktop.png (модель, колье, свет) и принятое cascade-riviere-necklace-1.png

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Using the previously generated desktop hero image as the exact reference (same woman, same hairstyle, same ivory-champagne silk top, same rivière necklace, same lighting and colour grading), recompose it as a photorealistic luxury fashion campaign photograph in tall vertical 2:3 portrait format for the mobile hero of a premium European diamond jewelry house.

SUBJECT: an elegant woman's neck, collarbones and bare shoulders, wearing a polished white-gold rivière necklace of 52 round brilliant-cut diamonds (about 4.10 ct total) in individual four-claw baskets, graduated from the largest central stones to smaller stones toward the clasp, forming one continuous line that rests at the base of the neck just above the collarbones, perfectly symmetrical. The woman is the ÉLAVÉRA brand model: an elegant woman in her early thirties, warm light-olive skin with real natural texture (fine pores, subtle tonal variation, tiny natural imperfections, soft natural sheen), dark chestnut hair, minimal neutral makeup with a soft matte complexion, calm confident expression; her face is cropped out at the lower lip/chin line. Hair in a sleek low chignon, neck fully free, off-the-shoulder ivory-champagne silk top. Natural anatomy, realistic skin texture with fine pores and soft sheen, no airbrushing.

COMPOSITION: the necklace and neck are centered horizontally and placed in the vertical middle of the frame (necklace centre at about 50% from the left and 52% from the top). Keep all important elements within x 20–80% and y 30–72% of the frame, because the website crops this image to a centered square. Roughly the top 20% and bottom 20% of the frame are calm, softly out-of-focus warm ivory-beige backdrop (top) and silk fabric falling softly out of focus (bottom). Camera: 85 mm portrait lens at f/4, eye-level, very slight three-quarter turn, sharp focus on the diamonds.

LIGHT AND COLOUR: soft diffused window light from the left, gentle shadow gradient on the neck, bright clean highlights on polished gold, crisp tiny white sparkles with a few subtle prismatic flashes, physically plausible reflections; warm restrained palette of ivory, champagne and soft beige; no vignette.

REFERENCE: the attached desktop hero image and the attached necklace photo define the exact necklace and model; keep them identical.

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

**Референсы:** Прикрепите принятое фото eclat-solitaire-pendant-1.png как референс подвески

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic fashion-editorial portrait in square 1:1 format for a premium European diamond jewelry house.

SUBJECT: the ÉLAVÉRA brand model: an elegant woman in her early thirties, warm light-olive skin with real natural texture (fine pores, subtle tonal variation, tiny natural imperfections, soft natural sheen), dark chestnut hair, minimal neutral makeup with a soft matte complexion, calm confident expression, photographed from the chest up in a gentle three-quarter view, face turned slightly toward the right, gaze directed softly out of frame to the right, chin slightly lifted, bare shoulders, hair in a smooth low chignon. She wears a single delicate solitaire pendant necklace: a very fine polished white-gold anchor-link chain (42 cm) with one round brilliant-cut diamond of about 0.45 ct (about 4.9 mm) in a four-claw setting that rests at the centre of the collarbones. No other jewelry. Natural anatomy: correct proportions of face, ear, neck and collarbones; skin with real fine pores, subtle freckles, soft natural sheen, no airbrushing or plastic smoothing; natural eyelashes, natural lips.

COMPOSITION: the face and pendant stay within x 22–78% and y 18–82% of the frame; the pendant sits at about 50% from the left and 68% from the top and is in crisp focus; background is deep wine-coloured (#482E35) silk drapery in soft out-of-focus folds with a subtle warm gradient. Camera: 85 mm lens at f/2.8, eye-level, focus on the pendant diamond and the eyes' plane, gentle falloff.

LIGHT AND COLOUR: soft warm window light from the left with gentle shadow transition on the right side of the face and neck, subtle rim light on the shoulder, bright clean highlights on the gold and a crisp tiny white sparkle with a faint prismatic flash on the diamond. Rich but restrained palette of wine, warm skin tones and champagne; quiet luxury editorial mood.

REFERENCE: the attached photo shows the exact solitaire pendant (round brilliant, four-claw, fine chain); reproduce it faithfully.

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

**Украшение:** Помолвочное кольцо Promesse Round (EV-P-001): ЖЁЛТОЕ золото 750 (как на принятом фото), круглый бриллиант ≈1,00 ct в 6 лапках, тонкий гладкий ободок 1,8 мм.

**Композиция, ракурс, свет, фон:** Две женские руки в сдержанном жесте: левая рука с кольцом на безымянном пальце, правая бережно поддерживает её; пальцы расслаблены, ногти короткие овальные, без яркого лака. Руки на глубоком винном шёлке/бархате. Свет направленный тёплый сверху-слева, мягкая падающая тень.

**Безопасная зона:** Кольцо и пальцы — в центральной трети: x 36–64%, y 14–58%. Вся композиция рук — не шире ~45% кадра.

**Свободное место под текст:** Нижние ~38% кадра (y 62–100%) — тёмный спокойный винный фон без деталей: туда накладывается заголовок «Искусство оставаться незабываемой» (слева снизу) под градиентом.

**Референсы:** Прикрепите принятое фото promesse-round-solitaire-1.png как референс кольца

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic luxury fashion-editorial close-up in wide 3:2 landscape format for the hero of a premium European diamond jewelry house.

SUBJECT: two elegant female hands of the ÉLAVÉRA brand model: an elegant woman in her early thirties, warm light-olive skin with real natural texture (fine pores, subtle tonal variation, tiny natural imperfections, soft natural sheen), dark chestnut hair, minimal neutral makeup with a soft matte complexion, calm confident expression, shown in a calm, restrained gesture: the left hand rests with the fingers relaxed and gently curved, wearing a classic solitaire engagement ring on the ring finger; the right hand lightly supports it from underneath. Hands are fully natural: exactly five fingers each, natural joints, knuckles and finger length, short neat oval nails with a nude sheer finish, realistic skin with fine texture, tiny natural creases and soft sheen, no airbrushing. The ring: thin polished soft champagne-yellow gold band (1.8 mm, plain, no side stones), one round brilliant-cut diamond of about 1.00 ct (about 6.4 mm) in a six-claw high setting, accurate facet pattern and crisp highlights. No other jewelry. The hands rest on deep wine-coloured (#482E35) silk-velvet with soft natural folds.

COMPOSITION: the cluster of hands is compact and centered horizontally (not wider than 45% of the frame), with the ring at about 50% from the left and 34% from the top; all fingers and the ring lie within x 36–64% and y 14–58%. The bottom 38% of the frame is calm, dark, softly out-of-focus wine-coloured fabric with no detail, reserved for website headline text. Camera: 100 mm macro-portrait lens at f/4, slightly above the hands, sharp focus on the diamond and ring finger, gentle falloff.

LIGHT AND COLOUR: directional warm key light from the upper left, soft shadows, bright clean highlights on the polished gold, a crisp tiny white sparkle with subtle prismatic flashes on the diamond; rich low-key palette of wine, warm skin tones and champagne; quiet luxury editorial mood.

REFERENCE: the attached photo shows the exact ring (round brilliant, six claws, thin plain yellow-gold band); reproduce it faithfully on the ring finger.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] У каждой руки ровно пять пальцев, суставы и ногти естественны
- [ ] Кольцо — жёлтое золото, солитёр с шестью лапками на безымянном пальце, посадка верная
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

**Референсы:** Прикрепите принятое фото lumiere-pear-drop-earrings-1.png как референс серьги

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic fashion-editorial close portrait in tall 2:3 portrait format for a premium European diamond jewelry house.

SUBJECT: the ÉLAVÉRA brand model: an elegant woman in her early thirties, warm light-olive skin with real natural texture (fine pores, subtle tonal variation, tiny natural imperfections, soft natural sheen), dark chestnut hair, minimal neutral makeup with a soft matte complexion, calm confident expression, shown from the shoulders up in a three-quarter view, face turned toward the left, ear on the right side of the frame fully visible, hair pulled back neatly behind the ear so the ear, jawline and neck are exposed, calm gaze toward the left out of frame. She wears one drop earring (the visible ear): polished white gold, about 28 mm long — a small round brilliant diamond on top, a fine polished link with one tiny round diamond, and a pear-shaped diamond (about 0.5 ct) hanging below in a six-claw basket with a pointed tip claw; the pear drop hangs straight down by gravity. No other jewelry. Natural anatomy: correct ear shape and earlobe with the earring passing realistically through the lobe, natural neck and shoulder lines, skin with fine pores, subtle tonal variation and soft sheen, no airbrushing or plastic skin.

COMPOSITION: the earring is placed at about 62% from the left and 52% from the top and is in crisp focus; the face, ear and earring stay within x 25–78% and y 16–78%. Background: seamless soft warm beige (#E9E0D5) with a gentle gradient, no objects. Camera: 100 mm portrait lens at f/3.2, eye-level, focus on the earring diamonds with soft falloff on the face edge.

LIGHT AND COLOUR: soft side light from the left, gentle shadow transition across the cheek and neck, bright clean highlights on the polished gold, crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds; warm restrained palette of beige, champagne and natural skin tones; quiet luxury editorial mood.

REFERENCE: the attached photo shows the exact drop earrings (small round on top, tiny round on the link, pear below); reproduce one of them faithfully on the visible ear.

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

**Референсы:** Прикрепите принятые фото: lumiere-riviere-bracelet-1.png, lumiere-oval-halo-ring-1.png, lumiere-pear-drop-earrings-1.png

**Единый стиль:** палитра, золото, бриллианты, свет и запреты ÉLAVÉRA встроены в промпт ниже; не удаляйте их при копировании.

**PROMPT (копировать целиком):**

```text
Create a photorealistic low-key luxury still-life photograph in wide 3:2 landscape format for the closing banner of a premium European diamond jewelry house. If reference images of the jewelry are provided in this chat, reproduce those exact pieces faithfully.

SUBJECT: three white-gold diamond jewelry pieces from one collection arranged on deep wine-coloured (#482E35) velvet. (1) A flexible rivière tennis bracelet of 44 identical round brilliant diamonds in individual four-claw baskets, laid in a soft open arc as the centrepiece. (2) A ring with a central oval-cut diamond (about 7.6 × 5.4 mm) in a four-claw open basket surrounded by a thin halo of tiny round diamonds on a thin plain polished white-gold band, standing upright on its band in front of and slightly left of the bracelet. (3) A pair of drop earrings, each with a small round diamond on top, a fine link and a pear-shaped diamond below in a six-claw basket, lying side by side slightly right of and above the bracelet. No other objects, no props, no hands.

COMPOSITION: asymmetrical and balanced; all three pieces lie within x 48–82% and y 26–76% of the frame, centred at about 62% from the left and 50% from the top. The left 42% of the frame is deep, soft, empty wine-coloured velvet fading into shadow, with no objects, reserved for website headline text. Camera: 100 mm macro lens at f/8, slightly above the surface at about 35 degrees, everything sharp from the ring to the earrings.

LIGHT AND COLOUR: low-key lighting with a large soft key from the upper left plus a narrow soft accent light creating gentle warm highlights on the gold and soft sheen on the velvet pile; crisp tiny white sparkles with a few subtle prismatic flashes on the diamonds; dark rich palette of wine, graphite and champagne; quiet luxury mood, no glitter, no bokeh sparkles.

REFERENCE: the attached photos show the exact bracelet, oval halo ring and drop earrings; reproduce these pieces faithfully, do not redesign them.

ÉLAVÉRA house style: luxury jewelry campaign photography for a premium European fine-jewelry house; quiet luxury, editorial, contemporary European elegance; strict photographic realism, shot on a full-frame camera with a high-end macro or portrait lens; restrained, sophisticated, never flashy. Palette: warm ivory (#F5F1EA), milk white (#FCFAF7), soft beige (#E9E0D5), muted champagne (#C5AC86), with deep wine (#482E35) and graphite (#242220) used sparingly. Gold is polished 18k: white gold reads as bright, slightly warm silver-white (not grey, not blue); yellow gold is a soft muted champagne-yellow (never saturated or orange); rose gold is a gentle pink-copper. Diamonds have physically plausible brilliant-cut geometry with accurate facet patterns (table, crown facets, girdle), crisp tiny white highlights, subtle spectral fire in only a few facets, and realistic refraction and reflection of the warm-white environment; no starburst filters, no lens-flare stars, no glitter bokeh, no artificial glow. Metal shows accurate soft gradient reflections of a large softbox, clean polished surfaces and correct thickness. Lighting: large soft key light from the upper left, gentle fill from the right, soft natural shadows, very subtle contact shadow, no hard flash. Consistent warm colour grading across the whole series.

STRICTLY AVOID: any text, letters, numbers, logos, watermarks, brand marks, engravings or hallmark text; extra jewelry or props that are not described; deformed, asymmetrical or melted rings, bands, claws, clasps or chains; merged, floating or missing stones; impossible geometry; cartoon, CGI or 3D-render look; over-saturated gold; cold grey backgrounds; heavy vignette; excessive bloom or glow. For people: no plastic or airbrushed skin, no distorted fingers or hands (exactly five fingers per hand, natural joints and nails), no extra limbs, natural anatomy and proportions, correct ear, neck and collarbone structure.
```

**Чек-лист приёмки:**
- [ ] Три изделия соответствуют товарным фото: браслет-ривьера, овальное кольцо с ореолом, серьги-груши
- [ ] Конструкции не искажены, нет лишних украшений
- [ ] Левые 42% кадра тёмные и пустые
- [ ] Фактура бархата реалистична, нет шума и блёсток

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
