/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark-blue": "#00041F",
        "card": "#2F3E7A",
        "gradient-low": "#00209E",

      },
      boxShadow: {
        "movie-shadow":
          "0 35px 60px -15px rgba(255, 255, 255, 0.4), 15px 15px 25px -15px rgba(255, 255, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
