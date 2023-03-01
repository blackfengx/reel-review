/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark-blue": "#00041F",
        "card": "#6276C8",
      },
      boxShadow: {
        lg: "0 35px 60px -15px rgba(0, 0, 255, 0.3), 15px 15px 25px -15px rgba(0, 0, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
