/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6546a",
        secondary: "#FF7373",
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
