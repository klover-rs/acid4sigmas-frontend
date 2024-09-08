/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-text-color': 'var(--primary-text-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'background-primary': 'var(--background-color-primary)',
        'background-secondary': 'var(--background-color-secondary)',
        'background-tertiary': 'var(--background-color-tertiary)',
        grey: {
          100: 'var(--secondary-grey)',
          200: 'var(--primary-grey)',
        },
      },
      fontSize: {
        base: 'var(--font-size)',
      },
      backdropBlur: {
        DEFAULT: 'var(--transparency-blur)',
      },
      backdropOpacity: {
        DEFAULT: 'var(--transparency)',
      },
    },
    screens: {
      "sm": {'max': '620px'},
      "smh": {'max': '620px'}
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.before-element': {
          position: 'relative',
        },
        '.before-element::before': {
          content: "''", 
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'var(--background-color-secondary)', 
          opacity: 'var(--transparency)',
          zIndex: '-1',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
    
}

