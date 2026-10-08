"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProcessSequence from "@/components/ProcessSequence";

export default function HowIThink() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const reduceMotion = useReducedMotion();
  const headingY = useTransform(scrollYProgress, [0, 0.35], [0, -24]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.48, 1], [1, 1, 0.58]);

  return (
    <section className="thinking-story" id="how-i-think" ref={sectionRef} aria-labelledby="thinking-title">
      <div className="thinking-sticky">
        <div className="thinking-heading">
          <div className="section-heading-row">
            <p className="eyebrow">HOW I THINK</p>
            <span className="section-index">02 / HOW I THINK</span>
          </div>
          <motion.h2
            id="thinking-title"
            className="editorial-heading"
            style={reduceMotion ? undefined : { y: headingY, opacity: headingOpacity }}
          >
            Every project<br />starts with a<br /><em>question.</em>
          </motion.h2>
          <p className="thinking-note">A clear line from the problem to an informed next step.</p>
        </div>
        <ProcessSequence progress={scrollYProgress} />
        <div className="thinking-progress" aria-hidden="true">
          <motion.span style={{ scaleX: scrollYProgress }} />
        </div>
      </div>
    </section>
  );
}
