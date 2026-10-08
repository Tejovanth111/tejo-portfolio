"use client";

import { motion, useReducedMotion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Business Analytics",
    description: "Turn messy operational and commercial questions into structured analysis that supports decisions.",
  },
  {
    number: "02",
    title: "Product Analytics",
    description: "Understand customer behaviour, product performance, retention, adoption and friction.",
  },
  {
    number: "03",
    title: "Decision Science",
    description: "Model scenarios, trade-offs and uncertainty when the answer is not obvious from a dashboard.",
  },
  {
    number: "04",
    title: "Strategy & Operations",
    description: "Translate evidence into practical choices around processes, pricing, risk and performance.",
  },
] as const;

export default function WhatIDo() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="what-i-do section-gutter" id="what-i-do" aria-labelledby="what-i-do-title">
      <div className="section-heading-row">
        <p className="eyebrow">01 / WHAT I DO</p>
        <span className="section-index">BUSINESS · PRODUCT · DECISIONS</span>
      </div>

      <h2 id="what-i-do-title" className="editorial-heading what-i-do-heading">
        I work where business questions<br className="what-i-do-line-break" /> meet <span className="what-i-do-accent">analytical systems.</span>
      </h2>

      <div className="capabilities-grid">
        {capabilities.map(({ number, title, description }, index) => (
          <motion.article
            className="capability-item"
            key={number}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="capability-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.article>
        ))}
      </div>

      <div className="technical-layer">
        <p className="technical-layer-label">TECHNICAL PRACTICE</p>
        <p className="technical-layer-skills">
          Python <span>·</span> SQL <span>·</span> Statistics <span>·</span> Experimentation <span>·</span> Forecasting <span>·</span> Data Visualisation
        </p>
      </div>
    </section>
  );
}
