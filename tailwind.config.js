/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1636px',
        '4xl': '1736px',
        '7xl': '1836px',
        '8xl': '2336px',
      },
      backgroundImage: {
        banner: "url('/src/Assets/Rectangle 156.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
