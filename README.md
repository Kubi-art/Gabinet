# Centrum Stomatologiczne Monika Wróbel – Strona wizytówkowa

Strona internetowa gabinetu stomatologicznego zbudowana w Next.js 14 (App Router) + Tailwind CSS.

## Uruchomienie

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Struktura projektu

```
/app
  layout.tsx        # Metadane SEO, fonty (Cormorant Garamond + Lato)
  page.tsx          # Główna strona – składa wszystkie sekcje
  globals.css       # Globalne style, zmienne CSS, animacje fade-in

/components
  Navbar.tsx        # Sticky navbar z mobile menu
  Hero.tsx          # Sekcja hero z tłem Unsplash
  About.tsx         # Sekcja "O nas"
  Services.tsx      # Karty z usługami (5 usług)
  WhyUs.tsx         # 3 powody dla których warto wybrać gabinet
  Contact.tsx       # Adres, telefon, godziny, mapa Google Maps
  Footer.tsx        # Stopka z danymi kontaktowymi
```

## Jak podmienić zdjęcia

Zdjęcia pochodzą z Unsplash. Aby użyć własnych zdjęć:

1. **Zdjęcie Hero** (`components/Hero.tsx`, linia ~15):
   Zamień atrybut `src` na ścieżkę do lokalnego pliku, np. `src="/images/hero.jpg"` i umieść plik w `/public/images/`.

2. **Zdjęcie "O nas"** (`components/About.tsx`, linia ~40):
   Analogicznie zamień `src` na `"/images/o-nas.jpg"`.

3. **Zdjęcie OG** (`app/layout.tsx`):
   Zaktualizuj pole `url` w sekcji `openGraph.images`.

## Jak podmienić dane gabinetu

| Dane | Plik |
|------|------|
| Nazwa, metadane SEO | `app/layout.tsx` |
| Adres, telefon (Hero) | `components/Hero.tsx` |
| Tekst "O nas" | `components/About.tsx` |
| Lista usług | `components/Services.tsx` |
| Telefon, adres, godziny | `components/Contact.tsx` |
| Mapa Google Maps | `components/Contact.tsx` (iframe src) |
| Stopka | `components/Footer.tsx` |

## Jak zaktualizować mapę Google Maps

1. Otwórz Google Maps i znajdź adres gabinetu
2. Kliknij "Udostępnij" → "Umieść mapę"
3. Skopiuj link z atrybutu `src` i wklej do `components/Contact.tsx`

## Kolory (paleta)

| Nazwa | Wartość |
|-------|---------|
| Primary (teal) | `#0D9488` |
| Primary dark | `#0F766E` |
| Accent (jasny teal) | `#CCFBF1` |
| Text | `#1E293B` |
| Background | `#FFFFFF` |
| Secondary bg | `#F8FAFC` |

Kolory są zdefiniowane w `tailwind.config.ts` i `app/globals.css`.

## Deployment (Vercel)

```bash
npm run build
```

Następnie połącz repozytorium z [Vercel](https://vercel.com) – deploy odbywa się automatycznie.
