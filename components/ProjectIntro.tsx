export default function ProjectIntro() {
  return (
    <header className="featured-project remittance-intro" aria-labelledby="featured-title">
      <div className="project-kicker">
        <span>01 / THE SITUATION</span>
        <span>FINTECH <i aria-hidden="true">·</i> ANALYSED</span>
      </div>
      <div className="project-intro-grid">
        <div className="project-heading">
          <p className="eyebrow">PRICING STRATEGY · FX ECONOMICS</p>
          <h1 id="featured-title">Remittance Economics<br /><em>&amp; FX Optimisation</em></h1>
        </div>
        <p className="remittance-opening">
          Sending money across borders looks simple from the outside: choose a provider, enter an amount, pay the fee, and the money arrives. The economics underneath are less tidy. A transfer can become expensive through the fee the customer sees, the exchange-rate margin they may not, or both. The interesting question is therefore not simply “which transfers are expensive?” It is: “Where does the cost actually come from, and which pricing lever is worth moving?”
        </p>
      </div>
      <a className="project-intro-jump" href="#cost-picture">Explore the analysis <span aria-hidden="true">↓</span></a>
    </header>
  );
}
