/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand:{
          100:'#E4D9A4', 
          200:'#C7B977',
        },
      },
    },
  },
  plugins: [],
};
