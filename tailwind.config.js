/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Change container size
      container: {
        center: true,
        padding: "10rem",
      }
    },
  },
  plugins: [],
} 