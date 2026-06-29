"use client";

import { useEffect, useRef } from "react";
import { Stethoscope, Baby, Crown, Smile, Scissors } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Stomatologia zachowawcza z endodoncją",
    description: "Leczenie próchnicy, wypełnienia kompozytowe oraz leczenie kanałowe (endodontyczne). Dbamy o Twoje zęby na każdym etapie choroby.",
  },
  {
    icon: Baby,
    title: "Stomatologia dziecięca",
    description: "Kompleksowa opieka nad uzębieniem mlecznym i stałym dzieci. Przyjazna atmosfera sprawia, że wizyta u dentysty nie jest straszna.",
  },
  {
    icon: Crown,
    title: "Protetyka stomatologiczna",
    description: "Korony, mosty, protezy ruchome i stałe. Odbudowujemy brakujące zęby, przywracając piękny uśmiech i funkcję żucia.",
  },
  {
    icon: Smile,
    title: "Ortodoncja",
    description: "Leczenie wad zgryzu i estetyki uśmiechu. Aparaty stałe i ruchome dla dzieci oraz dorosłych dopasowane do Twoich potrzeb.",
  },
  {
    icon: Scissors,
    title: "Chirurgia stomatologiczna",
    description: "Ekstrakcje zębów, w tym zębów mądrości. Zabiegi chirurgiczne przeprowadzane w bezpiecznych warunkach z troską o komfort pacjenta.",
  },
];

export default function Services() {
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
    <section id="uslugi" className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="section-fade-in max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-lato text-primary text-sm uppercase tracking-widest mb-3">Usługi</p>
          <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">
            Kompleksowa opieka stomatologiczna
          </h2>
          <p className="font-lato text-slate-500 text-base max-w-2xl mx-auto">
            Oferujemy szeroki zakres usług, dzięki którym zadbamy o Twój uśmiech na każdym etapie życia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group bg-secondary-bg hover:bg-accent border border-slate-100 hover:border-primary/20 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-cormorant font-semibold text-xl text-slate-800 mb-3 leading-snug">{service.title}</h3>
                <p className="font-lato text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="tel:600970314" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-lato font-bold px-8 py-4 rounded-full transition-colors duration-200 shadow-md">
            Umów wizytę – 600 970 314
          </a>
        </div>
      </div>
    </section>
  );
}
