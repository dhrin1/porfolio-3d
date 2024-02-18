import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  colors: {
    gray: {
      default1: "#DADADA",
      default2: "#8A8A8B",
      default3: "#282829",
    },
    black: {
      default1: "#1E1E1E",
      default2: "#121212",
      default3: "#000000",
    },
    white: {
      default1: "#FFFFFF",
      default2: "#F4F3F6",
      default3: "#F5F5F7",
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
