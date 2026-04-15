"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#szolgaltatasok", label: "Szolgáltatások" },
  { href: "/#rolam", label: "Rólam" },
  { href: "/#idopont", label: "Időpontfoglalás" },
  { href: "/#gyik", label: "GYIK" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-border-light"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center ring-2 ring-primary/20">
              <span className="font-heading font-bold text-white text-base">K</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-heading font-bold tracking-[-0.02em] text-foreground">
                Makeup by Kamilla
              </span>
              <span className="text-xs text-foreground-muted font-medium">Sminkes — Győr &amp; Tapolca</span>
            </div>
          </a>

          {/* Instagram — mobile */}
          <a
            href="https://www.instagram.com/kovacsik_kamilla_sminkes/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center gap-1.5 text-foreground font-semibold text-sm"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            DM
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9rem] font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kapcsolat"
              className="inline-flex items-center gap-2 cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/20 hover:bg-primary-dark hover:shadow-md transition-all duration-200"
            >
              Időpontfoglalás
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-surface-alt transition-colors"
            aria-label="Menü"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h12" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border-light">
          <div className="px-5 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground-secondary hover:bg-surface-alt hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kapcsolat"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center rounded-xl bg-primary px-5 py-3 mt-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Időpontfoglalás
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
