import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { lg: "1120px", xl: "1120px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D0021B",
          light: "#FF3B4E",
          dark: "#9A0014",
        },
        ink: {
          DEFAULT: "#141416",
          soft: "#54545A",
          faint: "#8A8A90",
        },
        line: "#ECECEE",
        surface: "#FAFAFA",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
