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
        primary: "#111827",
        accent: "#2563EB",
        accentGold: "#F59E0B",
        bgGray: "#F3F4F6",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "Pretendard", "sans-serif"],
      },
      letterSpacing: {
        relaxed: "0.02em",
        wide: "0.04em",
      },
      lineHeight: {
        relaxed: "1.75",
        loose: "1.85",
      },
    },
  },
  plugins: [],
};

export default config;
