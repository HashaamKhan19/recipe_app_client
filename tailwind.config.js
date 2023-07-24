/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6546a",
        secondary: "#FF7373",
        tertiary: "#FFB8B8",
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
