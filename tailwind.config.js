export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bv: {
          primary: '#0F172A',   // Slate 900
          secondary: '#334155', // Slate 700
          cta: '#0369A1',       // Sky 700 (Strong Blue)
          background: '#F8FAFC', // Slate 50
          text: '#020617',      // Slate 950
          // Keep legacy for backward compatibility if needed, or remove if fully replacing
          pink: '#0369A1',      // Mapped to CTA
          blue: '#3B82F6',
          green: '#10B981',
          black: '#0F172A',     // Mapped to Primary
          offwhite: '#F8FAFC',  // Mapped to Background
        }
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        display: ['Bodoni Moda', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-very-slow': 'spin 12s linear infinite',
        'spin-fast': 'spin 3s linear infinite',
        'spin-medium': 'spin 6s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'jelly': 'jelly 0.6s ease-in-out both',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        jelly: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(0.9, 1.1)' },
          '50%': { transform: 'scale(1.1, 0.9)' },
          '75%': { transform: 'scale(0.95, 1.05)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
