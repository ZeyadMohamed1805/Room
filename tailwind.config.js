/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"],
  theme: {
    extend: {
      colors: {
        customGrey: "hsl(0, 0%, 63%)",
        customBlack: "hsl(0, 0%, 0%)",
        customWhite: "hsl(0, 0%, 100%)",
        customDarkgrey: "hsl(0, 0%, 27%)"
      }
    },
  },
  plugins: [],
}
