import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // mobile
      md: "850px", // tablet
      lg: "1200px", // desktop
    },
    fontSize: {
      "desktop-h1": "84px",
      "desktop-h2": "60px",
      "desktop-h3": "48px",
      "desktop-h4": "30px",
      "desktop-body": "16px",
      "desktop-sub": "14px",
      "mobile-h1": "60px",
      "mobile-h2": "36px",
      "mobile-h3": "30px",
      "mobile-h4": "24px",
      "mobile-body": "16px",
      "mobile-sub": "12px",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
