import type { MediaAsset } from "@/data/media";
import ImageGallery from "@/components/ImageGallery";

export default function PersonalGallery({ images }: { images: MediaAsset[] }) {
  return (
    <section className="personal-gallery section-gutter" id="gallery" aria-labelledby="gallery-title">
      <div className="section-heading-row">
        <p className="eyebrow">OUTSIDE THE ANALYSIS</p>
        <span className="section-index">06 / PERSONAL GALLERY</span>
      </div>
      <div className="gallery-heading-row">
        <h2 className="editorial-heading" id="gallery-title">A few frames<br /><em>from my world.</em></h2>
        <p>Personal moments and places, shared in my own photographs.</p>
      </div>
      <ImageGallery
        images={images}
        className="personal-image-gallery"
        sizes="(max-width: 700px) 100vw, 42vw"
        emptyMessage="A collection of personal moments and places, shared over time."
      />
    </section>
  );
}
