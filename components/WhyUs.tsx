"use client";

import { Users, Sparkles, HeartHandshake } from "lucide-react";
import { useReveal } from "./useReveal";

const reasons = [
  {
    icon: Users,
    title: "Doświadczony zespół",
    description:
      "Specjaliści z wieloletnim doświadczeniem w różnych dziedzinach stomatologii. Regularnie się szkolimy, by oferować leczenie na najwyższym poziomie.",
  },
  {
    icon: Sparkles,
    title: "Nowoczesny sprzęt",
    description:
      "Rentgen cyfrowy, mikroskop, leczenie laserem — dzięki najnowocześniejszemu wyposażeniu diagnozujemy i leczymy szybciej oraz dokładniej.",
  },
  {
    icon: HeartHandshake,
    title: "Miła atmosfera",
    description:
      "Tworzymy przyjazną, spokojną atmosferę, w której zarówno dorośli, jak i dzieci czują się bezpiecznie i komfortowo na każdej wizycie.",
  },
];

export default function WhyUs() {
  const ref = useReveal<HTMLDivElement>(0.1);

  return (
    <section
      id="dlaczego-my"
      className="relative py-24 lg:py-32 bg-gradient-to-br from-primary-dark via-primary to-teal-600 overflow-hidden"
    >
      {/* Pattern + blobs */}
      <div className="absolute inset-0 bg-dots text-white/10" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-teal-900/30 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "5s" }}
      />

      <div ref={ref} className="reveal relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-lato text-teal-50 text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm">
            Dlaczego my
          </span>
          <h2 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Zaufaj naszemu doświadczeniu
          </h2>
          <p className="font-lato text-teal-50/90 text-base max-w-2xl mx-auto">
            Jesteśmy tu po to, by Twój uśmiech był piękny i zdrowy przez całe życie.
          </p>
        </div>

        <div className="reveal-stagger grid md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative text-center bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-3xl p-8 transition-all duration-400 hover:-translate-y-2"
              >
                <span className="absolute top-6 right-7 font-cormorant font-bold text-6xl text-white/10 select-none">
                  {i + 1}
                </span>
                <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-cormorant font-semibold text-2xl text-white mb-4">
                  {reason.title}
                </h3>
                <p className="font-lato text-teal-50/85 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
