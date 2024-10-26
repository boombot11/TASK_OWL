/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { screens: {
      'custom-lg': '1400px', // Custom breakpoint for > 1400px
      'custom-md': '980px',   // Custom breakpoint for > 800px
    },},
  },
  plugins: [],
};
