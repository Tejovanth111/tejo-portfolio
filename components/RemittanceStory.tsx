const operatingSteps = [
  "Monitor corridor pricing",
  "Decompose total cost",
  "Benchmark FX",
  "Flag unusual observations",
  "Run pricing scenarios",
  "Compare customer-cost impact",
  "Review commercial trade-offs",
  "Approve / reject pricing change",
] as const;

const limitations = [
  "RPW records surveyed prices, not customer transaction volumes.",
  "Historical pricing does not automatically represent current market pricing.",
  "Some pricing components contain missing values.",
  "Fee + FX margin decomposition is approximate in places; reported total cost remains the authoritative measure.",
  "Scenario analysis measures sensitivity, not a forecast or realised customer saving.",
  "The analysis does not infer provider profitability.",
  "Provider and corridor differences do not establish causality.",
] as const;

export default function RemittanceStory() {
  return (
    <article className="remittance-story">
      <section className="story-section story-question" id="question" aria-labelledby="question-title">
        <div className="story-section-heading">
          <p className="eyebrow">02 / THE QUESTION</p>
          <h2 id="question-title" className="story-section-title">Where does the cost actually come from?</h2>
        </div>
        <div className="story-prose">
          <p>The analysis separates the visible fee component from the less-visible FX component, then tests how changing each lever affects customer cost.</p>
          <p>It studies pricing variation and customer-cost sensitivity. It does not identify an optimal price or maximise provider profit.</p>
        </div>
      </section>

      <section className="story-section story-evidence" aria-labelledby="evidence-title">
        <div className="story-evidence-heading">
          <p className="eyebrow">03 / THE EVIDENCE</p>
          <h2 id="evidence-title" className="story-section-title">A broad view of surveyed pricing.</h2>
          <p>The World Bank Remittance Prices Worldwide (RPW) current sheet covers 2016 Q2–2025 Q1. BIS exchange-rate data provides the FX benchmark reference.</p>
        </div>
        <div className="evidence-scale" aria-label="Dataset coverage">
          {[
            ["197,999", "surveyed pricing observations"],
            ["372", "corridors"],
            ["702", "providers"],
            ["36", "quarters"],
            ["51", "source countries"],
            ["108", "destination countries"],
          ].map(([value, label]) => (
            <div className="evidence-scale-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p className="evidence-caveat">These are surveyed pricing observations, not customer transactions or transaction volumes.</p>
      </section>

      <section className="story-section story-cost" id="cost-picture" aria-labelledby="cost-title">
        <div className="story-section-heading">
          <p className="eyebrow">04 / THE COST PICTURE</p>
          <h2 id="cost-title" className="story-section-title">The customer-facing price is not just the fee.</h2>
        </div>
        <div className="cost-findings">
          <div className="cost-leading-number">
            <strong>6.58%</strong>
            <span>Average observed total cost</span>
          </div>
          <div className="cost-supporting-numbers">
            <div><strong>5.07%</strong><span>Median observed total cost</span></div>
            <div><strong>$200</strong><span>Standardised transfer amount</span></div>
          </div>
        </div>
        <div className="cost-decomposition">
          <p className="eyebrow">ANALYTICAL DECOMPOSITION</p>
          <div className="cost-decomposition-values">
            <div><strong>4.46%</strong><span>Mean fee</span></div>
            <span className="decomposition-plus" aria-hidden="true">+</span>
            <div><strong>2.12%</strong><span>Mean FX margin</span></div>
          </div>
          <p>The reported total cost is the authoritative measure. Fee and FX margin are useful analytical components, but they are not an exact accounting identity across every observation. The FX margin can still represent a meaningful second component of transfer cost.</p>
        </div>
      </section>

      <section className="story-section story-benchmark" aria-labelledby="benchmark-title">
        <div className="story-section-heading">
          <p className="eyebrow">05 / THE BENCHMARK</p>
          <h2 id="benchmark-title" className="story-section-title">What does the FX price look like against a reference rate?</h2>
          <p className="story-deck">A normalised provider-vs-BIS comparison gives the observed exchange-rate pricing a common reference point.</p>
        </div>
        <div className="benchmark-stats">
          <div><strong>1.87%</strong><span>Mean provider-vs-BIS normalised spread</span></div>
          <div><strong>1.39%</strong><span>Median provider-vs-BIS normalised spread</span></div>
          <div><strong>48,097</strong><span>Benchmark observations</span></div>
        </div>
        <p className="story-qualification">This is a normalised benchmark comparison. It does not mean every provider’s customer-facing FX rate is directly equivalent to the BIS reference rate.</p>
      </section>

      <section className="story-section story-corridors" aria-labelledby="corridor-title">
        <div className="story-section-heading">
          <p className="eyebrow">06 / CORRIDOR VARIATION</p>
          <h2 id="corridor-title" className="story-section-title">Average pricing hides where the problem actually lives.</h2>
          <p className="story-deck">Observed pricing varies by corridor and provider. Among corridors meeting the 100-observation threshold, the high-cost screening set includes:</p>
        </div>
        <ul className="corridor-list" aria-label="High-cost corridor screening set">
          {["TURBGR", "TZAUGA", "TZAKEN", "TZARWA", "ZAFCHN"].map((corridor) => <li key={corridor}>{corridor}</li>)}
        </ul>
        <div className="corridor-range">
          <p className="eyebrow">PROVIDER MEDIAN TOTAL COST RANGE WITHIN TZAUGA</p>
          <strong>4.78% <span aria-hidden="true">→</span> 50.93%</strong>
          <p>Range across qualifying providers with at least 100 observations. This is provider-level variation within the TZAUGA corridor; it does not mean every transfer on that corridor costs 50.93%.</p>
        </div>
      </section>

      <section className="story-section story-scenario story-fx-scenario" aria-labelledby="fx-scenario-title">
        <div className="story-section-heading">
          <p className="eyebrow">07 / THE FX SCENARIO</p>
          <h2 id="fx-scenario-title" className="story-section-title">What happens if the FX margin moves?</h2>
          <p className="story-deck">A half-point change makes the customer-cost sensitivity concrete.</p>
        </div>
        <div className="scenario-result">
          <span>−0.50 percentage points</span>
          <strong>≈ $1.00</strong>
          <p>Modelled saving on a $200 transfer</p>
        </div>
        <p className="scenario-note">This is a scenario, not an observed or realised saving. The point is to quantify sensitivity to the FX margin, not to claim that a 0.50pp reduction is automatically achievable.</p>
      </section>

      <section className="story-section story-scenario story-fee-scenario" aria-labelledby="fee-scenario-title">
        <div className="story-section-heading">
          <p className="eyebrow">08 / THE FEE SCENARIO</p>
          <h2 id="fee-scenario-title" className="story-section-title">What if the visible fee moves instead?</h2>
          <p className="story-deck">The same question can be asked of the part of the price customers see first.</p>
        </div>
        <div className="scenario-result">
          <span>10% fee reduction</span>
          <strong>≈ $0.89</strong>
          <p>Modelled saving against the average observed pricing structure</p>
        </div>
        <p className="scenario-note">This is also a modelled scenario, not a forecast or realised customer saving. Comparing the two sensitivities helps frame the pricing discussion without implying that either lever is commercially preferable in every case.</p>
      </section>

      <section className="story-section story-tradeoff" aria-labelledby="tradeoff-title">
        <div className="story-section-heading">
          <p className="eyebrow">09 / THE TRADE-OFF</p>
          <h2 id="tradeoff-title" className="story-section-title">Two levers. Different commercial consequences.</h2>
        </div>
        <div className="story-prose">
          <p>Both the fee and FX margin affect customer cost, but they do not have identical economic or commercial implications. The analysis frames customer-cost sensitivity, corridor and provider variation, and pricing leverage.</p>
          <p>It does not establish provider profitability, elasticity, optimal commercial pricing, causal customer behaviour, or whether a particular margin reduction is achievable.</p>
        </div>
        <p className="decision-statement">Use corridor-level pricing monitoring, cost decomposition and FX benchmarking to identify where pricing intervention is worth investigating.</p>
      </section>

      <section className="story-section operating-model" aria-labelledby="operating-title">
        <p className="eyebrow">10 / FROM ANALYSIS TO OPERATING DECISION</p>
        <h2 id="operating-title" className="story-section-title">A repeatable decision process.</h2>
        <ol className="operating-steps">
          {operatingSteps.map((step, index) => (
            <li key={step}><span>0{index + 1}</span><p>{step}</p></li>
          ))}
        </ol>
        <p className="operating-disclaimer">This is a proposed operating workflow, not a deployed production system.</p>
      </section>

      <section className="story-section story-limitations" aria-labelledby="limitations-title">
        <div className="story-section-heading">
          <p className="eyebrow">11 / LIMITATIONS</p>
          <h2 id="limitations-title" className="story-section-title">What the evidence can—and cannot—say.</h2>
        </div>
        <ul>{limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
      </section>

      <section className="story-section technical-note" aria-labelledby="technical-title">
        <div className="story-section-heading">
          <p className="eyebrow">12 / TECHNICAL NOTE</p>
          <h2 id="technical-title" className="story-section-title">The analytical machinery.</h2>
        </div>
        <div className="technical-summary">
          <div><h3>Tools</h3><p>Python · SQL / DuckDB · Pandas · NumPy · Matplotlib / Seaborn · Jupyter · Git / GitHub</p></div>
          <div><h3>Data</h3><p>World Bank Remittance Prices Worldwide · BIS exchange-rate data</p></div>
        </div>
      </section>

      <footer className="story-close">
        <blockquote>
          <p>“The interesting part of pricing is rarely the number on the surface.</p>
          <p>It is the structure underneath it — and what changes when you move one part of it.”</p>
        </blockquote>
        <div className="story-close-links">
          <a href="#cost-picture">Explore the analysis <span aria-hidden="true">→</span></a>
          <a href="https://github.com/Tejovanth111/remittance-fx-optimisation" target="_blank" rel="noopener noreferrer">View the project repository <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </article>
  );
}
