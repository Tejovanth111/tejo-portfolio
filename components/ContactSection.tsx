import SocialLinks from "@/components/SocialLinks";

export default function ContactSection() {
  return (
    <footer className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="section-heading-row">
          <p className="eyebrow">OPEN TO A GOOD QUESTION</p>
          <span className="section-index">08 / CONTACT</span>
        </div>
        <h2 id="contact-title" className="contact-heading">Have a business question<br />worth <em>exploring?</em></h2>
        <p className="contact-description">I&apos;m always interested in conversations around analytics, products, fintech, strategy and decision-making.</p>
        <SocialLinks className="contact-links" />
        <div className="contact-bottom">
          <span>TEJOVANTH K</span>
          <span>BUSINESS ANALYTICS · PRODUCT · DECISION SCIENCE</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}
