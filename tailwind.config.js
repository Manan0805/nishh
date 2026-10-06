/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F5EFEB',
          300: '#EDE2D8',
          400: '#DECFC2',
        },
        blush: {
          50: '#FDF7F5',
          100: '#F9ECE8',
          200: '#F4DCD6',
          300: '#EAA89B',
          400: '#DF8474',
          500: '#CE6452',
        },
        sage: {
          50: '#F5F7F4',
          100: '#E7ECE5',
          200: '#CFDBCB',
          300: '#ADC0A8',
          400: '#8DA387',
          500: '#6E8568',
        },
        charcoal: {
          50: '#F7F6F5',
          100: '#E8E5E2',
          200: '#C7C1BC',
          300: '#9B928B',
          400: '#6D635C',
          500: '#4D443D',
          600: '#3A322C',
          700: '#2C2520',
          800: '#211B17',
          900: '#171310',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(44, 37, 32, 0.05), 0 2px 6px -1px rgba(44, 37, 32, 0.03)',
        'soft-lg': '0 10px 30px -4px rgba(44, 37, 32, 0.08), 0 4px 12px -2px rgba(44, 37, 32, 0.04)',
        'soft-xl': '0 20px 40px -6px rgba(44, 37, 32, 0.1), 0 8px 16px -4px rgba(44, 37, 32, 0.05)',
        'polaroid': '0 8px 24px -3px rgba(44, 37, 32, 0.12), 0 2px 8px -2px rgba(44, 37, 32, 0.06)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
