import type { MediaAsset } from "@/data/media";
import ImageGallery from "@/components/ImageGallery";

export default function ProjectImageGallery({
  images,
}: {
  images: MediaAsset[];
}) {
  if (images.length === 0) return null;

  return (
    <section className="project-images-section" aria-label="Project images">
      <ImageGallery
        images={images}
        className="project-image-gallery"
        sizes="(max-width: 700px) 100vw, 78vw"
      />
    </section>
  );
}
