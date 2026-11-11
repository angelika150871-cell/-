import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "ÉLAVÉRA — Fine Diamond Jewelry", template: "%s · ÉLAVÉRA" },
  description: "ÉLAVÉRA — современный ювелирный дом бриллиантов. Искусство оставаться незабываемой. Концептуальный демонстрационный сайт.",
  openGraph: {
    type: "website",
    siteName: "ÉLAVÉRA",
    locale: "ru_RU",
    title: "ÉLAVÉRA — Fine Diamond Jewelry",
    description: "Свет, который остаётся с вами. Украшения, в которых мгновения становятся вечностью.",
  },
};
export const viewport: Viewport = { themeColor: "#FCFAF7", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
