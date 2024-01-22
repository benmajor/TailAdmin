module.exports = {
  important: true,
  content: [
    './templates/**/*.{html,twig,js}',
    './assets/**/*.{css,js}'
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#B49C56',
          '50': '#DECCB5',
          '100': '#DAC6AB',
          '200': '#D0BA96',
          '300': '#C7AF80',
          '400': '#BDA56B',
          '500': '#B49C56',
          '600': '#9C8945',
          '700': '#807339',
          '800': '#635C2C',
          '900': '#474320'
        },
      },
      flex: {
        '2': '2 2 0%'
      },
      fontFamily: {
        'admin': 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        'sans': '"Open Sans", "Proxima Nova", -apple-system, system-ui, sans-serif',
        'serif': 'Cinzel, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
      },
      fontSize: {
        'admin': '15px',
        'md': '.925rem',
        '2xs': '.675rem',
      },
      spacing: {
        'sidebar': '260px',
        'masthead': '58px'
      }
    },
  },
  plugins: [],
}
