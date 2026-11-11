import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return [
    ...["", "/collections", "/maison"].map((p) => ({ url: `${base}${p}` })),
    ...getProducts().map((p) => ({ url: `${base}/product/${p.slug}` })),
  ];
}
