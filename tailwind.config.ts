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
          DEFAULT: "#E8491C",
          light: "#F05223",
        },
        "canvas": {
          DEFAULT: "#F5F4F1",
          dark: "#080808",
        },
        "text": {
          main: "#080808",
          muted: "#777777",
          light: "#F5F4F1",
        },
        "ambient": {
          dark: "#071A5C",
          mid: "#101B72",
          light: "#25166B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
