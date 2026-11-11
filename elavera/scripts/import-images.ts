/**
 * Импорт готовых изображений, созданных в ChatGPT.
 *
 *   npm run import-images                 # из elavera/incoming-images → public/images
 *   npm run import-images -- --dir <папка> --out <папка> [--dry]
 *
 * Имена файлов — как в IMAGE_MANIFEST.json (upload_filename), например
 * hero-desktop.png, aube-pave-ring-1.png. Дополнительные ракурсы изделий
 * кладутся как <slug>-2.png и <slug>-3.png — они появятся в галерее автоматически.
 *
 * Что делает: конвертирует в WebP (длинная сторона ≤ 2048 px), для товарных фото
 * вычисляет цвет краёв снимка (чтобы object-contain был бесшовным) и добавляет ключ
 * в manifest.json. Обрезки нет: товары показываются целиком, баннеры — через
 * object-cover с индивидуальным object-position в коде. API не вызывается.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, join } from "node:path";
import sharp from "sharp";

interface Item { id: string; type: "hero" | "editorial" | "product"; upload_filename: string; manifest_key: string; product_slug: string | null; generate_ratio: string }
const args = process.argv.slice(2);
const opt = (n: string, d: string) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : d; };
const DRY = args.includes("--dry");
const DIR = opt("dir", "incoming-images");
const OUT = opt("out", "public/images");
const MANIFEST = join(OUT, "manifest.json");

const spec = JSON.parse(readFileSync("IMAGE_MANIFEST.json", "utf8")) as { images: Item[] };
const byFile = new Map(spec.images.map((i) => [basename(i.upload_filename, extname(i.upload_filename)), i]));
const slugs = new Set(spec.images.map((i) => i.product_slug).filter(Boolean) as string[]);

const hex = (r: number, g: number, b: number) => "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("").toUpperCase();

/** средний цвет внешней рамки снимка */
async function edgeColor(buf: Buffer): Promise<string> {
  const N = 48;
  const { data } = await sharp(buf).resize(N, N, { fit: "fill" }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  let r = 0, g = 0, b = 0, n = 0;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    if (x > 1 && x < N - 2 && y > 1 && y < N - 2) continue;
    const o = (y * N + x) * 3; r += data[o]; g += data[o + 1]; b += data[o + 2]; n++;
  }
  return hex(r / n, g / n, b / n);
}

const expected = (i: Item) => (i.generate_ratio.startsWith("1:1") ? 1 : i.generate_ratio.startsWith("3:2") ? 1.5 : i.generate_ratio.startsWith("2:3") ? 2 / 3 : null);

async function main() {
  if (!existsSync(DIR)) { console.log(`Папка ${DIR} не найдена. Создайте её и положите файлы из ChatGPT.`); return; }
  const files = readdirSync(DIR).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
  const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : { images: [] };
  const have = new Set<string>(manifest.images);
  const bg: Record<string, string> = manifest.bg ?? {};
  const report: string[] = [];

  for (const f of files) {
    const name = basename(f, extname(f));
    let key: string | null = null; let isProduct = false; let item = byFile.get(name);
    if (item) { key = item.manifest_key; isProduct = item.type === "product"; }
    else {
      const m = name.match(/^(.+)-([23])$/);
      if (m && slugs.has(m[1])) { key = `products/${m[1]}-${m[2]}`; isProduct = true; item = byFile.get(`${m[1]}-1`); }
    }
    if (!key) { report.push(`⚠ ${f}: имя не из ТЗ — пропущен`); continue; }

    const src = readFileSync(join(DIR, f));
    const meta = await sharp(src).metadata();
    const ratio = (meta.width ?? 1) / (meta.height ?? 1);
    const exp = item ? expected(item) : null;
    const warn = exp && Math.abs(ratio - exp) / exp > 0.08 ? ` ⚠ пропорции ${ratio.toFixed(2)} вместо ~${exp.toFixed(2)}` : "";
    const webp = await sharp(src).rotate().resize({ width: 2048, height: 2048, fit: "inside", withoutEnlargement: true }).webp({ quality: 88 }).toBuffer();
    const color = isProduct ? await edgeColor(webp) : null;

    if (!DRY) {
      const file = join(OUT, `${key}.webp`);
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, webp);
      have.add(key); if (color) bg[key] = color;
    }
    report.push(`✓ ${f} → ${key}.webp${color ? `  фон ${color}` : ""}${warn}`);
  }
  if (!DRY && files.length) writeFileSync(MANIFEST, JSON.stringify({ generatedAt: new Date().toISOString(), images: [...have].sort(), bg }, null, 2));
  console.log(report.join("\n") || "Нет файлов для импорта.");
  console.log(`\nГотово: ${report.filter((r) => r.startsWith("✓")).length} из ${files.length}${DRY ? " (сухой прогон, ничего не записано)" : ""}. Всего изображений в manifest: ${have.size}.`);
}
main().catch((e) => { console.error(e); process.exit(1); });
