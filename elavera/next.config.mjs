/** @type {import('next').NextConfig} */
// Обычный режим: npm run dev / build / start.
// Статичный экспорт для любого хостинга (папка out/): npm run build:static
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  images: isStatic ? { unoptimized: true } : { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
  ...(isStatic ? { output: "export", trailingSlash: true } : {}),
};
export default nextConfig;
