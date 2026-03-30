"use client";

interface FooterProps {
  onOpenWaitlist: () => void;
}

export default function Footer({ onOpenWaitlist }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">NeuralTrace</span>
          <span className="footer-copy">&copy; 2026 &middot; MIT License</span>
        </div>
        <ul className="footer-links">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenWaitlist(); }}>Join Waitlist</a>
          </li>
          <li>
            <a
              href="https://github.com/skunal148/VulnScan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:admin@neuraltrace.co.in">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
