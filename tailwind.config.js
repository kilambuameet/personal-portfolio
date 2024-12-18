/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        saint: ["Mrs Saint Delafield", "sans-serif"],
        windsong: ["WindSong", "cursive"],
        sassy: ["Sassy Frass", "cursive"],
        yayone: ["Yanone Kaffeesatz", "sans-serif"]
      },
    },
  },
  plugins: [],
};
