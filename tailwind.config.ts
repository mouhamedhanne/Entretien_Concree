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
        secondary_color: "#E7EBEF",
        text_black: "#000000",
        primary_button: "#0958A5",
        small_button: "#CEDEED",
      },
    },
  },
  plugins: [],
};
export default config;
