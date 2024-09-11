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
       'background-light': '#F5F5F5',
        'turquoise': '#48CFCB',
        'teal': '#229799',
        'dark-gray': '#424242',
      },
    },
  },
  plugins: [],
};
export default config;
