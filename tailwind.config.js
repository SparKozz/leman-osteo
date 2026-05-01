/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e6ede6',
          200: '#cdd9cd',
          300: '#a6bba6',
          400: '#7d987d',
          500: '#5e7c5e',
          600: '#496349',
          700: '#3b503c',
          800: '#314131',
          900: '#293629',
        },
        pearl: {
          50: '#fafaf9',
          100: '#f4f4f2',
          200: '#e8e8e4',
          300: '#d4d4cd',
          400: '#a8a89e',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
