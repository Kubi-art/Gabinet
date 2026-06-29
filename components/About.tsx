"use client";

import { CheckCircle2 } from "lucide-react";
import { useReveal } from "./useReveal";

const highlights = [
  "Ponad 15 lat doświadczenia w stomatologii",
  "Indywidualne podejście do każdego pacjenta",
  "Nowoczesne metody leczenia bez bólu",
  "Przyjazna atmosfera dla dzieci i dorosłych",
];

export default function About() {
  const ref = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="o-nas" className="relative py-20 lg:py-28 bg-secondary-bg overflow-hidden">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image cluster */}
          <div className="relative">
            {/* Decorative dotted backdrop */}
            <div className="absolute -top-6 -left-6 w-32 h-32 text-teal-300/50 bg-dots rounded-xl" />
            {/* Accent frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl border-2 border-teal-300/40 -z-0" />

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="Gabinet stomatologiczny Monika Wróbel"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-5 shadow-xl shadow-slate-300/60 flex items-center gap-4 animate-float-slow">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500">
                <span className="font-cormorant font-bold text-2xl text-white">15+</span>
              </div>
              <div>
                <p className="font-cormorant font-bold text-lg text-slate-800 leading-none">
                  lat
                </p>
                <p className="font-lato text-xs text-slate-500 mt-1">doświadczenia</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-block font-lato text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-white">
              O nas
            </span>
            <h2 className="font-cormorant font-semibold text-4xl sm:text-5xl text-slate-800 mb-6 leading-[1.05]">
              Dbamy o Twój uśmiech{" "}
              <span className="text-gradient italic">z pasją i troską</span>
            </h2>
            <p className="font-lato text-slate-600 text-base leading-relaxed mb-4">
              Centrum Stomatologiczne Monika Wróbel to gabinet z wieloletnią
              tradycją i nowoczesnym podejściem do leczenia. Naszym priorytetem
              jest komfort pacjenta i najwyższa jakość świadczonych usług.
            </p>
            <p className="font-lato text-slate-600 text-base leading-relaxed mb-8">
              Wierzymy, że dobra stomatologia łączy profesjonalizm z troską
              o pacjenta. Stawiamy na profilaktykę — zdrowy uśmiech to
              najpiękniejsza wizytówka. Zapraszamy całe rodziny, leczymy
              zarówno najmłodszych, jak i dorosłych.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-lato text-sm text-slate-700"
                >
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
