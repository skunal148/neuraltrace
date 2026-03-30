"use client";
import AnimatedSection from "./AnimatedSection";

const coverageItems = [
  {
    name: "HTTP / Web",
    count: "81+",
    description: "Log4Shell, Spring4Shell, SQLi, XSS, SSRF, Path Traversal",
  },
  {
    name: "Windows",
    count: "17",
    description: "RDP, SMB, Active Directory, WinRM, EternalBlue",
  },
  {
    name: "Cloud-Native",
    count: "12",
    description: "Terraform state, Kubernetes dashboard, etcd, Consul",
  },
  {
    name: "Database",
    count: "10",
    description: "MongoDB, Redis, Elasticsearch, MySQL default credentials",
  },
  {
    name: "CIS Benchmarks",
    count: "10",
    description: "SSH hardening, HTTP security headers, logging compliance",
  },
  {
    name: "API Security",
    count: "8",
    description: "GraphQL introspection, JWT weak secrets, CORS misconfig",
  },
  {
    name: "Network",
    count: "8+",
    description: "SSH, SNMP, Telnet, weak TLS/SSL, certificate expiry",
  },
  {
    name: "CI/CD",
    count: "6",
    description: "Jenkins CVE-2024-23897, GitLab CI, GitHub Actions exposure",
  },
];

export default function Coverage() {
  return (
    <section className="coverage-section" id="coverage">
      <div className="container">
        <div className="coverage-header">
          <AnimatedSection>
            <div className="section-label">Scanning Coverage</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title">
              What NeuralTrace<br />Checks For
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle">
              137 hand-crafted NVTs plus thousands of community templates covering every attack surface.
            </p>
          </AnimatedSection>
        </div>

        <div className="coverage-grid">
          {coverageItems.map((item, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.08}>
              <div className="coverage-item">
                <div className="coverage-item-header">
                  <span className="coverage-item-name">{item.name}</span>
                  <span className="coverage-item-count">{item.count}</span>
                </div>
                <p className="coverage-item-desc">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
