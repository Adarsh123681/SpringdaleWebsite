/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation:{
        fadeIn : "fadeIn 1s ease-in-out",
        pulse : "pulse 2s infinite",
      }
    },
  },
  plugins: [],
};
