/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



// tailwind.config.js
module.exports = {
  mode: 'jit', // Enable JIT mode
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}'], // Specify file paths for purging
  theme: {
    extend: {},
  },
  plugins: [],
};
