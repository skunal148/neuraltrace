"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosBar from "@/components/LogosBar";
import ProblemSolution from "@/components/ProblemSolution";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ComparisonTable from "@/components/ComparisonTable";
import Coverage from "@/components/Coverage";
// ThreatIntel section removed per user request
import Audience from "@/components/Audience";
import Pricing from "@/components/Pricing";
import CtaSection from "@/components/CtaSection";
import WaitlistModal from "@/components/WaitlistModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <>
      {/* Background effects */}
      <div className="bg-grid" />
      <div className="scan-line" />

      <Navbar />
      <Hero onOpenWaitlist={openWaitlist} />
      <LogosBar />
      <ProblemSolution />
      <Stats />
      <Features />
      <HowItWorks />
      <ComparisonTable />
      <Coverage />
      <Audience />
      <Pricing onOpenWaitlist={openWaitlist} />
      <CtaSection onOpenWaitlist={openWaitlist} />
      <Footer onOpenWaitlist={openWaitlist} />

      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </>
  );
}
