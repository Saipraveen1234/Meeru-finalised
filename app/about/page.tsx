import Navbar from "../shared/Navbar";
import AboutHeroSection from "./sections/AboutHeroSection";
import AboutMissionSection from "./sections/AboutMissionSection";
import AboutWorkbenchesSection from "./sections/AboutWorkbenchesSection";
import AboutFounderSection from "./sections/AboutFounderSection";
import CTAFooterSection from "../shared/CTAFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — MeeruAI",
  description:
    "Learn about MeeruAI's mission, workbenches, and the team building AI tools for finance teams.",
};

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div>
        <AboutHeroSection />
        <AboutMissionSection />
        <AboutWorkbenchesSection />
        <AboutFounderSection />
        <CTAFooterSection />
      </div>
    </main>
  );
}
