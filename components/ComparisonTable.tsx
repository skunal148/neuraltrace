"use client";
import AnimatedSection from "./AnimatedSection";

type CellType = "bold" | "check" | "x" | "partial" | "plain";

interface Cell {
  text: string;
  type: CellType;
  highlight?: boolean;
}

interface Row {
  feature: string;
  neuraltrace: Cell;
  nessus: Cell;
  rapid7: Cell;
}

const rows: Row[] = [
  {
    feature: "Annual Cost",
    neuraltrace: { text: "$0", type: "bold", highlight: true },
    nessus: { text: "$3,590 \u2013 $5,890", type: "plain" },
    rapid7: { text: "$11,000 \u2013 $150,000+", type: "plain" },
  },
  {
    feature: "Vulnerability Checks",
    neuraltrace: { text: "108,000+", type: "bold", highlight: true },
    nessus: { text: "293,651", type: "plain" },
    rapid7: { text: "180,000+", type: "plain" },
  },
  {
    feature: "AI Analysis",
    neuraltrace: { text: "Built-in AI", type: "check", highlight: true },
    nessus: { text: "", type: "x" },
    rapid7: { text: "Limited", type: "partial" },
  },
  {
    feature: "Multi-Engine",
    neuraltrace: { text: "4 engines", type: "check", highlight: true },
    nessus: { text: "Single", type: "x" },
    rapid7: { text: "Single", type: "x" },
  },
  {
    feature: "Open Source",
    neuraltrace: { text: "Full MIT", type: "check", highlight: true },
    nessus: { text: "", type: "x" },
    rapid7: { text: "", type: "x" },
  },
  {
    feature: "Evidence Collection",
    neuraltrace: { text: "Per finding", type: "check", highlight: true },
    nessus: { text: "Basic", type: "partial" },
    rapid7: { text: "Basic", type: "partial" },
  },
  {
    feature: "Custom Checks",
    neuraltrace: { text: "Python NVTs", type: "check", highlight: true },
    nessus: { text: "NASL", type: "partial" },
    rapid7: { text: "", type: "x" },
  },
  {
    feature: "Real-Time Dashboard",
    neuraltrace: { text: "WebSocket", type: "check", highlight: true },
    nessus: { text: "Polling", type: "partial" },
    rapid7: { text: "", type: "check" },
  },
  {
    feature: "Free Threat Intel",
    neuraltrace: { text: "6 sources", type: "check", highlight: true },
    nessus: { text: "3", type: "partial" },
    rapid7: { text: "3", type: "partial" },
  },
  {
    feature: "Multi-Tenancy",
    neuraltrace: { text: "", type: "check", highlight: true },
    nessus: { text: "Add-on", type: "partial" },
    rapid7: { text: "", type: "check" },
  },
];

function renderCell(cell: Cell) {
  const className = cell.highlight ? "col-highlight" : undefined;

  switch (cell.type) {
    case "bold":
      return (
        <td className={className}>
          <span className="compare-bold">{cell.text}</span>
        </td>
      );
    case "check":
      return (
        <td className={className}>
          <span className="compare-check">{"\u2713"}</span>
          {cell.text ? ` ${cell.text}` : ""}
        </td>
      );
    case "x":
      return (
        <td className={className}>
          <span className="compare-x">{"\u2717"}</span>
          {cell.text ? ` ${cell.text}` : ""}
        </td>
      );
    case "partial":
      return (
        <td className={className}>
          <span className="compare-partial">{"\u25CF"}</span>
          {cell.text ? ` ${cell.text}` : ""}
        </td>
      );
    default:
      return <td className={className}>{cell.text}</td>;
  }
}

export default function ComparisonTable() {
  return (
    <section className="compare-section" id="compare">
      <div className="container">
        <div className="compare-header">
          <AnimatedSection>
            <div className="section-label">Competitive Analysis</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title">
              See How NeuralTrace<br />Stacks Up
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle">
              70\u201380% of commercial scanner capability. 100% free.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight col-highlight">NeuralTrace</th>
                  <th>Nessus Pro</th>
                  <th>Rapid7 InsightVM</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    {renderCell(row.neuraltrace)}
                    {renderCell(row.nessus)}
                    {renderCell(row.rapid7)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
