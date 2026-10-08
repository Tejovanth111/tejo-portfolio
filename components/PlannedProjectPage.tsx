import type { PortfolioProject } from "@/types/project";
import Link from "next/link";

export default function PlannedProjectPage({ project }: { project: PortfolioProject }) {
  return (
    <main className="page-shell project-detail-shell planned-project-page">
      <Link className="project-back-link" href="/#work">← All projects</Link>
      <header className="planned-project-hero">
        <div className="project-kicker"><span>{project.categoryLabel.toUpperCase()}</span><span>IN DEVELOPMENT</span></div>
        <p className="eyebrow">{project.status.toUpperCase()} PROJECT</p>
        <h1>{project.title}</h1>
        <p className="planned-project-lede">{project.shortDescription}</p>
        <p className="planned-project-question">{project.question}</p>
      </header>

      <article className="planned-project-story">
        <section className="planned-section planned-situation">
          <p className="eyebrow">01 / THE SITUATION</p>
          <h2>{project.shortDescription}</h2>
          <p>{project.soWhat}</p>
        </section>
        <section className="planned-section planned-context">
          <div><p className="eyebrow">02 / WHY IT MATTERS</p><h2>{project.why}</h2></div>
          <div><p className="eyebrow">03 / WHERE THE PROBLEM LIVES</p><p>{project.where}</p><p className="eyebrow planned-question-label">04 / THE QUESTION</p><p className="planned-question-copy">{project.question}</p></div>
        </section>
        <section className="planned-section planned-evidence">
          <div><p className="eyebrow">05 / THE EVIDENCE</p><h2>What the analysis would need to see.</h2></div>
          <ul>{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="planned-section planned-analysis">
          <div><p className="eyebrow">06 / THE ANALYSIS</p><h2>Turn the question into a decision frame.</h2></div>
          <div><p>{project.analysis}</p><p className="eyebrow">PROPOSED METHODS</p><ul className="planned-methods">{project.methods.map((method) => <li key={method}>{method}</li>)}</ul></div>
        </section>
        <section className="planned-key-number" aria-label="Planned key metric">
          <p className="eyebrow">07 / KEY NUMBER · METRIC TO ESTABLISH</p>
          <strong>{project.keyMetric}</strong>
          <span>{project.keyMetricLabel}</span>
          <p>This project is planned. No result is claimed here.</p>
        </section>
        <section className="planned-section planned-implications">
          <div><p className="eyebrow">08 / SO WHAT?</p><h2>{project.soWhat}</h2></div>
          <div><p className="eyebrow">09 / FROM ANALYSIS TO DECISION</p><p>{project.implementation}</p></div>
        </section>
        <section className="planned-section planned-limitations">
          <div><p className="eyebrow">10 / LIMITATIONS</p><h2>What the evidence cannot settle on its own.</h2></div>
          <ul>{project.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
        </section>
      </article>
    </main>
  );
}
