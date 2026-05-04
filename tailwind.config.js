import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        film: {
          black: "#080808",
          dark: "#111111",
          card: "#161616",
          border: "#222222",
          gold: "#C9A84C",
          "gold-light": "#E8C96A",
          red: "#E03C2C",
          gray: "#888888",
          light: "#CCCCCC",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        marquee: "marquee 25s linear infinite",
        flicker: "flicker 3s infinite",
        "grain": "grain 0.5s steps(1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flicker: {
          "0%, 95%, 100%": { opacity: "1" },
          "96%": { opacity: "0.8" },
          "97%": { opacity: "1" },
          "98%": { opacity: "0.7" },
          "99%": { opacity: "1" },
        },
        grain: {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "10%": { backgroundPosition: "10% 20%" },
          "20%": { backgroundPosition: "40% 10%" },
          "30%": { backgroundPosition: "20% 50%" },
          "40%": { backgroundPosition: "70% 20%" },
          "50%": { backgroundPosition: "10% 80%" },
          "60%": { backgroundPosition: "90% 30%" },
          "70%": { backgroundPosition: "50% 90%" },
          "80%": { backgroundPosition: "20% 70%" },
          "90%": { backgroundPosition: "80% 60%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
