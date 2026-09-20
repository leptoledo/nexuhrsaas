import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nexu: {
          coral: "#FF385C",
          coralDark: "#E0264A",
          coralLight: "#FFF1F3",
          indigo: "#4F46E5",
          indigoLight: "#EEF2FF",
          dark: "#0F172A",
          muted: "#64748B",
          surface: "#FFFFFF",
          bgLight: "#F8FAFC",
          border: "#E2E8F0",
          emerald: "#10B981",
          amber: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "scale-up": "scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
