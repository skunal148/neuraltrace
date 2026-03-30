"use client";
import { useState, useEffect, useRef, useCallback } from "react";

interface TerminalLine {
  text: string;
  delay: number;
}

const lines: TerminalLine[] = [
  {
    text: '<span class="prompt">$</span> <span class="cmd">neuraltrace scan</span> <span class="flag">--target</span> 192.168.1.0/24 <span class="flag">--engines</span> all',
    delay: 0,
  },
  {
    text: '<span class="info">[*] NeuralTrace v3.2.0 — Enterprise Vulnerability Scanner</span>',
    delay: 600,
  },
  {
    text: '<span class="info">[*] Loaded 137 NVTs from OpenVAS feed</span>',
    delay: 900,
  },
  {
    text: '<span class="info">[*] Nuclei templates: 8,247 loaded</span>',
    delay: 1200,
  },
  {
    text: '<span class="info">[*] Nmap scripts: 152 active</span>',
    delay: 1500,
  },
  {
    text: '<span class="info">[*] Threat intel: NVD + CISA KEV + EPSS + ExploitDB + Shodan + VirusTotal</span>',
    delay: 1800,
  },
  {
    text: '<span class="warn">[SCAN]</span> Discovering hosts on 192.168.1.0/24...',
    delay: 2400,
  },
  {
    text: '<span class="warn">[SCAN]</span> Found <span class="success">14 live hosts</span>, <span class="success">87 open ports</span>',
    delay: 3000,
  },
  {
    text: '<span class="warn">[SCAN]</span> Running active verification on findings...',
    delay: 3600,
  },
  {
    text: '<span class="critical">[CRITICAL]</span> CVE-2024-3094 — XZ Utils Backdoor <span class="critical">(CVSS 10.0)</span>',
    delay: 4200,
  },
  {
    text: '<span class="critical">[HIGH]</span> CVE-2024-21762 — FortiOS Out-of-Bound Write <span class="critical">(CVSS 9.8)</span>',
    delay: 4600,
  },
  {
    text: '<span class="critical">[HIGH]</span> CVE-2023-44228 — Log4Shell Variant <span class="critical">(CVSS 9.1)</span>',
    delay: 5000,
  },
  {
    text: '<span class="flag">[AI]</span> Generating remediation playbooks...',
    delay: 5600,
  },
  {
    text: '<span class="success">[DONE]</span> Scan complete: <span class="critical">3 critical</span>, <span class="warn">7 high</span>, <span class="warn">12 medium</span>, <span class="dim">4 low</span>',
    delay: 6200,
  },
  {
    text: '<span class="success">[EXPORT]</span> PDF report saved → /reports/scan_2024_report.pdf',
    delay: 6800,
  },
];

const RESTART_DELAY = 5000;

export default function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const startSequence = useCallback(() => {
    setVisibleCount(0);
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    lines.forEach((line, i) => {
      const timer = setTimeout(() => {
        setVisibleCount(i + 1);
      }, line.delay);
      timersRef.current.push(timer);
    });

    const lastDelay = lines[lines.length - 1].delay;
    const restartTimer = setTimeout(() => {
      startSequence();
    }, lastDelay + RESTART_DELAY);
    timersRef.current.push(restartTimer);
  }, []);

  useEffect(() => {
    startSequence();
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [startSequence]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="terminal-header">
        <span className="terminal-dot red"></span>
        <span className="terminal-dot yellow"></span>
        <span className="terminal-dot green"></span>
        <span className="terminal-title">neuraltrace &mdash; scan session</span>
      </div>
      <div className="terminal-body">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className="terminal-line"
            dangerouslySetInnerHTML={{ __html: line.text }}
          />
        ))}
        <span
          className="terminal-cursor"
          style={{ opacity: showCursor ? 1 : 0 }}
        >
          &#9608;
        </span>
      </div>
    </>
  );
}
