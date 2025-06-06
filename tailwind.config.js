const typographyPlugin = require('@tailwindcss/typography')

const typographyStyles = require('./typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [typographyPlugin],
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
    extend: {
        colors: {
            brown: {
                50: '#efebe9',
                100: '#d7ccc8',
                200: '#bcaaa4',
                300: '#a1887f',
                400: '#8d6e63',
                500: '#795548',
                600: '#6d4c41',
                700: '#5d4037',
                800: '#4e342e',
                900: '#3e2723',
                },
            },
				fontFamily: {
						amatic: ['Amatic SC', 'cursive'],
						caveat: ['Caveat', 'cursive'],
						caveatb: ['Caveat Brush', 'cursive'],
						patrick: ['Patrick Hand', 'cursive'],
						lora: ['Lora', 'serif'],
						quicksand: ['Quicksand', 'sans-serif'],
						annie: ['Annie Use Your Telescope', 'cursive'],
						sacramento: ['Sacramento', 'cursive'],
						dancing: ['Dancing Script', 'cursive'],
						flower: ['Indie Flower', 'cursive'],
						fred: ['Fredericka The Great', 'serif'],
						unkempt: ['Unkempt', 'cursive'],
		        },
				typography: {
						DEFAULT: {
							css: {
								body: {fontFamily: 'Annie Use Your Telescope, serif' },
								h1: {fontFamily: 'Annie Use Your Telescope, serif' },
								p: {
									fontFamily: 'lora, serif',
									fontSize: '2xl',
									},
								},
							},

						},
        },
  },
}
