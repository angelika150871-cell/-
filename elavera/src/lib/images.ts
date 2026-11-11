import manifest from "../../public/images/manifest.json";

/**
 * Ключ изображения — путь без расширения относительно /public/images, например
 * "products/aube-pave-ring-1". Файл попадает в manifest.json только после того,
 * как scripts/generate-images.ts его реально создал. Пока файла нет, интерфейс
 * показывает честную иллюстрацию-заглушку вместо фотографии.
 */
const available = new Set<string>(manifest.images);
export const hasImage = (key: string) => available.has(key);
export const imageUrl = (key: string) => `/images/${key}.webp`;
export const productImageKey = (slug: string, n = 1) => `products/${slug}-${n}`;
