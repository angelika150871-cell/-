import type { Metadata } from "next";
import CheckoutView from "@/components/CheckoutView";

export const metadata: Metadata = {
  title: "Корзина и оформление заказа",
  description: "Демонстрационное оформление заказа ÉLAVÉRA. Платёжная система не подключена, списание средств не производится.",
  robots: { index: false },
  alternates: { canonical: "/checkout" },
};
export default function CheckoutPage() {
  return <CheckoutView />;
}
