"use client";

import { motion, MotionValue, useReducedMotion, useTransform } from "framer-motion";

const steps = [
  ["QUESTION", "Define the business problem and the decision behind it."],
  ["EVIDENCE", "Find and assess the information that can inform it."],
  ["ANALYSIS", "Examine patterns, assumptions, and trade-offs."],
  ["DECISION", "Make the implications clear and actionable."],
] as const;

type ProcessSequenceProps = { progress: MotionValue<number> };

export default function ProcessSequence({ progress }: ProcessSequenceProps) {
  const reduceMotion = useReducedMotion();

  return (
    <ol className="process-sequence" aria-label="An approach to business analysis">
      {steps.map(([label, question], index) => (
        <SequenceStep
          key={label}
          label={label}
          question={question}
          index={index}
          progress={progress}
          reduceMotion={reduceMotion}
        />
      ))}
    </ol>
  );
}

function SequenceStep({
  label,
  question,
  index,
  progress,
  reduceMotion,
}: {
  label: string;
  question: string;
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const center = (index + 0.5) / steps.length;
  const opacity = useTransform(
    progress,
    [Math.max(0, center - 0.16), center - 0.04, center + 0.04, Math.min(1, center + 0.16)],
    [0.82, 1, 1, 0.82],
  );
  const scale = useTransform(
    progress,
    [Math.max(0, center - 0.16), center - 0.04, center + 0.04, Math.min(1, center + 0.16)],
    [0.99, 1, 1, 0.99],
  );

  return (
    <motion.li
      className="process-step"
      style={reduceMotion ? undefined : { opacity, scale }}
      aria-label={`${label}: ${question}`}
    >
      <span className="process-index">0{index + 1}</span>
      <div>
        <span className="process-label">{label}</span>
        <p>{question}</p>
      </div>
      <span className="process-node" aria-hidden="true" />
    </motion.li>
  );
}
