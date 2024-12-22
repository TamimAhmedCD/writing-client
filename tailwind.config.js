/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
// eslint-disable-next-line no-undef
module.exports = withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-accent': '#5955d1',
        'light-primary-color': '#29294b',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
})

