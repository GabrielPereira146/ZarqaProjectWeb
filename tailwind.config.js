/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          100: "#E4D9A4",
          200: "#C0B283",
          300: "#C7B977",
        },
      },
      fontFamily: {
        custom: ["Newsreader", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-gradient-mask-image'),
    require('tailwind-scrollbar'),
  ],
};
