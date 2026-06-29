import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D9488",
        "primary-dark": "#0F766E",
        accent: "#CCFBF1",
        "text-main": "#1E293B",
        "secondary-bg": "#F8FAFC",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        lato: ["var(--font-lato)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
