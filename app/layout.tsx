import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Centrum Stomatologiczne Monika Wróbel | Kamionka",
  description:
    "Gabinet stomatologiczny w Kamionce. Stomatologia zachowawcza, dziecięca, protetyka, ortodoncja i chirurgia. Umów wizytę: 600 970 314.",
  keywords:
    "stomatolog Kamionka, dentysta Kamionka, gabinet stomatologiczny, Monika Wróbel, stomatologia dziecięca, ortodoncja",
  openGraph: {
    title: "Centrum Stomatologiczne Monika Wróbel",
    description:
      "Twój uśmiech w dobrych rękach. Gabinet stomatologiczny w Kamionce – profesjonalna opieka dla całej rodziny.",
    url: "https://centrum-stomatologiczne-wrobel.pl",
    siteName: "Centrum Stomatologiczne Monika Wróbel",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Centrum Stomatologiczne Monika Wróbel",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="font-lato text-slate-800 bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
