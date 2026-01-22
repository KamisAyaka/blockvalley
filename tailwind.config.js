/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        }
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
        'spin-very-slow': 'spin-slow 15s linear infinite', // Tweaked for variety
        'spin-fast': 'spin-slow 1.5s cubic-bezier(0.5, 0, 1, 1) infinite',
        'spin-medium': 'spin-slow 4s linear infinite', // For cursor
        'bounce-slow': 'bounce-slow 3s infinite',
      }
    },
  },
  plugins: [],
}
