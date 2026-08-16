import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FFF5F7',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F472B6',
          400: '#E8B4B8',
          500: '#D88B97',
        },
        ivory: {
          50: '#FDFBF7',
          100: '#FAF5EF',
          200: '#F5EBE1',
          300: '#EBE0D3',
        },
        rosegold: {
          light: '#F4D3C5',
          DEFAULT: '#E8B4B8',
          gold: '#D4AF37',
          dark: '#B8860B',
        },
        warm: {
          50: '#FAF7F2',
          100: '#F5EFE6',
          200: '#E8DFD5',
          700: '#5C4E4E',
          800: '#3A2E2E',
          900: '#2D2424',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        script: ['var(--font-script)', 'Great Vibes', 'cursive'],
      },
      boxShadow: {
        'soft-pink': '0 10px 30px -10px rgba(244, 114, 182, 0.15)',
        'rose-glow': '0 0 25px rgba(232, 180, 184, 0.4)',
        'card-warm': '0 15px 35px -5px rgba(92, 78, 78, 0.07)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'soft-glow': 'radial-gradient(circle at 50% 30%, rgba(252, 231, 243, 0.6) 0%, rgba(250, 245, 239, 0) 70%)',
      }
    },
  },
  plugins: [],
};
export default config;
