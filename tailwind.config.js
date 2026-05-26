/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Minecraft-inspired palette
        'mc-dirt': '#8B6914',
        'mc-grass': '#5D9B47',
        'mc-stone': '#7B7B7B',
        'mc-oak': '#B8945F',
        'mc-gold': '#FCDC00',
        'mc-diamond': '#4AEDD9',
        'mc-redstone': '#F54040',
        'mc-lapis': '#345EC3',
        'mc-emerald': '#41F384',
        'mc-obsidian': '#14121C',
        // UI Colors
        'pixel-bg-light': '#F5F0E8',
        'pixel-bg-dark': '#1A1814',
        'pixel-card-light': '#FFFDF7',
        'pixel-card-dark': '#2D2A24',
        'pixel-border-light': '#D4C9B5',
        'pixel-border-dark': '#4A453A',
        'pixel-text-light': '#1A1814',
        'pixel-text-dark': '#F5F0E8',
        'pixel-accent': '#4A8C5E',
        'pixel-accent-hover': '#5BA36F',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0,0,0,0.2)',
        'pixel-hover': '6px 6px 0px 0px rgba(0,0,0,0.25)',
        'pixel-inset': 'inset 2px 2px 0px 0px rgba(0,0,0,0.1)',
        'pixel-glow': '0 0 20px rgba(74, 140, 94, 0.4)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'block-pop': 'blockPop 0.3s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(74, 140, 94, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(74, 140, 94, 0.6)' },
        },
        blockPop: {
          '0%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'pixel-pattern': "url(\"data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='%23F5F0E8'/%3E%3Crect x='4' y='0' width='4' height='4' fill='%23EDE8DC'/%3E%3Crect x='0' y='4' width='4' height='4' fill='%23EDE8DC'/%3E%3C/svg%3E\")",
        'pixel-pattern-dark': "url(\"data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='%231A1814'/%3E%3Crect x='4' y='0' width='4' height='4' fill='%231E1C18'/%3E%3Crect x='0' y='4' width='4' height='4' fill='%231E1C18'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
