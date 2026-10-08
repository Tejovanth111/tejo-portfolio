export default function ProjectIntro() {
  return (
    <section className="featured-project" id="work" aria-labelledby="featured-title">
      <div className="project-kicker">
        <span>FINTECH · PRICING · FX · DECISION SCIENCE</span>
        <span>PROJECT / 01</span>
      </div>
      <div className="project-intro-grid">
        <div className="project-heading">
          <p className="eyebrow">REMITTANCE ECONOMICS</p>
          <h2 id="featured-title">Remittance Economics<br /><em>&amp; FX Optimisation</em></h2>
        </div>
        <div className="project-context">
          <p className="project-title">Where does the cost come from—and which pricing lever is worth moving?</p>
          <p className="project-description">A study of surveyed pricing, corridor economics, FX benchmarks and customer-cost sensitivity.</p>
        </div>
      </div>
      <a className="project-intro-jump" href="#findings">Read the analysis <span aria-hidden="true">↓</span></a>
    </section>
  );
}
