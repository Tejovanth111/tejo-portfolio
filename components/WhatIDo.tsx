const disciplines = [
  {
    number: "01",
    title: "Business Analytics",
    description:
      "Bring structure to broad business questions: clarify what matters, examine the drivers, and make the trade-offs easier to see.",
  },
  {
    number: "02",
    title: "Product Analytics",
    description:
      "Understand how people encounter and use a product, where journeys become difficult, and which product questions deserve attention.",
  },
  {
    number: "03",
    title: "Decision Science",
    description:
      "Compare options under uncertainty, make assumptions explicit, and explore how a decision could change across scenarios.",
  },
  {
    number: "04",
    title: "Strategy & Operations",
    description:
      "Look at how resources, processes, and priorities connect to performance, then identify where further investigation may help.",
  },
] as const;

export default function WhatIDo() {
  return (
    <section className="what-i-do section-gutter" id="what-i-do" aria-labelledby="what-i-do-title">
      <div className="section-heading-row">
        <p className="eyebrow">AREAS OF FOCUS</p>
        <span className="section-index">01 / WHAT I DO</span>
      </div>
      <h2 id="what-i-do-title" className="editorial-heading">
        What kind of problems<br />can I help solve?
      </h2>
      <div className="discipline-list">
        {disciplines.map(({ number, title, description }) => (
          <article className="discipline-row" key={number}>
            <span className="discipline-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="discipline-mark" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
