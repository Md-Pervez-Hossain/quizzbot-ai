/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages//*.{js,ts,jsx,tsx}", "./components//*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-color": "linear-gradient(90deg, #FC495F 62%, #FFC371 38%)",
      },
      colors: {
        "btn-outline": "#e6e6e6",
        "gradient-color": {
          62: "#FC495F",
          38: "#FFC371",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
