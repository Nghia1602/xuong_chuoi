/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "be-vietnam-pro": ['"Be Vietnam Pro"', "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1000px", 
      xl: "1220px",
      "2xl": "1536px",
    },
    plugins: [],
  },
};
