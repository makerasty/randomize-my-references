module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translate3d(0, 20%, 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          }
        },
        fadeOutDown: {
          'from': {
            opacity: '1',
          },
          'to': {
            opacity: '0',
            transform: 'translate3d(0, 20%, 0)',
          }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.15s ease-in-out',
        fadeOutDown: 'fadeOutDown 0.15s ease-in-out',
      }
    },
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
