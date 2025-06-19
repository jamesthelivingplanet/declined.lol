import { defineConfig } from "@tailwindcss/vite";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-red": "#ff073a",
        "neon-blue": "#00f5ff",
        "neon-purple": "#bf00ff",
        "dark-gray": "#1a1a1a",
        "darker-gray": "#0d0d0d",
        "blood-red": "#8b0000",
        "electric-blue": "#0066ff",
      },
      fontFamily: {
        grunge: ["Courier New", "monospace"],
        cyber: ["Orbitron", "sans-serif"],
      },
      animation: {
        glitch: "glitch 2s infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite alternate",
        "slide-brutal": "slide-brutal 0.3s ease-out",
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        "neon-pulse": {
          from: {
            textShadow:
              "0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor",
            boxShadow:
              "0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor",
          },
          to: {
            textShadow:
              "0 0 2px currentColor, 0 0 5px currentColor, 0 0 10px currentColor",
            boxShadow:
              "0 0 2px currentColor, 0 0 5px currentColor, 0 0 10px currentColor",
          },
        },
        "slide-brutal": {
          from: { transform: "translateX(-100%) skewX(-10deg)" },
          to: { transform: "translateX(0) skewX(0deg)" },
        },
      },
    },
  },
});
