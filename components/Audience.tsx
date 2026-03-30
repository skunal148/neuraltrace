"use client";
import AnimatedSection from "./AnimatedSection";

const audiences = [
  {
    icon: "\uD83C\uDFE1",
    title: "Startups & SMBs",
    description:
      "No budget for $3,500+/yr scanners. Get enterprise features completely free.",
  },
  {
    icon: "\uD83D\uDCBB",
    title: "Security Engineers",
    description:
      "Write custom Python NVTs. Full API access. Extensible and auditable.",
  },
  {
    icon: "\uD83D\uDD75\uFE0F",
    title: "Penetration Testers",
    description:
      "Active verification with evidence collection. Perfect for engagement reports.",
  },
  {
    icon: "\uD83C\uDF0E",
    title: "MSPs & Consultants",
    description:
      "Multi-tenant org management with RBAC. Manage all clients from one instance.",
  },
  {
    icon: "\u2699\uFE0F",
    title: "DevSecOps Teams",
    description:
      "API-first design. CI/CD scanning built-in. Slack, email, and webhook alerts.",
  },
  {
    icon: "\uD83D\uDD2C",
    title: "Security Researchers",
    description:
      "Open source, auditable, extensible. Built for research environments.",
  },
  {
    icon: "\uD83C\uDF93",
    title: "Universities & Labs",
    description:
      "Free, documented, and great for academic research and training programs.",
  },
  {
    icon: "\uD83D\uDD10",
    title: "Red Teams",
    description:
      "Multi-engine recon with attack path analysis. Chain vulnerabilities into kill chains.",
  },
];

export default function Audience() {
  return (
    <section className="audience-section" id="audience">
      <div className="container">
        <div className="audience-header">
          <AnimatedSection>
            <div className="section-label">Who It&apos;s For</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title">
              Built for Security<br />Professionals
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle">
              From solo researchers to enterprise MSPs &mdash; NeuralTrace scales to your mission.
            </p>
          </AnimatedSection>
        </div>

        <div className="audience-grid">
          {audiences.map((audience, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.08}>
              <div className="audience-card">
                <div className="audience-icon">{audience.icon}</div>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
