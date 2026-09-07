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
          50: '#FDFCF8',
          100: '#F9F6EE',
          200: '#F1EBD9',
          300: '#E5DAC4',
          400: '#D3C4A6',
          500: '#B8A882',
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
        // Rich institutional blue for vibrant light theme accents
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Warm institution green
        forest: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          400: '#4ADE80',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
      },
      spacing: {
        '13': '3.25rem',
        '18': '4.5rem',
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
