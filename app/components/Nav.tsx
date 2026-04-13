"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background 0.3s, border-color 0.3s",
      background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
      backdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(210,210,215,0.5)" : "1px solid transparent",
    }}>
      <nav style={{
        maxWidth: 960, margin: "0 auto", padding: "0 24px",
        height: 52, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#" style={{ fontSize: 15, fontWeight: 500, color: "#1d1d1f", letterSpacing: "-0.01em", textDecoration: "none" }}>
          Jiseung Hong
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
          ))}
          <a href="https://github.com/Hongjiseung-ROK" target="_blank" rel="noopener noreferrer" className="nav-cta">
            GitHub ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
