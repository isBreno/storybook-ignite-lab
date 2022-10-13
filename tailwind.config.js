/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      sm: 14,
      md: 16,
      lg: 18,
      "0xl": 20,
      xl: 24,
      "2xl": 32,

    },
    colors: {
      'gray-900': "#A7A7B4",
      'gray-800': "#202024",
      'gray-100': "#E1E1E6",
      'gray-500': "#262626",
      'sky-500': "#0EA5E9",
      'sky-400': "#38BDF8",
      'transparent': "transparent"
    },

    extend: {
      fontFamily: {
        'display': ['Roboto', "ui-sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
}
