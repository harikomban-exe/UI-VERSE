/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050505',
          900: '#080808',
          850: '#0D0D0F',
          800: '#111318',
          750: '#16191F',
          card: 'rgba(17, 19, 24, 0.75)',
        },
        asthra: {
          cyan: '#00F0FF',
          blue: '#0066FF',
          purple: '#9333EA',
          violet: '#8B5CF6',
          muted: '#8C8C8C',
          silver: '#D8D8D8',
          border: 'rgba(255, 255, 255, 0.1)',
          'border-cyan': 'rgba(0, 240, 255, 0.3)',
          'border-purple': 'rgba(147, 51, 234, 0.3)',
          'glow-cyan': 'rgba(0, 240, 255, 0.15)',
        }
      },
      fontFamily: {
        display: ['Syncopate', 'Space Grotesk', 'sans-serif'],
        heading: ['Space Grotesk', 'Rajdhani', 'sans-serif'],
        tech: ['Rajdhani', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 30px -5px rgba(0, 240, 255, 0.45)',
        'glow-purple': '0 0 30px -5px rgba(147, 51, 234, 0.45)',
        'glow-combo': '0 0 45px -10px rgba(0, 240, 255, 0.35), 0 0 45px -10px rgba(147, 51, 234, 0.35)',
        'metallic': '0 1px 0 0 rgba(255, 255, 255, 0.15) inset, 0 -1px 0 0 rgba(0, 0, 0, 0.8) inset',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
