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
        brand: {
          navy: "#0F2C59",
          darkNavy: "#091A36",
          blue: "#1E40AF",
          teal: "#0D9488",
          lightTeal: "#E6FFFA",
          cyan: "#0284C7",
          cyanLight: "#E0F2FE",
          emerald: "#059669",
          emeraldLight: "#ECFDF5",
          accent: "#0284C7",
          neutralBg: "#F8FAFC",
          cardBg: "#FFFFFF",
          textDark: "#0F172A",
          textMuted: "#475569",
          borderLight: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 30px rgba(15, 44, 89, 0.06)",
        card: "0 4px 20px -2px rgba(15, 44, 89, 0.08)",
        hover: "0 20px 30px -10px rgba(15, 44, 89, 0.15)",
        floating: "0 10px 40px -10px rgba(13, 148, 136, 0.25)",
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
};
export default config;
