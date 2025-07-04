const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
      addVariant('active-link', '&.active-link');
      addVariant('group-active-link', ':merge(.group).active-link &');
      addVariant('hocus', ['&:hover', '&:focus']);
    })
  ],
  content: [
    './app/views/**/*.html.erb',
    './app/views/**/*.turbo_stream.erb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#3f374d',
      },
    },
  }
}
