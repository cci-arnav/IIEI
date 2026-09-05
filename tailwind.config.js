/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        editorial: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#F7F8FA',
          100: '#EEF1F6',
          200: '#DCE2EC',
          300: '#BAC7D8',
          400: '#899EB8',
          500: '#5C7496',
          600: '#415573',
          700: '#2F3E57',
          800: '#1D273A',
          900: '#0F1626',
          950: '#070B14',
        },
        ivory: {
          50: '#FCFBF8',
          100: '#F8F6F0',
          200: '#F2EFE6',
          300: '#E8E2D5',
          400: '#D6CDBC',
          500: '#B8AB94',
        },
        sand: {
          50: '#FAF8F4',
          100: '#F4EFE5',
          200: '#EAE1D0',
          300: '#DBCFBA',
          400: '#C5B59B',
        },
        ochre: {
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
        },
        electric: {
          400: '#3B82F6',
          500: '#1E40AF',
          600: '#1D4ED8',
        },
        forest: {
          700: '#1B4332',
          800: '#143628',
          900: '#0B241A',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
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
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
