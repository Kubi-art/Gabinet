"use client";

import { useEffect, useRef } from "react";
import { Users, Zap, Heart } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Doświadczony zespół",
    description: "Nasz zespół to specjaliści z wieloletnim doświadczeniem w różnych dziedzinach stomatologii. Regularnie uczestniczymy w szkoleniach i konferencjach, by oferować leczenie na najwyższym poziomie.",
  },
  {
    icon: Zap,
    title: "Nowoczesny sprzęt",
    description: "Wyposażenie naszego gabinetu to najnowocześniejszy sprzęt stomatologiczny. Rentgen cyfrowy, mikroskop, leczenie z użyciem lasera – diagnostyka i leczenie szybciej i dokładniej.",
  },
  {
    icon: Heart,
    title: "Miła atmosfera",
    description: "Rozumiemy, że wizyta u dentysty może być stresująca. Dlatego tworzymy przyjazną, spokojną atmosferę, w której zarówno dorośli, jak i dzieci czują się bezpiecznie i komfortowo.",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="dlaczego-my" className="py-20 lg:py-28 bg-primary">
      <div ref={ref} className="section-fade-in max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-lato text-accent text-sm uppercase tracking-widest mb-3">Dlaczego my</p>
          <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Zaufaj naszemu doświadczeniu
          </h2>
          <p className="font-lato text-teal-100 text-base max-w-2xl mx-auto">
            Jesteśmy tu po to, by sprawić, że Twój uśmiech będzie piękny i zdrowy przez całe życie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="text-center bg-white/10 hover:bg-white/15 rounded-2xl p-8 transition-colors duration-300">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-cormorant font-semibold text-2xl text-white mb-4">{reason.title}</h3>
                <p className="font-lato text-teal-100 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
