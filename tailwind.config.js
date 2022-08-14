/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE45",
        secondary: "#D4AC2B",
        tertiary: "#B05E27",
        extra: "#7E370C",
      },
    },
  },
  plugins: [],
};
