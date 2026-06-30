"use client";

import { Stethoscope, Baby, Crown, Smile, Scissors, ArrowRight } from "lucide-react";
import { useReveal } from "./useReveal";

const services = [
  {
    icon: Stethoscope,
    title: "Stomatologia zachowawcza z endodoncją",
    description:
      "Leczenie próchnicy, wypełnienia kompozytowe oraz leczenie kanałowe. Dbamy o Twoje zęby na każdym etapie choroby.",
  },
  {
    icon: Baby,
    title: "Stomatologia dziecięca",
    description:
      "Kompleksowa opieka nad uzębieniem mlecznym i stałym dzieci. Przyjazna atmosfera sprawia, że wizyta nie jest straszna.",
  },
  {
    icon: Crown,
    title: "Protetyka stomatologiczna",
    description:
      "Korony, mosty, protezy ruchome i stałe. Odbudowujemy brakujące zęby, przywracając piękny uśmiech i funkcję żucia.",
  },
  {
    icon: Smile,
    title: "Ortodoncja",
    description:
      "Leczenie wad zgryzu i estetyki uśmiechu. Aparaty stałe i ruchome dla dzieci oraz dorosłych dopasowane do potrzeb.",
  },
  {
    icon: Scissors,
    title: "Chirurgia stomatologiczna z implantologią",
    description:
      "Ekstrakcje zębów, w tym zębów mądrości, oraz wszczepienie implantów. Zabiegi przeprowadzane w bezpiecznych warunkach z troską o komfort.",
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>(0.1);

  return (
    <section id="uslugi" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      {/* Soft blob */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />

      <div ref={ref} className="reveal relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-lato text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-accent/60">
            Nasze usługi
          </span>
          <h2 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-6xl text-slate-800 mb-4">
            Kompleksowa opieka <span className="text-gradient">stomatologiczna</span>
          </h2>
          <p className="font-lato text-slate-500 text-base max-w-2xl mx-auto">
            Oferujemy szeroki zakres usług, dzięki którym zadbamy o Twój uśmiech
            na każdym etapie życia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-white border border-slate-100 rounded-3xl p-7 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_60px_-20px_rgba(13,148,136,0.35)] hover:border-teal-200 ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Number watermark */}
                <span className="absolute top-5 right-6 font-cormorant font-bold text-5xl text-slate-100 group-hover:text-accent transition-colors duration-300 select-none">
                  0{index + 1}
                </span>

                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon size={26} className="text-white" />
                </div>

                <h3 className="font-cormorant font-semibold text-xl text-slate-800 mb-3 leading-snug pr-8">
                  {service.title}
                </h3>
                <p className="font-lato text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <a
                  href="tel:600970314"
                  className="inline-flex items-center gap-1.5 font-lato text-sm font-bold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                >
                  Umów wizytę
                  <ArrowRight size={15} />
                </a>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-teal-700 rounded-3xl p-7 flex flex-col justify-center text-white">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <h3 className="relative font-cormorant font-semibold text-2xl mb-2">
              Nie wiesz, czego potrzebujesz?
            </h3>
            <p className="relative font-lato text-teal-50/90 text-sm mb-5">
              Zadzwoń — doradzimy i umówimy dogodny termin.
            </p>
            <a
              href="tel:600970314"
              className="relative inline-flex items-center justify-center gap-2 bg-white text-primary font-lato font-bold px-6 py-3 rounded-full hover:bg-accent transition-colors duration-300"
            >
              <ArrowRight size={16} />
              600 970 314
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
