"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function AnimatedCounter({
  target,
  suffix = "+",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = Math.round(easedProgress * target);

      const formatted =
        current >= 100 ? current.toLocaleString() + suffix : String(current);
      setDisplay(formatted);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, target, suffix, duration]);

  return <span ref={ref}>{display}</span>;
}

const stats = [
  { value: 108000, label: "Vulnerability Checks" },
  { value: 300000, label: "CVEs in Database" },
  { value: 137, label: "Custom NVTs" },
  { value: null, label: "Forever", display: "$0" },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="stat-card">
              <div className="stat-number">
                {stat.value !== null ? (
                  <AnimatedCounter target={stat.value} />
                ) : (
                  stat.display
                )}
              </div>
              <div className="stat-label">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
