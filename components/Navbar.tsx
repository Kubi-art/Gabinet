"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Stethoscope } from "lucide-react";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#dlaczego-my", label: "Dlaczego my" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] py-0"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <span
              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300 ${
                scrolled ? "bg-primary/10" : "bg-white/15 backdrop-blur-sm"
              }`}
            >
              <Stethoscope
                size={20}
                className={scrolled ? "text-primary" : "text-teal-200"}
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className={`font-cormorant font-semibold text-lg lg:text-xl transition-colors duration-300 ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                Centrum Stomatologiczne
              </span>
              <span
                className={`font-cormorant text-sm lg:text-base transition-colors duration-300 ${
                  scrolled ? "text-slate-600" : "text-teal-100/80"
                }`}
              >
                Monika Wróbel
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-lato transition-colors duration-200 group ${
                  scrolled
                    ? "text-slate-600 hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <a
            href="tel:600970314"
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-lato font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(13,148,136,0.8)] hover:scale-[1.04]"
          >
            <Phone size={15} />
            Umów wizytę
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-slate-700" : "text-white"
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl animate-fade-down">
          <nav className="flex flex-col px-4 py-5 gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-slate-700 hover:text-primary hover:bg-secondary-bg font-lato py-3 px-3 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:600970314"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-lato font-bold px-4 py-3 rounded-full mt-3 transition-colors"
            >
              <Phone size={16} />
              Umów wizytę
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
