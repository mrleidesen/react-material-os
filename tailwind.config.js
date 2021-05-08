module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      zIndex: ['hover', 'visited', 'active'],
      margin: ['hover'],
      backgroundColor: ['hover', 'active', 'focus'],
    },
  },
  plugins: [],
}
