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
        background: "#FAFAF8",
        surface: "#FFFFFF",
        border: "#E8E4DF",
        accent: {
          DEFAULT: "#1B2A4A",
          hover: "#2A3F6B",
          muted: "rgba(27,42,74,0.08)",
        },
        gold: {
          DEFAULT: "#C9A96E",
          light: "#D4BC8B",
          muted: "rgba(201,169,110,0.12)",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#5A5A5A",
          muted: "#9B9B9B",
        },
        navy: {
          light: "#34507A",
          dark: "#0F1B33",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          dark: "#EDE7DB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(27,42,74,0.04), 0 4px 12px rgba(27,42,74,0.06)",
        "card-hover": "0 8px 30px rgba(27,42,74,0.10), 0 2px 8px rgba(201,169,110,0.08)",
        "glow-gold": "0 0 40px rgba(201,169,110,0.15)",
        "glow-navy": "0 0 60px rgba(27,42,74,0.12)",
        btn: "0 2px 8px rgba(27,42,74,0.20), 0 1px 2px rgba(27,42,74,0.12)",
        "btn-hover": "0 4px 16px rgba(27,42,74,0.25), 0 2px 4px rgba(27,42,74,0.15)",
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #1B2A4A 0%, #2A3F6B 100%)",
        "gradient-gold": "linear-gradient(135deg, #C9A96E 0%, #D4BC8B 100%)",
        "gradient-hero": "linear-gradient(135deg, #0F1B33 0%, #1B2A4A 50%, #2A3F6B 100%)",
        "gradient-section": "linear-gradient(180deg, #F5F0E8 0%, #FAFAF8 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
