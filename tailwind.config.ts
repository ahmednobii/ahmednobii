import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0b",
        surface: "#111113",
        "surface-light": "#1a1a1f",
        border: "#2a2a30",
        "text-primary": "#f0f0f5",
        "text-secondary": "#8a8a9a",
        accent: {
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          blue: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)",
        "gradient-accent-hover":
          "linear-gradient(135deg, #22d3ee, #60a5fa, #a78bfa)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#f0f0f5",
            a: { color: "#06b6d4", "&:hover": { color: "#22d3ee" } },
            h1: { color: "#f0f0f5" },
            h2: { color: "#f0f0f5" },
            h3: { color: "#f0f0f5" },
            h4: { color: "#f0f0f5" },
            strong: { color: "#f0f0f5" },
            code: {
              color: "#06b6d4",
              backgroundColor: "#1a1a1f",
              padding: "2px 6px",
              borderRadius: "4px",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            blockquote: {
              color: "#8a8a9a",
              borderLeftColor: "#3b82f6",
            },
            hr: { borderColor: "#2a2a30" },
            "ul > li::marker": { color: "#06b6d4" },
            "ol > li::marker": { color: "#06b6d4" },
            pre: {
              backgroundColor: "#111113",
              color: "#f0f0f5",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
