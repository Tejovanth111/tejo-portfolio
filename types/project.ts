export type ProjectCategory =
  | "Fintech"
  | "AML / Compliance"
  | "Education"
  | "Supply Chain";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: ProjectCategory;
  primaryCategory: ProjectCategory;
  domain: string;
  categoryLabel: string;
  status: "Analysed" | "Planned";
  shortDescription: string;
  why: string;
  where: string;
  question: string;
  href: string;
  keyMetric: string;
  keyMetricLabel: string;
  metricStatus: "measured" | "planned";
  methods: string[];
  technologies: string[];
  evidence: string[];
  analysis: string;
  soWhat: string;
  implementation: string;
  limitations: string[];
  metric?: { value: string; label: string };
};
