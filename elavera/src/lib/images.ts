import manifest from "../../public/images/manifest.json";

/**
 * Ключ изображения — путь без расширения относительно /public/images, например
 * "products/aube-pave-ring-1". Файл попадает в manifest.json только после того,
 * как он реально создан и импортирован (scripts/import-images.ts). Пока файла нет,
 * интерфейс показывает честную иллюстрацию-заглушку вместо фотографии.
 */
interface Manifest {
  images: string[];
  /** цвет фона по краям фотографии (для бесшовного object-contain), задаётся при импорте */
  bg?: Record<string, string>;
}
const m = manifest as unknown as Manifest;
const available = new Set<string>(m.images);

export const DEFAULT_BG = "#F5F1EA";
export const hasImage = (key: string) => available.has(key);
export const imageUrl = (key: string) => `/images/${key}.webp`;
export const imageBg = (key: string) => m.bg?.[key] ?? DEFAULT_BG;
export const productImageKey = (slug: string, n = 1) => `products/${slug}-${n}`;

/**
 * Ракурсы изделия, для которых есть реальные файлы (по порядку 1..max).
 * Если нет ни одного — возвращается только основной ключ (ракурс 1): он рендерится
 * заглушкой, а отсутствующие ракурсы 2–3 не показываются. Добавленные позже
 * файлы -2 / -3 появятся автоматически.
 */
export function availableKeys(slug: string, max: number): string[] {
  const keys: string[] = [];
  for (let n = 1; n <= Math.max(1, max); n++) {
    const k = productImageKey(slug, n);
    if (hasImage(k)) keys.push(k);
  }
  return keys.length ? keys : [productImageKey(slug, 1)];
}
export const firstAvailableKey = (slug: string, max: number) => availableKeys(slug, max)[0];
