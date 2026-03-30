"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Nmap service discovery maps open ports, services, and software versions across your target infrastructure.",
    detail: "PORT SCAN + SERVICE ENUM",
    accent: "var(--emerald)",
  },
  {
    number: "02",
    title: "Verify",
    description:
      "4 scanning engines actively test each vulnerability and collect real evidence — HTTP responses, banners, exploit output.",
    detail: "4 ENGINES × ACTIVE PROBING",
    accent: "var(--cyan)",
  },
  {
    number: "03",
    title: "Prioritize",
    description:
      "5-signal scoring — CVSS, EPSS, CISA KEV, confidence, and asset criticality — ranks findings by real-world risk.",
    detail: "CVSS + EPSS + KEV + CONFIDENCE",
    accent: "var(--warning)",
  },
  {
    number: "04",
    title: "Remediate",
    description:
      "AI generates step-by-step fixes, OS-specific patch commands, attack path analysis, and executive PDF reports.",
    detail: "AI ANALYSIS + PDF EXPORT",
    accent: "var(--emerald)",
  },
];

function ArrowConnector() {
  return (
    <div className="how-arrow">
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
        <path
          d="M0 12h32M26 5l8 7-8 7"
          stroke="var(--emerald)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4 3"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="how-section" id="how" ref={sectionRef}>
      <div className="container">
        <div className="how-header">
          <AnimatedSection>
            <div className="section-label">Workflow</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title">
              From Target to<br />Remediation in Minutes
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle">
              A four-phase intelligence pipeline that delivers verified, prioritized, actionable results.
            </p>
          </AnimatedSection>
        </div>

        <div className="how-pipeline">
          {steps.map((step, i) => (
            <div className="how-pipeline-item" key={i}>
              <motion.div
                className="how-card"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ "--card-accent": step.accent } as React.CSSProperties}
              >
                <div className="how-card-top">
                  <span className="how-card-number">{step.number}</span>
                  <span className="how-card-detail">{step.detail}</span>
                </div>
                <h3 className="how-card-title">{step.title}</h3>
                <p className="how-card-desc">{step.description}</p>
                <div className="how-card-bar">
                  <motion.div
                    className="how-card-bar-fill"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 1.2,
                      delay: 0.5 + i * 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </div>
              </motion.div>
              {i < steps.length - 1 && <ArrowConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
