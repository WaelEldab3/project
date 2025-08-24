/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandCyan: "hsl(192, 69%, 51%)",
        brandGreen: "hsl(136, 64%, 51%)",
        brandBlue: "hsl(233, 26%, 24%)",
      },
    },
  },
  plugins: [],
}
