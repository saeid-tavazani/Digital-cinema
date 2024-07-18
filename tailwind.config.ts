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
        blackPrimary: "#060606",
        blackSecondary: "#131313",
        darkPrimary: "#212020",
        whitePrimary: "#e9e9e9",
        yellowBright: "#ffff00",
        yellowPrimary: "#d4ad00",
        redPrimary: "#cf2229",
        redDark: "#c20000",
        bluePrimary: "#3471ff",
        greenDarker: "#035000",
        greenVibrant: "#07c400",
        greenDark: "#058500",
        graySecondary: "#828282",
        darkSecondary: "#363636",
      },
    },
  },
  plugins: [],
};
export default config;
