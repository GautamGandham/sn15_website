/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        metallic: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        coffee: {
          50: '#f7f3ef', // lightest coffee
          100: '#ede3d9',
          200: '#dbc1ac',
          300: '#c2a280',
          400: '#a47551',
          500: '#8b5c2a',
          600: '#6f4518',
          700: '#533016',
          800: '#3e2412',
          900: '#23160b',
        },
        brand: {
          DEFAULT: '#641e16',
        },
        saddlebrown: {
          50: '#f7ede7',
          100: '#f0d6c3',
          200: '#e1b08a',
          300: '#d18a51',
          400: '#b96a32',
          500: '#a0522d', // main
          600: '#87451f',
          700: '#6e371a',
          800: '#4d2411',
          900: '#2d1408',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};