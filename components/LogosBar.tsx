"use client";
import AnimatedSection from "./AnimatedSection";

interface LogoItem {
  name: string;
  abbr: string;
}

const logos: LogoItem[] = [
  { name: "Nessus Pro", abbr: "N" },
  { name: "Rapid7 InsightVM", abbr: "R7" },
  { name: "OpenVAS", abbr: "OV" },
  { name: "Qualys VMDR", abbr: "Q" },
  { name: "Tenable.sc", abbr: "TS" },
];

export default function LogosBar() {
  return (
    <section className="logos-bar">
      <div className="container">
        <AnimatedSection>
          <p className="logos-bar-label">Compared favorably against industry leaders</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="logos-row">
            {logos.map((logo) => (
              <div key={logo.abbr} className="logo-item">
                <div className="logo-icon">{logo.abbr}</div> {logo.name}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
