import Image from "next/image";
import type { MediaAsset } from "@/data/media";

export default function MediaImage({
  asset,
  sizes,
  className,
  priority = false,
}: {
  asset: MediaAsset;
  sizes: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
