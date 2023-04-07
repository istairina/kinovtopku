/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: '#00828f',
        accentColor: '#ee2d1e',
      },
      screens: {
        sm: '550px',
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      'zoom-out': 'zoom-out',
      pointer: 'pointer',
    },
  },
  plugins: [],
};
