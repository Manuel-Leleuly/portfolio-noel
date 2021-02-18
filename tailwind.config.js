module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    screens: {
      'smartphone': {'max': '600px'},
      'desktop': {'min': '601px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
