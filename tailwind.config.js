/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f0f4f9',
          100: '#e1e9f3',
          200: '#c5d3e8',
          300: '#9bb4d6',
          400: '#6b8fc0',
          500: '#4a6fa5',
          600: '#3a5a8a',
          700: '#2f4a73',
          800: '#1e2f4d',
          900: '#0f1a2e',
          950: '#070d1c',
        },
        electric: {
          400: '#3b82f6',
          500: '#2563eb',
          600: '#1d4ed8',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        preloader: 'preloader 900ms ease-out forwards',
      },
      keyframes: {
        preloader: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
