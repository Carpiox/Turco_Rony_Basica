/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#c8202a', dark: '#a31a22' },
        ink: '#1c1917',
        soft: '#57534e',
        cream: '#fbf6ee',
        line: '#e7e0d5',
        wa: { DEFAULT: '#1faa54', dark: '#188443' },
      },
    },
  },
  plugins: [],
}
