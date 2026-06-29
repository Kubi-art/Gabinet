"use client";

import { Phone, MapPin, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: "15+", label: "lat doświadczenia" },
  { value: "5000+", label: "zadowolonych pacjentów" },
  { value: "5", label: "specjalizacji" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const el = ref.current;
      requestAnimationFrame(() => el.classList.add("visible"));
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80"
          alt="Nowoczesny gabinet stomatologiczny"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/80 to-teal-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />
      </div>

      {/* Animated decorative blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[28rem] h-[28rem] bg-teal-500/20 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-cyan-400/15 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "6s" }}
        />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="reveal reveal-stagger relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-400/10 backdrop-blur-sm px-4 py-1.5 mb-7">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-teal-300 text-teal-300" />
              ))}
            </span>
            <span className="font-lato text-xs text-teal-100 tracking-wide">
              Centrum Stomatologiczne Monika Wróbel
            </span>
          </div>

          <h1 className="font-cormorant font-bold text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-7">
            Twój uśmiech
            <br />
            <span className="text-gradient animate-gradient italic">
              w dobrych rękach
            </span>
          </h1>

          <p className="font-lato text-lg sm:text-xl text-slate-200/90 mb-5 max-w-xl leading-relaxed">
            Profesjonalna, bezbolesna opieka stomatologiczna dla całej rodziny.
            Zapraszamy do naszego gabinetu w Kamionce.
          </p>

          <div className="flex items-center gap-2 text-teal-100/80 font-lato text-sm mb-9">
            <MapPin size={16} className="text-teal-300 shrink-0" />
            <span>ul. Przy Stawie 37, 05-502 Kamionka</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="tel:600970314"
              className="group relative inline-flex items-center justify-center gap-3 bg-primary text-white font-lato font-bold px-8 py-4 rounded-full text-base overflow-hidden shadow-[0_10px_40px_-10px_rgba(13,148,136,0.7)] transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Phone size={18} className="relative z-10 group-hover:animate-pulse" />
              <span className="relative z-10">Zadzwoń i umów wizytę</span>
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-teal-300/60 text-white font-lato px-8 py-4 rounded-full text-base backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
            >
              Poznaj nasze usługi
            </a>
          </div>

          {/* Glassmorphism stats strip */}
          <div className="grid grid-cols-3 gap-px max-w-xl rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-5 text-center">
                <p className="font-cormorant font-bold text-3xl sm:text-4xl text-teal-300 leading-none">
                  {s.value}
                </p>
                <p className="font-lato text-[11px] sm:text-xs text-slate-300 mt-2 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-teal-300 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
