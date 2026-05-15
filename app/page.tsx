import Navbar from "./shared/Navbar";
import HeroSection from "./home/sections/HeroSection";
import OpportunitySection from "./home/sections/OpportunitySection";
import MeeruFitsSection from "./home/sections/MeeruFitsSection";
import ArchitectureDiagramSection from "./home/sections/ArchitectureDiagramSection";
import CapabilitiesSection from "./home/sections/CapabilitiesSection";
import ProductsSection from "./home/sections/ProductsSection";
import ProofPointsSection from "./home/sections/ProofPointsSection";
import DifferenceSection from "./home/sections/DifferenceSection";
import CTAFooterSection from "./shared/CTAFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MeeruAI — AI Workbenches for Finance Teams",
  description:
    "MeeruAI helps finance teams close faster, explain every variance, and act with confidence with source-traced evidence, review, and audit-ready execution built in.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div>
        <HeroSection />
        <OpportunitySection />
        <MeeruFitsSection />
        <ArchitectureDiagramSection />
        <CapabilitiesSection />
        <ProductsSection />
        <ProofPointsSection />
        <DifferenceSection />
        <CTAFooterSection />
      </div>
    </main>
  );
}
