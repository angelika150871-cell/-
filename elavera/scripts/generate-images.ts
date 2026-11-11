/**
 * Генерация изображений ÉLAVÉRA через официальный OpenAI Images API.
 * Запускается ТОЛЬКО локально/на сервере сборки — никогда из браузерного кода.
 *
 *   npm run images                      # сухой прогон: список и число вызовов, без трат
 *   npm run images -- --yes             # реальная генерация обязательных (required) изображений
 *   npm run images -- --yes --all       # + опциональные (макро и доп. ракурсы)
 *   npm run images -- --yes --only hero-desktop,product-aube-pave-ring
 *   npm run images -- --yes --force     # перегенерировать уже существующие
 *
 * Флаг --yes означает, что вы подтверждаете платные вызовы API.
 * Требуется OPENAI_API_KEY в окружении (см. .env.example). Ключ нигде не логируется.
 * Результат: public/images/<key>.webp и обновлённый public/images/manifest.json;
 * сайт показывает иллюстрации-заглушки, пока ключ изображения не попал в manifest.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

interface Item { id: string; key: string; purpose: string; kind: "art" | "catalog" | "edit"; size: string; required: boolean; prompt: string; negative: string; editFrom?: string }
const args = process.argv.slice(2);
const flag = (n: string) => args.includes(`--${n}`);
const opt = (n: string) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : undefined; };

const OUT = join(process.cwd(), "public/images");
const MANIFEST = join(OUT, "manifest.json");
const MODEL_ART = process.env.IMAGE_MODEL_ART ?? "gpt-image-2.6-sunburst";
const MODEL_CATALOG = process.env.IMAGE_MODEL_CATALOG ?? "gpt-image-2.6-flare";

async function main() {
  const spec = JSON.parse(readFileSync("image-prompts.json", "utf8")) as { items: Item[] };
  const only = opt("only")?.split(",");
  const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : { images: [] };
  const have = new Set<string>(manifest.images);

  let todo = spec.items.filter((i) => (only ? only.includes(i.id) : flag("all") || i.required));
  if (!flag("force")) todo = todo.filter((i) => !have.has(i.key));

  console.log(`Изображений к генерации: ${todo.length} (платные вызовы API)`);
  const by = (k: Item["kind"]) => todo.filter((i) => i.kind === k).length;
  console.log(`  художественных (${MODEL_ART}): ${by("art")}; каталожных (${MODEL_CATALOG}): ${by("catalog")}; ракурсов-правок: ${by("edit")}`);
  for (const i of todo) console.log(`  - ${i.id.padEnd(40)} ${i.size.padEnd(10)} ${i.purpose}`);

  if (!flag("yes")) { console.log("\nСухой прогон. Для реальной генерации добавьте --yes (вы подтверждаете расходы)."); return; }
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("Не задан OPENAI_API_KEY. Скопируйте .env.example в .env и задайте ключ; ключ не коммитить.");
  if (!todo.length) return console.log("Нечего генерировать.");

  const sharp = (await import("sharp")).default;
  for (const it of todo) {
    const model = it.kind === "art" ? MODEL_ART : MODEL_CATALOG;
    const prompt = `${it.prompt}\n\n${it.negative}`;
    process.stdout.write(`→ ${it.id} (${model}) … `);
    let res: Response;
    if (it.kind === "edit") {
      const srcPath = join(OUT, `${it.editFrom}.webp`);
      if (!existsSync(srcPath)) { console.log("пропуск: нет исходного изображения"); continue; }
      const png = await sharp(srcPath).png().toBuffer();
      const fd = new FormData();
      fd.set("model", model); fd.set("prompt", prompt); fd.set("size", it.size); fd.set("quality", "high");
      fd.set("image", new Blob([new Uint8Array(png)], { type: "image/png" }), "source.png");
      res = await fetch("https://api.openai.com/v1/images/edits", { method: "POST", headers: { Authorization: `Bearer ${key}` }, body: fd });
    } else {
      res = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model, prompt, size: it.size, quality: "high", n: 1 }),
      });
    }
    if (!res.ok) { console.log(`ошибка ${res.status}: ${(await res.text()).slice(0, 300)}`); continue; }
    const json = (await res.json()) as { data?: { b64_json?: string }[] };
    const b64 = json.data?.[0]?.b64_json;
    if (!b64) { console.log("ответ без изображения"); continue; }
    const file = join(OUT, `${it.key}.webp`);
    mkdirSync(dirname(file), { recursive: true });
    await sharp(Buffer.from(b64, "base64")).webp({ quality: 86 }).toFile(file);
    have.add(it.key);
    writeFileSync(MANIFEST, JSON.stringify({ generatedAt: new Date().toISOString(), images: [...have].sort() }, null, 2));
    console.log("готово");
  }
}
main().catch((e) => { console.error(e instanceof Error ? e.message : e); process.exit(1); });
