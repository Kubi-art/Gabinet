"use client";

import { Phone, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => ref.current?.classList.add("visible"), 100);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80"
          alt="Nowoczesny gabinet stomatologiczny"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/50 to-slate-900/20" />
      </div>

      <div
        ref={ref}
        className="section-fade-in relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white"
      >
        <div className="max-w-2xl">
          <p className="font-lato text-accent text-sm uppercase tracking-widest mb-4">
            Centrum Stomatologiczne Monika Wróbel
          </p>
          <h1 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
            Twój uśmiech
            <br />
            <span className="text-accent">w dobrych rękach</span>
          </h1>
          <p className="font-lato text-lg sm:text-xl text-slate-200 mb-4 max-w-xl">
            Profesjonalna opieka stomatologiczna dla całej rodziny.
            Zapraszamy do naszego gabinetu w Kamionce.
          </p>
          <div className="flex items-center gap-2 text-slate-300 font-lato text-sm mb-8">
            <MapPin size={16} className="text-accent shrink-0" />
            <span>ul. Przy Stawie 37, 05-502 Kamionka</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:600970314"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-lato font-bold px-8 py-4 rounded-full text-base transition-colors duration-200 shadow-lg"
            >
              <Phone size={18} />
              Zadzwoń i umów wizytę
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-lato px-8 py-4 rounded-full text-base transition-colors duration-200 hover:bg-white/10"
            >
              Nasze usługi
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
