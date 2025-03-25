/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d3932',
          light: '#3c4a41',
        },
        secondary: {
          DEFAULT: '#a7a94a',
        },
        highlight: {
          DEFAULT: '#4cb3b6',
        },
        bgGray: {
          DEFAULT: '#f8f8f8',
          darker: '#e8e8e8',
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
