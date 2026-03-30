import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plexSansBody = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neuraltrace.cloud"),
  title: "NeuralTrace — Enterprise Vulnerability Intelligence. Zero Cost.",
  description:
    "NeuralTrace is a free, open-source AI-powered vulnerability scanner with 108,000+ checks, 4 scanning engines, active verification, and AI-powered remediation. Replace Nessus and Rapid7 at zero cost.",
  keywords: [
    "vulnerability intelligence",
    "CVE tracking",
    "EPSS scoring",
    "threat analytics",
    "cybersecurity",
    "vulnerability management",
    "attack surface monitoring",
    "risk prioritization",
    "security operations",
    "vulnerability scanner",
    "NeuralTrace",
    "free vulnerability tool",
    "enterprise security",
    "real-time CVE alerts",
    "exploit prediction",
  ],
  openGraph: {
    title: "NeuralTrace — Enterprise Vulnerability Intelligence. Zero Cost.",
    description:
      "AI-powered vulnerability scanner with 108,000+ checks across 4 engines. Active verification, AI-powered remediation, compliance reporting. Open source, free forever.",
    url: "https://neuraltrace.cloud",
    siteName: "NeuralTrace",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuralTrace — Enterprise Vulnerability Intelligence",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralTrace — Enterprise Vulnerability Intelligence. Zero Cost.",
    description:
      "AI-powered vulnerability scanner with 108,000+ checks across 4 engines. Active verification, AI-powered remediation, compliance reporting. Open source, free forever.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NeuralTrace",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Linux, Windows, macOS",
  url: "https://neuraltrace.cloud",
  description:
    "AI-powered vulnerability scanner with 108,000+ checks, 4 scanning engines, active verification with evidence collection, and AI-powered remediation. Free and open source.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  license: "https://opensource.org/licenses/MIT",
  codeRepository: "https://github.com/skunal148/VulnScan",
  featureList: [
    "108,000+ vulnerability checks",
    "4 independent scanning engines",
    "AI-powered remediation",
    "Active vulnerability verification",
    "PCI-DSS, HIPAA, STIG compliance",
    "Multi-tenant enterprise architecture",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plexSans.variable} ${plexSansBody.variable} ${plexMono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
