import { Phone, MapPin, Clock, Stethoscope } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-8 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500" />
      {/* Soft blob */}
      <div className="absolute -top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/20">
                <Stethoscope size={20} className="text-teal-300" />
              </span>
              <h3 className="font-cormorant font-semibold text-lg text-white leading-tight">
                Centrum Stomatologiczne
                <br />
                <span className="text-teal-300">Monika Wróbel</span>
              </h3>
            </div>
            <p className="font-lato text-slate-400 text-sm leading-relaxed">
              Profesjonalna opieka stomatologiczna dla całej rodziny
              w sercu Kamionki.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-lato font-bold text-white text-sm uppercase tracking-wider mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 font-lato text-sm text-slate-400">
                <MapPin size={17} className="text-teal-400 shrink-0 mt-0.5" />
                <span>ul. Przy Stawie 37, 05-502 Kamionka</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={17} className="text-teal-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href="tel:600970314"
                    className="font-lato text-sm text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    600 970 314
                  </a>
                  <a
                    href="tel:224357736"
                    className="font-lato text-sm text-slate-500 hover:text-teal-300 transition-colors"
                  >
                    22 435 77 36
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 font-lato text-sm text-slate-400">
                <Clock size={17} className="text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Pon–Pt: 9:00–18:00
                  <br />
                  Sob: 9:00–13:00
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-lato font-bold text-white text-sm uppercase tracking-wider mb-5">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {[
                ["#o-nas", "O nas"],
                ["#uslugi", "Usługi"],
                ["#dlaczego-my", "Dlaczego my"],
                ["#kontakt", "Kontakt"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-2 font-lato text-sm text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-teal-400 transition-all duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-lato text-xs text-slate-500">
            &copy; {year} Centrum Stomatologiczne Monika Wróbel. Wszelkie prawa zastrzeżone.
          </p>
          <p className="font-lato text-xs text-slate-600">
            ul. Przy Stawie 37, 05-502 Kamionka
          </p>
        </div>
      </div>
    </footer>
  );
}
