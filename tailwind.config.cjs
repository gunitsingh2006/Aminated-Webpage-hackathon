/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        white: '#f7f4ee',
        accent: '#ff3c2e',
        accent2: '#ffcf00',
        mid: '#141414',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'unbounded': ['Unbounded', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(.16,1,.3,1)',
      },
    },
  },
  plugins: [],
}
