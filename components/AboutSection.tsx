import type { MediaAsset } from "@/data/media";
import MediaImage from "@/components/MediaImage";
import SocialLinks from "@/components/SocialLinks";

export default function AboutSection({ portrait }: { portrait: MediaAsset | null }) {
  return (
    <section className="about-section section-gutter" id="about" aria-labelledby="about-title">
      <div className="section-heading-row">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <span className="section-index">07 / ABOUT</span>
      </div>
      <div className="about-layout">
        <div className="portrait-reservation">
          {portrait ? (
            <MediaImage
              asset={portrait}
              sizes="(max-width: 700px) 100vw, 36vw"
              className="portrait-image"
              priority
            />
          ) : (
            <div className="portrait-placeholder" aria-label="Portrait slot for Tejovanth K">
              <span>TEJOVANTH K</span>
              <span>PORTRAIT</span>
            </div>
          )}
        </div>
        <div className="about-copy">
          <h2 id="about-title" className="editorial-heading">About<br /><em>Tejovanth.</em></h2>
          <p className="about-degree">MSc Business Analytics and Management Science<br />University of Southampton</p>
          <p className="about-story">
            I’m Tejovanth K. My academic background is in Business Analytics and Management Science at the University of Southampton, where I’ve focused on bringing analytical methods to questions that matter to organisations.
          </p>
          <p className="about-story">
            I’m drawn to work that starts with an unclear business problem and needs both structured analysis and good judgement. I want to understand the context behind the data, make assumptions visible, and communicate what the evidence can—and cannot—say.
          </p>
          <p className="about-story">
            My interests span business and product analytics, decision science, strategy and operations, and the ways technology can make analysis more useful. This portfolio is a growing record of the questions I choose to investigate and how I work through them.
          </p>
          <p className="about-interests">Analytics <span>·</span> Business problems <span>·</span> Decision-making <span>·</span> Technology</p>
          <SocialLinks className="about-social-links" />
        </div>
      </div>
    </section>
  );
}
