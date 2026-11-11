import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductView from "@/components/ProductView";
import ProductCard from "@/components/ProductCard";
import { getProduct, getProducts, getRelated } from "@/lib/products";
import { CUT_LABEL, formatCarat } from "@/lib/format";
import { hasImage, imageUrl, productImageKey } from "@/lib/images";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const key = productImageKey(p.slug, 1);
  const description = `${p.short} ${CUT_LABEL[p.stone.cut]} огранка, ${formatCarat(p.stone.carat)}.`;
  return {
    title: p.name,
    description,
    alternates: { canonical: `/product/${p.slug}` },
    openGraph: { title: `${p.name} · ÉLAVÉRA`, description, type: "website", images: hasImage(key) ? [imageUrl(key)] : undefined },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const related = getRelated(p, 4);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    sku: p.id,
    description: p.description,
    brand: { "@type": "Brand", name: "ÉLAVÉRA" },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: p.price,
      availability: p.stock === "in_stock" ? "https://schema.org/InStock" : p.stock === "made_to_order" ? "https://schema.org/PreOrder" : "https://schema.org/OutOfStock",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ProductView product={p} />
      <section className="border-t hair bg-ivory py-16 lg:py-24" aria-labelledby="rel-h">
        <div className="container-x">
          <p className="eyebrow">Похожие украшения</p>
          <h2 id="rel-h" className="h2 mt-3">Вам может понравиться</h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-6 lg:grid-cols-4">
            {related.map((r) => <li key={r.id}><ProductCard product={r} /></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
