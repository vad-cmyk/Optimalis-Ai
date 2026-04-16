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
        background: "#0A0A0F",
        surface: "#12121A",
        "surface-2": "#1B1B26",
        border: "#2A2A38",
        "text-primary": "#F4F4F8",
        "text-muted": "#A1A1B5",
        "brand-blue": "#1E73E8",
        "brand-cyan": "#22D3EE",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "section": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1E73E8 0%, #22D3EE 100%)",
        "dark-gradient": "linear-gradient(180deg, #0A0A0F 0%, #12121A 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(30, 115, 232, 0.15)",
        "glow-cyan": "0 0 40px rgba(34, 211, 238, 0.2)",
        "glow-blue-lg": "0 0 80px rgba(30, 115, 232, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
