/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kong: "#FFC90D",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        roboto: "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
};
