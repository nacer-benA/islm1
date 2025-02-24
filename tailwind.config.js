/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#faf8f6',
          100: '#f2efe9',
          200: '#e8e2d9',
          300: '#d5cabb',
          400: '#baa894',
          500: '#a69077',
          600: '#967e65',
          700: '#7d6754',
          800: '#685647',
          900: '#57483d',
          950: '#2e251f',
        },
        marble: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e5e5e5',
          400: '#d4d4d4',
          500: '#a3a3a3',
          600: '#737373',
          700: '#525252',
          800: '#404040',
          900: '#262626',
          950: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};