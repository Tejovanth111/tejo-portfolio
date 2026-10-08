const findings = [
  {
    number: "01",
    id: "finding-cost-picture",
    title: "The cost picture",
    question: "How expensive is the typical observed remittance, and how much of that cost sits in the visible fee?",
    answer: "The average observed total cost is 6.58%, while the median is 5.07%. The average is higher than the median, indicating that more expensive observations pull the distribution upward.",
    figures: [
      ["6.58%", "Average observed total cost"],
      ["5.07%", "Median observed total cost"],
      ["4.46%", "Average fee"],
      ["2.12%", "Average FX margin"],
    ],
    soWhat: "The visible fee is only part of the story. Treating the fee as the whole cost leaves a meaningful part of the pricing structure unexplained.",
    implementation: "A pricing team could monitor total transfer cost as separate fee and FX components across corridors and transfer amounts. In a production setting, that view could help identify which component is driving changes in customer cost.",
  },
  {
    number: "02",
    id: "finding-benchmark",
    title: "The benchmark",
    question: "How far does provider FX pricing sit from an external benchmark?",
    answer: "The provider-versus-BIS normalised spread had a mean of 1.87% and a median of 1.39% across 48,097 benchmark observations.",
    figures: [["1.87%", "Mean normalised spread"], ["1.39%", "Median normalised spread"], ["48,097", "Benchmark observations"]],
    soWhat: "The benchmark creates a consistent reference frame. A positive spread is not automatically excessive, and this comparison is not a profitability calculation.",
    implementation: "A provider could monitor movement in FX pricing by corridor, currency pair or period. The benchmark would serve as a monitoring reference, not a measure of provider profit or exact margin.",
  },
  {
    number: "03",
    id: "finding-corridor-variation",
    title: "Corridor variation",
    question: "Does the average tell the whole story?",
    answer: "No. Pricing varies substantially across corridor and provider combinations. Among qualifying TZAUGA provider observations, median total-cost values ranged from 4.78% to 50.93%.",
    figures: [["4.78% → 50.93%", "Observed provider median range in qualifying TZAUGA observations"]],
    soWhat: "A single global pricing assumption can hide very different economic environments. The spread warrants corridor-level investigation, without labelling a corridor bad or inferring profitability or customer dissatisfaction.",
    implementation: "A pricing or strategy team could rank corridors by observed total cost, sample size, fee component, FX component and benchmark spread. This would help distinguish persistent patterns from isolated observations.",
  },
  {
    number: "04",
    id: "finding-high-cost-corridors",
    title: "Where a closer look could begin",
    question: "Where should deeper investigation begin?",
    answer: "For corridors with at least 100 observations, the analysis identified TURBGR, TZAUGA, TZAKEN, TZARWA and ZAFCHN as a screening set.",
    figures: [["5 corridors", "Screening set with at least 100 observations"]],
    soWhat: "These corridors combine relatively high observed pricing with enough observations to avoid relying entirely on very small samples. They are starting points for review, not declarations of commercial unattractiveness.",
    implementation: "A threshold-based review could combine a minimum observation count, high observed total cost, large FX spread and persistent movement over time. Meeting those conditions could prompt a deeper corridor review.",
  },
  {
    number: "05",
    id: "finding-fx-scenario",
    title: "The FX margin scenario",
    question: "What happens if the FX margin moves?",
    answer: "Reducing the FX margin by 0.50 percentage points produces a modeled saving of approximately $1.00 on a $200 transfer.",
    figures: [["≈ $1.00", "Modeled saving on a $200 transfer"]],
    soWhat: "The point is to establish the economic sensitivity of that decision variable. It is not a recommendation for every provider to make the same change.",
    implementation: "A pricing team could vary transfer amount, current and proposed FX margin, corridor and currency pair to see customer-cost impact before approving a pricing decision. This is sensitivity analysis, not a forecast; it does not estimate customer response or revenue impact.",
  },
  {
    number: "06",
    id: "finding-fee-scenario",
    title: "The fee scenario",
    question: "What happens if the visible fee changes instead?",
    answer: "Reducing the fee by 10% produces a modeled average saving of approximately $0.89 on a $200 transfer.",
    figures: [["≈ $0.89", "Modeled average saving on a $200 transfer"]],
    soWhat: "Comparing two pricing levers on the same transfer basis is more useful than assuming lower fees are always the better move.",
    implementation: "A scenario matrix could compare FX margin changes of −0.25, −0.50 and −0.75 percentage points with fee changes of −5%, −10% and −15%, across transfer amounts and corridors. This is a decision-support model, not a demand forecast.",
  },
] as const;

const operatingSteps = [
  "Monitor corridor pricing",
  "Decompose total cost",
  "Benchmark FX pricing",
  "Flag unusual observations",
  "Run pricing scenarios",
  "Compare customer-cost impact",
  "Review commercial trade-offs",
  "Approve or reject the pricing change",
] as const;

export default function RemittanceStory() {
  return (
    <article className="remittance-story">
      <section className="story-opening" aria-labelledby="story-opening-title">
        <p className="eyebrow">THE BUSINESS SITUATION</p>
        <h2 id="story-opening-title" className="editorial-heading">The price is rarely<br />just the <em>fee.</em></h2>
        <div className="story-opening-copy">
          <p>Sending money across borders looks simple from the outside: choose a provider, enter an amount, pay the fee, and the money arrives.</p>
          <p>The economics underneath are less tidy. A transfer can become expensive through the fee the customer sees, the exchange-rate margin they may not, or both.</p>
          <p>The interesting question is therefore not simply “Which transfers are expensive?” It is: <strong>Where does the cost actually come from, and which pricing lever is worth moving?</strong></p>
        </div>
      </section>

      <section className="story-context" aria-labelledby="story-context-title">
        <div>
          <p className="eyebrow">THE QUESTION</p>
          <h2 id="story-context-title" className="story-section-title">If the objective is to reduce remittance cost, where is the economically meaningful pricing lever?</h2>
        </div>
        <div className="story-context-copy">
          <p>The same nominal transfer amount can carry very different costs depending on corridor, provider, pricing structure and exchange-rate treatment. Looking only at the advertised fee risks missing part of the economics; looking only at the exchange rate creates the opposite problem.</p>
          <p>The useful task is to separate the components, establish a benchmark, and then ask what happens when one of those components moves. This is a pricing sensitivity problem, not simply a search for the cheapest provider.</p>
        </div>
        <ol className="supporting-questions">
          <li><span>01</span> Corridor economics <small>How much does pricing vary across corridors and transfer contexts?</small></li>
          <li><span>02</span> Cost composition <small>How much observed cost comes from the fee versus the FX margin?</small></li>
          <li><span>03</span> Benchmarking <small>How far do provider exchange rates sit from an external benchmark?</small></li>
          <li><span>04</span> Scenario sensitivity <small>What changes when a pricing component moves?</small></li>
          <li><span>05</span> Commercial focus <small>Where are differences large enough to deserve attention?</small></li>
        </ol>
      </section>

      <section className="story-evidence" aria-labelledby="evidence-title">
        <div className="story-evidence-head">
          <p className="eyebrow">THE EVIDENCE</p>
          <h2 id="evidence-title" className="story-section-title">A broad view of surveyed pricing.<br /><em>Not transaction behaviour.</em></h2>
          <p>The analysis uses World Bank Remittance Prices Worldwide surveyed pricing observations covering Q2 2016 to Q1 2025. These describe observed pricing across providers, corridors and periods—not customer transactions.</p>
        </div>
        <div className="project-scale story-scale" aria-label="Project data coverage">
          {[["197,999", "Surveyed pricing observations"], ["372", "Corridors"], ["702", "Providers"], ["36", "Quarters"]].map(([value, label]) => (
            <div className="scale-item" key={label}><span className="scale-value">{value}</span><span className="scale-label">{label}</span></div>
          ))}
        </div>
        <div className="coverage-line"><span>51 source countries</span><span>108 destination countries</span><span>372 corridors</span><span>702 providers</span></div>
        <p className="story-caveat">Surveyed pricing observations do not show how many customers made each transfer, which provider a customer chose, or how customers responded to a price change.</p>
      </section>

      <section className="story-findings" id="findings" aria-labelledby="findings-title">
        <p className="eyebrow">THE FINDINGS</p>
        <h2 id="findings-title" className="editorial-heading">Six ways into<br /><em>the pricing question.</em></h2>
        {findings.map((finding) => (
          <section className="finding" id={finding.id} key={finding.number} aria-labelledby={`${finding.id}-title`}>
            <div className="finding-heading"><span>{finding.number}</span><h3 id={`${finding.id}-title`}>{finding.title}</h3></div>
            <div className="finding-body">
              <div className="finding-answer"><p className="finding-label">QUESTION</p><h4>{finding.question}</h4><p className="finding-label">ANSWER</p><p>{finding.answer}</p></div>
              <div className={`finding-figures finding-figures-${finding.figures.length}`}>
                {finding.figures.map(([value, label]) => <div className="finding-figure" key={label}><strong>{value}</strong><span>{label}</span></div>)}
              </div>
              <div className="finding-explanation"><div><p className="finding-label">SO WHAT?</p><p>{finding.soWhat}</p></div><div><p className="finding-label">REAL-WORLD IMPLEMENTATION</p><p>{finding.implementation}</p></div></div>
            </div>
          </section>
        ))}
      </section>

      <section className="story-decision" aria-labelledby="trade-off-title">
        <div><p className="eyebrow">THE TRADE-OFF</p><h2 id="trade-off-title" className="story-section-title">Which component moves the cost—and what does the business give up to move it?</h2></div>
        <div><p>The question is not simply which component is larger. It is how sensitive the customer’s cost is to changing each component, where that sensitivity occurs, and what the business would be giving up to make the change.</p><p>The framework compares alternative scenarios instead of committing to one pricing intervention based on a headline average.</p></div>
      </section>

      <section className="story-decision story-decision-final" aria-labelledby="decision-title">
        <div><p className="eyebrow">THE DECISION</p><h2 id="decision-title" className="story-section-title">Find the source.<br />Measure the sensitivity.<br /><em>Then decide.</em></h2></div>
        <div><p>The analysis points toward a more granular approach to remittance pricing. Total cost should be treated as a combination of visible fees and FX-related cost. Corridor and provider variation matters enough that one global pricing assumption can hide meaningful differences.</p><p>Scenario analysis gives a practical way to test changes before treating them as commercial decisions. The useful next step is to identify where cost comes from, quantify the sensitivity of each lever, and decide where a change is economically justified.</p></div>
      </section>

      <section className="operating-model" aria-labelledby="operating-title">
        <p className="eyebrow">FROM ANALYSIS TO OPERATING DECISION</p>
        <h2 id="operating-title" className="editorial-heading">A repeatable process,<br /><em>not a one-off answer.</em></h2>
        <div className="operating-intro"><p>The analysis becomes useful when it can move from a one-off study into a repeatable decision process.</p><p>A real pricing organisation could turn the framework into a monitoring and scenario layer sitting above its existing pricing systems.</p></div>
        <ol className="operating-steps">{operatingSteps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol>
        <p className="operating-disclaimer">This project does not claim that this system has been implemented. It demonstrates what the analysis could become inside a real decision environment.</p>
      </section>

      <section className="story-limitations" aria-labelledby="limitations-title">
        <div><p className="eyebrow">LIMITATIONS</p><h2 id="limitations-title" className="story-section-title">What the data can—and cannot—say.</h2></div>
        <ul>
          <li>The data contains surveyed pricing observations rather than customer transaction volumes. It cannot estimate customer switching, transaction demand, revenue impact or price elasticity.</li>
          <li>The historical data describes observed pricing rather than today’s live market.</li>
          <li>Separate fee and FX components are an approximate decomposition. Reported total cost remains the authoritative measure in the source data.</li>
          <li>Scenario analysis is sensitivity analysis, not a forecast.</li>
          <li>The provider-versus-BIS comparison is a benchmark, not evidence of provider profitability or margin.</li>
        </ul>
      </section>

      <section className="technical-note" id="technical-note" aria-labelledby="technical-title">
        <p className="eyebrow">TECHNICAL NOTE</p><h2 id="technical-title" className="story-section-title">The analytical machinery.</h2>
        <dl>{[["Python", "Data preparation, cleaning, analysis and scenario modelling."], ["SQL / DuckDB", "Analytical querying and structured data exploration."], ["Pandas / NumPy", "Transformation and statistical analysis."], ["Matplotlib / Seaborn", "Analytical visualisation."], ["World Bank RPW", "Remittance pricing observations."], ["BIS reference rates", "FX benchmarking."], ["Jupyter / Git / GitHub", "Analysis workflow and reproducibility."]].map(([tool, detail]) => <div key={tool}><dt>{tool}</dt><dd>{detail}</dd></div>)}</dl>
      </section>

      <footer className="story-close">
        <p>“The interesting part of pricing is rarely the number on the surface.<br />It is the structure underneath it — and what changes when you move one part of it.”</p>
        <div><a href="#findings">Explore the analysis <span aria-hidden="true">→</span></a><span className="story-repository" aria-disabled="true" title="Repository address has not been provided">View the project repository <span aria-hidden="true">→</span></span></div>
      </footer>
    </article>
  );
}
