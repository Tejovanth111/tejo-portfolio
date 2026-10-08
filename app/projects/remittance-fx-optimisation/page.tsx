import type { Metadata } from "next";
import Link from "next/link";
import ProjectIntro from "@/components/ProjectIntro";
import RemittanceStory from "@/components/RemittanceStory";

export const metadata: Metadata = {
  title: "Remittance Economics & FX Optimisation — Tejovanth K",
  description: "A business analytics project examining surveyed international remittance pricing.",
};

export default function RemittanceProjectPage() {
  return (
    <main className="page-shell project-detail-shell">
      <Link className="project-back-link" href="/#work">← All projects</Link>
      <ProjectIntro />
      <RemittanceStory />
    </main>
  );
}
