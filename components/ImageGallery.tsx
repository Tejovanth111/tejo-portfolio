import type { MediaAsset } from "@/data/media";
import { imageCaptions } from "@/data/media";
import MediaImage from "@/components/MediaImage";

export default function ImageGallery({
  images,
  className = "image-gallery",
  sizes = "(max-width: 700px) 100vw, 50vw",
  emptyMessage = "Images will appear here when you add them to the media folder.",
}: {
  images: MediaAsset[];
  className?: string;
  sizes?: string;
  emptyMessage?: string;
}) {
  if (images.length === 0) {
    return <p className={`${className}-empty`}>{emptyMessage}</p>;
  }

  return (
    <div className={className}>
      {images.map((image, index) => (
        <figure className={`${className}-item`} key={image.src}>
          <div className={`${className}-frame`}>
            <MediaImage
              asset={image}
              sizes={sizes}
              className={`${className}-image`}
              priority={index === 0}
            />
          </div>
          {imageCaptions[image.src] && (
            <figcaption>{imageCaptions[image.src]}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
