"use client";

import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden wave-divider">
      {/* Background — soft dusty rose gradient */}
      <div className="absolute inset-0 -z-20 img-placeholder">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-warm/40 via-primary-light/30 to-transparent" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/90" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — text */}
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Sminkes — Győr &amp; Tapolca
              </p>
              <h1
                className="font-heading font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground"
                style={{ fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)" }}
              >
                Természetes szépség,{" "}
                <span className="text-highlight">maradandó élmény.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-7 text-lg leading-relaxed text-foreground-secondary max-w-[540px]">
                Menyasszonyi, alkalmi, nappali és fotó smink profi kivitelben.
                Professzionális termékekkel, személyre szabott stílussal — Győrben és Tapolcán.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-[1rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow whitespace-nowrap cursor-pointer"
                >
                  Időpontfoglalás
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href="#szolgaltatasok"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-primary/20 px-8 py-4 text-[1rem] font-bold text-primary hover:bg-primary/5 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Szolgáltatások
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative max-w-[280px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 transform rotate-2 scale-[1.02] -z-10" />
                <div className="rounded-3xl bg-surface-card border border-border shadow-2xl shadow-primary/8 overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-all duration-500">
                  <div className="aspect-[3/4] img-placeholder flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center ring-4 ring-white/50 mb-3">
                        <span className="font-heading font-bold text-white text-3xl">K</span>
                      </div>
                      <p className="text-xs text-foreground-secondary font-medium">Kovacsik Kamilla</p>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-heading font-bold text-foreground text-base">Kovacsik Kamilla</h3>
                    <p className="text-xs text-foreground-muted mt-0.5">Sminkes — Győr &amp; Tapolca</p>
                    <a
                      href="https://www.instagram.com/kovacsik_kamilla_sminkes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary/8 text-primary font-bold text-xs py-2.5 mt-3 hover:bg-primary/15 transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      @kovacsik_kamilla_sminkes
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
