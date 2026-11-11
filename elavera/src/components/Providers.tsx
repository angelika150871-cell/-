"use client";
import { StoreProvider } from "@/lib/store";
import CartDrawer from "./CartDrawer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      {children}
      <CartDrawer />
    </StoreProvider>
  );
}
