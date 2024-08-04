/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ch-gray": "rgb(95, 99, 104)",
      },
      boxShadow: {
        "ch-header": "rgba(32, 33, 36, 0.08) 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};
