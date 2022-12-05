/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        flexo: ['FLEXO-REGULAR', 'sans-serif'],
        "flexo-md": ['FLEXO-MEDIUM', 'sans-serif'],
      },
      colors: {
        logo: "#FECA1B",
        pokegray: {
          50: "#F2F2F2",
          100: "#919191",
          150: "#898989",
          175: "#6C6C6C",
          200: "#616161",
          250: "#313131",
        },
        pokered: "#E3350D"

      }
    },
  },
  plugins: [],
}
