/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
    theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'footer': '#7B7A7A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
