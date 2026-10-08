import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HowICanHelp from "@/components/HowICanHelp";
import HowIThink from "@/components/HowIThink";
import ProjectLibrary from "@/components/ProjectLibrary";
import RolesSection from "@/components/RolesSection";
import WhatIDo from "@/components/WhatIDo";
import PersonalGallery from "@/components/PersonalGallery";
import { getAboutPortrait, getMediaAssets, mediaDirectories } from "@/data/media";

export default function Home() {
  const portrait = getAboutPortrait();
  const galleryImages = getMediaAssets(mediaDirectories.gallery);

  return (
    <main className="page-shell">
      <Hero />
      <WhatIDo />
      <HowIThink />
      <ProjectLibrary />
      <HowICanHelp />
      <RolesSection />
      <PersonalGallery images={galleryImages} />
      <AboutSection portrait={portrait} />
      <ContactSection />
    </main>
  );
}
