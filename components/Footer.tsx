import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-cormorant font-semibold text-xl text-white mb-3">
              Centrum Stomatologiczne<br />Monika Wróbel
            </h3>
            <p className="font-lato text-slate-400 text-sm leading-relaxed">
              Profesjonalna opieka stomatologiczna dla całej rodziny w sercu Kamionki.
            </p>
          </div>

          <div>
            <h4 className="font-lato font-bold text-white text-sm uppercase tracking-wider mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 font-lato text-sm text-slate-400">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>ul. Przy Stawie 37, 05-502 Kamionka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:600970314" className="font-lato text-sm text-slate-400 hover:text-primary transition-colors">600 970 314</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-lato font-bold text-white text-sm uppercase tracking-wider mb-4">Nawigacja</h4>
            <ul className="space-y-2">
              {[["#o-nas","O nas"],["#uslugi","Usługi"],["#dlaczego-my","Dlaczego my"],["#kontakt","Kontakt"]].map(([href,label]) => (
                <li key={href}>
                  <a href={href} className="font-lato text-sm text-slate-400 hover:text-primary transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-lato text-xs text-slate-500">&copy; {year} Centrum Stomatologiczne Monika Wróbel. Wszelkie prawa zastrzeżone.</p>
          <p className="font-lato text-xs text-slate-600">ul. Przy Stawie 37, 05-502 Kamionka</p>
        </div>
      </div>
    </footer>
  );
}
