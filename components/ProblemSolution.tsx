"use client";
import AnimatedSection from "./AnimatedSection";

interface PriceTag {
  name: string;
  price: string;
}

const prices: PriceTag[] = [
  { name: "Nessus Professional", price: "$3,590 \u2013 $5,890 / yr" },
  { name: "Rapid7 InsightVM", price: "$11,000 \u2013 $150,000+ / yr" },
  { name: "Qualys VMDR", price: "$15,000+ / yr" },
];

const checklist: string[] = [
  "108,000+ vulnerability checks across 4 engines",
  "AI-powered remediation playbooks",
  "Active verification with real evidence",
  "Real-time WebSocket dashboard",
  "PCI-DSS, HIPAA, STIG compliance reports",
  "Multi-tenant RBAC with MFA",
  "MIT Licensed \u2014 forever free",
];

export default function ProblemSolution() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-grid">
          <AnimatedSection delay={0} className="problem-card problem">
            <h3>The Problem</h3>
            <p>
              Enterprise vulnerability scanners are locked behind massive licensing fees,
              putting critical security tooling out of reach for startups, small teams,
              and independent researchers.
            </p>
            <div className="price-tags">
              {prices.map((item) => (
                <div key={item.name} className="price-tag">
                  <span className="name">{item.name}</span>
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 20, fontSize: "0.9rem" }}>
              Free alternatives? CLI-only tools with no dashboard, no reporting,
              and no AI-driven remediation guidance.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="problem-card solution">
            <h3>The NeuralTrace Solution</h3>
            <p>
              A production-grade, multi-engine scanner that rivals $15,000/yr
              commercial tools &mdash; completely free and open source.
            </p>
            <ul className="solution-features">
              {checklist.map((item) => (
                <li key={item}>
                  <span className="check">{"\u2713"}</span> {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
