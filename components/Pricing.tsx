"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const tiers = [
  {
    name: "Free",
    badge: null,
    price: "$0",
    period: "/month — forever",
    subtitle: "No credit card required",
    features: [
      "3 assets",
      "5 scans/month",
      "Basic NVT scans",
      "1 user, 1 organization",
      "Community support",
    ],
    excluded: [
      "AI analysis",
      "Compliance reports",
      "Threat intel feeds",
    ],
    cta: "Get Started Free",
    ctaStyle: "secondary" as const,
    popular: false,
    accent: "var(--text-muted)",
  },
  {
    name: "Starter",
    badge: null,
    price: "$129",
    period: "/month",
    subtitle: "Billed $1,290/yr annually",
    features: [
      "15 assets",
      "Unlimited scans",
      "AI remediation + attack paths",
      "PDF & CSV reports",
      "3 users",
      "Email support",
    ],
    excluded: [
      "Compliance frameworks",
      "Threat intel feeds",
    ],
    cta: "Start Free Trial",
    ctaStyle: "secondary" as const,
    popular: false,
    accent: "var(--cyan)",
  },
  {
    name: "Pro",
    badge: "MOST POPULAR",
    price: "$199",
    period: "/month",
    subtitle: "Billed $1,990/yr annually",
    features: [
      "100 assets",
      "Everything in Starter +",
      "PCI-DSS, HIPAA, STIG compliance",
      "Scheduled scans & policies",
      "EPSS, KEV, GreyNoise, Shodan",
      "10 users",
      "Slack & email notifications",
      "Priority support",
    ],
    excluded: [],
    cta: "Start Free Trial",
    ctaStyle: "primary" as const,
    popular: true,
    accent: "var(--emerald)",
  },
  {
    name: "Business",
    badge: null,
    price: "$349",
    period: "/month",
    subtitle: "Billed $3,490/yr annually",
    features: [
      "500 assets",
      "Everything in Pro +",
      "Agent-based scanning",
      "Multi-org management",
      "Unlimited users",
      "Full API access",
      "Priority support + SLA",
    ],
    excluded: [],
    cta: "Start Free Trial",
    ctaStyle: "secondary" as const,
    popular: false,
    accent: "var(--cyan)",
  },
  {
    name: "Enterprise",
    badge: null,
    price: "Custom",
    period: "",
    subtitle: "For large organizations & MSSPs",
    features: [
      "Unlimited assets",
      "Everything in Business +",
      "White-label option",
      "SSO / SAML integration",
      "Dedicated support + SLA",
      "On-premise deployment",
      "Custom integrations",
    ],
    excluded: [],
    cta: "Talk to Sales",
    ctaStyle: "secondary" as const,
    popular: false,
    accent: "var(--text-muted)",
  },
];

interface PricingProps {
  onOpenWaitlist: () => void;
}

export default function Pricing({ onOpenWaitlist }: PricingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pricing-section" id="pricing" ref={ref}>
      <div className="container">
        <div className="pricing-header">
          <AnimatedSection>
            <div className="section-label">Pricing</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title">
              Simple, Transparent<br />Pricing
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle">
              Start free. Scale as you grow. Still a fraction of what legacy scanners charge.
            </p>
          </AnimatedSection>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`pricing-card${tier.popular ? " pricing-card-popular" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ "--pricing-accent": tier.accent } as React.CSSProperties}
            >
              {tier.badge && (
                <div className="pricing-badge">{tier.badge}</div>
              )}

              <div className="pricing-card-header">
                <h3 className="pricing-tier-name">{tier.name}</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">{tier.price}</span>
                  <span className="pricing-period">{tier.period}</span>
                </div>
                <p className="pricing-subtitle">{tier.subtitle}</p>
              </div>

              <div className="pricing-divider" />

              <ul className="pricing-features">
                {tier.features.map((f) => (
                  <li key={f} className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
                {tier.excluded.map((f) => (
                  <li key={f} className="pricing-feature pricing-feature-excluded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pricing-card-footer">
                {tier.name === "Enterprise" ? (
                  <a href="mailto:admin@neuraltrace.co.in" className={`pricing-cta pricing-cta-${tier.ctaStyle}`}>
                    {tier.cta}
                  </a>
                ) : (
                  <button className={`pricing-cta pricing-cta-${tier.ctaStyle}`} onClick={onOpenWaitlist}>
                    {tier.cta}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
