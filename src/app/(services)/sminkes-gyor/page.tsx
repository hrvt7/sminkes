import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Sminkes Győrben — Makeup by Kamilla Kovacsik",
  description: "Sminkes Győrben — menyasszonyi, alkalmi, nappali, fotó és érettségi smink. Professzionális termékek, személyre szabott stílus. Kovacsik Kamilla.",
  alternates: { canonical: "https://sminkes.vercel.app/sminkes-gyor" },
};

export default function Page() {
  return (
    <ServicePage
      title="Sminkes Győrben"
      subtitle="Menyasszonyi, alkalmi, nappali és fotó smink Győrben — Kovacsik Kamilla professzionális sminkes."
      gradient="from-[#D4B8B8] via-[#E5CECE] to-[#F5E4E4]"
      sections={[
        {
          heading: "Miért érdemes győri sminkest választani?",
          text: "Győr kisebb, de aktívan pulzáló városi életű — számtalan esküvő, céges rendezvény, diplomaosztó és fotózás zajlik itt minden hónapban. Egy helyi sminkes ismeri a közeli helyszíneket, a fényviszonyokat, a rugalmas időzítést. Győrben élőként vagy dolgozóként ez annyit jelent, hogy nem kell messzire utazni a smink miatt, és nem kell egy távoli városból érkező szakembertől remélni, hogy időben odaér a nagy napra. Menyasszonyi sminkhez különösen fontos a földrajzi közelség: ha reggel 6-kor kell a szállásra érkeznem, egy közeli sminkes megbízhatóbb.",
        },
        {
          heading: "Szolgáltatások Győrben",
          text: "Menyasszonyi smink — helyszínre szállással Győr és a környék valamennyi esküvői helyszínére. Alkalmi smink — céges rendezvényre, koszorúslányoknak, családi ünnepre. Nappali smink — üzleti találkozóra, randira, fontos napra. Fotó smink — portré-, divat- és terhes fotózáshoz győri stúdiókban. Érettségi és bál smink — győri gimnáziumok szalagavatóira és ballagásaira. Próbasmink — menyasszonyi vagy fontos alkalmi smink előtt.",
        },
        {
          heading: "Területi elérhetőség",
          text: "Elsődlegesen Győrben dolgozom, de a közeli településekre (Győrszentiván, Nyúl, Töltéstava, Ikrény, Abda, Gönyű, Dunaszeg, stb.) szintén kiszállok. Tapolca felé havonta több alkalommal utazom, így az ottani vendégeket is kiszolgálom — sok menyasszonyomnak kedvező, hogy mindkét oldalt lefedem. A kiszállás konkrét feltételeit a foglaláskor egyeztetjük.",
        },
        {
          heading: "Foglalás menete",
          text: "Írj Instagram DM-ben (@kovacsik_kamilla_sminkes) vagy emailben. Add meg: az alkalom típusát, a pontos dátumot, a helyszínt, a hozzávetőleges időt, és hogy kell-e próbasmink. Visszaírok a rendelkezésre állásról és egy személyre szabott árajánlatról. Ha minden passzol, az előleg rögzíti a foglalást. A nagy napig tartok kapcsolatot, szükség esetén egyeztetünk.",
        },
      ]}
      relatedServices={[
        { title: "Menyasszonyi smink", href: "/menyasszonyi-smink" },
        { title: "Alkalmi smink", href: "/alkalmi-smink" },
        { title: "Nappali smink", href: "/nappali-smink" },
        { title: "Fotó smink", href: "/foto-smink" },
        { title: "Érettségi & bál smink", href: "/erettsegi-bal-smink" },
        { title: "Próbasmink", href: "/probasmink" },
      ]}
    />
  );
}
