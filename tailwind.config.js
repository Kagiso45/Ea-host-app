/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        phantom: {
          50: '#f8f7ff',
          100: '#f0effe',
          200: '#e0defe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#9d4edd',
          600: '#7b2cbf',
          700: '#5a189a',
          800: '#3c096c',
          900: '#240046',
        }
      },
      backgroundImage: {
        'gradient-phantom': 'linear-gradient(135deg, #240046 0%, #3c096c 100%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.8' },
        },
        'slide-in': {
          'from': { transform: 'translateY(-10px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
