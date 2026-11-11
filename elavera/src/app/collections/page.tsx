import type { Metadata } from "next";
import Catalog from "@/components/Catalog";

export const metadata: Metadata = {
  title: "Каталог украшений",
  description: "Кольца, серьги, колье, браслеты и помолвочные кольца ÉLAVÉRA: фильтры по металлу, огранке, весу бриллианта и цене.",
  alternates: { canonical: "/collections" },
};
export default function CollectionsPage() {
  return <Catalog />;
}
