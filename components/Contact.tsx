"use client";

import { useEffect, useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const hours = [
  { days: "Poniedziałek – Piątek", time: "9:00 – 18:00" },
  { days: "Sobota", time: "9:00 – 13:00" },
  { days: "Niedziela", time: "Nieczynne" },
];

export default function Contact() {
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
    <section id="kontakt" className="py-20 lg:py-28 bg-secondary-bg">
      <div ref={ref} className="section-fade-in max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-lato text-primary text-sm uppercase tracking-widest mb-3">Kontakt</p>
          <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">
            Znajdź nas i zadzwoń
          </h2>
          <p className="font-lato text-slate-500 text-base max-w-xl mx-auto">
            Jesteśmy do Twojej dyspozycji. Zadzwoń lub odwiedź nas osobiście.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-cormorant font-semibold text-lg text-slate-800 mb-1">Adres</h3>
                  <p className="font-lato text-slate-600 text-sm leading-relaxed">ul. Przy Stawie 37<br />05-502 Kamionka</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-cormorant font-semibold text-lg text-slate-800 mb-1">Telefon</h3>
                  <a href="tel:600970314" className="font-lato text-primary font-bold text-base hover:text-primary-dark transition-colors">600 970 314</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div className="w-full">
                  <h3 className="font-cormorant font-semibold text-lg text-slate-800 mb-3">Godziny otwarcia</h3>
                  <ul className="space-y-2">
                    {hours.map((h) => (
                      <li key={h.days} className="flex justify-between font-lato text-sm text-slate-600">
                        <span>{h.days}</span>
                        <span className={`font-bold ${h.time === "Nieczynne" ? "text-slate-400" : "text-primary"}`}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a href="tel:600970314" className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-lato font-bold px-6 py-4 rounded-full transition-colors duration-200 shadow-md">
              <Phone size={18} />
              Zadzwoń: 600 970 314
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.2!2d20.9733!3d52.0554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPrzy+Stawie+37%2C+05-502+Kamionka!5e0!3m2!1spl!2spl!4v1699999999999!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ minHeight: "400px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Centrum Stomatologiczne Monika Wróbel"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
