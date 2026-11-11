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
import { defaultMetal, getProducts } from "../src/lib/products";

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

/**
 * Автопроверка товарного кадра (предупреждения, не блокируют импорт):
 *  — фон ≈ #F5F1EA, ровный (без градиента), без затемнённых углов;
 *  — изделие не касается краёв кадра;
 *  — оценка цвета металла (белое / жёлтое / розовое) против металла по умолчанию из каталога.
 * Огранку и конструкцию оправы по-прежнему проверяет человек по ТЗ.
 */
const TARGET = [245, 241, 234];
async function checkProduct(buf: Buffer, slug: string | null): Promise<string[]> {
  const N = 256;
  const { data } = await sharp(buf).resize(N, N, { fit: "fill" }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = (x: number, y: number) => [data[(y * N + x) * 3], data[(y * N + x) * 3 + 1], data[(y * N + x) * 3 + 2]];
  const patch = (x0: number, y0: number, w = 10, h = 10) => { let r = 0, g = 0, b = 0, n = 0; for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) { const c = px(x, y); r += c[0]; g += c[1]; b += c[2]; n++; } return [r / n, g / n, b / n]; };
  const maxd = (a: number[], b: number[]) => Math.max(...a.map((v, i) => Math.abs(v - b[i])));
  const warns: string[] = [];
  // фон: углы и середины краёв
  const corners = [patch(0, 0), patch(N - 10, 0), patch(0, N - 10), patch(N - 10, N - 10)];
  const mids = [patch(N / 2 - 5, 0), patch(N / 2 - 5, N - 10), patch(0, N / 2 - 5), patch(N - 10, N / 2 - 5)];
  const all = [...corners, ...mids];
  const mean = [0, 1, 2].map((i) => all.reduce((s, c) => s + c[i], 0) / all.length);
  const hexOf = (c: number[]) => "#" + c.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("").toUpperCase();
  if (maxd(mean, TARGET) > 6) warns.push(`фон ${hexOf(mean)} отличается от #F5F1EA`);
  const spread = Math.max(...all.map((c) => maxd(c, mean)));
  if (spread > 4) warns.push(`фон неравномерный (разброс по краям и углам ${spread.toFixed(1)}): градиент или виньетка`);
  const cornerDark = mean[0] - Math.min(...corners.map((c) => c[0]));
  if (cornerDark > 4) warns.push("затемнённые углы");
  // изделие у краёв: пиксели внешней полосы 3% заметно отличаются от фона
  let off = 0, tot = 0; const B = Math.round(N * 0.03);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { if (x >= B && x < N - B && y >= B && y < N - B) continue; tot++; if (maxd(px(x, y), mean) > 16) off++; }
  if (off / tot > 0.003) warns.push(`изделие касается края кадра (${((off / tot) * 100).toFixed(1)}% кромки)`);
  // металл: доля заметно насыщенных пикселей (блики бриллиантов и белое золото почти ненасыщены).
  // Порог откалиброван по принятым фото: белое золото < 2%, жёлтое ≥ 26%.
  let sat = 0, n = 0, hSum = 0;
  for (let i = 0; i < data.length; i += 3) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (maxd([r, g, b], mean) < 14) continue; n++;
    const mx = Math.max(r, g, b), d = mx - Math.min(r, g, b);
    if (mx > 90 && d / mx > 0.25) { sat++; hSum += (60 * (g - b)) / (d || 1); }
  }
  const frac = n ? sat / n : 0; const hue = sat ? hSum / sat : 0;
  const metal = frac < 0.08 ? "white" : hue < 28 ? "rose" : "yellow";
  const p = slug ? getProducts().find((x) => x.slug === slug) : undefined;
  const exp = p ? defaultMetal(p) : null;
  if (exp && metal !== exp) warns.push(`металл похож на «${metal}», по каталогу «${exp}» (проверьте глазами)`);
  return [`металл≈${metal}`, ...warns.map((w) => "⚠ " + w)];
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
    const checks = isProduct ? await checkProduct(webp, item?.product_slug ?? null) : [];

    if (!DRY) {
      const file = join(OUT, `${key}.webp`);
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, webp);
      have.add(key); if (color) bg[key] = color;
    }
    report.push(`✓ ${f} → ${key}.webp${color ? `  фон ${color}` : ""}${warn}${checks.length ? "\n    " + checks.join("\n    ") : ""}`);
  }
  if (!DRY && files.length) writeFileSync(MANIFEST, JSON.stringify({ generatedAt: new Date().toISOString(), images: [...have].sort(), bg }, null, 2));
  console.log(report.join("\n") || "Нет файлов для импорта.");
  console.log(`\nГотово: ${report.filter((r) => r.startsWith("✓")).length} из ${files.length}${DRY ? " (сухой прогон, ничего не записано)" : ""}. Всего изображений в manifest: ${have.size}.`);
}
main().catch((e) => { console.error(e); process.exit(1); });
