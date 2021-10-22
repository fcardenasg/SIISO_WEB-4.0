module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"'],
      },
      colors: {
        red: {
          1: "#E31937"
        },
        blue: {
          1: '#102A97',
          2: '#475694',
          3: '#2746C7',
          4: '#3F5EDF',
          5: '#869EFF',
          6: '#9DB0FF',
          7: '#1D4ED8',
          primary: '#0072BC'
        },
        gray : {
          8: '#F9FAFB',
          9: '#E5E7EB',
          10: '#6B7280',
          11: '#4B5563'

        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
