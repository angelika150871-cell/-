# ÉLAVÉRA — ТЗ на недостающие изображения (1 шт.)

> Сгенерировано автоматически (`npx tsx scripts/build-brief.ts`) из полного ТЗ `IMAGE_GENERATION_BRIEF.md`: здесь только кадры, которых ещё нет на сайте. Номера сохранены из полного ТЗ.

## 0. Что принято и что осталось

Принято и работает на сайте: **21 из 22** (все — товарные фото). Осталось: **1 имиджевых кадров** (Hero и editorial) и **0 товарных**.

| № | Файл | Что это | Ратио |
|---|---|---|---|
| 06 | `editorial-4.png` | Финал главной: натюрморт ансамбля Lumière на винном бархате | 3:2 |

## 1. Порядок работы (важно)

1. **Сначала товарные кадры** (№ ), потом имиджевые (№ 6).
2. **Принятые фото — ваш главный референс стиля.** В каждом новом чате прикрепите 2 из них и напишите: *«Match the exact photographic style of these two reference photos: same warm ivory background, same soft light from the upper left, same scale, same level of realism, same polished metal and diamond rendering»*. Рекомендуемая пара: `aube-huggie-hoops-1.png` и `lumiere-riviere-bracelet-1.png`.
3. **Для Hero и editorial прикрепляйте фото украшения** — какое именно, указано в поле «Референсы» каждого задания. Hero-desktop и Hero-mobile и все портреты с моделью делайте **в одном чате**, чтобы внешность модели совпадала.
4. Одно изображение — одно сообщение; копируйте блок PROMPT целиком. Просите максимальное разрешение и PNG.
5. **Фон товарных кадров — идеально ровный #F5F1EA до самых краёв:** без градиента, виньетки и затемнённых углов. Изделие целиком в кадре, не касается краёв. При импорте я автоматически проверяю цвет фона, равномерность и касание краёв и сообщу о любом отклонении.
6. Присылайте файлами или архивом (имена могут быть любыми: я определяю содержимое по виду), затем я импортирую их и проверю на сайте.

**Принятые фото (референсы стиля и украшений):** `hero-desktop.png`, `hero-mobile.png`, `editorial-1.png`, `editorial-2.png`, `editorial-3.png`, `aube-pave-ring-1.png`, `lumiere-oval-halo-ring-1.png`, `orbite-toi-et-moi-ring-1.png`, `eclat-solitaire-studs-1.png`, `lumiere-pear-drop-earrings-1.png`, `aube-huggie-hoops-1.png`, `cascade-riviere-necklace-1.png`, `eclat-solitaire-pendant-1.png`, `aube-oval-pendant-1.png`, `lumiere-riviere-bracelet-1.png`, `orbite-bangle-1.png`, `aube-chain-bracelet-1.png`, `promesse-round-solitaire-1.png`, `promesse-oval-hidden-halo-1.png`, `promesse-emerald-trilogy-1.png`, `promesse-pear-solitaire-1.png`.

**Критерии приёмки для людей и рук:** естественная фактура кожи (поры, мягкий блеск, без «пластика»), по пять пальцев, корректная анатомия, украшение сидит физически правдоподобно; **без текста, логотипов и водяных знаков**.

## 2. Решения, принятые для этого набора
- Каталог остаётся из **16 изделий**; лишние кадры лежат отдельно в `concepts/` и в каталог не подключены.
- Promesse Oval (№ 20): описание товара EV-P-002 не меняется; нужен кадр с **скрытым** ореолом (виден преимущественно сбоку), а не с видимым ореолом.
- Порядок: сначала № 17, 18, 20, 21, 22, затем № 1–6.

## 3. Эскизы-референсы (elavera_visual_previews.zip) — только как ориентир
11 эскизов (285–796 px) — вырезки из одного концепт-листа. **В каталог и на сайт не импортируются** (README архива это запрещает; разрешения для карточки недостаточно). Используйте их как референс композиции: прикрепите нужный эскиз к чату и попросите воссоздать кадр **в полном размере** по заданию ниже. Что исправить в финале:

| № | Эскиз подходит | Исправить в финале |
|---|---|---|
| 01 Hero desktop | Модель справа, левые ~40% спокойный беж, шёлк, свет окна, лицо видно (**решение принято: лицо не обрезается**) | Убрать серьгу-пусету (других украшений нет, мочки без серёг). Колье: 52 круглых бриллианта в один ряд, градуированные от центра, каждый в своей 4-лапковой корзине, как `cascade-riviere-necklace-1.png`; на эскизе камни выглядят как кластеры с ореолами — **так нельзя** |
| 02 Hero mobile | Та же модель, колье по центру | Те же замечания; голова и колье внутри центрального квадрата (волосы не выше y 20%, колье не ниже y 78%) |
| 03 Editorial-1 | Подвеска одна, тонкая цепочка, винный бархат | Убрать серьгу; формат строго 1:1; подвеска — как `eclat-solitaire-pendant-1.png` |
| 04 Editorial-2 | Естественная рука, винный бархат | Кольцо — **жёлтое золото**, 6 лапок, тонкий гладкий ободок (как `promesse-round-solitaire-1.png`), на эскизе оно белое. Нижние ~38% кадра — пустой тёмный фон под заголовок. Обе руки, компактная группа |
| 05 Editorial-3 | Форма серьги-груши верная | Формат **2:3 портрет** (эскиз горизонтальный). Серьга: малый круглый сверху, крошечный на звене, груша в 6-лапковой корзине (как `lumiere-pear-drop-earrings-1.png`) |
| 06 Editorial-4 | Бархат, низкий ключ, серьги-груши | Кольцо — **овальное с ореолом на тонком гладком ободке** (как `lumiere-oval-halo-ring-1.png`), на эскизе круглый солитёр. Браслет — ривьера из одинаковых круглых камней в 4-лапковых корзинах (как `lumiere-riviere-bracelet-1.png`), на эскизе камни с ореолами. Украшения сместить вправо (x 48–82%), левые 42% — пустая тень |
| 17 Orbite Bangle | Жёлтое золото, камни вровень, шарнир | Должно быть различимо ровно **7** камней по окружности; браслет целиком, не обрезан слева; на ребре, виден овальный проём |
| 18 Aube Chain | Практически точное совпадение: белое золото, 3 бриллианта в безелях, карабин и регулировочное кольцо | Только полный размер и ровный фон |
| 20 Promesse Oval | Овал, 4 лапки, тонкий гладкий ободок, белое золото | Скрытого ореола на эскизе **не видно** (фронтальный вид). В финале — ракурс 30–45° сбоку, где виден искрящийся поясок мелких камней под центральным |
| 21 Promesse Trilogy | Изумруд + два багета, белое золото | Проверить симметрию багетов, чёткие ступенчатые грани, ровно 3 камня |
| 22 Promesse Pear | Розовое золото, груша, V-образная лапка, тонкий ободок | Почти точное совпадение; полный размер и ровный фон |

Общие требования к финалам не меняются: товарные — 1:1, не менее 1254 px, **ровный #F5F1EA до краёв**, изделие целиком; имиджевые — ратио из заданий.

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
