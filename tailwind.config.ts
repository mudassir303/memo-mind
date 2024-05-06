import type { Config } from "tailwindcss";
import { Montserrat } from "next/font/google";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "brand-primary" : '#FE6802',
        "brand-secondary" : '#313131',
        "brand-gray" : '#4F4F4F'
      },

      fontFamily : {
        OpenSans : ["'Open Sans', sans-serif"],
        Poppins : ["'Poppins', sans-serif"],
        Montserrat : ["'Montserrat', sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
