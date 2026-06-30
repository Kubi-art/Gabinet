"use client";

import { MapPin, Phone, Navigation } from "lucide-react";
import { useReveal } from "./useReveal";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>(0.1);

  return (
    <section id="kontakt" className="relative py-20 lg:py-28 bg-secondary-bg overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/40 rounded-full blur-3xl" />

      <div ref={ref} className="reveal relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-lato text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-white">
            Kontakt
          </span>
          <h2 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-6xl text-slate-800 mb-4">
            Znajdź nas <span className="text-gradient">i zadzwoń</span>
          </h2>
          <p className="font-lato text-slate-500 text-base max-w-xl mx-auto">
            Jesteśmy do Twojej dyspozycji. Zadzwoń lub odwiedź nas osobiście.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-cormorant font-semibold text-lg text-slate-800 mb-1">
                    Adres
                  </h3>
                  <p className="font-lato text-slate-600 text-sm leading-relaxed">
                    ul. Przy Stawie 37
                    <br />
                    05-502 Kamionka
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-cormorant font-semibold text-lg text-slate-800 mb-1">
                    Telefon
                  </h3>
                  <a href="tel:600970314" className="block font-lato text-primary font-bold text-lg hover:text-primary-dark transition-colors">
                    600 970 314
                  </a>
                  <a href="tel:224357736" className="block font-lato text-slate-500 text-sm hover:text-primary transition-colors mt-0.5">
                    22 435 77 36
                  </a>
                </div>
              </div>
            </div>

            <a
              href="tel:600970314"
              className="group flex items-center justify-center gap-2 bg-primary text-white font-lato font-bold px-6 py-4 rounded-full transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_12px_30px_-10px_rgba(13,148,136,0.8)] hover:scale-[1.02]"
            >
              <Phone size={18} className="group-hover:animate-pulse" />
              Zadzwoń: 600 970 314
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden shadow-xl shadow-slate-300/40 border border-slate-100 bg-slate-100">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-teal-50 to-cyan-50">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Navigation size={26} className="text-primary" />
                </div>
                <p className="font-cormorant font-semibold text-xl text-slate-700">
                  ul. Przy Stawie 37, Kamionka
                </p>
                <p className="font-lato text-sm text-slate-500 mt-1">
                  Ładowanie mapy…
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.2!2d20.9733!3d52.0554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPrzy+Stawie+37%2C+05-502+Kamionka!5e0!3m2!1spl!2spl!4v1699999999999!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ minHeight: "420px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Centrum Stomatologiczne Monika Wróbel"
                className="relative w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
