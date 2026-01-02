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
        primary: {
          DEFAULT: "#1E88E5",
          dark: "#0066FF",
        },
        gray: {
          50: "#F8F9FA",
          100: "#F7F7F7",
          200: "#E5E7EB",
          300: "#D1D5DB",
          600: "#6B7280",
          900: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
