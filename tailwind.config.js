/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Keep if your project has an index.html in root
    "./src/**/*.{js,jsx,ts,tsx}", // <--- ADD THIS LINE
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}