"use client";

import { motion, useReducedMotion } from "framer-motion";
import DataNetwork from "@/components/DataNetwork";

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
          I turn business
          <br className="desktop-break" /> questions into
          <br className="desktop-break" /> data-driven <em>decisions.</em>
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          Exploring how data, analytical thinking and technology can help
          businesses make better decisions.
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
          <a className="button button-secondary" href="#about">
            About me <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
      <div className="hero-footer">
        <span>TEJOVANTH K</span>
        <motion.a
          href="#work"
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
