"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

const DataNetwork = dynamic(() => import("@/components/DataNetwork"), {
  ssr: false,
  loading: () => <div className="network-visual" aria-hidden="true" />,
});

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <DataNetwork />
      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          BUSINESS ANALYTICS <span>·</span> DATA <span>·</span> STRATEGY
        </motion.p>
        <motion.h1
          id="hero-title"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-accent-i">I</span> turn business questions<br className="desktop-break" /> into data-driven decisions.
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          Business Analytics <span>·</span> Product Analytics <span>·</span>
          <br /> Decision Science <span>·</span> Strategy &amp; Operations
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.7, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="button button-primary" href="#work">
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
      <div className="hero-footer">
        <span>TEJOVANTH K</span>
        <motion.a
          href="#how-i-think"
          className="scroll-cue"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" aria-hidden="true" />
        </motion.a>
        <span>01 / 01</span>
      </div>
    </section>
  );
}
