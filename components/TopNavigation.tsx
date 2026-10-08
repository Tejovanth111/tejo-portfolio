"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Work", id: "work" },
  { label: "How I think", id: "how-i-think" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
] as const;

export default function TopNavigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [observedSection, setObservedSection] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const mobilePanel = useRef<HTMLElement>(null);
  const home = pathname === "/";
  const activeSection = home ? observedSection : null;

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!home) return;

    const observedSections = links
      .map(({ id }) => ({ id, element: document.getElementById(id) }))
      .filter((item): item is { id: (typeof links)[number]["id"]; element: HTMLElement } => Boolean(item.element));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
      if (visible) setObservedSection(visible.target.id);
    }, { rootMargin: "-24% 0px -62% 0px", threshold: [0, 0.1, 0.25, 0.5] });
    observedSections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, [home]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panelLinks = Array.from(mobilePanel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
    panelLinks[0]?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
        return;
      }
      if (event.key === "Tab") {
        const focusable = [menuButton.current, ...panelLinks].filter((item): item is HTMLButtonElement | HTMLAnchorElement => Boolean(item));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const hrefFor = (id: string) => home ? `#${id}` : `/#${id}`;

  return (
    <header className={`top-navigation${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-is-open" : ""}`}>
      <div className="top-navigation-bar">
        <Link className="top-navigation-brand" href="/" aria-label="Tejovanth K home" onClick={() => setMenuOpen(false)}>TK<span>.</span></Link>
        <nav className="top-navigation-links" aria-label="Main navigation">
          {links.map(({ label, id }) => (
            <Link
              href={hrefFor(id)}
              key={id}
              className={home && activeSection === id ? "is-active" : undefined}
              aria-current={home && activeSection === id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          className="top-navigation-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-panel"
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuButton}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        className="mobile-navigation-panel"
        id="mobile-navigation-panel"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        ref={mobilePanel}
      >
        {links.map(({ label, id }, index) => (
          <Link
            href={hrefFor(id)}
            key={id}
            className={home && activeSection === id ? "is-active" : undefined}
            aria-current={home && activeSection === id ? "location" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <span>0{index + 1}</span>{label}<i aria-hidden="true">↗</i>
          </Link>
        ))}
      </nav>
      {menuOpen && <button className="mobile-navigation-scrim" aria-label="Close navigation menu" onClick={() => { setMenuOpen(false); menuButton.current?.focus(); }} />}
    </header>
  );
}
