import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        display: ['Urbanist', 'Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          50: '#fff8e1',
          100: '#fff0b3',
          200: '#ffe580',
          300: '#ffd94d',
          400: '#ffce1f',
          500: '#ffd23f',
          600: '#e6b631',
          700: '#b58f25',
          800: '#826a1c',
          900: '#574712',
        },
        surface: '#050816',
        panel: 'rgba(7, 12, 28, 0.84)',
      },
      boxShadow: {
        glow: '0 0 48px rgba(255, 210, 63, 0.16)',
        soft: '0 20px 80px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2.5s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite',
        pulse: 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 210, 63, 0.18)' },
          '50%': { boxShadow: '0 0 32px rgba(255, 210, 63, 0.26)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.01)' },
        },
      },
      screens: {
        xs: '420px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;
