"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { projectCategories, projects } from "@/data/projects";
import type { ProjectCategory } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";

function categoryHash(category: ProjectCategory) {
  return `#work-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

function categoryFromHash(hash: string) {
  return projectCategories.find((category) => categoryHash(category) === hash) ?? null;
}

export default function ProjectLibrary() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const shouldMoveFocusRef = useRef(false);
  const reduceMotion = useReducedMotion();
  const visibleProjects = useMemo(
    () => activeCategory ? projects.filter((project) => project.primaryCategory === activeCategory) : [],
    [activeCategory],
  );

  useEffect(() => {
    const syncCategory = () => setActiveCategory(categoryFromHash(window.location.hash));
    syncCategory();
    window.addEventListener("hashchange", syncCategory);
    window.addEventListener("popstate", syncCategory);
    return () => {
      window.removeEventListener("hashchange", syncCategory);
      window.removeEventListener("popstate", syncCategory);
    };
  }, []);

  function completeTransition() {
    if (!shouldMoveFocusRef.current) return;
    headingRef.current?.focus();
    shouldMoveFocusRef.current = false;
  }

  return (
    <section className="project-library section-gutter" id="work" aria-labelledby="work-title">
      <div className="section-heading-row">
        <p className="eyebrow">WORK</p>
        <span className="section-index">03 / PROJECT LIBRARY</span>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {activeCategory ? (
          <motion.div
            key={`projects-${activeCategory}`}
            className="work-category-view"
            onAnimationComplete={completeTransition}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="library-heading-row work-selected-heading">
              <div>
                <p className="eyebrow">{activeCategory.toUpperCase()}</p>
                <h2 ref={headingRef} tabIndex={-1} id="work-title" className="editorial-heading">{visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}</h2>
              </div>
              <Link className="work-change-category" href="#work" onClick={() => { shouldMoveFocusRef.current = true; setActiveCategory(null); }}>← All areas</Link>
            </div>
            <div className="project-list" aria-live="polite" aria-label={`${activeCategory} projects`}>
              {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="work-categories"
            className="work-category-landing"
            onAnimationComplete={completeTransition}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="library-heading-row">
              <h2 ref={headingRef} tabIndex={-1} id="work-title" className="editorial-heading">Explore the problems<br className="wide-break" /> I work on across:</h2>
              <p className="library-note">Choose an area to explore its projects.</p>
            </div>
            <div className="work-category-list" role="group" aria-label="Choose a work category">
              {projectCategories.map((category, index) => {
                const count = projects.filter((project) => project.primaryCategory === category).length;
                return (
                  <Link
                    href={categoryHash(category)}
                    key={category}
                    id={`work-category-${index + 1}`}
                    className="work-category-button"
                    aria-label={`${category}, ${count} ${count === 1 ? "project" : "projects"}`}
                    onClick={() => { shouldMoveFocusRef.current = true; setActiveCategory(category); }}
                  >
                    <span className="work-category-index">0{index + 1}</span>
                    <span className="work-category-name">{category}</span>
                    <span className="work-category-count">{String(count).padStart(2, "0")} {count === 1 ? "PROJECT" : "PROJECTS"}</span>
                    <span className="work-category-arrow" aria-hidden="true">↗</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
