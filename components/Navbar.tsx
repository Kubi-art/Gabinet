"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex flex-col leading-tight">
            <span className="font-cormorant font-semibold text-lg lg:text-xl text-primary">
              Centrum Stomatologiczne
            </span>
            <span className="font-cormorant text-base lg:text-lg text-slate-700">
              Monika Wróbel
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-lato text-slate-600 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:600970314"
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-lato px-4 py-2 rounded-full transition-colors duration-200"
          >
            <Phone size={15} />
            Umów wizytę
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-primary"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-slate-700 hover:text-primary font-lato py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:600970314"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-lato px-4 py-2 rounded-full mt-2 transition-colors"
            >
              <Phone size={15} />
              Umów wizytę
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
