/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'lg': {'min': '700px'},

      'md': {'min': '500px'},

      'sm': {'min': '300px'},
    }
  },
  plugins: [],
}
