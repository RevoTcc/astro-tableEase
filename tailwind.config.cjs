/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black0: '#191919',
        black50: '#1E1E1E',
        black100: '#333333',
        gray: '#969696',
        white: '#FAFAFA',

        te_red: '#FF5A5F',
        te_yellow: '#FFC947',
        te_blue: '#00BFFF',
        te_blueAccent: '#6EC4E8',
        te_gray: '#CFCFCF',
      },
      fontFamily: {
        Nunito: [
          'NunitoSans-Black',
          'Nunito',
          'sans-serif'
        ],
        Montserrat: [
          'Montserrat-Regular',
          'sans-serif'
        ],
        Barlow: [
          'Barlow-Regular',
          'serif'
        ]
      },
    },
  },
  plugins: [],
}
