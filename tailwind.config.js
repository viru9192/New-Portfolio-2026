/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#05060e',
        surface: '#0c0e1a',
        navy: {
          950: '#05060e',
          900: '#080a14',
          800: '#0c0e1a',
          700: '#111422',
          600: '#1a1e2e',
        },
        accent: {
          blue: '#4f7fff',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          teal: '#00cba9',
          emerald: '#10b981',
          rose: '#f43f5e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'typewriter': 'typewriter 3s steps(40) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top, #1e1b4b 0%, #030712 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))',
        'glow-indigo': 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
        'glow-cyan': 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(99,102,241,0.3)',
        'glow-cyan': '0 0 30px rgba(6,182,212,0.3)',
        'glow-violet': '0 0 30px rgba(139,92,246,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
