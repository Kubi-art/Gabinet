"use client";

import { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Ponad 15 lat doświadczenia w stomatologii",
  "Indywidualne podejście do każdego pacjenta",
  "Nowoczesne metody leczenia bez bólu",
  "Przyjazna atmosfera dla dzieci i dorosłych",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="o-nas" className="py-20 lg:py-28 bg-secondary-bg">
      <div
        ref={ref}
        className="section-fade-in max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="Gabinet stomatologiczny Monika Wróbel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-5 shadow-xl hidden sm:block">
              <p className="font-cormorant font-bold text-4xl leading-none">15+</p>
              <p className="font-lato text-xs text-accent mt-1">lat doświadczenia</p>
            </div>
          </div>

          <div>
            <p className="font-lato text-primary text-sm uppercase tracking-widest mb-3">O nas</p>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-6 leading-tight">
              Dbamy o Twój uśmiech<br />z pasją i troską
            </h2>
            <p className="font-lato text-slate-600 text-base leading-relaxed mb-4">
              Centrum Stomatologiczne Monika Wróbel to gabinet z wieloletnią tradycją i
              nowoczesnym podejściem do leczenia. Naszym priorytetem jest komfort
              pacjenta i najwyższa jakość świadczonych usług.
            </p>
            <p className="font-lato text-slate-600 text-base leading-relaxed mb-8">
              Wierzymy, że dobra stomatologia to taka, która łączy profesjonalizm
              z troską o pacjenta. Stawiamy na profilaktykę, bo zdrowy uśmiech
              to najpiękniejsza wizytówka. Zapraszamy całe rodziny – leczymy
              zarówno najmłodszych, jak i dorosłych.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 font-lato text-slate-700">
                  <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
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
