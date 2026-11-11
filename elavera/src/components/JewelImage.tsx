import Image from "next/image";
import { hasImage, imageBg, imageUrl } from "@/lib/images";
import JewelArt from "./JewelArt";
import type { Category, Cut } from "@/lib/types";

interface Props {
  /** ключ изображения, напр. "products/aube-pave-ring-1" */
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /**
   * "contain" — предметные фото: изделие целиком, без обрезки; фон под фото берётся
   * из manifest (цвет краёв снимка), поэтому границ не видно.
   * "cover" — баннеры и editorial, с индивидуальным object-position.
   */
  fit?: "cover" | "contain";
  /** CSS object-position для cover, напр. "70% 50%" */
  position?: string;
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
export default function JewelImage({ src, alt, sizes, priority, className = "", fit = "cover", position, category = "rings", cut = "round", variant = 0, tone = "light", artSide = "center" }: Props) {
  if (hasImage(src)) {
    if (fit === "contain") {
      return (
        <div className="absolute inset-0" style={{ background: imageBg(src) }}>
          <Image src={imageUrl(src)} alt={alt} fill sizes={sizes} priority={priority} className={`object-contain ${className}`} />
        </div>
      );
    }
    return <Image src={imageUrl(src)} alt={alt} fill sizes={sizes} priority={priority} style={position ? { objectPosition: position } : undefined} className={`object-cover ${className}`} />;
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
