import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)", 
        primary: {
          light: "#4fd1c5", // Teal 300
          DEFAULT: "#38b2ac", // Teal 400
          dark: "#2c7a7b", // Teal 600
        },
        secondary: {
          light: "#fbbf24", // Amber 400
          DEFAULT: "#f59e0b", // Amber 500
          dark: "#b45309", // Amber 700
        },
        accent: {
          light: "#a78bfa", // Purple 400
          DEFAULT: "#8b5cf6", // Purple 500
          dark: "#6d28d9", // Purple 700
        },
        background_new   : {
          light: "#f7fafc", // Gray 50
          DEFAULT: "#edf2f7", // Gray 100
          dark: "#2d3748", // Gray 200
        },
        text: {
          light: "#2d3748", // Gray 800
          DEFAULT: "#1a202c", // Gray 900
        },
      },
    },
    plugins: [],
  },
} satisfies Config;
