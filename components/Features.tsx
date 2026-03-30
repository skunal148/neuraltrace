"use client";
import { MouseEvent } from "react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    color: "emerald",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: "Multi-Engine Scanning",
    description:
      "4 independent engines \u2014 137 custom NVTs, 8,000+ Nuclei templates, 150+ Nmap scripts, and optional OpenVAS \u2014 cross-validating results to eliminate false positives.",
    tag: "108,000+ CHECKS",
  },
  {
    color: "cyan",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <line x1="9" y1="22" x2="15" y2="22" />
        <line x1="10" y1="2" x2="10" y2="7" />
        <line x1="14" y1="2" x2="14" y2="7" />
      </svg>
    ),
    title: "AI Vulnerability Analysis",
    description:
      "Every finding is analyzed by AI for auto-remediation, attack path analysis, executive summaries, and OS-specific patch commands.",
    tag: "AI-POWERED",
  },
  {
    color: "red",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    title: "Smart Prioritization",
    description:
      "5 independent signals \u2014 CVSS, EPSS exploit prediction, CISA KEV active exploits, confidence scoring, and asset criticality \u2014 rank what matters most.",
    tag: "5 SIGNAL SCORING",
  },
  {
    color: "emerald",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Active Verification",
    description:
      "No guessing \u2014 NeuralTrace actively triggers each vulnerability and collects real proof: HTTP responses, banner grabs, exploit output, and TLS analysis.",
    tag: "EVIDENCE-BACKED",
  },
  {
    color: "cyan",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Compliance Built-In",
    description:
      "Map findings to PCI-DSS 4.0 (47 controls), HIPAA 164.312 (17 safeguards), and DISA STIG (26 checks). Generate board-ready PDF reports instantly.",
    tag: "PCI \u00b7 HIPAA \u00b7 STIG",
  },
  {
    color: "red",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Multi-Tenant Enterprise",
    description:
      "Full RBAC with Admin, Analyst, and Read-Only roles. TOTP MFA, complete audit logs, Slack/email/webhook alerting, and agent-based distributed scanning.",
    tag: "ORG MANAGEMENT",
  },
];

function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
}

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-header">
          <AnimatedSection>
            <div className="section-label">Core Capabilities</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title">
              Six Pillars of<br />Vulnerability Intelligence
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle">
              Every scan is multi-engine, AI-analyzed, evidence-backed, and compliance-mapped.
            </p>
          </AnimatedSection>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.1}>
              <div
                className="feature-card"
                onMouseMove={handleMouseMove}
              >
                <div className={`feature-icon ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-tag">{feature.tag}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
