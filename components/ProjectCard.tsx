import Link from "next/link";
import type { PortfolioProject } from "@/types/project";

export default function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="portfolio-project portfolio-project--text-only">
      <Link href={project.href} className="portfolio-project-link" aria-label={`Explore ${project.title}`}>
        <div className="portfolio-project-copy">
          <div className="project-card-meta">
            <span>{project.primaryCategory.toUpperCase()}</span>
            <span>{project.status.toUpperCase()}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-card-description">{project.shortDescription}</p>
        </div>
      </Link>
    </article>
  );
}
