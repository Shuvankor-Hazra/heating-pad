import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "zoom-in-out": "zoomInOut 1s infinite",
        upDown: "upDown 4s ease-in-out infinite",
        "zoom-up-down": "zoomUpDown 3s ease-in-out infinite",
      },
      keyframes: {
        zoomInOut: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        zoomUpDown: {
          "0%": { transform: "scale(1) translateY(0)" },
          "25%": { transform: "scale(1.1) translateY(-10px)" },
          "50%": { transform: "scale(1) translateY(-20px)" },
          "75%": { transform: "scale(1.1) translateY(-10px)" },
          "100%": { transform: "scale(1) translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
