import { notFound } from "next/navigation";
import PlannedProjectPage from "@/components/PlannedProjectPage";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.filter((project) => project.status === "Planned").map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.status === "Planned");
  if (!project) notFound();
  return <PlannedProjectPage project={project} />;
}
