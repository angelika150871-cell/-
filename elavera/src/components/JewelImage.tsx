import Image from "next/image";
import { hasImage, imageUrl } from "@/lib/images";
import JewelArt from "./JewelArt";
import type { Category, Cut } from "@/lib/types";

interface Props {
  /** ключ изображения, напр. "products/aube-pave-ring-1" */
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** параметры иллюстрации-заглушки */
  category?: Category;
  cut?: Cut;
  variant?: number;
  /** «dark» — тёмная заглушка для полноэкранных художественных секций */
  tone?: "light" | "dark";
  /** для полноэкранных секций с текстом слева: смещает заглушку вправо */
  artSide?: "center" | "right";
}

/** Рендерит готовую фотографию либо честную иллюстрацию-заглушку. Родитель должен быть relative. */
export default function JewelImage({ src, alt, sizes, priority, className = "", category = "rings", cut = "round", variant = 0, tone = "light", artSide = "center" }: Props) {
  if (hasImage(src)) {
    return <Image src={imageUrl(src)} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
  }
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} role="img" aria-label={`${alt} (иллюстрация-заглушка до загрузки фотографии)`}>
      {tone === "dark" ? (
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 40%, #6b4550 0%, #482E35 40%, #241618 100%)" }}>
          <div className={`absolute inset-y-0 opacity-80 ${artSide === "right" ? "right-0 w-full lg:w-[55%]" : "inset-x-0"}`}>
            <JewelArt category={category} cut={cut} variant={variant} bare />
          </div>
        </div>
      ) : (
        <JewelArt category={category} cut={cut} variant={variant} />
      )}
    </div>
  );
}
