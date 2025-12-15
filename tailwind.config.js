/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nfccYellow: {
          light: "#FFF9C4",
          DEFAULT: "#FDD835",
          dark: "#FBC02D",
        }
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        }
      }
    },
  },
  plugins: [],
}
