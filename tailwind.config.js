/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pilot: {
          deep: '#3D52A0',
          periwinkle: '#7091E6',
          muted: '#8697C4',
          soft: '#ADBBDA',
          pale: '#EDE8F5',
          dark: '#1B2447',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
