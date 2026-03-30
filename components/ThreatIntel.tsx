"use client";
import AnimatedSection from "./AnimatedSection";

const intelSources = [
  {
    icon: "\uD83C\uDFAF",
    name: "NVD / NIST",
    description:
      "300,000+ CVEs synced daily from the National Vulnerability Database with full CVSS scoring.",
    tag: "CVE DATABASE",
  },
  {
    icon: "\uD83D\uDEA8",
    name: "CISA KEV",
    description:
      "Known Exploited Vulnerabilities catalog \u2014 identifies threats actively exploited in the wild right now.",
    tag: "ACTIVE EXPLOITS",
  },
  {
    icon: "\uD83D\uDCC8",
    name: "FIRST EPSS",
    description:
      "Exploit Prediction Scoring System \u2014 real-world exploitability probability from 0\u2013100%.",
    tag: "PREDICTION SCORING",
  },
  {
    icon: "\uD83D\uDCE1",
    name: "GreyNoise",
    description:
      "Real-time internet traffic intelligence \u2014 see which vulnerabilities attackers are actively probing.",
    tag: "TRAFFIC ANALYSIS",
  },
  {
    icon: "\uD83C\uDF10",
    name: "Shodan",
    description:
      "External internet exposure validation \u2014 confirm what\u2019s visible on the public attack surface.",
    tag: "EXPOSURE MAPPING",
  },
  {
    icon: "\uD83D\uDD30",
    name: "AlienVault OTX",
    description:
      "Community threat intel and IoC feeds \u2014 crowdsourced indicators of compromise from global researchers.",
    tag: "COMMUNITY INTEL",
  },
];

export default function ThreatIntel() {
  return (
    <section className="intel-section">
      <div className="container">
        <div className="intel-header">
          <AnimatedSection>
            <div className="section-label">Threat Intelligence</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title">
              Powered by 6 Free<br />Intel Sources
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle">
              Every finding is enriched with real-world threat context from leading intelligence feeds.
            </p>
          </AnimatedSection>
        </div>

        <div className="intel-grid">
          {intelSources.map((source, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.1}>
              <div className="intel-card">
                <div className="intel-card-icon">{source.icon}</div>
                <h3>{source.name}</h3>
                <p>{source.description}</p>
                <span className="intel-card-tag">{source.tag}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
