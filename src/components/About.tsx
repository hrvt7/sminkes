import FadeIn from "./FadeIn";

const benefits = [
  {
    title: "Személyre szabott",
    desc: "Minden smink a te arcodra, bőrszínedre és stílusodra készül. Nincs sablon — csak te és az alkalom.",
    gradient: "from-[#D4B8B8] via-[#E5CECE] to-[#F0DEDE]",
  },
  {
    title: "Professzionális termékek",
    desc: "Hosszan tartó, HD kamerára optimalizált, bőrbarát kozmetikumokkal dolgozom — érzékeny bőrre is.",
    gradient: "from-[#C9A7A7] via-[#D9BCBC] to-[#E9D2D2]",
  },
  {
    title: "Helyszínre kiszállás",
    desc: "Menyasszonyi smink esetén Győr és Tapolca környékén a szállásra, esküvői helyszínre is érkezem.",
    gradient: "from-[#D9C5C5] via-[#E3D2D2] to-[#EEDEDE]",
  },
  {
    title: "Nyugodt légkör",
    desc: "A készülődés maga is élmény: zene, kávé, pletyka — és közben professzionális munka minden pillanatban.",
    gradient: "from-[#CFB5B5] via-[#DEC8C8] to-[#EDDBDB]",
  },
];

function BenefitVisual({ gradient }: { gradient: string }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <div className="h-14 w-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
        <div className="h-6 w-6 rounded-full bg-white/70" />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="rolam" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Rólam
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Miért{" "}
              <span className="text-highlight">válassz engem?</span>
            </h2>
            <p className="mt-6 text-lg text-foreground-secondary leading-relaxed max-w-xl mx-auto">
              Kovacsik Kamilla vagyok — szenvedélyes sminkes Győrből és Tapolcáról.
              A célom, hogy minden vendégem önmagához hű, magabiztos és gyönyörű legyen.
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed max-w-xl mx-auto">
              A smink számomra nem csak szakma, hanem művészet és kapcsolódás.
              Hiszem, hogy a jó smink nem elrejti a vonásaidat, hanem kiemeli azokat.
              Minden alkalomra személyre szabott stílust hozok, legyen szó esküvőről,
              fotózásról vagy egy nappali frissítésről.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-surface-card overflow-hidden card-hover group h-full">
                {/* Visual */}
                <div className="h-52 sm:h-56 overflow-hidden">
                  <BenefitVisual gradient={benefit.gradient} />
                </div>
                {/* Text */}
                <div className="p-5 lg:p-6">
                  <h3 className="font-heading text-base font-bold text-foreground mb-2 tracking-[-0.01em]">
                    {benefit.title}
                  </h3>
                  <p className="text-[0.85rem] text-foreground-muted leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
